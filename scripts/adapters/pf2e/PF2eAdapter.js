/**
 * PF2eAdapter — adaptador do sistema Pathfinder 2e (Remaster). Toda regra
 * especifica de PF2e mora AQUI (R3). Ver 01_ARQUITETURA.md §2 e FASES 3-4.
 *
 * v0.5: gatilho por FORMAS customizadas do ator (FormsStore). Um efeito dispara
 * uma forma quando ha uma forma com triggerType "effect" e effectSlug == slug do
 * efeito — battle form OU qualquer outro efeito (stance etc.).
 */
import { SystemAdapter } from "../../core/SystemAdapter.js";
import { MODULE_ID, SETTINGS } from "../../core/constants.js";
import { AppearanceState } from "../../core/AppearanceState.js";
import { FormsStore } from "../../core/FormsStore.js";
import { MappingConfigApp } from "../../apps/MappingConfigApp.js";

const SIZE_NORM = {
  tiny: "tiny", sm: "small", small: "small", med: "medium", medium: "medium",
  lg: "large", large: "large", huge: "huge", grg: "gargantuan", gargantuan: "gargantuan"
};
const SIZE_GRID = { tiny: 0.5, small: 1, medium: 1, large: 2, huge: 3, gargantuan: 4 };

export class PF2eAdapter extends SystemAdapter {
  static get systemId() { return "pf2e"; }

  registerHooks(engine) {
    this._engine = engine;
    Hooks.on("createItem", (item) => {
      if (item?.type === "armor") return this.#refreshArmorForms(item.parent);
      if (item?.type !== "effect") return;
      const actor = item.parent;
      const slug = this.getEffectKey(item);
      if (!actor || !slug) return;
      const form = FormsStore.byEffect(actor, slug);
      if (!form) return; // nenhuma forma ligada a este efeito neste ator
      const key = `effect:${slug}`;
      const appearance = this.appearanceForForm(form, item);
      const req = { actor, effectKey: key, appearance };
      engine.onTransformStart(req);
      // PF2e reprocessa o token depois (battle forms em PCs). Reafirma.
      for (const ms of [150, 400, 800]) {
        setTimeout(() => { if (actor.items?.get(item.id)) engine.onTransformStart(req); }, ms);
      }
    });
    Hooks.on("deleteItem", async (item) => {
      if (item?.type === "armor") return this.#refreshArmorForms(item.parent);
      if (item?.type !== "effect") return;
      const actor = item.parent;
      const slug = this.getEffectKey(item);
      if (!actor || !slug) return;
      const key = `effect:${slug}`;
      const snaps = (actor.getActiveTokens?.() ?? []).map((t) => {
        const b = AppearanceState.getBaseline(t.document);
        return b ? [t.document, foundry.utils.deepClone(b)] : null;
      }).filter(Boolean);
      await engine.onTransformEnd({ actor, effectKey: key });
      // Efeito saiu: reavalia a armadura (o efeito tinha prioridade sobre ela).
      this.#refreshArmorForms(actor);
      for (const ms of [150, 400, 800]) {
        setTimeout(() => {
          for (const [doc, b] of snaps) {
            const stack = AppearanceState.getBaseline(doc)?.stack ?? [];
            if (stack.length) continue; // outra forma assumiu (ex.: armadura)
            if (b.img && doc.texture?.src !== b.img) {
              const u = { "texture.src": b.img, width: b.width, height: b.height,
                "texture.scaleX": b.scaleX, "texture.scaleY": b.scaleY };
              if (b.extra) for (const [k, v] of Object.entries(b.extra)) u[k] = v;
              doc.update(u).catch(() => {});
            }
          }
        }, ms);
      }
    });
    // Trocas de armadura equipada (equip/desequip alteram o item).
    Hooks.on("updateItem", (item) => {
      if (item?.type === "armor") this.#refreshArmorForms(item.parent);
    });
  }

