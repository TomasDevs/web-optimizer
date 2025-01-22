import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const LazyLoading = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("lazy")) {
      setSearchParams({ lazy: "true" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isLazyLoading = searchParams.get("lazy") === "true";

  const handleLazyLoadingToggle = () => {
    setSearchParams({ lazy: !isLazyLoading });
  };

  const lazyLoadingExample = `
    <img src="/assets/images/image1.jpg" loading="lazy" alt="Obrázek 1" />
    <img src="/assets/images/image2.jpg" loading="lazy" alt="Obrázek 2" />
    <img src="/assets/images/image3.jpg" loading="lazy" alt="Obrázek 3" />
  `;

  const eagerLoadingExample = `
    <img src="/assets/images/image1.jpg" loading="eager" alt="Obrázek 1" />
    <img src="/assets/images/image2.jpg" loading="eager" alt="Obrázek 2" />
    <img src="/assets/images/image3.jpg" loading="eager" alt="Obrázek 3" />
  `;

  const [showLazyCode, setShowLazyCode] = useState(true);

  return (
    <section className="section-page">
      <h1 className="subpage-title">Optimalizace obrázků - Lazy Loading</h1>

      <p className="section-text">
        Lazy loading odkládá načítání obrázků, dokud nejsou v zorném poli
        uživatele. Pomáhá zrychlit načítání stránky a šetří přenos dat.
      </p>

      <section className="section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <button
          onClick={() => setShowLazyCode(!showLazyCode)}
          className="button button -bottom">
          {showLazyCode ? "Zobrazit eager loading" : "Zobrazit lazy loading"}
        </button>
        <pre className="code-block">
          {showLazyCode ? lazyLoadingExample : eagerLoadingExample}
        </pre>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Testování lazy loading</h2>
        <p className="section-text">
          Stránka používá <strong>query parametry</strong> v URL pro přepínání
          lazy loadingu. Pokud je parametr{" "}
          <code className="inline-code">?lazy=true</code>, obrázky se načtou s
          lazy loadingem. Pro vypnutí lazy loadingu použijte{" "}
          <code className="inline-code">?lazy=false</code>.
        </p>
        <p className="status-text">
          Aktuálně je lazy loading{" "}
          <strong>{isLazyLoading ? "zapnutý" : "vypnutý"}</strong>.
        </p>
        <button onClick={handleLazyLoadingToggle} className="button -margin">
          {isLazyLoading ? "Vypnout Lazy Loading" : "Zapnout Lazy Loading"}
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
              src={`/assets/images/image${index + 1}.jpg`}
              loading={isLazyLoading ? "lazy" : "eager"}
              alt={`Obrázek ${index + 1}`}
              className="gallery__item"
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default LazyLoading;
