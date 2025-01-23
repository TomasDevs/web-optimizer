import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const LCPTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("optimized")) {
      setSearchParams({ optimized: "true" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isOptimized = searchParams.get("optimized") === "true";

  const handleLCPChange = () => {
    setSearchParams({ optimized: !isOptimized });
  };

  return (
    <section className="section-page">
      <h1 className="subpage-title">
        Testování Largest Contentful Paint (LCP)
      </h1>

      <p className="section-text">
        LCP měří čas načtení největšího prvku na stránce. Zde můžeš porovnat
        optimalizovanou a neoptimalizovanou verzi.
      </p>

      <button onClick={handleLCPChange} className="button -margin">
        Přepnout na {isOptimized ? "neoptimalizovanou" : "optimalizovanou"}{" "}
        verzi
      </button>
      <p className="status-text">
        Aktuální verze:{" "}
        <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
      </p>

      <div className="hero-section">
        {isOptimized ? (
          <img
            fetchPriority="high"
            src="/assets/images/lcp-image-min.webp"
            width="1440"
            height="960"
            alt="Optimalizovaný hero obrázek"
            className="lcp-image"
            loading="eager"
          />
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

      <section className="content-section">
        <h2>Další obsah</h2>
        <p>
          Tento obsah simuluje reálnou stránku s textem a dalšími prvky, které
          mohou ovlivnit výkon.
        </p>
        <ul>
          <li>Optimalizované písmo vs. Google Fonts</li>
          <li>Lazy loading vs. eager loading</li>
          <li>Prioritizace načítání prvků</li>
        </ul>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default LCPTesting;
