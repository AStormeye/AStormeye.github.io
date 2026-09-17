/**
 * FormsStore — formas customizadas por ator (v0.5+). Agnostico de sistema.
 * Cada forma:
 *   { id, label, img, size, triggerType, effectSlug, enabled }
 *     - size: "auto" | "tiny"|"small"|"medium"|"large"|"huge"|"gargantuan"
 *     - triggerType: "manual" (aplica pela HUD) | "effect" (aplica ao surgir o efeito)
 *     - effectSlug: slug do efeito que dispara (quando triggerType === "effect")
 * Compat: se nao houver `forms`, migra (em leitura) do formato antigo `mappings`.
 */
import { MODULE_ID, FLAG } from "./constants.js";

export class FormsStore {
  static all(actor) {
    const forms = actor?.getFlag?.(MODULE_ID, FLAG.FORMS);
    if (Array.isArray(forms)) return forms;
    return this.#fromLegacy(actor);
  }

  static async set(actor, forms) {
    return actor.setFlag(MODULE_ID, FLAG.FORMS, forms);
  }

  static byId(actor, id) {
    return this.all(actor).find((f) => f.id === id) ?? null;
  }

  /** Forma ativa cujo gatilho e este slug de efeito. */
  static byEffect(actor, slug) {
    return this.all(actor).find(
      (f) => f.triggerType === "effect" && f.effectSlug === slug && f.enabled !== false
    ) ?? null;
  }

  /** Forma ativa cujo gatilho e esta armadura (slug). */
  static byArmor(actor, armorSlug) {
    if (!armorSlug) return null;
    return this.all(actor).find(
      (f) => f.triggerType === "armor" && f.armorSlug === armorSlug && f.enabled !== false
    ) ?? null;
  }

  static #fromLegacy(actor) {
    const maps = actor?.getFlag?.(MODULE_ID, FLAG.MAPPINGS);
    if (!maps || typeof maps !== "object") return [];
    return Object.entries(maps).map(([slug, m]) => ({
      id: foundry.utils.randomID(),
      label: slug,
      img: m?.img ?? "",
      size: "auto",
      triggerType: "effect",
      effectSlug: slug,
      enabled: m?.enabled !== false
    }));
  }
}
