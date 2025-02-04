import React, { useState } from "react";

const TestPageSpeed = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_PAGESPEED_API_KEY;

  const testPage = async (url) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${API_KEY}`;

      console.log("Fetching:", apiUrl);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP chyba: ${response.status}`);
      }

      const data = await response.json();
      console.log("Výsledky API:", data);

      if (!data.lighthouseResult) {
        throw new Error("Neplatná odpověď z API.");
      }

      setResult(data.lighthouseResult);
    } catch (error) {
      console.error("Chyba při testování:", error);
      setError("Něco se pokazilo. Zkontrolujte server nebo API klíč.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-page-speed">
      <h2 className="section-subtitle -small">Testování stránky</h2>
      <button
        className="button -bottom"
        onClick={() => testPage(window.location.href)}
        disabled={loading}>
        {loading ? "Testuji..." : "Otestovat stránku"}
      </button>

      {error && <p className="test-page-speed__error">{error}</p>}

      {result && (
        <div className="test-page-speed__results">
          <h3>Výsledky Core Web Vitals:</h3>
          <ul>
            <li>
              <strong>LCP (Largest Contentful Paint):</strong>{" "}
              {result["largest-contentful-paint"]?.displayValue || "N/A"}{" "}
              <span>– Rychlost vykreslení největšího prvku</span>
            </li>
            <li>
              <strong>CLS (Cumulative Layout Shift):</strong>{" "}
              {result["cumulative-layout-shift"]?.displayValue || "N/A"}{" "}
              <span>– Míra vizuální stability</span>
            </li>
            <li>
              <strong>INP (Interaction to Next Paint):</strong>{" "}
              {result["interactive"]?.displayValue || "N/A"}{" "}
              <span>– Rychlost interakce</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestPageSpeed;
