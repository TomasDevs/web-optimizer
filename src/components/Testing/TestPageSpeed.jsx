import React, { useState } from "react";

// Funkce pro volání Google PageSpeed Insights API
const fetchPageSpeedResults = async (url) => {
  // Vytvoření URL pro volání API
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url
  )}&key=${import.meta.env.VITE_PAGESPEED_API_KEY}`;

  try {
    // Odeslání požadavku na API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Chyba API: ${response.status} ${response.statusText}`);
    }

    // Zpracování odpovědi do formátu JSON
    const data = await response.json();
    return data.lighthouseResult.audits; // Vrácení klíčových metrik z odpovědi API
  } catch (error) {
    throw new Error(error.message || "Nepodařilo se načíst data.");
  }
};

const TestPageSpeed = () => {
  // Stav pro ukládání výsledků testu, stavu načítání a chybové hlášky
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funkce pro spuštění testu
  const testPage = async (url) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const audits = await fetchPageSpeedResults(url);
      setResult(audits);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-page-speed">
      <h2 className="section-subtitle -small">Testování stránky</h2>
      <p className="section-text">
        Test využívá <strong>Google PageSpeed Insights API</strong> pro zjištění
        metrik Core Web Vitals. Mějte na paměti, že tento rychlý test má určitá
        omezení: INP (Interaction to Next Paint) se přesně měří až po skutečné
        interakci uživatele, zde je pouze odhadován na základě simulovaných
        podmínek. Pro komplexnější testování a sledování metrik v reálném
        provozu doporučuji vložit URL této stránky do specializovaných online
        nástrojů. Přehled doporučených testovacích nástrojů najdete na stránce{" "}
        <a href="/nastroje" className="highlight-link">
          Nástroje
        </a>
        .
      </p>
      <button
        className="button -bottom"
        onClick={() => testPage(window.location.href)}
        disabled={loading}>
        {loading ? <span>Testuji stránku...</span> : "Otestovat stránku"}
      </button>

      {error && <p className="test-page-speed__error">{error}</p>}

      {result && (
        <div className="test-page-speed__results">
          <h3>Výsledky testu (PageSpeed Insights)</h3>
          <ul>
            <li>
              <strong>LCP (Largest Contentful Paint):</strong>{" "}
              {result["largest-contentful-paint"]?.displayValue || "N/A"} –
              Rychlost vykreslení největšího prvku
            </li>
            <li>
              <strong>CLS (Cumulative Layout Shift):</strong>{" "}
              {result["cumulative-layout-shift"]?.displayValue || "N/A"} – Míra
              vizuální stability
            </li>
            <li>
              <strong>INP (Interaction to Next Paint):</strong>{" "}
              {result["interactive"]?.displayValue || "N/A"} – Rychlost
              interakce
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestPageSpeed;
