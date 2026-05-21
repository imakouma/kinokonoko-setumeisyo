# きのこのこ — Web説明書

カードゲーム「きのこのこ」のルール説明書をブラウザで閲覧できる Web アプリです。

- **フロントエンド**: TypeScript + React + Vite + Tailwind CSS
- **バックエンド**: [Convex](https://www.convex.dev/)（説明書データの保存・配信）

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. フロントエンドの起動

```bash
npm run dev
```

ブラウザで表示された URL を開いてください。**Convex 未設定でも説明書は表示されます**（組み込みデータのオフライン表示）。

### 3. Convex の起動（任意・DB 連携時）

別ターミナルで（初回はログインが必要です）:

```bash
npx convex dev
```

`.env.local` に `VITE_CONVEX_URL` が書き込まれたら、ページを再読み込みすると Convex からデータを取得します。初回は説明書データが自動でデータベースへ投入されます。

## プロジェクト構成

```
convex/           Convex バックエンド（スキーマ・クエリ・初期化）
src/
  components/     UI コンポーネント
  lib/            色などのユーティリティ
  types/          TypeScript 型定義
```

## 本番ビルド

```bash
npm run build
```

Convex を本番デプロイしたうえで、ホスティング先の環境変数に `VITE_CONVEX_URL` を設定してください。
