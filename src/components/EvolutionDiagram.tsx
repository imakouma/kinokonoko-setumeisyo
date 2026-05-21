const STAGES = [
  { label: "きのこ", count: "3枚", stage: 1 },
  { label: "きのこのこ", count: "在庫から1枚", stage: 2 },
  { label: "キングきのこ", count: "勝利！", stage: 3 },
] as const;

export function EvolutionDiagram() {
  return (
    <aside className="rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-5">
      <h2 className="mb-4 text-sm font-bold tracking-wider text-stone-500 uppercase">
        進化の流れ
      </h2>
      <div className="flex flex-col gap-2">
        {STAGES.map((item, index) => (
          <div key={item.label} className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${
                index === 0
                  ? "bg-lime-600"
                  : index === 1
                    ? "bg-amber-500"
                    : "bg-purple-600"
              }`}
            >
              {item.stage}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-stone-900">{item.label}</p>
              <p className="text-xs text-stone-500">{item.count}</p>
            </div>
            {index < STAGES.length - 1 && (
              <span className="text-stone-300" aria-hidden>
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-stone-500">
        同色・同段階3枚で進化。キングきのこは手札から場へ出して即勝利。
      </p>
    </aside>
  );
}