  /** Aplica/reverte formas ligadas a armadura conforme a armadura equipada.
   *  O efeito tem prioridade: se ha uma forma por efeito ativa, nao mexe. */
  async #refreshArmorForms(actor) {
    if (!actor?.getActiveTokens) return;
    const worn = actor.wornArmor; // getter do PF2e: armadura equipada
    const form = worn ? FormsStore.byArmor(actor, worn.slug) : null;
    for (const t of actor.getActiveTokens()) {
      const doc = t.document;
      const stack = AppearanceState.getBaseline(doc)?.stack ?? [];
      if (stack.some((k) => k.startsWith("effect:"))) continue; // efeito manda
      const armorKey = stack.find((k) => k.startsWith("armor:"));
      if (form) {
        const wantKey = `armor:${form.id}`;
        if (armorKey === wantKey) continue;
        if (armorKey) await this._engine.restore(doc, armorKey);
        await this._engine.apply(doc, this.appearanceForForm(form, null), wantKey);
      } else if (armorKey) {
        await this._engine.restore(doc, armorKey);
      }
    }
  }

  getEffectKey(effectDoc) {
    return effectDoc?.slug ?? effectDoc?.system?.slug ?? null; // D3 — nunca _id
  }

  isTransformEffect(effectDoc) {
    return effectDoc?.type === "effect";
  }

  #gridFromSize(size) {
    if (!size || size === "auto") return null;
    const grid = SIZE_GRID[SIZE_NORM[size] ?? size];
    return grid ? { width: grid, height: grid } : null;
  }

  #sizeFromBattleForm(effectDoc) {
    const bf = (effectDoc?.system?.rules ?? []).find((r) => r?.key === "BattleForm");
    if (!bf) return null;
    let raw = bf.overrides?.size;
    if (!raw && Array.isArray(bf.brackets)) raw = bf.brackets[0]?.value?.size;
    const norm = SIZE_NORM[raw] ?? raw;
    const grid = SIZE_GRID[norm];
    return grid ? { width: grid, height: grid } : null;
  }

  /** Monta a aparencia final de uma forma. effectItem opcional (para size auto). */
  appearanceForForm(form, effectItem = null) {
    const a = { img: form.img };
    const chosen = this.#gridFromSize(form.size);
    const hint = chosen ?? (effectItem ? this.#sizeFromBattleForm(effectItem) : null);
    if (hint) {
      a.width = hint.width;
      a.height = hint.height;
      a.extra = { "flags.pf2e.linkToActorSize": false }; // deixa nosso tamanho valer
    }
    return a;
  }

  suggestAppearance(effectDoc) {
    const size = this.#sizeFromBattleForm(effectDoc);
    if (!size) return null;
    return { width: size.width, height: size.height, extra: { "flags.pf2e.linkToActorSize": false } };
  }

  async getEffectCatalog() {
    if (this._catalog) return this._catalog;
    try {
      const resp = await fetch(`modules/${MODULE_ID}/data/effects-pf2e.json`);
      this._catalog = await resp.json();
    } catch (e) {
      console.error(`${MODULE_ID} | falha ao carregar catalogo`, e);
      this._catalog = [];
    }
    return this._catalog;
  }

  registerSheetUI(engine) {
    this._engine = engine;
    this._open = (actor) => new MappingConfigApp({ actor, adapter: this, engine }).render(true);
    const names = new Set();
    for (const type of ["character", "npc"]) {
      for (const sc of Object.values(CONFIG.Actor?.sheetClasses?.[type] ?? {})) {
        const n = sc?.cls?.name;
        if (n) names.add(n);
      }
    }
    for (const n of names) {
      Hooks.on("render" + n, (app, html) => this.injectSheetHeader(app, html, this._open));
    }
    Hooks.on("renderTokenHUD", (hud, html) => this.injectTokenHUD(hud, html));
  }

  /** Botao no cabecalho da ficha, ao lado do titulo — estilo Pathmuncher. */
  injectSheetHeader(app, html, openConfig) {
    const actor = app?.actor ?? app?.document;
    if (!actor) return;
    const el = html instanceof HTMLElement ? html : (html?.[0] ?? html);
    const frame = el?.closest?.(".app") ?? el?.closest?.(".application")
      ?? (app?.element instanceof HTMLElement ? app.element : app?.element?.[0]);
    if (!frame || app?._minimized) return;
    frame.querySelectorAll?.(".trovador-shapeshift-open")?.forEach((n) => n.remove());
    const title = frame.querySelector?.(".window-title");
    if (!title) return;
    const label = game.i18n.localize("TROVADOR_SHAPESHIFT.sheetButton");
    const a = document.createElement("a");
    a.className = "trovador-shapeshift-open";
    a.setAttribute("title", label);
    a.setAttribute("aria-label", label);
    a.innerHTML = `<i class="fa-solid fa-paw"></i> <span>${label}</span>`;
    a.addEventListener("click", (ev) => { ev.preventDefault(); ev.stopPropagation(); openConfig(actor); });
    title.after(a);
  }

  injectTokenHUD(hud, html) {
    if (!game.settings.get(MODULE_ID, SETTINGS.SHOW_HUD)) return;
    const root = html instanceof HTMLElement ? html : html?.[0];
    const actor = hud?.object?.actor;
    if (!root || !actor) return;
    const col = root.querySelector(".col.right") ?? root.querySelector(".right")
      ?? root.querySelector(".col.left") ?? root;
    if (col.querySelector(".trovador-shapeshift-hud")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "control-icon trovador-shapeshift-hud";
    btn.dataset.tooltip = game.i18n.localize("TROVADOR_SHAPESHIFT.sheetButton");
    btn.innerHTML = `<i class="fa-solid fa-paw"></i>`;
    btn.addEventListener("click", (ev) => { ev.preventDefault(); this.#openHudMenu(actor, hud); });
    col.appendChild(btn);
  }

  /** Menu do HUD: lista SO as formas configuradas do personagem, para aplicar. */
  async #openHudMenu(actor, hud) {
    const engine = this._engine;
    const tok = hud?.object?.document ?? actor.getActiveTokens?.()[0]?.document
      ?? canvas.tokens?.controlled?.[0]?.document;
    const forms = FormsStore.all(actor).filter((f) => f.img);
    const DialogV2 = foundry.applications.api.DialogV2;
    const buttons = [];
    for (const f of forms) {
      buttons.push({
        action: f.id,
        icon: "fa-solid fa-paw",
        label: f.label || f.effectSlug || f.armorSlug || game.i18n.localize("TROVADOR_SHAPESHIFT.form"),
        callback: async () => {
          if (tok) await engine.apply(tok, this.appearanceForForm(f, null), `manual:${f.id}`);
        }
      });
    }
    buttons.push({
      action: "__restore",
      icon: "fa-solid fa-arrows-rotate",
      label: game.i18n.localize("TROVADOR_SHAPESHIFT.config.restore"),
      callback: async () => { if (tok) await engine.reset(tok); }
    });
    buttons.push({
      action: "__edit",
      icon: "fa-solid fa-paw",
      label: game.i18n.localize("TROVADOR_SHAPESHIFT.hud.edit"),
      callback: () => this._open(actor)
    });
    new DialogV2({
      classes: ["trovador-shapeshift-hud-menu"],
      window: { title: `${game.i18n.localize("TROVADOR_SHAPESHIFT.sheetButton")} — ${actor.name}`, icon: "fa-solid fa-paw" },
      content: forms.length ? "" : `<p class="ts-empty">${game.i18n.localize("TROVADOR_SHAPESHIFT.config.noForms")}</p>`,
      buttons
    }).render(true);
  }
}
