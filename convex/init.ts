import { mutation } from "./_generated/server";

const SECTIONS = [
  {
    slug: "overview",
    title: "ゲーム概要",
    icon: "🍄",
    order: 0,
    paragraphs: [
      "同じ色のきのこを集めて進化させ、伝説の「キングきのこ」を降臨させることを目指すカードゲームです。",
    ],
  },
  {
    slug: "victory",
    title: "勝利条件",
    icon: "🏆",
    order: 1,
    paragraphs: [
      "同じ色・同じ段階のきのこを3枚集めて進化させ、最終段階である「キングきのこ（3段階目）」を場に出したプレイヤーの勝利となります。",
    ],
  },
  {
    slug: "contents",
    title: "内容物（計100枚）",
    icon: "📦",
    order: 2,
    paragraphs: ["色はそれぞれ、赤・青・黄・緑・紫の5色です。"],
    listItems: [
      "1段階目：きのこ — 各色10枚（計50枚）",
      "2段階目：きのこのこ — 各色8枚（計40枚）",
      "3段階目：キングきのこ — 各色2枚（計10枚）",
    ],
  },
  {
    slug: "setup",
    title: "ゲームの準備",
    icon: "⚙️",
    order: 3,
    paragraphs: [],
    steps: [
      {
        title: "在庫の準備",
        body: "「きのこのこ（2段階目）」と「キングきのこ（3段階目）」のカードを色ごとに分け、全員が見える場に並べて置きます。これが進化時の「在庫」となります。",
      },
      {
        title: "山札の準備",
        body: "「きのこ（1段階目）」のカード（計50枚）をすべてシャッフルし、山札として中央に置きます。",
      },
      {
        title: "手札の配布",
        body: "各プレイヤーに山札から5枚ずつカードを配ります。これが最初の手札です。",
      },
    ],
  },
  {
    slug: "turn",
    title: "ゲームの進め方",
    icon: "🕹️",
    order: 4,
    paragraphs: ["自分の手番（ターン）が来たら、以下の順序で行動します。"],
    subsections: [
      {
        title: "① ドローフェイズ",
        body: "山札からカードを1枚引いて手札に加えます。山札が尽きた場合は、捨て札をシャッフルして新しい山札を作ります。",
      },
      {
        title: "② アクションフェイズ",
        body: "以下のいずれか1つだけを行うことができます。",
        listItems: [
          "きのこを「進化」させる — 手札の同じ色・同じ段階のカード3枚を公開して捨て札にし、在庫から1つ上の段階の同じ色のカードを1枚手札に加える（在庫がない色には進化不可）",
          "カードの「効果」を使う — 手札から1枚捨て、その色の特殊能力を発動する",
          "勝利宣言 — 手札の「キングきのこ」を場に出すと即勝利",
        ],
      },
    ],
  },
  {
    slug: "evolution-example",
    title: "進化の例",
    icon: "✨",
    order: 5,
    paragraphs: [
      "例：赤い「きのこ」3枚を捨てる → 在庫から赤い「きのこのこ」1枚を手札へ",
      "※在庫がなくなっている色のカードには進化できません。",
    ],
  },
];

const CARD_EFFECTS = [
  {
    stage: 1,
    stageLabel: "1段階目：きのこ",
    color: "red",
    colorLabel: "赤",
    attribute: "進化",
    description:
      "自分の手札にあるカードを1枚、進化条件（3枚）を無視して1段階上の同じ色のカードに進化させる。（1枚を捨て札に捨て、在庫から手札に加える）",
    order: 0,
  },
  {
    stage: 1,
    stageLabel: "1段階目：きのこ",
    color: "blue",
    colorLabel: "青",
    attribute: "防御 / 交換",
    description:
      "【防御】相手が自分に対して使った「紫（手札破壊）」や「黄（交換）」の効果を無効化する。【交換】相手を一人指名する。自分の手札1枚と、相手のランダムの手札1枚を交換する。",
    order: 1,
  },
  {
    stage: 1,
    stageLabel: "1段階目：きのこ",
    color: "green",
    colorLabel: "緑",
    attribute: "増殖",
    description: "山札からカードを2枚引く。",
    order: 2,
  },
  {
    stage: 1,
    stageLabel: "1段階目：きのこ",
    color: "yellow",
    colorLabel: "黄",
    attribute: "交換",
    description:
      "相手を一人指名する。互いに手札から1枚ずつ選び、交換する。",
    order: 3,
  },
  {
    stage: 1,
    stageLabel: "1段階目：きのこ",
    color: "purple",
    colorLabel: "紫",
    attribute: "妨害",
    description:
      "相手を一人指名する。その相手の手札をランダムに1枚選んで捨て札にさせる。",
    order: 4,
  },
  {
    stage: 2,
    stageLabel: "2段階目：きのこのこ",
    color: "red",
    colorLabel: "赤",
    attribute: "超進化",
    description:
      "自分の手札にあるカード1枚を自分で選び、進化条件（3枚）を無視して1段階上の同じ色のカードに進化させる（1枚を捨て札に捨て、在庫から手札に加える）。",
    order: 5,
  },
  {
    stage: 2,
    stageLabel: "2段階目：きのこのこ",
    color: "blue",
    colorLabel: "青",
    attribute: "反射",
    description:
      "相手が自分に対して使った効果を無効化し、そのまま相手に跳ね返す（カウンター）。",
    order: 6,
  },
  {
    stage: 2,
    stageLabel: "2段階目：きのこのこ",
    color: "yellow",
    colorLabel: "黄",
    attribute: "大交換",
    description:
      "相手を一人指名する。自分の手札3枚と、相手のランダムの手札3枚を交換する。（互いの手札が足りない場合は可能な枚数で交換）",
    order: 7,
  },
  {
    stage: 2,
    stageLabel: "2段階目：きのこのこ",
    color: "green",
    colorLabel: "緑",
    attribute: "大増殖",
    description:
      "山札からカードを2枚引く。さらにもう一度自分のターン（追加ターン）を行う。",
    order: 8,
  },
  {
    stage: 2,
    stageLabel: "2段階目：きのこのこ",
    color: "purple",
    colorLabel: "紫",
    attribute: "大妨害",
    description:
      "自分以外のすべてのプレイヤーは、手札をランダムに1枚選んで捨て札にする。",
    order: 9,
  },
];

export const initialize = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("manualSections").first();
    if (existing) {
      return { ok: true, alreadyInitialized: true };
    }

    for (const section of SECTIONS) {
      await ctx.db.insert("manualSections", {
        slug: section.slug,
        title: section.title,
        icon: section.icon,
        order: section.order,
        paragraphs: [...section.paragraphs],
        listItems:
          "listItems" in section && section.listItems
            ? [...section.listItems]
            : undefined,
        steps:
          "steps" in section && section.steps
            ? section.steps.map((s) => ({ title: s.title, body: s.body }))
            : undefined,
        subsections:
          "subsections" in section && section.subsections
            ? section.subsections.map((s) => ({
                title: s.title,
                body: s.body,
                listItems:
                  "listItems" in s && s.listItems
                    ? [...s.listItems]
                    : undefined,
              }))
            : undefined,
      });
    }

    for (const effect of CARD_EFFECTS) {
      await ctx.db.insert("cardEffects", { ...effect });
    }

    return { ok: true, alreadyInitialized: false };
  },
});
