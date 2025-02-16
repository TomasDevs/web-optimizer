import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const CodeMinificationTesting = () => {
  const pageTitle = "Testování minifikace kódu | Web Optimizer";
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("minified")) {
      setSearchParams({ minified: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isMinified = searchParams.get("minified") === "true";

  const handleToggleMinification = () => {
    const newUrl = isMinified ? "?minified=false" : "?minified=true";
    window.location.search = newUrl;
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <link
          rel="stylesheet"
          href={isMinified ? "/minified/index.css" : "/unminified/index.css"}
        />
        <script
          type="module"
          src={isMinified ? "/minified/index.js" : "/unminified/index.js"}
        />
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování minifikace kódu</h1>
        <p className="section-text">
          Stránka používá <strong>query parametry</strong> v URL pro přepínání
          minifikace kódu. Pokud je parametr{" "}
          <code className="inline-code">?minified=true</code>, načte se
          minifikovaná verze. Pro zobrazení neminifikované verze použijte{" "}
          <code className="inline-code">?minified=false</code>.
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default CodeMinificationTesting;
