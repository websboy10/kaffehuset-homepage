import Link from "next/link";
import { mapUrl, phoneHref, siteContent } from "@/data/siteContent";
import { ScrollReveal } from "./ScrollReveal";
import { VisitStatusBadge } from "./VisitStatusBadge";

export function VisitSection() {
  return (
    <section className="section visit-section" id="besog" aria-labelledby="visit-title">
      <div className="section-shell visit-layout">
        <div className="section-copy">
          <ScrollReveal>
            <p className="eyebrow">Besøg os</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 id="visit-title">{siteContent.visit.title}</h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p>{siteContent.visit.text}</p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <address className="visit-address">
              <span>{siteContent.address.street}</span>
              <span>
                {siteContent.address.postalCode}, {siteContent.address.city}
              </span>
              <a href={phoneHref}>{siteContent.phone}</a>
            </address>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <VisitStatusBadge />
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="visit-actions">
              <Link className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">
                Åbn kort
              </Link>
              <a className="button button-secondary" href={phoneHref}>
                Ring til caféen
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="hours-panel" aria-label="Åbningstider">
            <div>
              <h3>Køkkenets åbningstider</h3>
              <dl>
                {siteContent.visit.kitchenHours.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3>Caféens åbningstider</h3>
              <dl>
                {siteContent.visit.cafeHours.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
