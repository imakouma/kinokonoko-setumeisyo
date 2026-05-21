import { CardImage } from "./CardImage";

export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-orange-50 to-lime-50 px-6 py-12 shadow-lg shadow-amber-100/60 sm:px-10 sm:py-16 lg:pr-48">
      <div
        className="pointer-events-none absolute -right-2 top-6 hidden rotate-6 gap-1 sm:flex"
        aria-hidden
      >
        <CardImage
          stage={3}
          color="red"
          className="h-32 w-auto -rotate-6 rounded-lg opacity-90"
        />
        <CardImage
          stage={2}
          color="yellow"
          className="h-28 w-auto translate-y-4 rotate-3 rounded-lg opacity-85"
        />
        <CardImage
          stage={1}
          color="green"
          className="h-24 w-auto translate-y-8 rotate-12 rounded-lg opacity-80"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-4 left-6 text-4xl opacity-15 select-none"
        aria-hidden
      >
        👑
      </div>
      <p className="mb-2 text-sm font-semibold tracking-widest text-amber-700 uppercase">
        カードゲーム
      </p>
      <h1 className="relative text-4xl font-black tracking-tight text-stone-900 sm:text-5xl">
        きのこのこ
      </h1>
      <p className="relative mt-4 max-w-2xl text-lg leading-relaxed text-stone-700">
        同じ色のきのこを集めて進化させ、伝説の
        <span className="font-bold text-amber-800">キングきのこ</span>
        を降臨させよう。
      </p>

      <blockquote className="relative mt-8 max-w-2xl border-l-4 border-amber-400/80 pl-4 text-lg font-medium italic text-amber-900/90 sm:text-xl">
        「集え、5つの魔力。呼び覚ませ、伝説の精霊王――。」
      </blockquote>

      <div className="relative mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-stone-600">
        <p>
          ここは、魔法と菌類が共鳴する神秘の世界。
          かつて世界を統べた精霊王
          <span className="font-semibold text-amber-800">「キングきのこ」</span>
          は、災厄によって小さな「きのこ」の姿へ退化し、封印されてしまいました。
        </p>
        <p>
          プレイヤーは偉大なる召喚士となり、同じ属性の魔力を集めて進化の儀式を行います。
          相手の呪文を跳ね返し、魔力を奪い合う、知略を尽くした精霊召喚バトルが今、幕を開ける！
        </p>
        <p>
          いち早く究極の
          <span className="font-semibold text-amber-800">「キングきのこ」</span>
          をその手で降臨させ、勝利を掴み取れ！
        </p>
      </div>
    </header>
  );
}
