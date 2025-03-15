import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { onCLS } from "web-vitals";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import CreditGallery from "./utils/CreditGallery";

const CLSTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clsValue, setClsValue] = useState("Čekání na měření...");
  const [activeTest, setActiveTest] = useState("gallery");

  // Při prvním načtení stránky nastavíme parametr "optimized" na false
  useEffect(() => {
    if (!searchParams.has("optimized")) {
      setSearchParams({ optimized: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isOptimized = searchParams.get("optimized") === "true";

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
  }, [isOptimized, activeTest]);

  // Přepínání mezi optimalizovanou a neoptimalizovanou verzí
  const handleClsToggle = () => {
    setSearchParams({ optimized: !isOptimized ? "true" : "false" });
  };

  // Přepínání mezi testy
  const switchTest = (testName) => {
    setActiveTest(testName);
  };

  return (
    <>
      <Helmet>
        <title>Testování CLS | Web Optimizer</title>
      </Helmet>

      <section className="section-page">
        <h1 className="subpage-title">
          Testování Cumulative Layout Shift (CLS)
        </h1>

        <p className="section-text">
          CLS měří stabilitu stránky během načítání. Hodnota pod{" "}
          <strong>0,1</strong> je podle Google považována za dobrou, hodnota nad
          0.25 za špatnou.
        </p>

        <div className="metrics-monitor">
          <div
            className={`metrics-value ${
              parseFloat(clsValue) > 0.1 && clsValue !== "Čekání na měření..."
                ? "metrics-value--bad"
                : parseFloat(clsValue) <= 0.1 &&
                  clsValue !== "Čekání na měření..."
                ? "metrics-value--good"
                : ""
            }`}>
            <span className="metrics-value__number">{clsValue}</span>
            {clsValue !== "Čekání na měření..." && (
              <span className="metrics-value__label">
                {parseFloat(clsValue) <= 0.1
                  ? "Dobrá hodnota"
                  : "Špatná hodnota"}
              </span>
            )}
          </div>
        </div>

        <button onClick={handleClsToggle} className="button -bottom">
          Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
          verzi
        </button>

        <p className="status-text">
          Aktuální verze:{" "}
          <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
        </p>

        <p className="hints">
          Pro lepší výsledky testu doporučuji přepnout okno/kartu v prohlížeči a
          vrátit se zpět, případně mezi testy také aktualizovat stránku (F5).
          Pomůže to změřit CLS přesněji při opětovném načtení stránky.
        </p>
      </section>

      <section className="section-page">
        <div className="tabs">
          <button
            className={`tabs__item ${
              activeTest === "gallery" ? "tabs__item--active" : ""
            }`}
            onClick={() => switchTest("gallery")}>
            Galerie obrázků
          </button>
          <button
            className={`tabs__item ${
              activeTest === "ads" ? "tabs__item--active" : ""
            }`}
            onClick={() => switchTest("ads")}>
            Reklamy
          </button>
          <button
            className={`tabs__item ${
              activeTest === "dynamic" ? "tabs__item--active" : ""
            }`}
            onClick={() => switchTest("dynamic")}>
            Dynamický obsah
          </button>
          <button
            className={`tabs__item ${
              activeTest === "fonts" ? "tabs__item--active" : ""
            }`}
            onClick={() => switchTest("fonts")}>
            Fonty
          </button>
        </div>

        {activeTest === "gallery" && <GalleryTest isOptimized={isOptimized} />}
        {activeTest === "ads" && <AdsTest isOptimized={isOptimized} />}
        {activeTest === "dynamic" && <DynamicTest isOptimized={isOptimized} />}
        {activeTest === "fonts" && <FontsTest isOptimized={isOptimized} />}
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Techniky pro snížení CLS</h2>
        <div className="cls-techniques">
          <div className="cls-technique">
            <h3 className="cls-technique__title">1. Explicitní rozměry</h3>
            <p className="cls-technique__text">
              Vždy definujte šířku a výšku u obrázků, videí a iframe elementů
              pomocí HTML atributů width a height.
            </p>
          </div>

          <div className="cls-technique">
            <h3 className="cls-technique__title">2. Rezervace prostoru</h3>
            <p className="cls-technique__text">
              Pro dynamický obsah jako reklamy nebo obsah z API vytvořte předem
              prostor pomocí min-height.
            </p>
          </div>

          <div className="cls-technique">
            <h3 className="cls-technique__title">3. Stabilita fontů</h3>
            <p className="cls-technique__text">
              Používejte font-display: swap a předem načítejte důležité fonty
              pomocí preload.
            </p>
          </div>
        </div>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

// Test Galerie
const GalleryTest = ({ isOptimized }) => {
  return (
    <div className="cls-test__content">
      <h2 className="section-subtitle -small">Test galerie obrázků</h2>
      <p className="section-text">
        {isOptimized
          ? "Obrázky mají explicitně definované rozměry v HTML atributech, což prohlížeči umožňuje vyhradit správný prostor již během parsování HTML."
          : "Obrázky spoléhají pouze na CSS styly, což může způsobit přepočítávání layoutu během načítání."}
      </p>

      <div
        className={`gallery__container ${isOptimized ? "" : "no-dimensions"}`}>
        {Array.from({ length: 4 }, (_, index) => (
          <img
            key={index}
            src={`/assets/images/image${index + 1}.jpg`}
            width={isOptimized ? "300" : undefined}
            height={isOptimized ? "225" : undefined}
            alt={`Obrázek ${index + 1}`}
            className="gallery__item"
            loading={isOptimized ? "eager" : "lazy"}
          />
        ))}
      </div>

      <CreditGallery source="Unsplash" link="https://unsplash.com" />
    </div>
  );
};

// Test reklam
const AdsTest = ({ isOptimized }) => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (!isOptimized) {
      const timer = setTimeout(() => {
        setAdLoaded(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOptimized]);

  return (
    <div className="cls-test__content">
      <h2 className="section-subtitle -small">Test reklam a bannerů</h2>
      <p className="section-text">
        {isOptimized
          ? "Reklamní prostor je předem rezervován, takže načtení reklamy nezpůsobí posun okolního obsahu."
          : "Reklama se načítá dynamicky bez předem vyhrazeného místa, což způsobuje posun okolního obsahu."}
      </p>

      <div className="content-block">
        <h3>Nadpis článku</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        {isOptimized ? (
          <div className="ad-container">
            <div className="ad-container__label">
              Vyhrazený prostor pro reklamu
            </div>
            <div className="ad-container__content">
              <strong>Reklamní banner</strong>
              <p>Tento prostor byl vyhrazen již při načítání stránky</p>
            </div>
          </div>
        ) : (
          adLoaded && (
            <div
              className="ad-container__content ad-container__content--dynamic"
              style={{
                height: "1000px",
                marginBottom: "30px",
                marginTop: "30px",
                background: "#f0f0f0",
              }}>
              <strong style={{ fontSize: "1.5rem" }}>
                VELKÝ REKLAMNÍ BANNER
              </strong>
              <p style={{ fontSize: "1.2rem" }}>
                Tento banner se načetl až po vykreslení stránky a způsobil
                masivní posun obsahu
              </p>
            </div>
          )
        )}

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est.
        </p>

        <p>
          Další odstavec textu pro zvýraznění posunu. Mauris placerat eleifend
          leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
          erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
        </p>
      </div>
    </div>
  );
};

// Test dynamického obsahu
const DynamicTest = ({ isOptimized }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulace načítání dat z API
    const timer = setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Produkt 1",
          price: "299 Kč",
          image: "/assets/images/product1.jpg",
        },
        {
          id: 2,
          name: "Produkt 2",
          price: "499 Kč",
          image: "/assets/images/product2.jpg",
        },
        {
          id: 3,
          name: "Produkt 3",
          price: "899 Kč",
          image: "/assets/images/product3.jpg",
        },
      ]);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cls-test__content">
      <h2 className="section-subtitle -small">Test dynamického obsahu</h2>
      <p className="section-text">
        {isOptimized
          ? "Zde simulujeme načítání produktů z API s předem rezervovaným prostorem, díky čemuž nedochází k posunu obsahu."
          : "Při načítání produktů z API bez rezervace prostoru dochází k posunu obsahu, když se data načtou."}
      </p>

      <h3>Produktový katalog</h3>

      {isOptimized ? (
        <div
          className="products-grid"
          style={{ minHeight: isLoading ? "240px" : "auto" }}>
          {isLoading ? (
            <div className="products-grid__loading">Načítání produktů...</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="product-card__image"
                  style={{
                    height: "150px",
                    background: "#eee",
                    marginBottom: "10px",
                  }}></div>
                <h4 className="product-card__name">{product.name}</h4>
                <div className="product-card__price">{product.price}</div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="products-grid">
          {!isLoading &&
            products.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="product-card__image"
                  style={{
                    height: "150px",
                    background: "#eee",
                    marginBottom: "10px",
                  }}></div>
                <h4 className="product-card__name">{product.name}</h4>
                <div className="product-card__price">{product.price}</div>
              </div>
            ))}
          {isLoading && (
            <div className="products-grid__loading">Načítání produktů...</div>
          )}
        </div>
      )}

      <div className="content-below">
        <h3>Obsah pod produkty</h3>
        <p>
          Tento obsah by měl zůstat na stejném místě i po načtení produktů výše.
          Pokud dojde k posunu tohoto textu, znamená to, že stránka trpí CLS
          problémem.
        </p>
      </div>
    </div>
  );
};

// Test fontů
const FontsTest = ({ isOptimized }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFontLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cls-test__content">
      <h2 className="section-subtitle -small">Test webových fontů</h2>
      <p className="section-text">
        {isOptimized
          ? "Používáme font-display: swap a předem definované minimální rozměry textu."
          : "Bez optimalizace fontů dochází k posunu obsahu po načtení vlastních fontů s odlišnými metrikami."}
      </p>

      <div className="font-test">
        <div className="font-test__container">
          <h3 className="font-test__title">Ukázka textu s webovými fonty</h3>

          <div
            className={`font-test__example ${
              fontLoaded ? "font-test__example--loaded" : ""
            }`}
            style={{
              fontFamily: fontLoaded ? "'CustomFont', serif" : "serif",
              lineHeight: isOptimized ? "1.6" : fontLoaded ? "2" : "1.2",
              fontSize: isOptimized ? "1rem" : fontLoaded ? "1.3rem" : "0.8rem",
              letterSpacing: isOptimized
                ? "normal"
                : fontLoaded
                ? "0.01em"
                : "normal",
            }}>
            <p>
              Tento text používá vlastní webový font. V optimalizované verzi
              nejprve zobrazíme text ve fallback fontu, a jakmile se načte
              vlastní font, provedeme výměnu bez posunu obsahu.
            </p>
            <h4
              style={{
                fontSize: !isOptimized && fontLoaded ? "1.4rem" : "1.2rem",
              }}>
              Příklad nadpisu s vlastním fontem
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
              penatibus. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>

        <div className="content-below">
          <h3>Obsah pod textem s webfonty</h3>
          <p>
            Tento obsah by měl zůstat na stejném místě i po načtení webových
            fontů. Pokud dojde k posunu tohoto textu, znamená to, že stránka
            trpí CLS problémem spojeným s načítáním fontů.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CLSTesting;
