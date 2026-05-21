import { CardImage } from "./CardImage";

const EXAMPLE_COLOR = "red" as const;

const STAGES = [
  { label: "きのこ", count: "3枚", stage: 1 as const },
  { label: "きのこのこ", count: "在庫から1枚", stage: 2 as const },
  { label: "キングきのこ", count: "勝利！", stage: 3 as const, highlight: true },
] as const;

function EvolutionArrow() {
  return (
    <div
      className="flex shrink-0 items-center justify-center py-1 text-amber-500"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M12 5v14M12 19l-5-5M12 19l5-5" />
      </svg>
    </div>
  );
}

export function EvolutionDiagram() {
  return (
    <aside className="rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-5">
      <h2 className="mb-4 text-sm font-bold tracking-wider text-stone-500 uppercase">
        進化の流れ
      </h2>

      <div className="flex flex-col items-center gap-1">
        {STAGES.map((item, index) => (
          <div key={item.label} className="flex w-full flex-col items-center">
            {index > 0 && <EvolutionArrow />}
            <div
              className={`flex w-full max-w-xs flex-col items-center text-center sm:max-w-sm lg:max-w-none lg:flex-row lg:items-center lg:gap-3 lg:text-left ${
                "highlight" in item && item.highlight
                  ? "rounded-xl bg-amber-50/80 p-3 ring-1 ring-amber-200/80"
                  : ""
              }`}
            >
              <CardImage
                stage={item.stage}
                color={EXAMPLE_COLOR}
                className="h-28 w-auto shrink-0 rounded-lg sm:h-32 lg:h-20 lg:rounded-md"
              />
              <div className="mt-2 min-w-0 lg:mt-0 lg:flex-1">
                <p className="text-base font-semibold text-stone-900 lg:text-sm">
                  {item.label}
                </p>
                <p className="text-sm text-stone-500 lg:text-xs">{item.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-stone-500">
        同色・同段階3枚で進化。キングきのこは手札から場へ出して即勝利。
      </p>
    </aside>
  );
}
