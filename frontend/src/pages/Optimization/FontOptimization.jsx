import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const FontOptimization = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
        "https://fonts.googleapis.com/css2?family=Roboto&family=Fira+Code:wght@300;400;500;600;700;900&display=swap";
    } else {
      fontLink.href = "/assets/fonts/fonts.css";
    }

    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, [isGoogleFonts]);

  const googleFontsExample = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Fira+Code:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
  `;

  const localFontsExample = `
    <link rel="stylesheet" href="/assets/fonts/fonts.css" />
  `;

  const [showFontExample, setShowFontExample] = useState(false);

  return (
    <section className="section-page">
      <h1 className="subpage-title">Optimalizace fontů</h1>

      <p className="section-text">
        Tato stránka umožňuje testovat načítání <strong>lokálních fontů</strong>{" "}
        oproti <strong>Google Fonts</strong>. <br />
        Výchozí stav je <strong>lokální fonty</strong>, které se načítají přímo
        ze serveru, což zajišťuje lepší výkon a kontrolu.
      </p>

      <section className="section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <button
          onClick={() => setShowFontExample(!showFontExample)}
          className="button button -bottom">
          {showFontExample ? "Zobrazit Google Fonts" : "Zobrazit lokální fonty"}
        </button>
        <pre className="code-block">
          {showFontExample ? localFontsExample : googleFontsExample}
        </pre>
      </section>

      <section className="section-page">
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
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default FontOptimization;
