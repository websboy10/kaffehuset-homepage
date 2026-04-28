import Image from "next/image";
import { phoneHref, siteContent } from "@/data/siteContent";
import { ScrollReveal } from "./ScrollReveal";

export function AtmosphereSection() {
  return (
    <section className="section atmosphere-section" id="stemning" aria-labelledby="atmosphere-title">
      <div className="section-shell atmosphere-layout">
        <div className="atmosphere-media">
          <ScrollReveal>
            <Image
              src="/assets/spil-i-cafeen.jpg"
              alt="Kaffehusets brætspilshylder med spil til gæster"
              width={1440}
              height={1920}
              sizes="(max-width: 900px) 100vw, 42vw"
              className="portrait-image"
            />
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Image
              src="/assets/lotus-shake.jpg"
              alt="Cremet kold shake serveret hos Kaffehuset"
              width={1365}
              height={1706}
              sizes="(max-width: 900px) 48vw, 18vw"
              className="floating-image"
            />
          </ScrollReveal>
        </div>
        <div className="section-copy atmosphere-copy">
          <ScrollReveal>
            <p className="eyebrow">Stemning</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 id="atmosphere-title">{siteContent.introduction.title}</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p>{siteContent.introduction.text}</p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="section-actions">
              <a
                className="button button-inverted"
                href={phoneHref}
                aria-label={`Ring til Kaffehuset på ${siteContent.phone}`}
              >
                Ring til caféen
              </a>
            </div>
          </ScrollReveal>
          <div className="feature-list" aria-label="Oplevelser i caféen">
            <ScrollReveal delay={1}>
              <article>
                <h3>Brætspil på hylden</h3>
                <p>Tag et spil ned, bestil noget godt og lad bordet blive samlingspunktet.</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <article>
                <h3>Plads til pauser</h3>
                <p>En café til både korte kaffestop, rolige arbejdsstunder og lange aftaler.</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <article>
                <h3>Åbent til aftenen</h3>
                <p>Køkkenet holder åbent sent, så Kaffehuset også fungerer efter arbejde.</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
