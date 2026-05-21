import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { LoadingState } from "./components/LoadingState";
import { ManualView } from "./components/ManualView";
import { SetupBanner } from "./components/SetupBanner";
import type { CardEffect, ManualSection } from "./types/manual";

export function ConvexApp() {
  const sections = useQuery(api.manual.listSections);
  const effects = useQuery(api.manual.listCardEffects);
  const initialize = useMutation(api.init.initialize);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    if (sections === undefined) return;
    if (sections.length > 0) return;

    void initialize()
      .then(() => setInitError(null))
      .catch(() =>
        setInitError(
          "データの初期化に失敗しました。別ターミナルで `npx convex dev` が起動しているか確認してください。",
        ),
      );
  }, [sections, initialize]);

  if (sections === undefined || effects === undefined) {
    return (
      <div className="min-h-screen bg-stone-100">
        <main className="mx-auto max-w-5xl px-4 py-12">
          <LoadingState />
        </main>
      </div>
    );
  }

  if (sections.length === 0 && !initError) {
    return (
      <div className="min-h-screen bg-stone-100">
        <main className="mx-auto max-w-5xl px-4 py-12">
          <LoadingState />
          <p className="mt-4 text-center text-sm text-stone-500">
            説明書データを準備しています…
          </p>
        </main>
      </div>
    );
  }

  if (initError) {
    return (
      <div className="min-h-screen bg-stone-100 px-4 py-12">
        <main className="mx-auto max-w-lg">
          <SetupBanner
            message={initError}
            onRetry={() => {
              setInitError(null);
              void initialize().catch(() =>
                setInitError("再試行に失敗しました。"),
              );
            }}
          />
        </main>
      </div>
    );
  }

  return (
    <ManualView
      sections={sections as ManualSection[]}
      effects={effects as CardEffect[]}
    />
  );
}
