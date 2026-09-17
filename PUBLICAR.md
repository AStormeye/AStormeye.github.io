# Como publicar no Foundry (GitHub Releases)

Este pacote (`trovador-shapeshift-repo.zip`) já é o **repositório pronto**:
`module.json` na raiz, código, e o workflow de release do GitHub.

## 1. Criar o repositório
1. Crie um repositório no GitHub (ex.: `trovador-shapeshift`). Pode ser privado
   ou público — para aparecer na listagem oficial do Foundry precisa ser acessível.
2. Extraia o `trovador-shapeshift-repo.zip` e suba **o conteúdo** (o `module.json`
   deve ficar na raiz do repo, não dentro de uma subpasta).
   ```bash
   git init
   git add .
   git commit -m "Trovador Shapeshift 1.0.0"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/trovador-shapeshift.git
   git push -u origin main
   ```

## 2. Publicar uma release
As URLs do manifest/download são geradas **automaticamente** pelo workflow a
partir do seu repositório — você não precisa editar nada à mão.

```bash
git tag v1.0.0
git push origin v1.0.0
```

O GitHub Action (`.github/workflows/release.yml`) roda sozinho e cria a release
`v1.0.0` com dois arquivos: `module.json` e `module.zip`.

## 3. URL de instalação (manifest)
Depois da primeira release, a URL para instalar/atualizar no Foundry é sempre:

```
https://github.com/SEU-USUARIO/trovador-shapeshift/releases/latest/download/module.json
```

No Foundry: *Add-on Modules → Install Module* → cole essa URL → Install.

## 4. Próximas versões
1. Atualize o `CHANGELOG.md`.
2. Faça commit.
3. `git tag vX.Y.Z && git push origin vX.Y.Z`. Pronto — a release e o manifest
   `latest` se atualizam sozinhos.

## 5. (Opcional) Listar no site oficial do Foundry
Em https://foundryvtt.com/ → *Admin → Packages → Submit Content*, informe o
**Manifest URL** acima. Observação: sua licença é **proprietária** (todos os
direitos reservados) — isso é permitido, mas revise os termos de submissão do
Foundry se pretende distribuição ampla.

## Notas
- `compatibility.verified` está em **14**; ao validar em versões novas, suba esse
  número no `module.json`.
- O `module.zip` da release traz o `module.json` na **raiz** do zip (formato que
  o Foundry espera na instalação por manifest).
