import React, { useState } from "react";

// Fetch data from the API
const fetchPageSpeedResults = async (url) => {
  // Call the API with the URL
  const apiUrl = `/api/pagespeed?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Chyba API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (!data.lighthouseResult) {
      throw new Error("Neplatná odpověď z API.");
    }

    return data.lighthouseResult.audits;
  } catch (error) {
    throw new Error(error.message || "Nepodařilo se načíst data.");
  }
};

const TestPageSpeed = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        metrik Core Web Vitals.
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
