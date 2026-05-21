# きのこのこ — Web説明書

カードゲーム「きのこのこ」のルール説明書をブラウザで閲覧できる Web アプリです。

- **リポジトリ**: https://github.com/imakouma/kinokonoko-setumeisyo
- **フロントエンド**: TypeScript + React + Vite + Tailwind CSS

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで表示された URL を開いてください。

## プロジェクト構成

```
src/
  components/     UI コンポーネント
  data/           説明書データ
  lib/            色などのユーティリティ
  types/          TypeScript 型定義
```

## 本番ビルド

```bash
npm run build
```

## Vercel へのデプロイ

1. https://vercel.com/new を開く
2. GitHub アカウントを連携し、リポジトリ `imakouma/kinokonoko-setumeisyo` を Import
3. 設定はそのまま（Vite を自動検出）で **Deploy**

### CLI からデプロイする場合

```bash
npx vercel login
npx vercel --prod
```
