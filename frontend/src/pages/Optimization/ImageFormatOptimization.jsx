import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ImageFormatOptimization = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("format")) {
      setSearchParams({ format: "jpg" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const format = searchParams.get("format") || "jpg";

  const handleFormatToggle = () => {
    const newFormat =
      format === "jpg" ? "webp" : format === "webp" ? "avif" : "jpg";
    setSearchParams({ format: newFormat });
  };

  const formatExamples = {
    jpg: `<img src="/assets/images/image.jpg" alt="Obrázek ve formátu JPG" />`,
    webp: `<img src="/assets/images/image.webp" alt="Obrázek ve formátu WebP" />`,
    avif: `<img src="/assets/images/image.avif" alt="Obrázek ve formátu AVIF" />`,
  };

  const [showFormatExample, setShowFormatExample] = useState("jpg");

  const handleExampleToggle = () => {
    const nextExample =
      showFormatExample === "jpg"
        ? "webp"
        : showFormatExample === "webp"
        ? "avif"
        : "jpg";
    setShowFormatExample(nextExample);
  };

  return (
    <section className="section-page">
      <h1 className="subpage-title">Optimalizace obrázků - Formáty</h1>

      <p className="section-text">
        Porovnej rozdíly mezi formáty obrázků JPG, WebP a AVIF. WebP a AVIF
        nabízejí lepší kompresi a kvalitu než tradiční formát JPG.
      </p>

      <section className="section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <button onClick={handleExampleToggle} className="button button -bottom">
          {showFormatExample === "jpg"
            ? "Zobrazit WebP"
            : showFormatExample === "webp"
            ? "Zobrazit AVIF"
            : "Zobrazit JPG"}
        </button>
        <pre className="code-block">{formatExamples[showFormatExample]}</pre>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Testování formátů</h2>
        <p className="section-text">
          Tato stránka umožňuje testovat různé formáty obrázků pomocí{" "}
          <strong>query parametrů</strong> v URL. Aktuálně podporované formáty
          jsou <code className="inline-code">jpg</code>,{" "}
          <code className="inline-code">webp</code> a{" "}
          <code className="inline-code">avif</code>. <br />
          Pro načtení obrázků v určitém formátu přidejte do URL parametr{" "}
          <code className="inline-code">?format=webp</code> pro WebP,{" "}
          <code className="inline-code">?format=avif</code> pro AVIF nebo{" "}
          <code className="inline-code">?format=jpg</code> pro JPG.
        </p>
        <p className="status-text">
          Aktuálně jsou obrázky ve formátu{" "}
          <strong>{format.toUpperCase()}</strong>.
        </p>
        <button onClick={handleFormatToggle} className="button -margin">
          Přepnout na{" "}
          {format.toUpperCase() === "JPG"
            ? "WebP"
            : format.toUpperCase() === "WEBP"
            ? "AVIF"
            : "JPG"}
        </button>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>

      <section className="section-page gallery">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>

        <div className="gallery__container">
          {Array.from({ length: 10 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.${format}`}
              alt={`Obrázek ${index + 1} ve formátu ${format.toUpperCase()}`}
              className="gallery__item"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ImageFormatOptimization;
