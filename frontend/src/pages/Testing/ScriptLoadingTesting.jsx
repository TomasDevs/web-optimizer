import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ScriptLoadingTesting = () => {
  const pageTitle = "Testování načítání skriptů | Web Optimizer";
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("script")) {
      setSearchParams({ script: "async" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const scriptType = searchParams.get("script") || "async";

  const handleScriptToggle = () => {
    const newType =
      scriptType === "async"
        ? "defer"
        : scriptType === "defer"
        ? "sync"
        : scriptType === "sync"
        ? "module"
        : "async";
    setSearchParams({ script: newType });
  };

  useEffect(() => {
    // Odebrání všech testovacích skriptů
    ["test-script-1", "test-script-2", "extra-script"].forEach((id) => {
      document.getElementById(id)?.remove();
    });

    // Hlavní výpočetní skript
    const script1 = document.createElement("script");
    script1.src = "/assets/scripts/heavy-script.js";
    script1.id = "test-script-1";

    // Utility skript (čeká na DOM)
    const script2 = document.createElement("script");
    script2.src = "/assets/scripts/utility-script.js";
    script2.id = "test-script-2";

    // Další testovací skript
    const script3 = document.createElement("script");
    script3.src = "/assets/scripts/extra-script.js";
    script3.id = "extra-script";

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

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);

    return () => {
      ["test-script-1", "test-script-2", "extra-script"].forEach((id) => {
        document.getElementById(id)?.remove();
      });
    };
  }, [scriptType]);

  useEffect(() => {
    const outputElement = document.getElementById("utility-script-output");
    if (outputElement) {
      outputElement.innerText = "Čekání na spuštění utility skriptu...";
    }
  }, [scriptType]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování načítání skriptů</h1>

        <p className="section-text">
          Tato stránka umožňuje testovat různé způsoby načítání skriptů:{" "}
          <code className="inline-code">async</code>,{" "}
          <code className="inline-code">defer</code>,{" "}
          <code className="inline-code">sync</code> a{" "}
          <code className="inline-code">module</code>. Pomocí tlačítka níže lze
          přepínat mezi metodami a sledovat jejich vliv na metriky jako{" "}
          <strong>FCP</strong>, <strong>LCP</strong> a <strong>TBT</strong>.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Testování skriptů</h2>
        <p className="section-text">
          Aktuální metoda načítání skriptů: <strong>{scriptType}</strong>
        </p>
        <button onClick={handleScriptToggle} className="button -margin">
          Přepnout na{" "}
          {scriptType === "async"
            ? "defer"
            : scriptType === "defer"
            ? "sync"
            : scriptType === "sync"
            ? "module"
            : "async"}
        </button>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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

        <p className="section-text">
          <strong>Info:</strong> Pro tento test není{" "}
          <code className="inline-code">type="module"</code> relevantní, protože
          žádný skript nevyužívá importy/exporty. Moduly se přirozeně chovají
          jako defer, takže by v tomto scénáři neukázaly výrazný rozdíl.
        </p>

        <p className="section-text">
          Pozoruj, jak jednotlivé skripty reagují při přepínání mezi různými
          metodami načítání skriptů. Například <strong>defer</strong> zajistí,
          že se skripty vykonají ve správném pořadí, zatímco{" "}
          <strong>async</strong> je spustí nezávisle na sobě.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default ScriptLoadingTesting;
