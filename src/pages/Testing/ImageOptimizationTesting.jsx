import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onCLS } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";

const ImageOptimizationTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clsValue, setClsValue] = useState("Měření...");

  // Zajištění, že parametry "format", "lazy" a "attributes" jsou vždy přítomné v URL
  useEffect(() => {
    if (!searchParams.has("format")) {
      setSearchParams(
        { format: "jpg", lazy: "true", attributes: "true" },
        { replace: true }
      );
    }
  }, [searchParams, setSearchParams]);

  const format = searchParams.get("format") || "jpg";
  const isLazy = searchParams.get("lazy") === "true";
  const showAttributes = searchParams.get("attributes") === "true";

  // Měření CLS pomocí web-vitals
  useEffect(() => {
    let isMounted = true;

    const reportCLS = ({ value }) => {
      if (isMounted) {
        setClsValue(`${value.toFixed(3)}`);
      }
    };

    // Registrujeme listener pro měření CLS
    const unsubscribe = onCLS(reportCLS);

    return () => {
      isMounted = false;
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, [format, isLazy, showAttributes]);

  // Přepnutí mezi formáty obrázků (JPG, WebP, AVIF)
  const handleFormatToggle = () => {
    const newFormat =
      format === "jpg" ? "webp" : format === "webp" ? "avif" : "jpg";
    setSearchParams({
      format: newFormat,
      lazy: isLazy,
      attributes: showAttributes,
    });
  };

  // Přepnutí lazy loadingu obrázků
  const handleLazyToggle = () => {
    setSearchParams({ format, lazy: !isLazy, attributes: showAttributes });
  };

  // Přepnutí přidání atributů width/height pro prevenci CLS
  const handleAttributesToggle = () => {
    setSearchParams({ format, lazy: isLazy, attributes: !showAttributes });
  };

  return (
    <>
      <Helmet>
        <title>Testování optimalizace obrázků | Web Optimizer</title>
      </Helmet>

      <div className="section-page">
        <h1 className="subpage-title">Testování optimalizace obrázků</h1>

        <div className="cls-monitor">
          <h2>CLS hodnota (Cumulative Layout Shift)</h2>
          <div
            className={`cls-value ${
              parseFloat(clsValue) > 0.1 && clsValue !== "Měření..."
                ? "cls-value--bad"
                : parseFloat(clsValue) <= 0.1 && clsValue !== "Měření..."
                ? "cls-value--good"
                : ""
            }`}>
            <span className="cls-value__number">{clsValue}</span>
            {clsValue !== "Měření..." && (
              <span className="cls-value__label">
                {parseFloat(clsValue) <= 0.1
                  ? "Dobrá hodnota"
                  : "Špatná hodnota"}
              </span>
            )}
          </div>
        </div>

        <div className="flex-gap">
          <button onClick={handleFormatToggle} className="button -margin">
            Formát: {format.toUpperCase()}
          </button>
          <button onClick={handleLazyToggle} className="button -margin">
            Lazy Loading: {isLazy ? "Zapnuto" : "Vypnuto"}
          </button>
          <button onClick={handleAttributesToggle} className="button -margin">
            Atributy: {showAttributes ? "Zapnuto" : "Vypnuto"}
          </button>
        </div>

        <p className="hints">
          Pro lepší výsledky testu doporučuji přepnout okno/kartu v prohlížeči a
          vrátit se zpět, případně mezi testy také aktualizovat stránku (F5).
          Pomůže to změřit CLS přesněji při opětovném načtení stránky.
        </p>
      </div>

      <div className="gallery section-page">
        <div className="gallery__container">
          {Array.from({ length: 15 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.${format}`}
              loading={isLazy ? "lazy" : "eager"}
              width={showAttributes ? "300" : undefined}
              height={showAttributes ? "200" : undefined}
              alt={`Obrázek ${index + 1}`}
              className="gallery__item"
            />
          ))}
        </div>
      </div>

      <FadeInOnScroll className="section-page">
        <div className="info">
          <h3>O testování optimalizace obrázků</h3>
          <p>
            Na této stránce můžete přepínat mezi různými formáty obrázků (JPG,
            WebP, AVIF), zapínat/vypínat lazy loading a testovat vliv atributů
            width a height na stabilitu layoutu (CLS). Optimalizace obrázků je
            klíčovým faktorem pro rychlost načítání stránek a uživatelský
            zážitek.
          </p>
        </div>
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default ImageOptimizationTesting;
