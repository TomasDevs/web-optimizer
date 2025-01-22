import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ImageSizeOptimization = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("size")) {
      setSearchParams({ size: "defined" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const size = searchParams.get("size") || "defined";

  const handleSizeToggle = () => {
    const newSize = size === "defined" ? "undefined" : "defined";
    setSearchParams({ size: newSize });
  };

  const sizeExamples = {
    defined: `<img src="/assets/images/image.jpg" width="800" height="600" alt="Obrázek s definovanými rozměry" />`,
    undefined: `<img src="/assets/images/image.jpg" alt="Obrázek bez definovaných rozměrů" />`,
  };

  const [showSizeExample, setShowSizeExample] = useState("defined");

  const handleExampleToggle = () => {
    setShowSizeExample(showSizeExample === "defined" ? "undefined" : "defined");
  };

  return (
    <section className="section-page">
      <h1 className="subpage-title">
        Optimalizace obrázků - Atributy šířky a výšky
      </h1>

      <p className="section-text">
        Testování vlivu atributů <code className="inline-code">width</code> a{" "}
        <code className="inline-code">height</code> na výkon webové stránky a
        metriky <strong>Core Web Vitals</strong>, zejména{" "}
        <strong>Cumulative Layout Shift (CLS)</strong>.
      </p>

      <section className="section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <button onClick={handleExampleToggle} className="button button -bottom">
          {showSizeExample === "defined"
            ? "Zobrazit bez rozměrů"
            : "Zobrazit s rozměry"}
        </button>
        <pre className="code-block">{sizeExamples[showSizeExample]}</pre>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Testování atributů</h2>
        <p className="section-text">
          Tato stránka umožňuje testovat obrázky s a bez definovaných rozměrů
          pomocí <strong>query parametrů</strong> v URL. Aktuálně podporované
          parametry jsou <code className="inline-code">size=defined</code> pro
          obrázky s pevnými rozměry a{" "}
          <code className="inline-code">size=undefined</code> pro obrázky bez
          rozměrů.
        </p>
        <p className="status-text">
          Aktuálně jsou obrázky{" "}
          <strong>
            {size === "defined"
              ? "s definovanými rozměry"
              : "bez definovaných rozměrů"}
          </strong>
          .
        </p>
        <button onClick={handleSizeToggle} className="button -margin">
          Přepnout na{" "}
          {size === "defined" ? "bez rozměrů" : "s definovanými rozměry"}
        </button>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>

      <section className="section-page gallery">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>

        <div className="gallery__container">
          {Array.from({ length: 6 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.jpg`}
              width={size === "defined" ? "800" : undefined}
              height={size === "defined" ? "600" : undefined}
              alt={`Obrázek ${index + 1} ${
                size === "defined" ? "s rozměry" : "bez rozměrů"
              }`}
              className="gallery__item"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ImageSizeOptimization;
