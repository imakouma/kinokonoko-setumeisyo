export function LoadingState() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-stone-600">
      <div
        className="h-12 w-12 animate-bounce text-4xl"
        role="status"
        aria-label="読み込み中"
      >
        🍄
      </div>
      <p>説明書を読み込んでいます…</p>
    </div>
  );
}
