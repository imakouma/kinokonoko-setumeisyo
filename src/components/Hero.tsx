export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-orange-50 to-lime-50 px-6 py-12 shadow-lg shadow-amber-100/60 sm:px-10 sm:py-16">
      <div
        className="pointer-events-none absolute -right-8 -top-8 text-[7rem] opacity-20 select-none"
        aria-hidden
      >
        🍄
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
      <div className="relative mt-6 flex flex-wrap gap-2">
        {["赤", "青", "黄", "緑", "紫"].map((color) => (
          <span
            key={color}
            className="rounded-full border border-stone-200 bg-white/80 px-3 py-1 text-sm font-medium text-stone-700 shadow-sm"
          >
            {color}
          </span>
        ))}
      </div>
    </header>
  );
}
