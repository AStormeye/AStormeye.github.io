/** Constantes compartilhadas. Isolado aqui para evitar dependencia circular. */
export const MODULE_ID = "trovador-shapeshift";
export const SETTINGS = {
  SHOW_HUD: "showHudButton"
};
export const FLAG = {
  MAPPINGS: "mappings",   // legado (v<=0.4): { <slug>: {img, enabled} }
  FORMS: "forms",         // v0.5+: lista de formas customizadas (ver FormsStore)
  BASELINE: "baseline"    // tokenDocument.flags[MODULE_ID].baseline
};
