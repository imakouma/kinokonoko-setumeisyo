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
      className="flex shrink-0 items-center justify-center text-amber-500 max-lg:px-1 lg:py-0.5"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-7 w-7 lg:block"
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
        className="h-8 w-8 lg:hidden"
      >
        <path d="M5 12h14M19 12l-5-5M19 12l-5 5" />
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

      <div className="flex max-lg:flex-row max-lg:flex-wrap max-lg:items-center max-lg:justify-center max-lg:gap-x-1 max-lg:gap-y-4 lg:flex-col lg:gap-1">
        {STAGES.map((item, index) => (
          <div key={item.label} className="contents">
            {index > 0 && <EvolutionArrow />}
            <div
              className={`flex min-w-0 flex-col items-center text-center max-lg:w-[7.5rem] sm:max-lg:w-[8.5rem] lg:w-full lg:flex-row lg:items-center lg:gap-3 lg:text-left ${
                "highlight" in item && item.highlight
                  ? "rounded-xl bg-amber-50/80 p-2 ring-1 ring-amber-200/80 max-lg:p-3 lg:p-3"
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
