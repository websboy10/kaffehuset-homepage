"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mapUrl, phoneHref, siteContent } from "@/data/siteContent";
import { ScrollReveal } from "./ScrollReveal";

function getOpenStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun,1=Mon...6=Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour * 60 + minute;

  // Cafe hours
  const schedule: Record<number, [number, number]> = {
    0: [9 * 60, 23 * 60],  // Sunday
    1: [8 * 60, 23 * 60],  // Monday
    2: [8 * 60, 23 * 60],
    3: [8 * 60, 23 * 60],
    4: [8 * 60, 23 * 60],
    5: [8 * 60, 24 * 60],  // Friday
    6: [9 * 60, 24 * 60],  // Saturday
  };

  const [open, close] = schedule[day] || [8 * 60, 23 * 60];

  if (time >= open && time < close) {
    const minsLeft = close - time;
    if (minsLeft <= 60) {
      return { isOpen: true, label: `Lukker om ${minsLeft} min` };
    }
    return { isOpen: true, label: "Åben nu" };
  }

  return { isOpen: false, label: "Lukket nu" };
}

export function VisitSection() {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string }>({ isOpen: false, label: "" });

  useEffect(() => {
    setStatus(getOpenStatus());
    const interval = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

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

          {status.label && (
            <ScrollReveal delay={3}>
              <div className={`status-badge ${status.isOpen ? "open" : "closed"}`}>
                <span className="status-dot" />
                {status.label}
              </div>
            </ScrollReveal>
          )}

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
