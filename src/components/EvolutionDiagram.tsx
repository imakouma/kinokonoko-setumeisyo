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
      className="flex shrink-0 items-center justify-center py-1 text-amber-500 lg:px-2 lg:py-0"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 lg:hidden"
      >
        <path d="M12 5v14M12 19l-5-5M12 19l5-5" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-7 w-7 lg:block"
      >
        <path d="M5 12h14M19 12l-5-5M19 12l-5 5" />
      </svg>
    </div>
  );
}

export function EvolutionDiagram() {
  return (
    <aside className="rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-6 shadow-sm sm:p-8">
      <h2 className="text-center text-sm font-bold tracking-wider text-stone-500 uppercase">
        進化の流れ
      </h2>

      <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center lg:mt-8 lg:flex-row lg:items-center lg:justify-center lg:gap-2">
        {STAGES.map((item, index) => (
          <div key={item.label} className="flex flex-col items-center lg:flex-row">
            {index > 0 && <EvolutionArrow />}
            <div
              className={`flex w-[9.5rem] flex-col items-center text-center sm:w-[10.5rem] ${
                "highlight" in item && item.highlight
                  ? "rounded-2xl bg-amber-50/90 p-4 ring-1 ring-amber-200/80"
                  : "px-2 py-1"
              }`}
            >
              <CardImage
                stage={item.stage}
                color={EXAMPLE_COLOR}
                className="h-28 w-auto shrink-0 rounded-lg sm:h-32 lg:h-28"
              />
              <div className="mt-3 min-w-0">
                <p className="text-base font-semibold text-stone-900">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm text-stone-500">{item.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-stone-500 lg:mt-8">
        同色・同段階3枚で進化。キングきのこは手札から場へ出して即勝利。
      </p>
    </aside>
  );
}
