import {
  CARD_BACK_IMAGE,
  CARD_COLORS,
  CARD_COLOR_LABELS,
  CARD_STAGE_LABELS,
  getCardImage,
  getCardImageAlt,
  type CardStage,
} from "../data/cardImages";
import { COLOR_STYLES } from "../lib/colors";

const STAGES: CardStage[] = [1, 2, 3];

export function CardGallery() {
  return (
    <section
      id="card-gallery"
      className="scroll-mt-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-stone-900">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl"
          aria-hidden
        >
          🃏
        </span>
        カード一覧
      </h2>
      <p className="mb-8 text-stone-600">
        提出用デザインのカードイラストです。色ごとにレベル3まで進化します。
      </p>

      {STAGES.map((stage) => (
        <div key={stage} className={stage > 1 ? "mt-10" : undefined}>
          <h3 className="text-lg font-bold text-stone-900">
            レベル{stage}：{CARD_STAGE_LABELS[stage]}
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CARD_COLORS.map((color) => (
              <li key={color} className="flex flex-col items-center gap-2">
                <img
                  src={getCardImage(stage, color)}
                  alt={getCardImageAlt(stage, color)}
                  className="h-36 w-auto max-w-full rounded-lg object-contain shadow-md ring-1 ring-stone-200/80 sm:h-44"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className={`text-sm font-semibold ${COLOR_STYLES[color].text}`}
                >
                  {CARD_COLOR_LABELS[color]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-10 flex flex-col items-center gap-3 border-t border-stone-100 pt-8">
        <h3 className="text-lg font-bold text-stone-900">裏面</h3>
        <img
          src={CARD_BACK_IMAGE}
          alt="カード裏面"
          className="h-36 w-auto max-w-full rounded-lg object-contain shadow-md ring-1 ring-stone-200/80 sm:h-44"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
