import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Link } from "react-router-dom";

const CodeMinificationTesting = () => {
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
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování: Minifikace kódu</h1>
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
    </>
  );
};

export default CodeMinificationTesting;
