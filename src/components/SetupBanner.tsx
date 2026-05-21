type Props = {
  message: string;
  onRetry?: () => void;
};

export function SetupBanner({ message, onRetry }: Props) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-amber-950"
    >
      <p className="text-sm font-medium">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 text-sm font-semibold text-amber-800 underline hover:text-amber-900"
        >
          再試行
        </button>
      )}
    </div>
  );
}
