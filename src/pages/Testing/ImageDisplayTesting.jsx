import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onCLS } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import CreditGallery from "./utils/CreditGallery";

const ImageDisplayTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clsValue, setClsValue] = useState("Měření...");

  // Zajištění, že parametr "display" je vždy přítomen v URL
  useEffect(() => {
    if (!searchParams.has("display")) {
      setSearchParams({ display: "img" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const displayMethod = searchParams.get("display") || "img";

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
  }, [displayMethod]);

  // Přepnutí mezi metodami zobrazení obrázků (IMG tag vs. CSS background)
  const handleDisplayToggle = () => {
    const newDisplay = displayMethod === "img" ? "css" : "img";
    setSearchParams({ display: newDisplay });
  };

  return (
    <>
      <Helmet>
        <title>Testování zobrazení obrázků | Web Optimizer</title>
      </Helmet>

      <div className="section-page">
        <h1 className="subpage-title">Porovnání zobrazení obrázků</h1>

        <div className="cls-monitor">
          <h2 className="section-subtitle -small">
            CLS hodnota (Cumulative Layout Shift)
          </h2>
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

        <p className="hints">
          Pro lepší výsledky testu doporučuji přepnout okno/kartu v prohlížeči a
          vrátit se zpět, případně mezi testy také aktualizovat stránku (F5).
          Pomůže to změřit CLS přesněji při opětovném načtení stránky.
        </p>
      </div>

      <div className="section-page">
        <p className="status-text">
          Aktuální metoda zobrazení:{" "}
          <strong>
            {displayMethod === "img" ? "IMG tag" : "CSS background"}
          </strong>
        </p>
        <button onClick={handleDisplayToggle} className="button -margin">
          Přepnout na {displayMethod === "img" ? "CSS background" : "IMG tag"}
        </button>
      </div>

      <div className="gallery section-page">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>

        <div
          className={`gallery__container ${
            displayMethod === "css" ? "css-background" : ""
          }`}>
          {Array.from({ length: 15 }, (_, index) =>
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

        <CreditGallery source="Unsplash" link="https://unsplash.com" />
      </div>

      <section className="section-page">
        <p className="section-text">
          Tato stránka porovnává dvě metody zobrazení obrázků: pomocí{" "}
          <code className="inline-code">img</code> tagu s atributy rozměrů a
          lazy loadingem, a pomocí{" "}
          <code className="inline-code">background-image</code> v CSS, kde je
          použit <code className="inline-code">aspect-ratio</code> pro správný
          poměr stran. Všechny obrázky jsou ve formátu JPG.
        </p>
        <div className="info">
          <h3>Rozdíly mezi metodami zobrazení</h3>
          <p>
            <strong>IMG tag:</strong> Poskytuje lepší SEO, možnost
            alternativního textu pro přístupnost, nativní lazy loading, a
            správnou rezervaci prostoru pomocí atributů width a height.
          </p>
          <p>
            <strong>CSS background:</strong> Nabízí lepší škálování a ořezávání
            obrázků, jednodušší překrytí, ale nenabízí nativní lazy loading a
            nemá sémantický význam pro vyhledávače a čtečky obrazovky.
          </p>
        </div>
        <TestPageSpeed />
      </section>
    </>
  );
};

export default ImageDisplayTesting;
