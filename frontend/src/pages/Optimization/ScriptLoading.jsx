import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ScriptLoading = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("script")) {
      setSearchParams({ script: "async" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const scriptType = searchParams.get("script");

  const handleScriptToggle = () => {
    const newType = scriptType === "async" ? "defer" : "async";
    setSearchParams({ script: newType });
  };

  const scriptExampleAsync = `
    <script async src="/assets/scripts/demo-script.js"></script>
  `;

  const scriptExampleDefer = `
    <script defer src="/assets/scripts/demo-script.js"></script>
  `;

  const [showAsyncCode, setShowAsyncCode] = useState(true);

  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "/assets/scripts/heavy-script.js";
    scriptElement.async = scriptType === "async";
    scriptElement.defer = scriptType === "defer";
    scriptElement.id = "test-script";
    document.body.appendChild(scriptElement);

    return () => {
      const existingScript = document.getElementById("test-script");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [scriptType]);

  return (
    <section className="section-page">
      <h1 className="subpage-title">Optimalizace načítání skriptů</h1>

      <p className="section-text">
        Použití atributů <strong>async</strong> a <strong>defer</strong> při
        načítání skriptů může ovlivnit výkon a chování stránky.
      </p>

      <section className="section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <button
          onClick={() => setShowAsyncCode(!showAsyncCode)}
          className="button button -bottom">
          {showAsyncCode ? "Zobrazit defer" : "Zobrazit async"}
        </button>
        <pre className="code-block">
          {showAsyncCode ? scriptExampleAsync : scriptExampleDefer}
        </pre>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Testování načítání skriptů</h2>
        <p className="section-text">
          Stránka používá <strong>query parametry</strong> v URL pro přepínání
          mezi async a defer. Pokud je parametr{" "}
          <code className="inline-code">?script=async</code>, skript se načte
          asynchronně. Pro defer použijte{" "}
          <code className="inline-code">?script=defer</code>.
        </p>
        <p className="status-text">
          Aktuálně je načítání skriptů: <strong>{scriptType}</strong>.
        </p>
        <button onClick={handleScriptToggle} className="button -margin">
          Přepnout na {scriptType === "async" ? "defer" : "async"}
        </button>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Výsledek skriptu</h2>
        <div id="script-test-output" className="status-text">
          Skript čeká na načtení...
        </div>

        <button id="script-test-button" className="button -margin">
          Restartovat výpočet
        </button>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default ScriptLoading;
