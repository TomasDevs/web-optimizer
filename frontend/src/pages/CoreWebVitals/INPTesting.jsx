import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const InpTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOptimized = searchParams.get("inp") === "optimized";
  const [status, setStatus] = useState("Klikni na tlačítko pro test.");

  useEffect(() => {
    if (!searchParams.has("inp")) {
      setSearchParams({ inp: "unoptimized" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // Složitější výpočet: Fibonacci sekvence (rekurzivní)
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
      // Rozložení výpočtu pomocí setTimeout pro neblokování UI
      setTimeout(() => {
        const result = heavyComputation(40); // Vyšší číslo pro delší výpočet
        setStatus(`Výpočet dokončen: ${result}`);
      }, 0);
    } else {
      // Blokující výpočet bez zpětné vazby
      const result = heavyComputation(40);
      setStatus(`Výpočet dokončen: ${result}`);
    }
  };

  return (
    <section className="section-page">
      <h1 className="subpage-title">
        Testování Interaction to Next Paint (INP)
      </h1>

      <p className="section-text">
        Interaction to Next Paint (INP) měří dobu odezvy uživatelské interakce.
        Pokud stránka nereaguje ihned na kliknutí nebo jiné vstupy, může se
        jednat o problém s dlouhými výpočty nebo blokováním hlavního vlákna.
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
      <p className="section-text">
        Praktické příklady vysoké hodnoty INP zahrnují:
      </p>
      <ul className="section-text">
        <li>
          Přidání produktu do košíku, pokud backend nebo frontend není
          optimalizovaný.
        </li>
        <li>Odeslání formuláře s rozsáhlou validací na straně klienta.</li>
        <li>Velké animace, které blokují hlavní vlákno.</li>
        <li>Dynamické načítání obsahu při scrollování stránky.</li>
      </ul>

      <button onClick={handleInpToggle} className="button -margin">
        Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
        verzi
      </button>

      <section className="section-page">
        <h2 className="section-subtitle -small">Test interakce</h2>
        <p className="section-text">
          Kliknutím na tlačítko spustíte výpočet. Optimalizovaná verze zajistí
          okamžitou zpětnou vazbu, zatímco neoptimalizovaná verze bude blokovat
          UI.
        </p>
        <button onClick={handleClick} className="button -margin">
          Otestovat interakci
        </button>
        <div id="inp-test-output" className="status-text">
          {status}
        </div>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default InpTesting;
