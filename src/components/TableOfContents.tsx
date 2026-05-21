import type { ManualSection } from "../types/manual";

type Props = {
  sections: ManualSection[];
  activeSlug: string;
  onNavigate: (slug: string) => void;
};

export function TableOfContents({ sections, activeSlug, onNavigate }: Props) {
  return (
    <nav
      aria-label="目次"
      className="sticky top-4 rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm backdrop-blur"
    >
      <h2 className="mb-3 text-xs font-bold tracking-wider text-stone-500 uppercase">
        目次
      </h2>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.slug}>
            <button
              type="button"
              onClick={() => onNavigate(section.slug)}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                activeSlug === section.slug
                  ? "bg-amber-100 font-semibold text-amber-900"
                  : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              }`}
            >
              <span aria-hidden>{section.icon}</span>
              <span>{section.title}</span>
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => onNavigate("effects")}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              activeSlug === "effects"
                ? "bg-amber-100 font-semibold text-amber-900"
                : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <span aria-hidden>✨</span>
            <span>特殊効果一覧</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
