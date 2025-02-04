import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const LazyLoadingTesting = () => {
  const pageTitle = "Testování Lazy Loadingu | Web Optimizer";

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("lazy")) {
      setSearchParams({ lazy: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isLazyLoading = searchParams.get("lazy") === "true";

  const handleLazyLoadingToggle = () => {
    const newUrl = isLazyLoading ? "?lazy=false" : "?lazy=true";
    window.location.search = newUrl;
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování Lazy Loadingu</h1>

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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page gallery">
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
      </FadeInOnScroll>
    </>
  );
};

export default LazyLoadingTesting;
