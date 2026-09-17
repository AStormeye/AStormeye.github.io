/**
 * AppearanceState — captura/restaura o baseline do token e gerencia o stack
 * de transformacoes empilhadas. Ver 01_ARQUITETURA.md §3.2.
 *
 * Helpers puros de flag: NAO escrevem texture do token (isso e do TransformEngine).
 * baseline (flag do token): { img, scaleX, scaleY, width, height, tint, ring, stack[] }
 *  - idempotente: se ja existe baseline, apenas empilha effectKey (nao sobrescreve)
 */
import { MODULE_ID, FLAG } from "./constants.js";

export class AppearanceState {
  /** Guarda o estado atual como baseline (se ainda nao houver) e empilha effectKey.
   *  `appearance.extra` (mapa de caminhos pontilhados, ex.: flags especificas de
   *  sistema) tem seu valor ORIGINAL fotografado aqui, para ser revertido depois —
   *  assim o nucleo continua agnostico (nao sabe o que a flag significa). */
  static async capture(tokenDoc, effectKey, appearance = {}) {
    const extraKeys = appearance.extra ? Object.keys(appearance.extra) : [];
    const obj = tokenDoc.toObject();
    const snapExtra = (into) => {
      for (const k of extraKeys) {
        if (!(k in into)) into[k] = foundry.utils.getProperty(obj, k) ?? null;
      }
      return into;
    };
    const existing = tokenDoc.getFlag(MODULE_ID, FLAG.BASELINE);
    if (existing) {
      const stack = Array.isArray(existing.stack) ? [...existing.stack] : [];
      if (!stack.includes(effectKey)) stack.push(effectKey);
      const extra = snapExtra({ ...(existing.extra ?? {}) });
      const applied = { ...(existing.applied ?? {}), [effectKey]: appearance };
      return tokenDoc.setFlag(MODULE_ID, FLAG.BASELINE, { ...existing, stack, extra, applied });
    }
    // Capturar do objeto SERIALIZADO evita guardar Color/objetos vivos que
    // quebram o update de reversao em tokens com tint/ring configurados.
    const baseline = {
      img: obj.texture?.src ?? null,
      scaleX: obj.texture?.scaleX ?? 1,
      scaleY: obj.texture?.scaleY ?? 1,
      width: obj.width,
      height: obj.height,
      tint: obj.texture?.tint ?? null,
      ring: obj.ring?.enabled ?? false,
      extra: snapExtra({}),
      applied: { [effectKey]: appearance },
      stack: [effectKey]
    };
    return tokenDoc.setFlag(MODULE_ID, FLAG.BASELINE, baseline);
  }

  /** Aparencia guardada para uma chave (para reaplicar o topo do stack). */
  static appliedFor(tokenDoc, key) {
    return tokenDoc.getFlag(MODULE_ID, FLAG.BASELINE)?.applied?.[key] ?? null;
  }

  static getBaseline(tokenDoc) {
    return tokenDoc.getFlag(MODULE_ID, FLAG.BASELINE) ?? null;
  }

  /** Remove effectKey do stack e retorna o stack restante. */
  static async popStack(tokenDoc, effectKey) {
    const b = tokenDoc.getFlag(MODULE_ID, FLAG.BASELINE);
    if (!b) return [];
    const stack = (b.stack ?? []).filter((k) => k !== effectKey);
    await tokenDoc.setFlag(MODULE_ID, FLAG.BASELINE, { ...b, stack });
    return stack;
  }

  static async clear(tokenDoc) {
    return tokenDoc.unsetFlag(MODULE_ID, FLAG.BASELINE);
  }
}
