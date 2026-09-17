/**
 * Dnd5eAdapter — STUB EXPERIMENTAL. NAO SUPORTADO ainda.
 * Existe para PROVAR o contrato SystemAdapter (D2): quando quisermos D&D 5e,
 * basta preencher estes metodos, sem tocar no nucleo.
 *
 * Notas de design para o futuro:
 *  - No 5e, Wild Shape/Polymorph costumam trocar o ATOR inteiro; a "aparencia"
 *    pode vir da forma escolhida. A deteccao pode ser via ActiveEffect ou item
 *    de feature, a definir quando esta linha entrar em escopo.
 */
import { SystemAdapter } from "../../core/SystemAdapter.js";

export class Dnd5eAdapter extends SystemAdapter {
  static get systemId() { return "dnd5e"; }

  registerHooks(engine) { /* futuro */ }
  getEffectKey(effectDoc) { return effectDoc?.system?.identifier ?? effectDoc?.name ?? null; }
  isTransformEffect(effectDoc) { return false; /* futuro */ }
  async getEffectCatalog() { return []; }
  suggestAppearance(effectDoc) { return null; }
  injectSheetUI(sheetApp, rootEl, openConfig) { /* futuro */ }
}
