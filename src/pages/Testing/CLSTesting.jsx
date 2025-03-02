import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import CreditGallery from "./utils/CreditGallery";

const CLSTesting = () => {
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
    <>
      <Helmet>
        <title>Testování CLS | Web Optimizer</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">
          Testování Cumulative Layout Shift (CLS)
        </h1>

        <p className="section-text">
          CLS měří vizuální stabilitu stránky během načítání. Pokud se prvky na
          stránce pohybují nebo posouvají, může to uživatele zmást a vést ke
          špatnému uživatelskému zážitku. Podle doporučení Googlu by hodnota CLS
          měla být nižší než <strong>0,1</strong>.
        </p>

        <button onClick={handleClsToggle} className="button -margin">
          Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
          verzi
        </button>

        <p className="status-text">
          Aktuální verze:{" "}
          <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>
        <p className="section-text">
          {isOptimized
            ? "Obrázky mají pevně definované rozměry, aby se zabránilo posunům layoutu."
            : "Obrázky nemají pevné rozměry, což může způsobit posuny layoutu."}
        </p>
        <div className="gallery__container">
          {Array.from({ length: 24 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.jpg`}
              width={isOptimized ? "800" : undefined}
              height={isOptimized ? "600" : undefined}
              alt={`Obrázek ${index + 1}`}
              className="gallery__item"
            />
          ))}
        </div>

        <CreditGallery source="Unsplash" link="https://unsplash.com" />
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Reklamy a externí obsah</h2>
        <p className="section-text">
          {isOptimized
            ? "Reklamní prostor je předem rezervován."
            : "Reklama se načítá dynamicky a způsobuje posuny."}
        </p>
        <div className="ad-placeholder">
          {isOptimized ? (
            <div style={{ width: "100%", height: "600px", background: "#ccc" }}>
              Rezervované místo pro reklamu
              <iframe
                src="https://osel.cz/"
                width="100%"
                height="600"
                title="Ukázková reklama"
                style={{ border: "none" }}
                loading="lazy"
              />
            </div>
          ) : (
            <iframe
              src="https://osel.cz/"
              width="100%"
              height="600"
              title="Ukázková reklama"
              style={{ border: "none" }}
            />
          )}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Načítání fontů</h2>
        <p className="section-text">
          {isOptimized
            ? "Fonty se načítají s 'font-display: swap', aby se zabránilo prázdným místům."
            : "Fonty se načítají bez optimalizace, což způsobuje FOUT (Flash of Unstyled Text)."}
        </p>
        <p
          style={{
            fontFamily: isOptimized ? "'CustomFont', sans-serif" : "sans-serif",
            fontSize: "24px",
          }}>
          Ukázkový text s různými způsoby načítání fontů.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Dynamický obsah</h2>
        <p className="section-text">
          {isOptimized
            ? "Obsah má předem rezervované místo, aby nedocházelo k posunům."
            : "Obsah se načítá dynamicky a může způsobit posuny layoutu."}
        </p>
        <div className="dynamic-content">
          {isOptimized ? (
            <div style={{ width: "100%", height: "100px", background: "#ddd" }}>
              Rezervované místo pro obsah
            </div>
          ) : (
            <p>Dynamický obsah se načítá...</p>
          )}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Rozdíly mezi verzemi</h2>
        <p className="section-text">
          Optimalizovaná verze má pevně definované rozměry prvků pro
          minimalizaci posunů. Používá optimalizované načítání fontů k eliminaci
          FOUT. Reklamy mají rezervované místo, aby se zabránilo posunům
          layoutu. Prostor pro dynamický obsah je předem stanoven pro plynulejší
          vykreslování stránky.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default CLSTesting;
