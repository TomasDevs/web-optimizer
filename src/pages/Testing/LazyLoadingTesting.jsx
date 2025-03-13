import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import CreditGallery from "./utils/CreditGallery";

const LazyLoadingTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Zajištění, že parametr "lazy" je vždy přítomen v URL
  useEffect(() => {
    if (!searchParams.has("lazy")) {
      setSearchParams({ lazy: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isLazyLoading = searchParams.get("lazy") === "true";

  // Přepnutí mezi lazy loadingem a okamžitým načítáním obrázků
  const handleLazyLoadingToggle = () => {
    const newUrl = isLazyLoading ? "?lazy=false" : "?lazy=true";
    window.location.search = newUrl; // Přesměrování na URL s novým parametrem
  };

  return (
    <>
      <Helmet>
        <title>Testování Lazy Loadingu | Web Optimizer</title>
      </Helmet>

      <section className="section-page">
        <h1 className="subpage-title">Testování Lazy Loadingu</h1>

        <p className="section-text">
          Stránka používá <strong>query parametry</strong> v URL pro přepínání
          lazy loadingu. Pokud je parametr{" "}
          <code className="inline-code">?lazy=true</code>, obrázky se načtou s
          lazy loadingem. Pro vypnutí lazy loadingu použijte{" "}
          <code className="inline-code">?lazy=false</code>.
        </p>

        <button onClick={handleLazyLoadingToggle} className="button -margin">
          {isLazyLoading ? "Vypnout Lazy Loading" : "Zapnout Lazy Loading"}
        </button>

        <p className="status-text">
          Aktuálně je lazy loading{" "}
          <strong>{isLazyLoading ? "zapnutý" : "vypnutý"}</strong>.
        </p>
      </section>

      <section className="section-page gallery">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>

        <div className="gallery__container">
          {Array.from({ length: 24 }, (_, index) => (
            <img
              key={index}
              src={`/assets/images/image${index + 1}.jpg`}
              loading={isLazyLoading ? "lazy" : "eager"}
              alt={`Obrázek ${index + 1}`}
              className="gallery__item"
            />
          ))}
        </div>

        <CreditGallery source="Unsplash" link="https://unsplash.com" />
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

export default LazyLoadingTesting;
