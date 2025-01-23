import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ClsTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOptimized = searchParams.get("cls") === "optimized";

  useEffect(() => {
    if (!searchParams.has("cls")) {
      setSearchParams({ cls: "unoptimized" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleClsToggle = () => {
    setSearchParams({ cls: isOptimized ? "unoptimized" : "optimized" });
  };

  return (
    <section className="section-page">
      <h1 className="subpage-title">Testování Cumulative Layout Shift (CLS)</h1>

      <p className="section-text">
        Testovací stránka s možností přepínání mezi optimalizovanou a
        neoptimalizovanou verzí. Změň verzi a sleduj metriky v nástrojích jako
        Lighthouse.
      </p>

      <button onClick={handleClsToggle} className="button -margin">
        Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
        verzi
      </button>

      <section className="section-page">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>
        <p className="section-text">
          {isOptimized
            ? "Obrázky mají pevně definované rozměry pro prevenci CLS."
            : "Obrázky nemají definované rozměry, což může způsobit posuny layoutu."}
        </p>
        <div className="gallery__container">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.jpg`}
              width={isOptimized ? "800" : undefined}
              height={isOptimized ? "600" : undefined}
              alt={`Obrázek ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Reklama</h2>
        <p className="section-text">
          {isOptimized
            ? "Reklama má rezervovaný prostor."
            : "Reklama se načítá později a způsobuje posun layoutu."}
        </p>
        <div className="ad-placeholder">
          {isOptimized ? (
            <div style={{ width: "728px", height: "90px", background: "#ccc" }}>
              Reklama
            </div>
          ) : (
            <iframe
              src="https://via.placeholder.com/728x90"
              title="Reklama"></iframe>
          )}
        </div>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Načítání fontů</h2>
        <p className="section-text">
          {isOptimized
            ? "Fonty se načítají pomocí font-display: swap."
            : "Bez rezervovaného místa, což způsobuje FOUT/FOIT."}
        </p>
        <p
          style={{
            fontFamily: isOptimized ? "'CustomFont', sans-serif" : "sans-serif",
            fontSize: "24px",
          }}>
          Toto je ukázkový text.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Dynamický obsah</h2>
        <p className="section-text">
          {isOptimized
            ? "Obsah má předem rezervované místo."
            : "Obsah se načte později a způsobí posun layoutu."}
        </p>
        <div className="dynamic-content">
          {isOptimized ? (
            <div style={{ width: "100%", height: "100px", background: "#ddd" }}>
              Předem rezervované místo pro obsah
            </div>
          ) : (
            <p>Zde se načítá dynamický obsah...</p>
          )}
        </div>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default ClsTesting;
