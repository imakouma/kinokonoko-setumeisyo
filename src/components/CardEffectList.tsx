import { COLOR_STYLES, isCardColor } from "../lib/colors";
import type { CardEffect } from "../types/manual";

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
        title="1段階目：きのこ"
        subtitle="山札・手札に多い基本カード"
        effects={stage1}
      />
      <EffectStage
        title="2段階目：きのこのこ"
        subtitle="進化で手に入る強力なカード"
        effects={stage2}
        className="mt-10"
      />

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>3段階目：キングきのこ</strong>
        は特殊効果を持たず、場に出した瞬間に勝利となります。
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
  const styles = isCardColor(effect.color)
    ? COLOR_STYLES[effect.color]
    : COLOR_STYLES.red;

  return (
    <article
      className={`rounded-xl border p-4 ${styles.bg} ${styles.border}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span aria-hidden>{styles.emoji}</span>
        <span className={`font-bold ${styles.text}`}>{effect.colorLabel}</span>
        <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-stone-600">
          {effect.attribute}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-stone-700">
        {effect.description}
      </p>
    </article>
  );
}
