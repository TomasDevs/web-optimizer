import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ImageOptimizationTesting = () => {
  const pageTitle = "Testování optimalizace obrázků | Web Optimizer";

  const [searchParams, setSearchParams] = useSearchParams();

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

  const handleFormatToggle = () => {
    const newFormat =
      format === "jpg" ? "webp" : format === "webp" ? "avif" : "jpg";
    setSearchParams({
      format: newFormat,
      lazy: isLazy,
      attributes: showAttributes,
    });
  };

  const handleLazyToggle = () => {
    setSearchParams({ format, lazy: !isLazy, attributes: showAttributes });
  };

  const handleAttributesToggle = () => {
    setSearchParams({ format, lazy: isLazy, attributes: !showAttributes });
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování optimalizace obrázků</h1>

        <p className="section-text">
          Tato stránka umožňuje testovat různé techniky optimalizace obrázků,
          včetně změny formátů, použití lazy loadingu a nastavení atributů{" "}
          <code className="inline-code">width</code> a{" "}
          <code className="inline-code">height</code>.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Formáty obrázků</h2>
        <p className="section-text">
          Pro testování změny formátů přepínejte mezi{" "}
          <code className="inline-code">JPG</code>,{" "}
          <code className="inline-code">WebP</code> a{" "}
          <code className="inline-code">AVIF</code>. Aktuální formát:{" "}
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Lazy Loading</h2>
        <p className="section-text">
          Lazy loading odkládá načítání obrázků, dokud nejsou ve viditelné části
          obrazovky. Aktuálně je lazy loading{" "}
          <strong>{isLazy ? "zapnutý" : "vypnutý"}</strong>.
        </p>
        <button onClick={handleLazyToggle} className="button -margin">
          {isLazy ? "Vypnout Lazy Loading" : "Zapnout Lazy Loading"}
        </button>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Atributy obrázků</h2>
        <p className="section-text">
          Přidání atributů <code className="inline-code">width</code> a{" "}
          <code className="inline-code">height</code> zajišťuje stabilitu
          layoutu a zabraňuje posunům obsahu (CLS). Aktuálně je přidání atributů{" "}
          <strong>{showAttributes ? "zapnuté" : "vypnuté"}</strong>.
        </p>
        <button onClick={handleAttributesToggle} className="button -margin">
          {showAttributes ? "Vypnout atributy" : "Zapnout atributy"}
        </button>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page gallery">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>
        <div className="gallery__container">
          {Array.from({ length: 24 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.${format}`}
              alt={`Obrázek ${index + 1} ve formátu ${format.toUpperCase()}`}
              className="gallery__item"
              loading={isLazy ? "lazy" : "eager"}
              width={showAttributes ? "800" : undefined}
              height={showAttributes ? "600" : undefined}
            />
          ))}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default ImageOptimizationTesting;
