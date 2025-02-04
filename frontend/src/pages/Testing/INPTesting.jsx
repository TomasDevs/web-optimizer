import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const InpTesting = () => {
  const pageTitle = "Testování INP | Web Optimizer";
  const [searchParams, setSearchParams] = useSearchParams();
  const isOptimized = searchParams.get("inp") === "optimized";
  const [status, setStatus] = useState("Klikni na tlačítko pro test.");

  useEffect(() => {
    if (!searchParams.has("inp")) {
      setSearchParams({ inp: "unoptimized" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const heavyComputation = (num) => {
    if (num <= 1) return num;
    return heavyComputation(num - 1) + heavyComputation(num - 2);
  };

  const handleInpToggle = () => {
    setSearchParams({ inp: isOptimized ? "unoptimized" : "optimized" });
  };

  const handleClick = () => {
    setStatus("Skript probíhá...");

    if (isOptimized) {
      setTimeout(() => {
        const result = heavyComputation(40);
        setStatus(`Výpočet dokončen: ${result}`);
      }, 0);
    } else {
      const result = heavyComputation(40);
      setStatus(`Výpočet dokončen: ${result}`);
    }
  };

  return (
    <section className="section-page">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <h1 className="subpage-title">
        Testování Interaction to Next Paint (INP)
      </h1>

      <p className="section-text">
        Interaction to Next Paint (INP) měří dobu odezvy na uživatelskou
        interakci. Přepni mezi optimalizovanou a neoptimalizovanou verzí a
        sleduj vliv na responzivitu stránky.
      </p>
      <p className="section-text">
        V tomto testu provádíme výpočet Fibonacciho sekvence pomocí rekurzivního
        algoritmu. Fibonacciho sekvence je řada čísel, kde každé číslo je
        součtem dvou předchozích.
      </p>
      <pre className="code-block">
        {`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
      </pre>
      <p className="section-text">
        Optimalizovaná verze používá funkci <code>setTimeout</code>, která
        umožňuje UI reagovat na uživatelské akce okamžitě, zatímco
        neoptimalizovaná verze blokuje hlavní vlákno.
      </p>

      <button onClick={handleInpToggle} className="button -bottom">
        Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
        verzi
      </button>

      <p className="status-text">
        Aktuální verze:{" "}
        <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
      </p>

      <section className="section">
        <h2 className="section-subtitle -small">Test interakce</h2>
        <p className="section-text">
          Kliknutím na tlačítko spustíte výpočet. Optimalizovaná verze rozkládá
          výpočet, zatímco neoptimalizovaná verze blokuje UI.
        </p>
        <button onClick={handleClick} className="button -margin">
          Otestovat interakci
        </button>
        <div id="inp-test-output" className="status-text">
          {status}
        </div>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Rozdíly mezi verzemi</h2>
        <p className="section-text">
          Optimalizovaná verze používá asynchronní zpracování pomocí setTimeout.
          Neoptimalizovaná verze blokuje hlavní vlákno a snižuje responzivitu. V
          optimalizované verzi se během výpočtu zobrazí zpráva "Skript
          probíhá...", což umožňuje UI reagovat na další akce. Optimální
          kódování zahrnuje asynchronní přístupy ke zpracování úloh.
        </p>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default InpTesting;
