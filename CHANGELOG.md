# Changelog

Formato baseado em Keep a Changelog. Versionamento semântico.

## [1.1.0] — 2026-09-17

### Adicionado
- Roteamento da troca de token **via GM** usando `socketlib`: jogadores sem
  permissão sobre o token têm a troca aplicada por um GM ativo automaticamente.
  Sem socketlib/sem GM online, o módulo avisa e não quebra.

## [1.0.0] — 2026-09-17

Primeira versão pública.

### Adicionado
- Formas customizadas por personagem: nome, arte, tamanho e gatilho.
- Gatilhos: **Manual** (HUD), **Por efeito** (qualquer efeito/battle form) e
  **Por armadura equipada**.
- Prioridade: "Por efeito" sobrepõe "Por armadura"; reversão reassume a armadura.
- Gerenciador de formas na ficha (PC e criatura), botão no cabeçalho estilo
  Pathmuncher (🐾 Shapeshift).
- Botão no **Token HUD** com menu das formas configuradas (ligável/desligável nas
  configurações do módulo).
- **Arrastar-e-soltar** de efeitos e armaduras para dentro do gerenciador.
- Detecção automática por *rule element* `BattleForm` e tamanho automático das
  formas; desliga `linkToActorSize` do PF2e para o tamanho valer, e religa ao reverter.
- Preview mostra a arte (ImagePopout); Restaurar/reset de emergência.
- Identidade visual O Trovador (roxo/vinho + destaque laranja).
- i18n en / pt-BR. Catálogo embutido de 61 efeitos de transformação do PF2e.

### Conhecido / próximos passos
- Roteamento da troca via GM (socketlib) para jogadores sem permissão de token.
- Adaptador para outros sistemas (ex.: D&D 5e) — contrato já preparado.
