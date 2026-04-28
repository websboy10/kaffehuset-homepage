import Script from "next/script";

export function Gallery() {
  return (
    <section className="section gallery-section" id="galleri" aria-labelledby="gallery-title">
      <div className="section-shell">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 id="gallery-title">Følg med fra Kaffehuset</h2>
          </div>
          <p>
            Se de seneste glimt fra caféen, menuen og hverdagen på Nørrebrogade.
          </p>
        </div>
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="instagram-feed">
          <div
            className="elfsight-app-c7719fee-bacf-404a-b9b2-0d4801af0519"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
