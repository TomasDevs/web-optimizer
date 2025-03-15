import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { onLCP, onCLS, onINP, onFCP, onTTFB } from "web-vitals";
import TestPageSpeed from "../../components/Testing/TestPageSpeed";
import LazyYoutubeEmbed from "../../components/Testing/LazyYoutubeEmbed";
import { heavyComputation, fetchMockData } from "./utils/testingUtils";
import CreditGallery from "./utils/CreditGallery";
import TestingHint from "./utils/TestingHint";

const BaselineTesting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState("Připraveno k testu");
  const [mockData, setMockData] = useState([]);
  const [adLoaded, setAdLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    lcp: "Měření...",
    cls: "Měření...",
    inp: "Měření...",
    fcp: "Měření...",
    ttfb: "Měření...",
  });

  // Získání parametrů z URL
  const isOptimized = searchParams.get("version") === "optimized";
  const isMinified = searchParams.get("minified") !== "false";

  // Pokud nejsou parametry v URL, nastavíme výchozí hodnoty
  useEffect(() => {
    if (!searchParams.has("version")) {
      setSearchParams(
        { version: "unoptimized", minified: "false" },
        { replace: true }
      );
    }
  }, [searchParams, setSearchParams]);

  // Měření Core Web Vitals
  useEffect(() => {
    let isMounted = true;

    const handleMetric =
      (name) =>
      ({ value }) => {
        if (isMounted) {
          setMetrics((prev) => ({
            ...prev,
            [name]: name === "cls" ? value.toFixed(3) : value.toFixed(0),
          }));
        }
      };

    try {
      const unsubLCP = onLCP(handleMetric("lcp"));
      const unsubCLS = onCLS(handleMetric("cls"));
      const unsubINP = onINP(handleMetric("inp"));
      const unsubFCP = onFCP(handleMetric("fcp"));
      const unsubTTFB = onTTFB(handleMetric("ttfb"));

      return () => {
        isMounted = false;
        if (typeof unsubLCP === "function") unsubLCP();
        if (typeof unsubCLS === "function") unsubCLS();
        if (typeof unsubINP === "function") unsubINP();
        if (typeof unsubFCP === "function") unsubFCP();
        if (typeof unsubTTFB === "function") unsubTTFB();
      };
    } catch (error) {
      console.error("Chyba při měření metrik:", error);
    }
  }, [isOptimized]);

  useEffect(() => {
    if (!isOptimized) {
      // Simulace opožděného načtení reklamy po 1,5 sekundě
      const timer = setTimeout(() => {
        setAdLoaded(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOptimized]);

  // Dynamické načítání fontů podle verze
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";

    if (isOptimized) {
      fontLink.href = "/assets/fonts/fonts.css"; // Lokální fonty
    } else {
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap";
    }

    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, [isOptimized]);

  // Simulace těžkého výpočtu (blokující výpočet vs. asynchronní zpracování)
  const handleComputationClick = () => {
    setStatus("Výpočet probíhá...");

    if (isOptimized) {
      setTimeout(() => {
        const result = heavyComputation(40);
        setStatus(`Výpočet dokončen: ${result}`);
      }, 0); // Asynchronní zpracování
    } else {
      const result = heavyComputation(40);
      setStatus(`Výpočet dokončen: ${result}`); // Blokující výpočet
    }
  };

  // ID videí pro načítání
  const videoIds = [
    "4N1iwQxiHrs", // The Outfield - Your Love (Josie on a Vacation)
    "8SbUC-UaAxE", // Guns N' Roses - November Rain
    "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
    "ktvTqknDobU", // Imagine Dragons - Radioactive
    "fJ9rUzIMcZQ", // Queen - Don't Stop Me Now
    "VBmMU_iwe6U", // Beyoncé - Run the World (Girls)
  ];

  // Načtení testovacích dat (mock data)
  useEffect(() => {
    fetchMockData(isOptimized, setMockData, setIsLoading);
  }, [isOptimized]);

  // Přepínání mezi verzemi optimalizace
  const handleVersionToggle = () => {
    setSearchParams({
      version: isOptimized ? "unoptimized" : "optimized",
      minified: isOptimized ? "false" : "true",
    });
  };

  return (
    <>
      <Helmet>
        <title>Komplexní analýza | Web Optimizer</title>
        <link
          rel="stylesheet"
          href={isMinified ? "/minified-index.css" : "/unminified-index.css"}
        />
        <script
          type="module"
          src={isMinified ? "/minified-index.js" : "/unminified-index.js"}
        />

        {isOptimized && (
          <link
            rel="preload"
            href="/assets/fonts/fonts.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
      </Helmet>
      <section className="section-page">
        <h1 className="subpage-title">Testování optimalizací webu</h1>

        <div className="metrics-container">
          <div className="flex-gap">
            <div className="metric-item">
              <span>
                LCP: <strong>{metrics.lcp} ms</strong>
              </span>
            </div>
            <div className="metric-item">
              <span>
                CLS: <strong>{metrics.cls}</strong>
              </span>
            </div>
            <div className="metric-item">
              <span>
                INP: <strong>{metrics.inp} ms</strong>
              </span>
            </div>
            <div className="metric-item">
              <span>
                FCP: <strong>{metrics.fcp} ms</strong>
              </span>
            </div>
            <div className="metric-item">
              <span>
                TTFB: <strong>{metrics.ttfb} ms</strong>
              </span>
            </div>
          </div>
        </div>

        <TestingHint />

        <button onClick={handleVersionToggle} className="button -margin">
          Přepnout na {isOptimized ? "Neoptimalizovanou" : "Optimalizovanou"}{" "}
          verzi
        </button>

        <p className="status-text -bottom">
          Aktuální verze:{" "}
          <strong>{isOptimized ? "Optimalizovaná" : "Neoptimalizovaná"}</strong>
        </p>

        <p className="status-text">
          Minifikace: <strong>{isMinified ? "Zapnutá" : "Vypnutá"}</strong>
        </p>
      </section>
      <section className="section-page">
        <h2 className="section-subtitle -small">Hero Sekce (LCP)</h2>
        <p className="section-text">
          {isOptimized
            ? "Optimalizovaný obrázek používá formát WebP a správné načítání."
            : "Neoptimalizovaný obrázek bez prioritního načítání."}
        </p>
        <div className="hero__container">
          <img
            src={
              isOptimized
                ? "/assets/images/lcp-image-min.webp"
                : "/assets/images/lcp-image.jpg"
            }
            alt="Hero obrázek"
            width={1920}
            height={isOptimized ? 1080 : undefined}
            loading={isOptimized ? "eager" : "lazy"}
            fetchPriority={isOptimized ? "high" : undefined}
          />
        </div>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Dynamický obsah (CLS)</h2>
        <p className="section-text">
          {isOptimized
            ? "Obsah má předem rezervované místo pro prevenci CLS."
            : "Dynamicky načítaný obsah bez rezervovaného místa."}
        </p>
        <div
          className={`dynamic-content ${
            isOptimized ? "dynamic-content--reserved" : ""
          }`}>
          {isOptimized ? (
            isLoading ? (
              <div className="skeleton-loading">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            ) : (
              <div className="grid-container">
                {mockData.map((item) => (
                  <div key={item.id} className="mock-item">
                    <h3 className="mock-name">{item.name}</h3>
                    <p className="mock-email">
                      <a
                        href={`mailto:${item.email}`}
                        className="highlight-link">
                        {item.email}
                      </a>
                    </p>
                    <p className="mock-description">{item.body}</p>
                  </div>
                ))}
              </div>
            )
          ) : (
            !isLoading && (
              <div className="grid-container">
                {mockData.map((item) => (
                  <div key={item.id} className="mock-item">
                    <h3 className="mock-name">{item.name}</h3>
                    <p className="mock-email">
                      <a
                        href={`mailto:${item.email}`}
                        className="highlight-link">
                        {item.email}
                      </a>
                    </p>
                    <p className="mock-description">{item.body}</p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>

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
            risus eget urna mollis ornare vel eu leo. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
                  background: "#d0d0d0",
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

      <section className="section-page">
        <h2 className="section-subtitle">
          Optimalizované načítání YouTube videí
        </h2>
        <p className="section-text">
          {isOptimized
            ? "YouTube video se nejprve zobrazí jako náhledový obrázek a iframe se načte až po kliknutí. To zlepšuje výkon a snižuje zátěž stránky."
            : "Iframe s videem se načítá ihned, což může zpomalit načítání stránky."}
        </p>
        <div className="youtube__grid">
          {videoIds.map((videoId, index) => (
            <LazyYoutubeEmbed
              key={index}
              videoId={videoId}
              isOptimized={isOptimized}
            />
          ))}
        </div>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">
          Optimalizované vs. neoptimalizované video
        </h2>
        <p className="section-text">
          {isOptimized
            ? "Optimalizovaná verze používá WebM a lazy loading pro rychlejší načítání."
            : "Neoptimalizované video se načítá okamžitě, což zpomaluje stránku."}
        </p>
        {isOptimized ? (
          <div className="video-container video-container--optimized">
            <video
              width="100%"
              height="auto"
              muted
              loop
              controls
              loading="lazy"
              poster="/assets/images/video-preview.jpg"
              preload="metadata">
              <source
                src="/assets/videos/video-optimalized.webm"
                type="video/webm"
              />
              <source
                src="/assets/videos/video-optimalized.mp4"
                type="video/mp4"
              />
              Váš prohlížeč nepodporuje video tag.
            </video>
          </div>
        ) : (
          <div className="video-container">
            <video
              width="100%"
              height="auto"
              muted
              loop
              controls
              autoPlay
              preload="auto">
              <source
                src="/assets/videos/video-unoptimalized.webm"
                type="video/webm"
              />
              <source
                src="/assets/videos/video-unoptimalized.mp4"
                type="video/mp4"
              />
              Váš prohlížeč nepodporuje video tag.
            </video>
          </div>
        )}
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Test interaktivity (INP)</h2>
        <p className="section-text">
          {isOptimized
            ? "Těžké výpočty jsou zpracovány asynchronně."
            : "Výpočty blokují hlavní vlákno."}
        </p>
        <button onClick={handleComputationClick} className="button -margin">
          Spustit těžký výpočet
        </button>
        <p className="status-text">{status}</p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>
        <p className="section-text">
          {isOptimized
            ? "Obrázky mají pevně definované rozměry a používají moderní formáty."
            : "Obrázky bez definovaných rozměrů způsobují layout shift."}
        </p>
        <div
          className={`gallery__container ${
            isOptimized ? "" : "no-dimensions"
          }`}>
          {Array.from({ length: 15 }, (_, i) => (
            <img
              key={i}
              src={
                isOptimized
                  ? `/assets/images/image${i + 1}.webp`
                  : `/assets/images/image${i + 1}.jpg`
              }
              alt={`Obrázek ${i + 1}`}
              width={isOptimized ? 400 : undefined}
              height={isOptimized ? 400 : undefined}
              loading="lazy"
              className="gallery__item"
            />
          ))}
        </div>

        <CreditGallery source="Unsplash" link="https://unsplash.com" />
      </section>

      <section className="section-page">
        <h2 className="section-subtitle -small">Načítání fontů</h2>
        <p className="section-text">
          {isOptimized
            ? "Fonty se načítají lokálně s 'font-display: swap'."
            : "Fonty se načítají z Google Fonts bez optimalizace (FOUT)."}
        </p>
        <p
          className={`font-example ${
            isOptimized ? "font-example--optimized" : ""
          }`}>
          Ukázkový text s různými způsoby načítání fontů.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Rozdíly mezi verzemi</h2>
        <div className="section-text">
          <p>
            <strong>LCP (Largest Contentful Paint):</strong> Optimalizovaná
            verze používá WebP formát, správné atributy loading a fetchPriority.
          </p>
          <p>
            <strong>CLS (Cumulative Layout Shift):</strong> Optimalizovaná verze
            má předem rezervované místo pro dynamický obsah.
          </p>
          <p>
            <strong>INP (Interaction to Next Paint):</strong> Optimalizovaná
            verze používá asynchronní zpracování pro lepší odezvu UI.
          </p>
          <p>
            <strong>Obrázky:</strong> Optimalizovaná verze používá moderní
            formáty, správné dimenze a postupné načítání.
          </p>
          <p>
            <strong>JavaScript:</strong> Optimalizovaná verze používá
            asynchronní zpracování pro lepší výkon a responzivitu UI.
          </p>
          <p>
            <strong>Fonty:</strong> Optimalizovaná verze používá lokální fonty s
            font-display: swap.
          </p>
          <p>
            <strong>Reklamy:</strong> Optimalizovaná verze má rezervované místo
            pro externí obsah.
          </p>
        </div>
      </section>

      <section className="section-page">
        <TestPageSpeed />
      </section>
    </>
  );
};

export default BaselineTesting;
