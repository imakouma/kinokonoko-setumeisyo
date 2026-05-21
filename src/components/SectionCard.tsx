import type { ManualSection } from "../types/manual";
import { ColorLabelsText } from "./ColorLabelsText";

type Props = {
  section: ManualSection;
};

export function SectionCard({ section }: Props) {
  return (
    <section
      id={section.slug}
      className="scroll-mt-24 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-stone-900">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-xl"
          aria-hidden
        >
          {section.icon}
        </span>
        {section.title}
      </h2>

      {section.paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-3 leading-relaxed text-stone-700 last:mb-0"
        >
          <ColorLabelsText text={paragraph} />
        </p>
      ))}

      {section.listItems && (
        <ul className="mt-4 space-y-2">
          {section.listItems.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg bg-stone-50 px-4 py-3 text-stone-700"
            >
              <span className="font-bold text-amber-600" aria-hidden>
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.steps && (
        <ol className="mt-4 space-y-4">
          {section.steps.map((step, index) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-xl border border-amber-100 bg-amber-50/50 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-bold text-stone-900">{step.title}</h3>
                <p className="mt-1 text-stone-700">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )}

      {section.subsections && (
        <div className="mt-6 space-y-6">
          {section.subsections.map((sub) => (
            <div
              key={sub.title}
              className="rounded-xl border border-lime-200 bg-lime-50/40 p-5"
            >
              <h3 className="text-lg font-bold text-stone-900">{sub.title}</h3>
              <p className="mt-2 text-stone-700">{sub.body}</p>
              {sub.listItems && (
                <ul className="mt-3 space-y-2">
                  {sub.listItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-white/80 px-3 py-2 text-sm text-stone-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
