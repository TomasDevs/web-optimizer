import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const BaselineTesting = () => {
  const pageTitle = "Komplexní analýza | Web Optimizer";
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState("Připraveno k testu");
  const [mockData, setMockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get URL search params
  const isOptimized = searchParams.get("version") === "optimized";
  const isMinified = searchParams.get("minified") !== "false";

  useEffect(() => {
    if (!searchParams.has("version")) {
      setSearchParams(
        { version: "unoptimized", minified: "false" },
        { replace: true }
      );
    }
  }, [searchParams, setSearchParams]);

  // Load fonts based on optimization
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";

    if (isOptimized) {
      fontLink.href = "/assets/fonts/fonts.css";
    } else {
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap";
    }

    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, [isOptimized]);

  // Simulace těžkého výpočtu pro INP test
  const heavyComputation = (num) => {
    if (num <= 1) return num;
    return heavyComputation(num - 1) + heavyComputation(num - 2);
  };

  const handleComputationClick = () => {
    setStatus("Výpočet probíhá...");

    if (isOptimized) {
      setTimeout(() => {
        const result = heavyComputation(40);
        setStatus(`Výpočet dokončen: ${result}`);
      }, 0);
    } else {
      const result = heavyComputation(40);
      setStatus(`Výpočet dokončen: ${result}`);
    }
  };

  const videoIds = [
    "4N1iwQxiHrs", // The Outfield - Your Love (Josie on a Vacation)
    "8SbUC-UaAxE", // Guns N' Roses - November Rain
    "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
    "ktvTqknDobU", // Imagine Dragons - Radioactive
    "fJ9rUzIMcZQ", // Queen - Don't Stop Me Now
    "VBmMU_iwe6U", // Beyoncé - Run the World (Girls)
  ];

  // Lazy-loaded YouTube embed component
  const LazyYoutubeEmbed = ({ videoId, isOptimized }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
      <div className="youtube-container" onClick={() => setIsLoaded(true)}>
        {isLoaded || !isOptimized ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading={isOptimized ? "lazy" : "eager"}></iframe>
        ) : (
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="YouTube video preview"
            className="youtube-preview"
          />
        )}
      </div>
    );
  };

  // Fetch mock data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulace rozdílných rychlostí načítání
        await new Promise((resolve) =>
          setTimeout(resolve, isOptimized ? 500 : 2000)
        );

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const result = await response.json();
        setMockData(result.slice(0, 6));
      } catch (error) {
        console.error("Error fetching mock data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isOptimized]);

  // Toggle between optimized and unoptimized version
  const handleVersionToggle = () => {
    setSearchParams({
      version: isOptimized ? "unoptimized" : "optimized",
      minified: isOptimized ? "false" : "true",
    });
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
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

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování optimalizací webu</h1>

        <p className="section-text">
          Tato stránka demonstruje různé optimalizační techniky a jejich vliv na
          výkon webu. Přepněte mezi verzemi pro porovnání rozdílů.
        </p>

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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
            height={1080}
            loading={isOptimized ? "eager" : "lazy"}
            fetchPriority={isOptimized ? "high" : undefined}
          />
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">
          Optimalizované vs. neoptimalizované video
        </h2>
        <p className="section-text">
          {isOptimized
            ? "Optimalizovaná verze používá WebM a lazy loading pro rychlejší načítání."
            : "Neoptimalizované video se načítá okamžitě, což zpomaluje stránku."}
        </p>
        <video
          width="100%"
          height="auto"
          muted
          loop
          autoPlay
          loading={isOptimized ? "lazy" : "eager"}
          poster={isOptimized ? "/assets/images/video-preview.jpg" : undefined}
          preload={isOptimized ? "metadata" : "auto"}>
          <source
            src={
              isOptimized
                ? "/assets/videos/video-optimalized.webm"
                : "/assets/videos/video-unoptimalized.webm"
            }
            type="video/webm"
          />
          <source
            src={
              isOptimized
                ? "/assets/videos/video-optimalized.mp4"
                : "/assets/videos/video-unoptimalized.mp4"
            }
            type="video/mp4"
          />
          Váš prohlížeč nepodporuje video tag.
        </video>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
          {isLoading ? (
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
                    <a href={`mailto:${item.email}`} className="highlight-link">
                      {item.email}
                    </a>
                  </p>
                  <p className="mock-description">{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Galerie obrázků</h2>
        <p className="section-text">
          {isOptimized
            ? "Obrázky mají pevně definované rozměry a používají moderní formáty."
            : "Obrázky bez definovaných rozměrů způsobují layout shift."}
        </p>
        <div className="gallery__container">
          {Array.from({ length: 24 }, (_, i) => (
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Reklamy a externí obsah</h2>
        <p className="section-text">
          {isOptimized
            ? "Reklamní prostor je předem rezervován."
            : "Reklama se načítá dynamicky a způsobuje posuny."}
        </p>
        <div className="ad-placeholder">
          {isOptimized ? (
            <div style={{ width: "100%", height: "150px", background: "#ccc" }}>
              Rezervované místo pro reklamu
            </div>
          ) : (
            <iframe
              src="https://www.seznam.cz/"
              width="100%"
              height="150"
              title="Ukázková reklama"
              style={{ border: "none" }}
            />
          )}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <TestPageSpeed />
      </FadeInOnScroll>
    </>
  );
};

export default BaselineTesting;
