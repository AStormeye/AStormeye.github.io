/**
 * MappingConfigApp — gerenciador de FORMAS customizadas do ator (v0.5).
 * ApplicationV2 + Handlebars (Foundry V14).
 * O usuario adiciona formas (nome + arte + tamanho) e escolhe o gatilho:
 *  - manual: aplica pela HUD;
 *  - effect: informa um slug de efeito (battle form OU qualquer outro, ex.: stance)
 *    e a forma dispara quando esse efeito e aplicado no ator.
 */
import { MODULE_ID } from "../core/constants.js";
import { FormsStore } from "../core/FormsStore.js";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

const SIZES = ["auto", "tiny", "small", "medium", "large", "huge", "gargantuan"];

export class MappingConfigApp extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor({ actor, adapter, engine } = {}, options = {}) {
    super(options);
    this.actor = actor;
    this.adapter = adapter;
    this.engine = engine;
    this.workingForms = null; // inicializado no 1o _prepareContext
  }

  static DEFAULT_OPTIONS = {
    id: "trovador-shapeshift-config",
    classes: ["trovador-shapeshift-config"],
    tag: "form",
    window: { title: "TROVADOR_SHAPESHIFT.config.title", icon: "fa-solid fa-paw", resizable: true },
    position: { width: 640, height: 640 },
    form: { handler: MappingConfigApp.#onSubmit, submitOnChange: false, closeOnSubmit: false },
    actions: {
      addForm: MappingConfigApp.#onAddForm,
      deleteForm: MappingConfigApp.#onDeleteForm,
      pickArt: MappingConfigApp.#onPickArt,
      preview: MappingConfigApp.#onPreview,
      restore: MappingConfigApp.#onRestore,
      saveClose: MappingConfigApp.#onSaveClose
    }
  };

  static PARTS = {
    body: {
      template: "modules/trovador-shapeshift/templates/mapping-config.hbs",
      scrollable: [".ts-forms-list"]
    }
  };

  get title() {
    return `${game.i18n.localize("TROVADOR_SHAPESHIFT.config.title")} — ${this.actor?.name ?? ""}`;
  }

  async _prepareContext() {
    if (!this.workingForms) this.workingForms = foundry.utils.deepClone(FormsStore.all(this.actor));
    const catalog = await this.adapter.getEffectCatalog();
    const rows = this.workingForms.map((f) => {
      const size = f.size ?? "auto";
      const trigger = f.triggerType ?? "manual";
      return {
        id: f.id,
        label: f.label ?? "",
        img: f.img ?? "",
        sizeChoices: SIZES.map((s) => ({
          value: s, label: game.i18n.localize(`TROVADOR_SHAPESHIFT.size.${s}`), selected: s === size
        })),
        effectSlug: f.effectSlug ?? "",
        armorSlug: f.armorSlug ?? "",
        enabled: f.enabled !== false,
        trigger,
        isEffect: trigger === "effect",
        isArmor: trigger === "armor"
      };
    });
    return { rows, catalog, hasForms: rows.length > 0 };
  }

  #syncTriggerFields(row) {
    const val = row?.querySelector("[data-trigger-select]")?.value ?? "manual";
    const eff = row?.querySelector(".ts-effect-slug");
    const arm = row?.querySelector(".ts-armor-slug");
    if (eff) eff.style.display = val === "effect" ? "" : "none";
    if (arm) arm.style.display = val === "armor" ? "" : "none";
  }

  _onRender() {
    // Alterna a visibilidade dos campos conforme o gatilho.
    for (const sel of this.element.querySelectorAll("[data-trigger-select]")) {
      const row = sel.closest(".ts-form");
      this.#syncTriggerFields(row);
      sel.addEventListener("change", () => this.#syncTriggerFields(row));
    }
    // Drag & drop de efeitos (do compendio, ficha, etc.) para dentro da janela.
    const root = this.element;
    root.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      const row = ev.target.closest?.(".ts-form");
      root.querySelectorAll(".ts-drop-hover").forEach((n) => n.classList.remove("ts-drop-hover"));
      (row ?? root.querySelector(".ts-forms-list"))?.classList.add("ts-drop-hover");
    });
    root.addEventListener("dragleave", () => {
      root.querySelectorAll(".ts-drop-hover").forEach((n) => n.classList.remove("ts-drop-hover"));
    });
    root.addEventListener("drop", (ev) => this.#onDrop(ev));
  }

  async #onDrop(ev) {
    ev.preventDefault();
    this.element.querySelectorAll(".ts-drop-hover").forEach((n) => n.classList.remove("ts-drop-hover"));
    let data;
    try { data = JSON.parse(ev.dataTransfer.getData("text/plain")); } catch { return; }
    if (data?.type !== "Item" || !data.uuid) return;
    const doc = await fromUuid(data.uuid);
    if (!doc) return;
    const kind = doc.type === "effect" ? "effect" : (doc.type === "armor" ? "armor" : null);
    if (!kind) return ui.notifications.warn(game.i18n.localize("TROVADOR_SHAPESHIFT.config.dropNeedsEffectOrArmor"));
    const slug = doc.slug ?? doc.system?.slug;
    if (!slug) return ui.notifications.warn(game.i18n.localize("TROVADOR_SHAPESHIFT.config.dropNeedsEffectOrArmor"));
    const row = ev.target.closest?.(".ts-form");
    if (row) {
      const id = row.dataset.id;
      const nameInput = this.element.querySelector(`[name="forms.${id}.label"]`);
      if (nameInput && !nameInput.value.trim()) nameInput.value = doc.name;
      const field = kind === "effect" ? "effectSlug" : "armorSlug";
      const slugInput = this.element.querySelector(`[name="forms.${id}.${field}"]`);
      if (slugInput) slugInput.value = slug;
      const trig = this.element.querySelector(`.ts-form[data-id="${id}"] [name="forms.${id}.triggerType"]`);
      if (trig) { trig.value = kind; trig.dispatchEvent(new Event("change")); }
      ui.notifications.info(game.i18n.format("TROVADOR_SHAPESHIFT.config.dropFilled", { name: doc.name }));
    } else {
      this.workingForms = this.#readForm();
      const nf = { id: foundry.utils.randomID(), label: doc.name, img: "", size: "auto",
        triggerType: kind, effectSlug: "", armorSlug: "", enabled: true };
      nf[kind === "effect" ? "effectSlug" : "armorSlug"] = slug;
      this.workingForms.push(nf);
      this.render();
      ui.notifications.info(game.i18n.format("TROVADOR_SHAPESHIFT.config.dropAdded", { name: doc.name }));
    }
  }

  #readForm() {
    const FDE = foundry.applications?.ux?.FormDataExtended ?? FormDataExtended;
    const formEl = this.element?.tagName === "FORM" ? this.element : this.element.querySelector("form");
    const data = foundry.utils.expandObject(new FDE(formEl).object).forms ?? {};
    return Object.entries(data).map(([id, v]) => ({
      id,
      label: (v.label ?? "").trim(),
      img: (v.img ?? "").trim(),
      size: v.size ?? "auto",
      triggerType: v.triggerType ?? "manual",
      effectSlug: (v.effectSlug ?? "").trim(),
      armorSlug: (v.armorSlug ?? "").trim(),
      enabled: !!v.enabled
    }));
  }

  #targetToken() {
    return canvas.tokens?.controlled?.[0]?.document
      ?? this.actor.getActiveTokens?.()?.[0]?.document ?? null;
  }

  async #save() {
    const forms = this.#readForm().filter((f) => f.img); // precisa de arte
    await FormsStore.set(this.actor, forms);
    this.workingForms = forms;
    ui.notifications.info(game.i18n.localize("TROVADOR_SHAPESHIFT.config.saved"));
  }

  static async #onSubmit() { return this.#save(); }
  static async #onSaveClose() { await this.#save(); this.close(); }

  static #onAddForm() {
    this.workingForms = this.#readForm();
    this.workingForms.push({
      id: foundry.utils.randomID(), label: "", img: "", size: "auto",
      triggerType: "manual", effectSlug: "", enabled: true
    });
    this.render();
  }

  static #onDeleteForm(event, target) {
    const id = target.dataset.id;
    this.workingForms = this.#readForm().filter((f) => f.id !== id);
    this.render();
  }

  /** Abre o seletor de arquivo e grava so no input oculto (sem mostrar o caminho). */
  static async #onPickArt(event, target) {
    const id = target.dataset.id;
    const input = this.element.querySelector(`[name="forms.${id}.img"]`);
    const iconImg = this.element.querySelector(`.ts-form[data-id="${id}"] .ts-form-icon`);
    const FP = foundry.applications?.apps?.FilePicker?.implementation ?? FilePicker;
    const fp = new FP({
      type: "imagevideo",
      current: input?.value || "",
      callback: (path) => {
        if (input) input.value = path;
        if (iconImg) iconImg.src = path;
      }
    });
    fp.render(true);
  }

  /** Preview = MOSTRA a arte (nao transforma o token). */
  static async #onPreview(event, target) {
    const id = target.dataset.id;
    const img = this.element.querySelector(`[name="forms.${id}.img"]`)?.value;
    if (!img) return ui.notifications.warn(game.i18n.localize("TROVADOR_SHAPESHIFT.config.needArt"));
    const label = this.element.querySelector(`[name="forms.${id}.label"]`)?.value
      || game.i18n.localize("TROVADOR_SHAPESHIFT.form");
    try {
      const IP = foundry.applications.apps.ImagePopout;
      new IP({ src: img, window: { title: label } }).render(true);
    } catch (e) {
      new ImagePopout(img, { title: label }).render(true); // fallback legado
    }
  }

  static async #onRestore() {
    const tok = this.#targetToken();
    if (!tok) return ui.notifications.warn(game.i18n.localize("TROVADOR_SHAPESHIFT.config.needToken"));
    await this.engine.reset(tok);
  }
}
