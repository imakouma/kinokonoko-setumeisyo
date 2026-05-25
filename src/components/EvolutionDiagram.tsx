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
      className="flex shrink-0 items-center justify-center px-0.5 text-amber-500 sm:px-2"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 sm:h-7 sm:w-7"
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

      <div className="mx-auto mt-6 flex max-w-4xl flex-row flex-nowrap items-center justify-center gap-0 overflow-x-auto pb-1 sm:mt-8 sm:gap-2 sm:pb-0">
        {STAGES.map((item, index) => (
          <div key={item.label} className="flex shrink-0 flex-row items-center">
            {index > 0 && <EvolutionArrow />}
            <div
              className={`flex w-[7.25rem] flex-col items-center text-center sm:w-[10.5rem] ${
                "highlight" in item && item.highlight
                  ? "rounded-2xl bg-amber-50/90 p-3 ring-1 ring-amber-200/80 sm:p-4"
                  : "px-1 py-1 sm:px-2"
              }`}
            >
              <CardImage
                stage={item.stage}
                color={EXAMPLE_COLOR}
                className="h-24 w-auto shrink-0 rounded-lg sm:h-32"
              />
              <div className="mt-2 min-w-0 sm:mt-3">
                <p className="text-sm font-semibold text-stone-900 sm:text-base">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-stone-500 sm:text-sm">
                  {item.count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-stone-500 sm:mt-8">
        同色・同段階3枚で進化。キングきのこは手札から場へ出して即勝利。
      </p>
    </aside>
  );
}
