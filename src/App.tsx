import { ManualView } from "./components/ManualView";
import { STATIC_EFFECTS, STATIC_SECTIONS } from "./data/manualContent";

/** Convex 未設定時：組み込みデータで説明書を表示 */
export default function App() {
  return (
    <ManualView
      sections={STATIC_SECTIONS}
      effects={STATIC_EFFECTS}
      topBanner="バックエンド（Convex）未接続のためオフライン表示です。DB連携するには別ターミナルで `npx convex dev` を実行し、ページを再読み込みしてください。"
    />
  );
}
