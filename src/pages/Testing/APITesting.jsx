import React, { useState } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import {
  formatBytes,
  getItemCount,
  measureTransferSize,
  calculateCompression,
  getCacheStatus,
} from "./utils/apiUtils";

const APITesting = () => {
  const apiEndpoints = [
    // Malé, rychlé odpovědi
    {
      name: "IP Info",
      url: "https://ipapi.co/json/",
      description: "Jednoduchá odpověď - základní IP info",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "Cat Fact",
      url: "https://catfact.ninja/fact",
      description: "Jednoduchý JSON",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "Crypto Prices",
      url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd",
      description: "Malý JSON s real-time daty",
      options: {
        headers: { Accept: "application/json" },
      },
    },

    // Střední velikost, dobrá rychlost
    {
      name: "JSONPlaceholder Posts",
      url: "https://jsonplaceholder.typicode.com/posts",
      description: "Mock API - 100 záznamů s cachováním",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "Dog Breeds",
      url: "https://dog.ceo/api/breeds/list/all",
      description: "Střední dataset s cachováním",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "GitHub Users",
      url: "https://api.github.com/users",
      description: "Reálná data s rate-limitingem",
      options: {
        headers: { Accept: "application/json" },
      },
    },

    // Větší datasety
    {
      name: "Random Users (1000)",
      url: "https://randomuser.me/api/?results=1000",
      description: "Velký dataset s náhodnými daty",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "Countries (Detailed)",
      url: "https://restcountries.com/v3.1/all?fields=name,capital,population,languages,currencies,flags,timezones,borders",
      description: "Komplexní data o zemích s kompresí",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "Pokemon (1000 záznamů)",
      url: "https://pokeapi.co/api/v2/pokemon?limit=1000",
      description: "Velký dataset s cachováním",
      options: {
        headers: { Accept: "application/json" },
      },
    },

    // Největší datasety
    {
      name: "Programming Books",
      url: "https://openlibrary.org/subjects/programming.json",
      description: "Rozsáhlá knihovna s kompresí",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "Hacker News Stories",
      url: "https://hacker-news.firebaseio.com/v0/topstories.json",
      description: "Real-time velký dataset",
      options: {
        headers: { Accept: "application/json" },
      },
    },
  ];

  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});

  // Testování API
  const testAPI = async (api) => {
    setLoading((prev) => ({ ...prev, [api.name]: true }));

    try {
      const startTime = performance.now();
      const response = await fetch(api.url, api.options);
      const ttfb = performance.now() - startTime;
      const transferSize = await measureTransferSize(response);
      const processStart = performance.now();
      const text = await response.text();
      const data = JSON.parse(text);
      const processingTime = performance.now() - processStart;
      const rawSize = new Blob([text]).size;
      const compression = calculateCompression(rawSize, transferSize);
      const networkTime = performance.now() - startTime;

      // Cache info
      const cacheStatus = getCacheStatus(response.headers);

      // Komprese
      //   const contentEncoding = response.headers.get("content-encoding");

      setResults((prev) => ({
        ...prev,
        [api.name]: {
          ttfb: `${ttfb.toFixed(2)} ms`,
          networkTime: `${networkTime.toFixed(2)} ms`,
          processingTime: `${processingTime.toFixed(2)} ms`,
          rawSize: formatBytes(rawSize),
          transferSize: formatBytes(transferSize),
          itemCount: getItemCount(data),
          cache: cacheStatus,
          compression: compression ? `${compression}%` : "žádná",
          status: response.status,
        },
      }));
    } catch (error) {
      setResults((prev) => ({
        ...prev,
        [api.name]: {
          error: `Chyba: ${error.message}`,
        },
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [api.name]: false }));
    }
  };

  return (
    <>
      <Helmet>
        <title>Testování výkonu API | Web Optimizer</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování výkonu API</h1>

        <p className="section-text">
          Tento test měří různé aspekty výkonu API včetně rychlosti odpovědi,
          velikosti dat, komprese a cachování.
        </p>

        <div className="api-tests">
          {apiEndpoints.map((api) => (
            <div key={api.name} className="api-test-item">
              <h3 className="api-test-title">{api.name}</h3>
              <p className="api-test-description">{api.description}</p>

              <button
                onClick={() => testAPI(api)}
                className="button"
                disabled={loading[api.name]}>
                {loading[api.name] ? "Testuje se..." : "Spustit test"}
              </button>

              {results[api.name] && (
                <div className="api-results">
                  {results[api.name].error ? (
                    <p className="error">{results[api.name].error}</p>
                  ) : (
                    <div className="results-grid">
                      <div className="result-group">
                        <h4>Časování</h4>
                        <p>TTFB: {results[api.name].ttfb}</p>
                        <p>Síťový čas: {results[api.name].networkTime}</p>
                        <p>Zpracování: {results[api.name].processingTime}</p>
                      </div>

                      <div className="result-group">
                        <h4>Data</h4>
                        <p>Velikost: {results[api.name].rawSize}</p>
                        <p>Po kompresi: {results[api.name].transferSize}</p>
                        <p>Komprese: {results[api.name].compression}</p>
                        <p>Položek: {results[api.name].itemCount}</p>
                      </div>

                      <div className="result-group">
                        <h4>Hlavičky</h4>
                        <p>Cache: {results[api.name].cache}</p>
                        <p>Status: {results[api.name].status}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Jak číst měření? </h2>

        <div className="section-text -top">
          <div className="section-text">
            <h3>Časování</h3>
            <p>
              <strong>TTFB</strong> - první odpověď serveru
            </p>
            <p>
              <strong>Síťový čas</strong> - celkový čas přenosu
            </p>
            <p>
              <strong>Zpracování</strong> - parsování dat
            </p>
          </div>

          <div className="section-text">
            <h3>Data</h3>
            <p>
              <strong>Velikost</strong> - před kompresí
            </p>
            <p>
              <strong>Po kompresi</strong> - skutečně přeneseno
            </p>
            <p>
              <strong>Počet položek</strong> v odpovědi
            </p>
          </div>

          <div className="section-text">
            <h3>Cache</h3>
            <p>Povoleno/Zakázáno</p>
            <p>Doba platnosti cache</p>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
};

export default APITesting;
