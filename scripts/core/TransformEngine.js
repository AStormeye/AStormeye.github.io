/**
 * TransformEngine — motor agnostico que aplica/reverte uma Appearance num token.
 * Unico ponto que escreve no TokenDocument (via SocketBridge). Ver §4 da arquitetura.
 *
 * v0.5: onTransformStart recebe a `appearance` ja resolvida pelo adaptador
 * (desacopla o motor do formato de armazenamento das formas).
 */
import { AppearanceState } from "./AppearanceState.js";
import { SocketBridge } from "./SocketBridge.js";

export class TransformEngine {
  async #writeAppearance(tokenDoc, a) {
    const u = {};
    if (a.img != null) u["texture.src"] = a.img;
    if (a.scaleX != null) u["texture.scaleX"] = a.scaleX;
    if (a.scaleY != null) u["texture.scaleY"] = a.scaleY;
    if (a.width != null) u.width = a.width;
    if (a.height != null) u.height = a.height;
    if (a.tint !== undefined) u["texture.tint"] = a.tint;
    if (a.ring != null) u["ring.enabled"] = a.ring;
    if (a.extra) for (const [k, v] of Object.entries(a.extra)) u[k] = v;
    if (Object.keys(u).length) await SocketBridge.update(tokenDoc, u);
    return u;
  }

  /** Aplica uma aparencia, guardando o baseline (para restaurar depois). */
  async apply(tokenDoc, appearance, effectKey = "__manual__") {
    await AppearanceState.capture(tokenDoc, effectKey, appearance);
    return this.#writeAppearance(tokenDoc, appearance);
  }

  /** Reverte: quando o stack esvazia, volta ao baseline e limpa a flag. */
  async restore(tokenDoc, effectKey = "__manual__") {
    const baseline = AppearanceState.getBaseline(tokenDoc);
    if (!baseline) return;
    const remaining = await AppearanceState.popStack(tokenDoc, effectKey);
    if (remaining.length) {
      // Ainda ha transformacao ativa: reaplica a aparencia do topo do stack.
      const top = remaining[remaining.length - 1];
      const app = AppearanceState.appliedFor(tokenDoc, top);
      if (app) await this.#writeAppearance(tokenDoc, app);
      return;
    }
    try {
      await this.#writeAppearance(tokenDoc, {
        img: baseline.img, scaleX: baseline.scaleX, scaleY: baseline.scaleY,
        width: baseline.width, height: baseline.height,
        tint: baseline.tint, ring: baseline.ring, extra: baseline.extra
      });
    } finally {
      await AppearanceState.clear(tokenDoc);
    }
  }

  /** Reset de emergencia: forca a volta ao baseline (ou a uma arte informada). */
  async reset(tokenDoc, img = null) {
    const b = AppearanceState.getBaseline(tokenDoc);
    const appearance = b
      ? { img: img ?? b.img, scaleX: b.scaleX, scaleY: b.scaleY,
          width: b.width, height: b.height, tint: b.tint, ring: b.ring, extra: b.extra }
      : (img ? { img } : null);
    if (appearance) await this.#writeAppearance(tokenDoc, appearance);
    await AppearanceState.clear(tokenDoc);
  }

  /** Aplica a todos os tokens do ator. `appearance` ja vem resolvida. */
  async onTransformStart({ actor, effectKey, appearance }) {
    if (!actor || !appearance?.img) return;
    for (const t of actor.getActiveTokens()) {
      try { await this.apply(t.document, appearance, effectKey); }
      catch (e) { console.error("trovador-shapeshift | apply falhou num token", e); }
    }
  }

  async onTransformEnd({ actor, effectKey }) {
    if (!actor || !effectKey) return;
    for (const t of actor.getActiveTokens()) {
      try { await this.restore(t.document, effectKey); }
      catch (e) { console.error("trovador-shapeshift | restore falhou num token", e); }
    }
  }
}
