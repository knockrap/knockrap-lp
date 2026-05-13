<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:deploy-workflow -->
# 必須作業フロー（修正完了後は毎回自動実施）

コード修正が完了したら、確認なしに以下を順番に実行すること。

## ステップ1: TypeScript確認
```
npx tsc --noEmit
```
エラーがあれば修正してから次へ。

## ステップ2: 本番ビルド確認
```
npx next build
```
エラーがあれば修正してから次へ。

## ステップ3: Git push
```
git add .
git commit -m "update"
git push
```

## ステップ4: Vercelデプロイ確認
push後、Vercelの自動デプロイが走る。`gh` コマンドでデプロイ状況を確認するか、
通常60秒〜90秒待ってからデプロイ完了とみなす。

## ステップ5: 完了報告（必須）
以下を必ず報告すること：
- ビルド成功可否
- push成功可否
- Vercelデプロイ成功可否（確認できた場合）
- 公開URL（分かれば）
- 変更したファイル一覧
- 実施した変更内容要約

## 重要ルール
- 「pushしますか？」など確認しない。毎回自動で最後まで実施する
- エラー時は停止せず、原因解析→修正→再build→再pushまで継続
- 無駄なnpm installは禁止
- 無駄なbuild連打禁止（エラー修正後の再buildはOK）
<!-- END:deploy-workflow -->
