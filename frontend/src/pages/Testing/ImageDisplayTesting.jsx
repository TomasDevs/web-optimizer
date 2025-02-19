import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const ImageDisplayTesting = () => {
  const pageTitle = "Testování zobrazení obrázků | Web Optimizer";

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("display")) {
      setSearchParams({ display: "img" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const displayMethod = searchParams.get("display") || "img";

  const handleDisplayToggle = () => {
    const newDisplay = displayMethod === "img" ? "css" : "img";
    setSearchParams({ display: newDisplay });
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Porovnání zobrazení obrázků</h1>

        <p className="section-text">
          Tato stránka porovnává dvě metody zobrazení obrázků: pomocí{" "}
          <code className="inline-code">img</code> tagu s atributy rozměrů a
          lazy loadingem, a pomocí{" "}
          <code className="inline-code">background-image</code> v CSS, kde je
          použit <code className="inline-code">aspect-ratio</code> pro správný
          poměr stran. Všechny obrázky jsou ve formátu JPG.
        </p>

        <p className="section-text">
          Sledujte metriky jako <strong>LCP</strong> (rychlost načtení
          největšího prvku), <strong>CLS</strong> (vizuální posuny),{" "}
          <strong>FCP</strong> (první zobrazený obsah) a{" "}
          <strong>velikost přenesených dat</strong>.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Testování metod zobrazení</h2>
        <p className="section-text">
          Stránka používá <strong>query parametry</strong> v URL pro přepínání
          metod zobrazení obrázků. Použijte{" "}
          <code className="inline-code">?display=img</code> pro HTML obrázky
          nebo <code className="inline-code">?display=css</code> pro obrázky v
          CSS.
        </p>
        <p className="status-text">
          Aktuální metoda zobrazení:{" "}
          <strong>
            {displayMethod === "img" ? "IMG tag" : "CSS background"}
          </strong>
        </p>
        <button onClick={handleDisplayToggle} className="button -margin">
          Přepnout na {displayMethod === "img" ? "CSS background" : "IMG tag"}
        </button>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page gallery">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>

        <div
          className={`gallery__container ${
            displayMethod === "css" ? "css-background" : ""
          }`}>
          {Array.from({ length: 24 }, (_, index) =>
            displayMethod === "img" ? (
              <img
                key={index}
                src={`/assets/images/image${index + 1}.jpg`}
                loading="lazy"
                width={800}
                height={600}
                alt={`Obrázek ${index + 1}`}
                className="gallery__item"
              />
            ) : (
              <div key={index} className="gallery__item bg-image"></div>
            )
          )}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default ImageDisplayTesting;
