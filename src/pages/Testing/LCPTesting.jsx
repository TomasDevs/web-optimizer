import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onLCP } from "web-vitals";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import TestingHint from "./utils/TestingHint";

const LCPTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lcpValue, setLcpValue] = useState("Měření...");

  // Zajištění, že parametr "optimized" je vždy přítomen v URL
  useEffect(() => {
    if (!searchParams.has("optimized")) {
      setSearchParams({ optimized: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isOptimized = searchParams.get("optimized") === "true";

  // Měření LCP pomocí web-vitals
  useEffect(() => {
    let isMounted = true;

    const reportLCP = ({ value }) => {
      if (isMounted) {
        setLcpValue(`${value.toFixed(0)} ms`);
      }
    };

    // Registrujeme listener pro měření LCP
    const unsubscribe = onLCP(reportLCP);

    return () => {
      isMounted = false;
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, [isOptimized]);

  // Přepnutí mezi optimalizovanou a neoptimalizovanou verzí stránky
  const handleLCPChange = () => {
    setSearchParams({ optimized: !isOptimized });
  };

  return (
    <>
      <Helmet>
        <title>Testování LCP | Web Optimizer</title>
      </Helmet>

      <section className="section-page">
        <h1 className="subpage-title">
          Testování Largest Contentful Paint (LCP)
        </h1>

        <div className="metrics-monitor">
          <h2 className="section-subtitle -small">LCP hodnota</h2>
          <div
            className={`metrics-value ${
              lcpValue !== "Měření..." && parseInt(lcpValue) > 2500
                ? "metrics-value--bad"
                : lcpValue !== "Měření..." && parseInt(lcpValue) <= 2500
                ? "metrics-value--good"
                : ""
            }`}>
            <span className="metrics-value__number">{lcpValue}</span>
            {lcpValue !== "Měření..." && (
              <span className="metrics-value__label">
                {parseInt(lcpValue) <= 2500
                  ? "Dobrá hodnota"
                  : "Špatná hodnota"}
              </span>
            )}
          </div>
        </div>

        <TestingHint />

        <div className="section-page">
          {isOptimized ? (
            <>
              <img
                fetchPriority="high"
                src="/assets/images/lcp-image-min.webp"
                width="1440"
                height="710"
                alt="Optimalizovaný hero obrázek"
                className="lcp-image"
                loading="eager"
              />
            </>
          ) : (
            <img
              src="/assets/images/lcp-image.jpg"
              width="1440"
              height="810"
              alt="Neoptimalizovaný hero obrázek"
              className="lcp-image"
              loading="lazy"
            />
          )}
        </div>

        <p className="section-text">
          LCP určuje rychlost načtení největšího viditelného prvku na stránce.
          Nejčastěji se jedná o obrázek nebo nadpis. Hodnota LCP by měla být pod{" "}
          <strong>2,5 vteřiny</strong>.
        </p>

        <button onClick={handleLCPChange} className="button -bottom">
          Přepnout na {isOptimized ? "neoptimalizovanou" : "optimalizovanou"}{" "}
          verzi
        </button>
        <p className="status-text">
          Aktuální verze:{" "}
          <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Rozdíly mezi verzemi</h2>
        <p className="section-text">
          Optimalizovaná verze využívá moderní formát obrázků WebP, atribut{" "}
          <code className="inline-code">fetchPriority</code> a vhodné načítání
          obrázků pomocí <code className="inline-code">loading="eager"</code>.
          Neoptimalizovaná verze používá formát JPG bez prioritizace načítání.
        </p>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

export default LCPTesting;
