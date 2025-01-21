import React, { useState } from "react";

const TestPageSpeed = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testPage = async (url) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch(
        `http://localhost:5000/api/pagespeed?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP chyba: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Chyba při testování:", error);
      setError("Něco se pokazilo. Zkontrolujte server nebo URL.");
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
          <h3>Výsledky:</h3>
          <p>
            <strong>LCP:</strong>{" "}
            {result.lighthouseResult.audits["largest-contentful-paint"]
              ?.displayValue || "N/A"}
          </p>
          <p>
            <strong>CLS:</strong>{" "}
            {result.lighthouseResult.audits["cumulative-layout-shift"]
              ?.displayValue || "N/A"}
          </p>
          <p>
            <strong>FID:</strong>{" "}
            {result.lighthouseResult.audits["interactive"]?.displayValue ||
              "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default TestPageSpeed;
