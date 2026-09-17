/**
 * SystemAdapter — contrato que TODO adaptador de sistema implementa.
 * Ver 01_ARQUITETURA.md §2. O nucleo so fala com esta interface; nenhuma
 * regra especifica de sistema pode vazar para fora dos adaptadores (R3).
 */
export class SystemAdapter {
  /** @returns {string} id do sistema, ex.: "pf2e" */
  static get systemId() {
    throw new Error("SystemAdapter.systemId nao implementado");
  }

  /** Liga os hooks que detectam inicio/fim de transformacao.
   *  Deve chamar engine.onTransformStart(req) / engine.onTransformEnd(req).
   *  @param {import("./TransformEngine.js").TransformEngine} engine */
  registerHooks(engine) { throw new Error("registerHooks nao implementado"); }

  /** Chave ESTAVEL do efeito (D3: slug, nunca _id). @returns {string|null} */
  getEffectKey(effectDoc) { throw new Error("getEffectKey nao implementado"); }

  /** @returns {boolean} true se o efeito e uma transformacao relevante */
  isTransformEffect(effectDoc) { throw new Error("isTransformEffect nao implementado"); }

  /** Catalogo para a UI: [{key,label,img,defaultAppearance?}]. Pode ser async. */
  async getEffectCatalog() { throw new Error("getEffectCatalog nao implementado"); }

  /** Aparencia sugerida a partir do proprio efeito (ex.: TokenImage RE), ou null. */
  suggestAppearance(effectDoc) { return null; }

  /** Injeta o botao/aba de config na ficha. @param {Function} openConfig */
  injectSheetUI(sheetApp, rootEl, openConfig) { throw new Error("injectSheetUI nao implementado"); }
}

/**
 * @typedef {Object} Appearance
 * @property {string} img
 * @property {number} [scaleX]
 * @property {number} [scaleY]
 * @property {number} [width]   dimensao em quadrados de grid
 * @property {number} [height]
 * @property {string|null} [tint]
 * @property {boolean} [ring]
 * @property {boolean} [enabled]
 *
 * @typedef {Object} TransformRequest
 * @property {Actor} actor
 * @property {string} effectKey  slug estavel
 * @property {Appearance|null} [appearanceHint]
 */
