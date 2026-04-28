"use client";

import { useEffect, useState } from "react";

function getOpenStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() * 60 + now.getMinutes();

  const schedule: Record<number, [number, number]> = {
    0: [9 * 60, 23 * 60],
    1: [8 * 60, 23 * 60],
    2: [8 * 60, 23 * 60],
    3: [8 * 60, 23 * 60],
    4: [8 * 60, 23 * 60],
    5: [8 * 60, 24 * 60],
    6: [9 * 60, 24 * 60]
  };

  const [open, close] = schedule[day] ?? [8 * 60, 23 * 60];

  if (time >= open && time < close) {
    const minsLeft = close - time;
    return { isOpen: true, label: minsLeft <= 60 ? `Lukker om ${minsLeft} min` : "Åben nu" };
  }

  return { isOpen: false, label: "Lukket nu" };
}

export function VisitStatusBadge() {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(getOpenStatus());
    const interval = window.setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <div className={`status-badge ${status.isOpen ? "open" : "closed"}`}>
      <span className="status-dot" />
      {status.label}
    </div>
  );
}
