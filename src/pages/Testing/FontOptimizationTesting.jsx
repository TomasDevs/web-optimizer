import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import { Helmet } from "react-helmet";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";

const FontOptimizationTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchParams.has("fonts")) {
      setSearchParams({ fonts: "local" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isGoogleFonts = searchParams.get("fonts") === "google";

  const handleFontToggle = () => {
    setSearchParams({ fonts: isGoogleFonts ? "local" : "google" });
  };

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

  // Fetch data from JSONPlaceholder
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const result = await response.json();
        setData(result.slice(0, 50));
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

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování fontů</h1>

        <p className="section-text">
          Tato stránka umožňuje testovat načítání{" "}
          <strong>lokálních fontů</strong> oproti <strong>Google Fonts</strong>.
          Výchozí stav je <strong>lokální fonty</strong>, které se načítají
          přímo ze serveru.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Testování fontů</h2>
        <p className="section-text">
          Stránka využívá <strong>query parametry</strong> pro přepínání mezi
          fonty. Pokud je v URL{" "}
          <code className="inline-code">?fonts=local</code>, načtou se lokální
          fonty. Pokud je parametr{" "}
          <code className="inline-code">?fonts=google</code>, načtou se Google
          Fonts.
        </p>
        <p className="status-text">
          Aktuálně jsou fonty načítány z{" "}
          <strong>
            {isGoogleFonts ? "Google Fonts" : "lokálního úložiště"}
          </strong>
          .
        </p>
        <button onClick={handleFontToggle} className="button -margin">
          {isGoogleFonts
            ? "Přepnout na lokální fonty"
            : "Přepnout na Google Fonts"}
        </button>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default FontOptimizationTesting;
