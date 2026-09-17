/**
 * SocketBridge — ponto unico de escrita no token, com roteamento via GM.
 * Ver 01_ARQUITETURA.md §5.
 *
 * Se o usuario atual pode modificar o token, atualiza direto. Senao, e havendo
 * socketlib + um GM ativo, encaminha o update para o GM executar. Sem socketlib
 * ou sem GM online, avisa e nao quebra.
 */
import { MODULE_ID } from "./constants.js";

let _socket = null;

/** Chamado em socketlib.ready (se o socketlib estiver instalado). */
export function initSocket() {
  const lib = globalThis.socketlib;
  if (!lib) return;
  _socket = lib.registerModule(MODULE_ID);
  _socket.register("applyTokenUpdate", _applyAsGM);
}

/** Executa no GM: aplica o update no token indicado. */
async function _applyAsGM({ sceneId, tokenId, update }) {
  const scene = game.scenes.get(sceneId);
  const tok = scene?.tokens?.get(tokenId);
  if (tok) return tok.update(update);
  return null;
}

export class SocketBridge {
  static async update(tokenDoc, update) {
    const canDirect = tokenDoc.canUserModify?.(game.user, "update") ?? game.user.isGM;
    if (canDirect) {
      try { return await tokenDoc.update(update); }
      catch (e) { console.warn(`${MODULE_ID} | update direto falhou, tentando via GM`, e); }
    }
    // Roteia via GM (socketlib).
    if (_socket && game.users?.activeGM) {
      return _socket.executeAsGM("applyTokenUpdate", {
        sceneId: tokenDoc.parent?.id, tokenId: tokenDoc.id, update
      });
    }
    // Sem permissao e sem rota disponivel.
    ui.notifications?.warn(game.i18n.localize("TROVADOR_SHAPESHIFT.notify.noGM"));
    console.warn(`${MODULE_ID} | sem permissao e sem GM/socketlib para atualizar o token`);
    return null;
  }
}
