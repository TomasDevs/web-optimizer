import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { onLCP, onFCP, onTTFB } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";

const CodeMinificationTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [metrics, setMetrics] = useState({
    lcp: "Měření...",
    fcp: "Měření...",
    ttfb: "Měření...",
  });
  const [fileInfo, setFileInfo] = useState({
    jsSize: null,
    cssSize: null,
    loadTime: null,
  });

  // Zajištění, že parametr "minified" je vždy přítomen v URL
  useEffect(() => {
    if (!searchParams.has("minified")) {
      setSearchParams({ minified: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isMinified = searchParams.get("minified") === "true";

  // Měření výkonnostních metrik
  useEffect(() => {
    let isMounted = true;

    const handleMetric =
      (name) =>
      ({ value }) => {
        if (isMounted) {
          setMetrics((prev) => ({ ...prev, [name]: value.toFixed(0) }));
        }
      };

    try {
      const unsubLCP = onLCP(handleMetric("lcp"));
      const unsubFCP = onFCP(handleMetric("fcp"));
      const unsubTTFB = onTTFB(handleMetric("ttfb"));

      return () => {
        isMounted = false;
        if (typeof unsubLCP === "function") unsubLCP();
        if (typeof unsubFCP === "function") unsubFCP();
        if (typeof unsubTTFB === "function") unsubTTFB();
      };
    } catch (error) {
      console.error("Chyba při měření metrik:", error);
    }
  }, [isMinified]);

  // Získání informací o velikosti souborů
  useEffect(() => {
    const fetchSizes = async () => {
      const jsFile = isMinified ? "/minified-index.js" : "/unminified-index.js";
      const cssFile = isMinified
        ? "/minified-index.css"
        : "/unminified-index.css";

      const startTime = performance.now();

      try {
        // Měření velikosti JS souboru
        const jsResponse = await fetch(jsFile);
        const jsSize =
          jsResponse.headers.get("content-length") ||
          (await jsResponse.blob()).size;

        // Měření velikosti CSS souboru
        const cssResponse = await fetch(cssFile);
        const cssSize =
          cssResponse.headers.get("content-length") ||
          (await cssResponse.blob()).size;

        // Měření celkového času načítání
        const loadTime = performance.now() - startTime;

        setFileInfo({
          jsSize: formatBytes(parseInt(jsSize)),
          cssSize: formatBytes(parseInt(cssSize)),
          loadTime: `${loadTime.toFixed(2)} ms`,
        });
      } catch (error) {
        console.error("Chyba při načítání informací o souborech:", error);
      }
    };

    fetchSizes();
  }, [isMinified]);

  // Pomocná funkce pro formátování velikosti souboru
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // Přepínání mezi minifikovanou a neminifikovanou verzí
  const handleToggleMinification = () => {
    const newUrl = isMinified ? "?minified=false" : "?minified=true";
    window.location.search = newUrl;
  };

  return (
    <>
      <Helmet>
        <title>Testování minifikace kódu | Web Optimizer</title>
        <link
          rel="stylesheet"
          href={isMinified ? "/minified-index.css" : "/unminified-index.css"}
        />
        <script
          type="module"
          src={isMinified ? "/minified-index.js" : "/unminified-index.js"}
        />
      </Helmet>

      <div className="section-page">
        <h1 className="subpage-title">Testování minifikace kódu</h1>

        <div className="flex-gap">
          <div className="metric-item">
            <span>
              LCP: <strong>{metrics.lcp} ms</strong>
            </span>
          </div>
          <div className="metric-item">
            <span>
              FCP: <strong>{metrics.fcp} ms</strong>
            </span>
          </div>
          <div className="metric-item">
            <span>
              TTFB: <strong>{metrics.ttfb} ms</strong>
            </span>
          </div>
        </div>

        <p className="hints">
          Pro lepší výsledky testu doporučuji přepnout okno/kartu v prohlížeči a
          vrátit se zpět, případně mezi testy také aktualizovat stránku (F5).
        </p>

        <p className="status-text">
          Aktuálně je minifikace{" "}
          <strong>{isMinified ? "zapnutá" : "vypnutá"}</strong>.
        </p>

        <button onClick={handleToggleMinification} className="button">
          {isMinified
            ? "Přepnout na neminifikovanou verzi"
            : "Přepnout na minifikovanou verzi"}
        </button>

        {fileInfo.jsSize && (
          <div className="info">
            <h3>Informace o souborech</h3>
            <div className="file-info">
              <p>
                <strong>JavaScript:</strong> {fileInfo.jsSize}
              </p>
              <p>
                <strong>CSS:</strong> {fileInfo.cssSize}
              </p>
              <p>
                <strong>Doba načtení:</strong> {fileInfo.loadTime}
              </p>
            </div>
          </div>
        )}

        <div className="info">
          <h3>Výhody minifikace kódu</h3>
          <ul>
            <li>
              <strong>Menší velikost souborů</strong> - snížení objemu
              přenesených dat a rychlejší stahování
            </li>
            <li>
              <strong>Rychlejší parsování</strong> - prohlížeč zpracuje kratší
              kód rychleji
            </li>
            <li>
              <strong>Vylepšené metriky Core Web Vitals</strong> - zejména LCP
              (Largest Contentful Paint) a FCP (First Contentful Paint)
            </li>
            <li>
              <strong>Nižší náklady na přenos dat</strong> - důležité zejména
              pro mobilní uživatele
            </li>
          </ul>
          <p>Minifikace obvykle zahrnuje:</p>
          <ul>
            <li>Odstranění komentářů a bílých znaků</li>
            <li>Zkrácení názvů proměnných a funkcí</li>
            <li>Odstranění nepoužívaného kódu</li>
            <li>Optimalizace výrazů a struktur</li>
          </ul>
        </div>
      </div>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

export default CodeMinificationTesting;
