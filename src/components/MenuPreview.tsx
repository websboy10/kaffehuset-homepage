import Image from "next/image";
import { phoneHref, siteContent } from "@/data/siteContent";
import { menuCategories } from "@/data/menuCategories";
import { ScrollReveal } from "./ScrollReveal";

export function MenuPreview() {
  return (
    <section className="section menu-section" id="menu" aria-labelledby="menu-title">
      <div className="section-shell menu-layout">
        <div className="section-copy">
          <ScrollReveal>
            <p className="eyebrow">Vores Menu</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 id="menu-title">Fra morgenkaffe til aftensult</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p>
              Menuen er bygget til rigtige cafébesøg: noget varmt i koppen, noget grønt og
              mættende på tallerkenen, og noget sødt når pausen gerne må vare lidt længere.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="section-actions">
              <a
                className="button button-outline"
                href={phoneHref}
                aria-label={`Ring til Kaffehuset på ${siteContent.phone}`}
              >
                Ring om menuen
              </a>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="menu-image-wrap">
            <Image
              src="/assets/brunch-og-kaffe.jpg"
              alt="Et dækket brunchbord med kaffe, æg, falafel, grønt og små retter"
              width={1416}
              height={1770}
              sizes="(max-width: 900px) 100vw, 38vw"
              className="menu-image"
            />
          </div>
        </ScrollReveal>
        <div className="menu-grid" aria-label="Menuområder">
          {menuCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <article className="menu-card">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
