import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onINP } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";

const InpTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTest, setActiveTest] = useState("fibonacci");

  // Při prvním načtení stránky nastavíme parametr "optimized" na false
  useEffect(() => {
    if (!searchParams.has("optimized")) {
      setSearchParams({ optimized: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isOptimized = searchParams.get("optimized") === "true";

  const handleInpToggle = () => {
    setSearchParams({ optimized: !isOptimized ? "true" : "false" });
  };

  const switchTest = (testName) => {
    setActiveTest(testName);
  };

  return (
    <>
      <Helmet>
        <title>Testování INP | Web Optimizer</title>
      </Helmet>

      <section className="section-page">
        <h1 className="subpage-title">
          Testování Interaction to Next Paint (INP)
        </h1>

        <p className="section-text">
          Interaction to Next Paint (INP) měří dobu odezvy na uživatelskou
          interakci. Dobrá hodnota INP je <strong>pod 200 ms</strong>, zatímco
          hodnota <strong>nad 500 ms</strong> je považována za špatnou.
        </p>

        <button onClick={handleInpToggle} className="button -bottom">
          Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
          verzi
        </button>

        <p className="status-text">
          Aktuální verze:{" "}
          <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
        </p>
      </section>

      <section className="section-page">
        <div className="tabs">
          <button
            className={`tabs__item ${
              activeTest === "fibonacci" ? "tabs__item--active" : ""
            }`}
            onClick={() => switchTest("fibonacci")}>
            Test Fibonacci
          </button>
          <button
            className={`tabs__item ${
              activeTest === "form" ? "tabs__item--active" : ""
            }`}
            onClick={() => switchTest("form")}>
            Test Formuláře
          </button>
        </div>

        {activeTest === "fibonacci" && (
          <FibonacciTest isOptimized={isOptimized} />
        )}

        {activeTest === "form" && <FormTest isOptimized={isOptimized} />}
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Rozdíly mezi verzemi</h2>
        <p className="section-text">
          <strong>Optimalizovaná verze:</strong> Používá asynchronní zpracování
          pomocí <code>setTimeout</code>, které přesouvá náročný výpočet mimo
          hlavní vlákno. To zajišťuje, že uživatelské rozhraní zůstane
          responzivní i během náročných operací. Uživatel vidí okamžitou zpětnou
          vazbu a může dále pracovat se stránkou.
        </p>
        <p className="section-text">
          <strong>Neoptimalizovaná verze:</strong> Provádí náročný výpočet přímo
          v hlavním vlákně JavaScriptu, což způsobuje jeho blokování. Během
          výpočtu uživatel nemůže provádět žádné další interakce, protože
          prohlížeč je zaneprázdněn zpracováním výpočtu. To vede k znatelným
          prodlevám a zhoršení uživatelského zážitku.
        </p>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

const FibonacciTest = ({ isOptimized }) => {
  const [status, setStatus] = useState("Klikni na tlačítko pro test.");
  const [inpValue, setInpValue] = useState("Čekání na interakci...");

  // Náročný výpočet Fibonacciho sekvence
  const heavyComputation = (num) => {
    if (num <= 1) return num;
    return heavyComputation(num - 1) + heavyComputation(num - 2);
  };

  // Spuštění výpočtu s blokováním UI (neoptimalizovaná verze) nebo bez něj (optimalizovaná)
  const handleClick = () => {
    const interactionStartTime = performance.now();
    setStatus("Skript probíhá...");

    if (isOptimized) {
      // Optimalizovaná verze - měříme čas k aktualizaci UI
      const paintTime = performance.now();
      const initialPaintDuration = paintTime - interactionStartTime;

      setInpValue(`${initialPaintDuration.toFixed(2)} ms`);

      setTimeout(() => {
        const result = heavyComputation(42);
        setStatus(`Výpočet dokončen: ${result}`);
      }, 0);
    } else {
      // Neoptimalizovaná verze - měříme celkový čas blokování UI
      const startTime = performance.now();

      const result = heavyComputation(42);

      const endTime = performance.now();
      const duration = endTime - startTime;

      setInpValue(`${duration.toFixed(2)} ms`);

      setStatus(`Výpočet dokončen: Fibonacci(42)=${result}`);
    }
  };

  return (
    <div className="inp-test__content">
      <h2 className="section-subtitle -small">Test výpočtu Fibonacci</h2>
      <p className="section-text">
        V tomto testu provádíme extrémně náročný výpočet Fibonacciho sekvence
        pomocí rekurzivního algoritmu. Neoptimalizovaná verze navíc přidává
        další zbytečné výpočty pro demonstraci blokace UI.
      </p>
      <pre className="code-block">
        {`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
      </pre>

      <div className="inp-test__actions">
        <button onClick={handleClick} className="button -margin">
          Otestovat interakci
        </button>
        <div id="inp-test-output" className="status-text">
          {status}
        </div>
      </div>

      <div className="inp-test__result">
        <h3 className="section-subtitle -small">Výsledek INP</h3>
        <p className="section-text">
          Hodnota INP se aktualizuje ihned po uživatelské interakci. U
          optimalizované verze měříme čas k prvnímu vykreslení, zatímco u
          neoptimalizované měříme celkový čas výpočtu.
        </p>
        <p className="status-text">
          <strong>Hodnota INP:</strong> {inpValue}
        </p>
      </div>
    </div>
  );
};

const FormTest = ({ isOptimized }) => {
  const [status, setStatus] = useState(
    "Vyplňte formulář a klikněte na tlačítko odeslat."
  );
  const [inpValue, setInpValue] = useState("Čekání na interakci...");
  const [formData, setFormData] = useState({
    jmeno: "Testovací Uživatel",
    email: "test@example.com",
    zprava: "Toto je testovací zpráva pro simulaci odeslání formuláře.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Náročná validace formuláře pro demonstraci
  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Základní validace
    if (formData.jmeno.length < 3) {
      isValid = false;
      errors.jmeno = "Jméno musí být delší než 2 znaky";
    }

    if (!formData.email.includes("@")) {
      isValid = false;
      errors.email = "Neplatný email";
    }

    if (formData.zprava.length < 5) {
      isValid = false;
      errors.zprava = "Zpráva musí být delší než 5 znaků";
    }

    // Simulace náročné validace
    const heavyValidation = () => {
      let result = 0;
      for (let i = 0; i < 50000000; i++) {
        result += Math.sin(i) * Math.cos(i);
        if (i % 5000000 === 0) {
          document.body.offsetHeight;
        }
      }
      return result;
    };

    const validationResult = heavyValidation();

    return { isValid, errors, validationResult };
  };

  // Odeslání formuláře
  const handleSubmit = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    setStatus("Validace a odesílání formuláře...");

    if (isOptimized) {
      // Optimalizovaná verze - okamžitá odezva UI
      const uiUpdateTime = performance.now();
      const initialPaintDuration = uiUpdateTime - startTime;

      setInpValue(`${initialPaintDuration.toFixed(2)} ms`);

      setTimeout(() => {
        const { isValid, errors } = validateForm();

        if (isValid) {
          setStatus(`Formulář úspěšně odeslán!`);
        } else {
          setStatus(
            `Formulář obsahuje chyby: ${Object.values(errors).join(", ")}`
          );
        }
      }, 0);
    } else {
      // Neoptimalizovaná verze - validace blokuje UI
      const { isValid, errors } = validateForm();

      const endTime = performance.now();
      const duration = endTime - startTime;

      setInpValue(`${duration.toFixed(2)} ms`);

      if (isValid) {
        setStatus(`Formulář úspěšně odeslán!`);
      } else {
        setStatus(
          `Formulář obsahuje chyby: ${Object.values(errors).join(", ")}`
        );
      }
    }
  };

  return (
    <div className="inp-test__content">
      <h2 className="section-subtitle -small">Test odesílání formuláře</h2>
      <p className="section-text">
        Tento test simuluje situaci, kdy při odeslání formuláře probíhá extrémně
        náročná validace dat. Optimalizovaná verze provádí validaci mimo hlavní
        vlákno, zatímco neoptimalizovaná verze blokuje hlavní vlákno po několik
        sekund.
      </p>

      <form className="inp-test__form" onSubmit={handleSubmit}>
        <div className="inp-test__form-group">
          <label htmlFor="jmeno">Jméno</label>
          <input
            type="text"
            id="jmeno"
            name="jmeno"
            value={formData.jmeno}
            onChange={handleInputChange}
          />
        </div>

        <div className="inp-test__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="inp-test__form-group">
          <label htmlFor="zprava">Zpráva</label>
          <textarea
            id="zprava"
            name="zprava"
            value={formData.zprava}
            onChange={handleInputChange}
            rows="4"></textarea>
        </div>

        <button type="submit" className="button -margin">
          Odeslat formulář
        </button>
      </form>

      <div className="status-text">{status}</div>

      <div className="inp-test__result">
        <h3 className="section-subtitle -small">Výsledek INP</h3>
        <p className="section-text">
          Hodnota INP se aktualizuje ihned po uživatelské interakci. U
          optimalizované verze měříme čas k prvnímu vykreslení, zatímco u
          neoptimalizované měříme celkový čas validace.
        </p>
        <p className="status-text">
          <strong>Hodnota INP:</strong> {inpValue}
        </p>
      </div>
    </div>
  );
};

export default InpTesting;
