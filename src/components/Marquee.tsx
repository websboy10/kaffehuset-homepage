const marqueeItems = [
  "Friskbrygget kaffe",
  "Generøs brunch",
  "Hjemmelavet kage",
  "Kolde specialiteter",
  "Brætspil & hygge",
  "Frokost & aften",
  "Nørrebro stemning",
  "Lotus Shake",
  "Pandekager med bær",
  "Åbent til midnat",
];

export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
