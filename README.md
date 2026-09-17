# Trovador Shapeshift

Módulo para **Foundry VTT** (alvo **Pathfinder 2e / Remaster**) que troca a
**arte e o tamanho do token** do personagem por **formas customizadas**. Cada
personagem tem suas próprias formas, disparadas de três jeitos:

- **Manual** — aplicada pela HUD do token (ex.: alternar aparência por troca de armadura, poses).
- **Por efeito** — dispara quando um efeito é aplicado ao ator (battle forms como *Pest Form*, ou qualquer efeito/stance).
- **Por armadura equipada** — dispara quando uma armadura específica é vestida.

Prioridade: **Por efeito** sempre sobrepõe **Por armadura**; ao remover o efeito,
a aparência de armadura reassume. A reversão devolve arte e tamanho originais.

> Arquitetura agnóstica de sistema (núcleo + adaptadores). O adaptador atual é o
> **PF2e**; outros sistemas podem ser adicionados sem tocar no núcleo.

## Requisitos

- Foundry VTT **v13+** (verificado no **v14**).
- Sistema **Pathfinder 2e**.
- *(Opcional/futuro)* `socketlib`, para rotear a troca via GM quando o jogador
  não tem permissão sobre o token.

## Instalação

**Por manifest (recomendado):** em *Configurações → Add-on Modules → Install
Module*, cole a URL do manifest:

```
https://github.com/SEU-USUARIO/trovador-shapeshift/releases/latest/download/module.json
```

**Manual:** baixe o `module.zip` da última *release* e extraia em
`Data/modules/trovador-shapeshift/` (o `module.json` deve ficar na raiz dessa
pasta). Ative o módulo no mundo.

## Uso

1. Abra a ficha do personagem (PC ou criatura) e clique no botão **🐾 Shapeshift**
   ao lado do título — abre o gerenciador de **Formas**.
2. **Adicionar forma**: dê um nome, escolha a **arte** (botão de imagem),
   o **tamanho** (Automático segue a forma/battle form) e o **gatilho**
   (Manual, Por efeito, Por armadura).
3. **Arraste** um efeito ou uma armadura para dentro da janela para preencher o
   gatilho automaticamente (ou solte na área vazia para criar uma nova forma).
4. Aplique:
   - **Manual** → selecione o token e use a **patinha na HUD** para escolher a forma.
   - **Por efeito/armadura** → acontece sozinho ao aplicar o efeito / equipar a armadura.
5. O botão **Preview** mostra a arte; o **Restaurar** volta o token ao original.

O botão da HUD pode ser desligado em *Configurar Definições → Trovador Shapeshift*.

## Multiplayer (socketlib)

Com **socketlib** instalado, jogadores sem permissão de atualização do token têm
a troca aplicada automaticamente por um GM ativo. Sem socketlib (ou sem GM
online), a troca só ocorre para quem tem permissão sobre o token; o módulo avisa
e não quebra.

## Limitações conhecidas

- No PF2e, *battle forms* não são válidos em NPC (o sistema recusa a regra); a
  troca visual do token funciona mesmo assim.

## Licença

**Todos os direitos reservados — O Trovador.** Veja `LICENSE`.
