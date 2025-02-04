import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const LCPTesting = () => {
  const pageTitle = "Testování LCP | Web Optimizer";
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("optimized")) {
      setSearchParams({ optimized: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isOptimized = searchParams.get("optimized") === "true";

  const handleLCPChange = () => {
    setSearchParams({ optimized: !isOptimized });
  };

  return (
    <section className="section-page">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <h1 className="subpage-title">
        Testování Largest Contentful Paint (LCP)
      </h1>

      <p className="section-text">
        LCP určuje rychlost načtení největšího viditelného prvku na stránce.
        Nejčastěji se jedná o hlavní obrázek nebo nadpis. Hodnota LCP by měla
        být pod <strong>2,5 vteřiny</strong>.
      </p>

      <button onClick={handleLCPChange} className="button -bottom">
        Přepnout na {isOptimized ? "neoptimalizovanou" : "optimalizovanou"}{" "}
        verzi
      </button>
      <p className="status-text">
        Aktuální verze:{" "}
        <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
      </p>

      <div className="section">
        {isOptimized ? (
          <>
            <img
              fetchPriority="high"
              src="/assets/images/lcp-image-min.webp"
              width="1440"
              height="960"
              alt="Optimalizovaný hero obrázek"
              className="lcp-image"
              loading="eager"
            />
          </>
        ) : (
          <img
            src="/assets/images/lcp-image.jpg"
            width="1440"
            height="960"
            alt="Neoptimalizovaný hero obrázek"
            className="lcp-image"
            loading="lazy"
          />
        )}
      </div>

      <section className="section-text">
        <h2 className="section-subtitle">Rozdíly mezi verzemi</h2>
        <p>
          Optimalizovaná verze využívá moderní formát obrázků WebP, atribut{" "}
          <code>fetchPriority</code> a vhodné načítání obrázků pomocí{" "}
          <code>loading="eager"</code>. Neoptimalizovaná verze používá formát
          JPG bez prioritizace načítání.
        </p>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default LCPTesting;
