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
    </header>
  );
}
