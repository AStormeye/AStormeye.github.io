/**
 * Trovador Shapeshift — bootstrap.
 *
 * Liga o ciclo de vida do modulo (init/setup/ready) conforme
 * 01_ARQUITETURA.md §7. Nesta fase (scaffold) so registra o adaptador e loga.
 * A logica de transformacao entra nas FASES 2-4.
 */
import { MODULE_ID, SETTINGS } from "./core/constants.js";
import { AdapterRegistry } from "./core/AdapterRegistry.js";
import { TransformEngine } from "./core/TransformEngine.js";
import { MappingConfigApp } from "./apps/MappingConfigApp.js";
import { initSocket } from "./core/SocketBridge.js";
import { PF2eAdapter } from "./adapters/pf2e/PF2eAdapter.js";
import { Dnd5eAdapter } from "./adapters/dnd5e/Dnd5eAdapter.js";

export { MODULE_ID };

// socketlib (opcional): roteia updates de token via GM p/ jogadores sem permissao.
Hooks.once("socketlib.ready", initSocket);
const log = (...a) => console.log(`${MODULE_ID} |`, ...a);

Hooks.once("init", () => {
  log("init");
  game.settings.register(MODULE_ID, SETTINGS.SHOW_HUD, {
    name: "TROVADOR_SHAPESHIFT.settings.showHud.name",
    hint: "TROVADOR_SHAPESHIFT.settings.showHud.hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once("setup", () => {
  const registry = new AdapterRegistry();
  registry.register(new PF2eAdapter());
  registry.register(new Dnd5eAdapter()); // stub — prova o contrato (D2)

  const engine = new TransformEngine();
  const mod = game.modules.get(MODULE_ID);
  mod.registry = registry;
  mod.engine = engine;
  // API publica para macros/UI.
  mod.api = {
    apply: (tok, appearance, key = "__manual__") => engine.apply(tok, appearance, key),
    restore: (tok, key = "__manual__") => engine.restore(tok, key),
    reset: (tok, img = null) => engine.reset(tok, img),
    suggestFor: (effect) => registry.get(game.system.id)?.suggestAppearance(effect) ?? null,
    openConfig: (actor) => {
      const a = actor ?? canvas.tokens?.controlled?.[0]?.actor ?? null;
      const ad = registry.get(game.system.id);
      if (!a) return ui.notifications.warn("Selecione um token / personagem primeiro.");
      if (!ad) return ui.notifications.warn("Sistema sem adaptador de shapeshift.");
      return new MappingConfigApp({ actor: a, adapter: ad, engine }).render(true);
    }
  };
  log("setup — adaptadores registrados:", registry.list());
});

Hooks.once("ready", () => {
  const mod = game.modules.get(MODULE_ID);
  const adapter = mod.registry.get(game.system.id);
  if (!adapter) {
    log(`modo inerte — sem adaptador para o sistema "${game.system.id}"`);
    return;
  }
  log(`adaptador ${adapter.constructor.systemId} ativo`);
  adapter.registerHooks(mod.engine);   // FASE 3: deteccao automatica de efeitos
  adapter.registerSheetUI?.(mod.engine); // FASE 4: botao + janela na ficha
});
