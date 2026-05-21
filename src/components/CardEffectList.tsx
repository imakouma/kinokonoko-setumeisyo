import { CardImage } from "./CardImage";
import { COLOR_STYLES, isCardColor } from "../lib/colors";
import type { CardEffect, CardColor } from "../types/manual";

type Props = {
  effects: CardEffect[];
};

export function CardEffectList({ effects }: Props) {
  const stage1 = effects.filter((e) => e.stage === 1);
  const stage2 = effects.filter((e) => e.stage === 2);

  return (
    <section
      id="effects"
      className="scroll-mt-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold text-stone-900">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-xl"
          aria-hidden
        >
          ✨
        </span>
        カードの特殊効果一覧
      </h2>
      <p className="mb-8 text-stone-600">
        アクションフェイズで手札から1枚捨て、色に応じた効果を発動できます。
      </p>

      <EffectStage
        title="レベル1：きのこ"
        subtitle="山札・手札に多い基本カード"
        effects={stage1}
      />
      <EffectStage
        title="レベル2：きのこのこ"
        subtitle="進化で手に入る強力なカード"
        effects={stage2}
        className="mt-10"
      />

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-amber-950">レベル3：キングきのこ</h3>
        <p className="mt-2 text-base leading-relaxed text-amber-900">
          特殊効果を持たず、場に出した瞬間に勝利となります。
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5">
          {(["red", "blue", "yellow", "green", "purple"] as const).map(
            (color) => (
              <li key={color}>
                <CardImage
                  stage={3}
                  color={color}
                  className="h-32 w-auto rounded-lg sm:h-36"
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

function EffectStage({
  title,
  subtitle,
  effects,
  className = "",
}: {
  title: string;
  subtitle: string;
  effects: CardEffect[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-xl font-bold text-stone-900">{title}</h3>
      <p className="mb-4 text-sm text-stone-500">{subtitle}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {effects.map((effect) => (
          <EffectCard key={effect._id} effect={effect} />
        ))}
      </div>
    </div>
  );
}

function EffectCard({ effect }: { effect: CardEffect }) {
  const color = isCardColor(effect.color) ? effect.color : "red";
  const styles = COLOR_STYLES[color];
  const stage = effect.stage as 1 | 2;

  return (
    <article
      className={`flex gap-4 rounded-xl border p-4 ${styles.bg} ${styles.border}`}
    >
      <CardImage
        stage={stage}
        color={color as CardColor}
        className="h-28 w-auto shrink-0 rounded-lg"
      />
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span aria-hidden>{styles.emoji}</span>
          <span className={`font-bold ${styles.text}`}>{effect.colorLabel}</span>
          <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-stone-600">
            {effect.attribute}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-stone-700">
          {effect.description}
        </p>
      </div>
    </article>
  );
}
