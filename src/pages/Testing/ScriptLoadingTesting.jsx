import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onLCP, onFID, onTTFB, onINP } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import TestingHint from "./utils/TestingHint";

const ScriptLoadingTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [metrics, setMetrics] = useState({
    lcp: "Měření...",
    fid: "Měření...",
    ttfb: "Měření...",
    inp: "Měření...",
  });

  // Zajištění, že parametr "script" je vždy přítomen v URL
  useEffect(() => {
    if (!searchParams.has("script")) {
      setSearchParams({ script: "async" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const scriptType = searchParams.get("script") || "async";

  // Měření výkonnostních metrik
  useEffect(() => {
    let isMounted = true;

    const handleMetric =
      (name) =>
      ({ value }) => {
        if (isMounted) {
          setMetrics((prev) => ({
            ...prev,
            [name]: value.toFixed(0),
          }));
        }
      };

    try {
      const unsubLCP = onLCP(handleMetric("lcp"));
      const unsubFID = onFID(handleMetric("fid"));
      const unsubTTFB = onTTFB(handleMetric("ttfb"));
      const unsubINP = onINP(handleMetric("inp"));

      return () => {
        isMounted = false;
        if (typeof unsubLCP === "function") unsubLCP();
        if (typeof unsubFID === "function") unsubFID();
        if (typeof unsubTTFB === "function") unsubTTFB();
        if (typeof unsubINP === "function") unsubINP();
      };
    } catch (error) {
      console.error("Chyba při měření metrik:", error);
    }
  }, [scriptType]);

  // Přepnutí mezi metodami načítání skriptů (async, defer, sync)
  const handleScriptToggle = () => {
    const newType =
      scriptType === "async"
        ? "defer"
        : scriptType === "defer"
        ? "sync"
        : "async";
    setSearchParams({ script: newType });
  };

  // Dynamické přidání a odstranění testovacích skriptů při změně typu načítání
  useEffect(() => {
    // Odebrání předchozích skriptů
    ["test-script-1", "test-script-2", "extra-script"].forEach((id) => {
      document.getElementById(id)?.remove();
    });

    // Vytvoření a konfigurace testovacích skriptů
    const script1 = document.createElement("script");
    script1.src = "/assets/scripts/heavy-script.js";
    script1.id = "test-script-1";

    const script2 = document.createElement("script");
    script2.src = "/assets/scripts/utility-script.js";
    script2.id = "test-script-2";

    const script3 = document.createElement("script");
    script3.src = "/assets/scripts/extra-script.js";
    script3.id = "extra-script";

    // Nastavení atributů pro asynchronní, odložené nebo synchronní načítání
    if (scriptType === "async") {
      script1.async = true;
      script2.async = true;
      script3.async = true;
    } else if (scriptType === "defer") {
      script1.defer = true;
      script2.defer = true;
      script3.defer = true;
    } else if (scriptType === "sync") {
      script1.async = false;
      script2.async = false;
      script3.async = false;
    }

    // Přidání skriptů do DOM
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);

    // Vyčištění při změně parametru
    return () => {
      ["test-script-1", "test-script-2", "extra-script"].forEach((id) => {
        document.getElementById(id)?.remove();
      });
    };
  }, [scriptType]);

  // Aktualizace výstupu utility skriptu při změně parametru
  useEffect(() => {
    const outputElement = document.getElementById("utility-script-output");
    if (outputElement) {
      outputElement.innerText = "Čekání na spuštění utility skriptu...";
    }
  }, [scriptType]);

  return (
    <>
      <Helmet>
        <title>Testování načítání skriptů | Web Optimizer</title>
      </Helmet>

      <section className="section-page">
        <h1 className="subpage-title">Testování načítání skriptů</h1>

        <div className="flex-gap metrics-container">
          <div className="metric-item">
            <span>
              LCP: <strong>{metrics.lcp} ms</strong>
            </span>
          </div>
          <div className="metric-item">
            <span>
              FID: <strong>{metrics.fid} ms</strong>
            </span>
          </div>
          <div className="metric-item">
            <span>
              TTFB: <strong>{metrics.ttfb} ms</strong>
            </span>
          </div>
          <div className="metric-item">
            <span>
              INP: <strong>{metrics.inp} ms</strong>
            </span>
          </div>
        </div>

        <button onClick={handleScriptToggle} className="button -margin">
          Přepnout na{" "}
          {scriptType === "async"
            ? "defer"
            : scriptType === "defer"
            ? "sync"
            : "async"}
        </button>

        <p className="status-text">
          Aktuální metoda načítání skriptů: <strong>{scriptType}</strong>
        </p>

        <TestingHint />
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Výsledek skriptů</h2>
        <div id="script-test-output" className="status-text">
          Skript načítá JSON data...
        </div>
        <div id="utility-script-output" className="status-text">
          Utility skript čeká na DOM...
        </div>
        <div id="extra-script-output" className="status-text">
          Extra script nebyl zatím spuštěn...
        </div>
      </section>

      <section className="section-page">
        <p className="section-text">
          Tato stránka umožňuje testovat různé způsoby načítání skriptů:{" "}
          <code className="inline-code">async</code>,{" "}
          <code className="inline-code">defer</code> a{" "}
          <code className="inline-code">sync</code>. Pomocí tlačítka níže lze
          přepínat mezi metodami a sledovat jejich vliv na metriky jako{" "}
          <strong>LCP</strong>, <strong>FID</strong> a <strong>INP</strong>.
        </p>
        <div className="info">
          <h3>Rozdíly mezi způsoby načítání skriptů</h3>
          <ul>
            <li>
              <strong>Async</strong> - Skripty se načítají paralelně a spustí se
              okamžitě po stažení bez ohledu na DOM nebo jiné skripty. Ideální
              pro nezávislé skripty třetích stran.
            </li>
            <li>
              <strong>Defer</strong> - Skripty se načítají paralelně, ale spustí
              se až po parsování HTML a v pořadí, v jakém jsou definovány.
              Vhodné pro skripty, které potřebují přístup k HTML.
            </li>
            <li>
              <strong>Sync</strong> - Skripty blokují parsování HTML a spouští
              se ihned. Výrazně zpomaluje vykreslení stránky.
            </li>
          </ul>
        </div>

        <h2 className="section-subtitle -small">Popis testovaných skriptů</h2>
        <p className="section-text">
          Na této stránce jsou testovány tři různé skripty, každý se chová jinak
          v závislosti na metodě načítání (
          <code className="inline-code">async</code>,{" "}
          <code className="inline-code">defer</code>,{" "}
          <code className="inline-code">sync</code>). Níže je jejich stručný
          popis:
        </p>

        <ul className="script-description-list">
          <li>
            <strong>
              Heavy Script (<code>heavy-script.js</code>)
            </strong>{" "}
            – Simuluje náročné operace, například zpracování dat. Stahuje 500
            záznamů z API a počítá s nimi.
          </li>
          <li>
            <strong>
              Utility Script (<code>utility-script.js</code>)
            </strong>{" "}
            – Opakovaně kontroluje, zda je dostupný element v DOM (
            <code>document.getElementById()</code>). Jakmile ho najde, změní
            jeho obsah. Používá rekurzivní <code>setTimeout()</code>, aby se
            ujistil, že prvek skutečně existuje.
          </li>
          <li>
            <strong>
              Extra Script (<code>extra-script.js</code>)
            </strong>{" "}
            – Okamžitě se spustí a jen vypíše potvrzení o dokončení.
          </li>
        </ul>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

export default ScriptLoadingTesting;
