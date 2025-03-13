import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onCLS, onFCP, onLCP } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";

const FontOptimizationTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    cls: "Měření...",
    fcp: "Měření...",
    lcp: "Měření...",
  });

  // Zajištění, že parametr "fonts" je vždy přítomen v URL
  useEffect(() => {
    if (!searchParams.has("fonts")) {
      setSearchParams({ fonts: "local" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isGoogleFonts = searchParams.get("fonts") === "google";

  // Přepínání mezi lokálními fonty a Google Fonts
  const handleFontToggle = () => {
    setSearchParams({ fonts: isGoogleFonts ? "local" : "google" });
  };

  // Měření výkonnostních metrik
  useEffect(() => {
    let isMounted = true;

    const handleCLS = ({ value }) => {
      if (isMounted) setMetrics((prev) => ({ ...prev, cls: value.toFixed(3) }));
    };

    const handleFCP = ({ value }) => {
      if (isMounted) setMetrics((prev) => ({ ...prev, fcp: value.toFixed(0) }));
    };

    const handleLCP = ({ value }) => {
      if (isMounted) setMetrics((prev) => ({ ...prev, lcp: value.toFixed(0) }));
    };

    try {
      const unsubCLS = onCLS(handleCLS);
      const unsubFCP = onFCP(handleFCP);
      const unsubLCP = onLCP(handleLCP);

      return () => {
        isMounted = false;
        if (typeof unsubCLS === "function") unsubCLS();
        if (typeof unsubFCP === "function") unsubFCP();
        if (typeof unsubLCP === "function") unsubLCP();
      };
    } catch (error) {
      console.error("Chyba při měření metrik:", error);
    }
  }, [isGoogleFonts]);

  // Dynamické načítání fontů podle vybraného zdroje
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";

    if (isGoogleFonts) {
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto:wght@300;400;500;600;700&display=swap";
    } else {
      fontLink.href = "/assets/fonts/fonts.css";
    }

    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, [isGoogleFonts]);

  // Načtení testovacích dat (mock data) z JSONPlaceholder API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const result = await response.json();
        setData(result.slice(0, 10)); // Omezení dat na 50 položek
      } catch (error) {
        console.error("Error fetching mock data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Testování fontů | Web Optimizer</title>
      </Helmet>

      <div className="section-page">
        <h1 className="subpage-title">Testování fontů</h1>

        <div className="cls-monitor">
          <h2 className="section-subtitle -small">Výkonnostní metriky</h2>
          <div className="flex-gap">
            <div className="metric-item">
              <span>
                CLS: <strong>{metrics.cls}</strong>
              </span>
            </div>
            <div className="metric-item">
              <span>
                FCP: <strong>{metrics.fcp} ms</strong>
              </span>
            </div>
            <div className="metric-item">
              <span>
                LCP: <strong>{metrics.lcp} ms</strong>
              </span>
            </div>
          </div>
        </div>

        <p className="hints">
          Pro lepší výsledky testu doporučuji přepnout okno/kartu v prohlížeči a
          vrátit se zpět, případně mezi testy také aktualizovat stránku (F5).
        </p>
      </div>

      <div className="section-page">
        <p className="status-text">
          Aktuálně jsou fonty načítány z{" "}
          <strong>
            {isGoogleFonts ? "Google Fonts" : "lokálního úložiště"}
          </strong>
        </p>
        <button onClick={handleFontToggle} className="button -margin">
          {isGoogleFonts
            ? "Přepnout na lokální fonty"
            : "Přepnout na Google Fonts"}
        </button>
      </div>

      <div className="section-page">
        <h2 className="section-subtitle -small">Mock data</h2>
        <p className="section-text">
          Zde jsou zobrazeny mock data z veřejné API{" "}
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noreferrer"
            className="highlight-link">
            JSONPlaceholder
          </a>{" "}
          kvůli testování fontů o velikosti 50 položek.
        </p>

        {loading ? (
          <p>Načítání dat...</p>
        ) : (
          <div className="grid-container">
            {data.map((item) => (
              <div key={item.id} className="mock-item">
                <h3 className="mock-name">{item.name}</h3>
                <p className="mock-email">
                  <a href={`mailto:${item.email}`} className="highlight-link">
                    {item.email}
                  </a>
                </p>
                <p className="mock-description">{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <section className="section-page">
        <p className="section-text">
          Tato stránka umožňuje testovat načítání{" "}
          <strong>lokálních fontů</strong> oproti <strong>Google Fonts</strong>.
          Výchozí stav je <strong>lokální fonty</strong>, které se načítají
          přímo ze serveru.
        </p>
        <div className="info">
          <h3>O testování fontů</h3>
          <p>
            Lokální fonty jsou rychlejší, protože se načítají z vašeho serveru
            bez nutnosti dalšího DNS vyhledávání a navázání externího spojení.
            Google Fonts nabízí výhodu cachování napříč různými stránkami, ale
            mohou způsobit zpoždění při prvním načtení.
          </p>
          <p>Metriky, které se mění při načítání fontů:</p>
          <ul>
            <li>
              <strong>CLS</strong> - Dochází k posunu layoutu, když se načte
              jiný font než fallback
            </li>
            <li>
              <strong>FCP</strong> - První vykreslení textu může být zpožděno
              externími fonty
            </li>
            <li>
              <strong>LCP</strong> - Pokud je největším prvkem text, ovlivní i
              tuto metriku
            </li>
          </ul>
        </div>
        <TestPageSpeed />
      </section>
    </>
  );
};

export default FontOptimizationTesting;
