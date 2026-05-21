import { Fragment, useState } from "react";
import type { CardEffect, ManualSection } from "../types/manual";
import { CardEffectList } from "./CardEffectList";
import { CardGallery } from "./CardGallery";
import { EvolutionDiagram } from "./EvolutionDiagram";
import { Hero } from "./Hero";
import { SectionCard } from "./SectionCard";
import { TableOfContents } from "./TableOfContents";

type Props = {
  sections: ManualSection[];
  effects: CardEffect[];
};

export function ManualView({ sections, effects }: Props) {
  const [activeSlug, setActiveSlug] = useState("contents");

  const handleNavigate = (slug: string) => {
    setActiveSlug(slug);
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-100 via-stone-100 to-amber-50">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <Hero />

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <TableOfContents
              sections={sections}
              activeSlug={activeSlug}
              onNavigate={handleNavigate}
            />
            <div className="mt-6">
              <EvolutionDiagram />
            </div>
          </aside>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Fragment key={section._id}>
                <SectionCard section={section} />
                {index === 1 && (
                  <div className="lg:hidden">
                    <EvolutionDiagram />
                  </div>
                )}
              </Fragment>
            ))}

            <CardGallery />

            {effects.length > 0 && <CardEffectList effects={effects} />}
          </div>
        </div>

        <footer className="mt-16 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          カードゲーム「きのこのこ」Web説明書
        </footer>
      </main>
    </div>
  );
}
