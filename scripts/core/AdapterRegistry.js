/**
 * AdapterRegistry — guarda os adaptadores e resolve o certo por game.system.id.
 * Ver 01_ARQUITETURA.md §2. Sem estado de sistema aqui (R3).
 */
export class AdapterRegistry {
  #adapters = new Map();

  /** @param {import("./SystemAdapter.js").SystemAdapter} adapter */
  register(adapter) {
    const id = adapter.constructor.systemId;
    this.#adapters.set(id, adapter);
  }

  /** @param {string} systemId @returns {?object} adaptador ou null */
  get(systemId) {
    return this.#adapters.get(systemId) ?? null;
  }

  /** @returns {string[]} ids registrados */
  list() {
    return [...this.#adapters.keys()];
  }
}
