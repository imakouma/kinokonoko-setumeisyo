import { CardImage } from "./CardImage";

const EXAMPLE_COLOR = "red" as const;

const STAGES = [
  { label: "きのこ", count: "3枚", stage: 1 as const },
  { label: "きのこのこ", count: "在庫から1枚", stage: 2 as const },
  { label: "キングきのこ", count: "勝利！", stage: 3 as const, highlight: true },
] as const;

const STAGE_COLUMN =
  "flex w-[5.5rem] shrink-0 flex-col items-center p-2 text-center sm:w-[9.5rem] sm:p-3";
const CARD_SLOT =
  "flex h-[5.5rem] w-full items-center justify-center sm:h-[7.5rem]";
const CARD_IMG = "h-full w-full object-contain";
const CAPTION =
  "mt-2 flex h-[2.75rem] w-full flex-col items-center justify-center leading-tight sm:mt-3 sm:h-[3.25rem]";
const LABEL = "text-xs font-semibold text-stone-900 sm:text-sm";
const COUNT = "mt-0.5 text-[0.65rem] text-stone-500 sm:text-xs";

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
        className="h-5 w-5 sm:h-7 sm:w-7"
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

      <div className="mx-auto mt-6 flex max-w-4xl flex-row flex-nowrap items-start justify-center sm:mt-8">
        {STAGES.map((item, index) => (
          <div key={item.label} className="flex shrink-0 flex-row items-center">
            {index > 0 && <EvolutionArrow />}
            <div
              className={`${STAGE_COLUMN} ${
                "highlight" in item && item.highlight
                  ? "rounded-xl bg-amber-50/90 ring-1 ring-amber-200/80"
                  : ""
              }`}
            >
              <div className={CARD_SLOT}>
                <CardImage
                  stage={item.stage}
                  color={EXAMPLE_COLOR}
                  className={CARD_IMG}
                />
              </div>
              <div className={CAPTION}>
                <p className={LABEL}>{item.label}</p>
                <p className={COUNT}>{item.count}</p>
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
