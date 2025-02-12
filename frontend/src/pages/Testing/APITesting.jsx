import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const APITesting = () => {
  const pageTitle = "Testování výkonu API | Web Optimizer";

  const apiEndpoints = [
    {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com/posts",
      description: "Rychlé mock API pro testování",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "Random User API",
      url: "https://randomuser.me/api/?results=50",
      description: "Generování náhodných uživatelských dat",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "GitHub API",
      url: "https://api.github.com/users",
      description: "Test veřejného API pro srovnání",
      options: {
        headers: { Accept: "application/json" },
      },
    },
    {
      name: "OpenLibrary API",
      url: "https://openlibrary.org/subjects/programming.json",
      description: "Seznam programovacích knih (velký JSON)",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "REST Countries",
      url: "https://restcountries.com/v3.1/all",
      description: "Informace o všech zemích",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "Hacker News API",
      url: "https://hacker-news.firebaseio.com/v0/topstories.json",
      description: "Seznam top příběhů (větší dataset)",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "PokeAPI",
      url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      description: "Seznam prvních 100 pokémonů",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "Dog CEO API",
      url: "https://dog.ceo/api/breeds/list/all",
      description: "Seznam všech psích plemen",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "CoinGecko",
      url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd",
      description: "Aktuální ceny kryptoměn",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "Cat Facts",
      url: "https://catfact.ninja/fact",
      description: "Náhodný fact o kočkách",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
    {
      name: "IP API",
      url: "https://ipapi.co/json/",
      description: "Informace o IP adrese",
      options: {
        headers: {
          Accept: "application/json",
        },
      },
    },
  ];

  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});

  // Formátování velikosti
  const formatBytes = (bytes) => {
    if (bytes === 0 || bytes === "N/A") return "N/A";
    if (bytes < 1024) return `${bytes} B`;
    const sizes = ["B", "kB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  };

  // Získání počtu položek
  const getItemCount = (data) => {
    if (!data) return "N/A";
    if (Array.isArray(data)) return data.length;
    if (data.results) return data.results.length;
    if (data.data && Array.isArray(data.data)) return data.data.length;
    return Object.keys(data).length;
  };

  // Měření velikosti přenosu
  const measureTransferSize = async (response) => {
    try {
      const contentLength = response.headers.get("content-length");
      if (contentLength) {
        return parseInt(contentLength, 10);
      }

      // Pokud není dostupná hlavička, použijeme arrayBuffer
      const clone = response.clone();
      const buffer = await clone.arrayBuffer();
      return buffer.byteLength;
    } catch (error) {
      console.error("Chyba při měření velikosti:", error);
      return "N/A";
    }
  };

  // Výpočet komprese
  const calculateCompression = (originalSize, compressedSize) => {
    if (!originalSize || !compressedSize || originalSize === compressedSize)
      return null;
    return (((originalSize - compressedSize) / originalSize) * 100).toFixed(1);
  };

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

      // Celkový čas
      const networkTime = performance.now() - startTime;

      // Cache info
      const cacheControl =
        response.headers.get("cache-control") || "není nastaveno";
      let cacheStatus = "Není nastaveno";

      if (
        cacheControl.includes("no-cache") ||
        cacheControl.includes("no-store")
      ) {
        cacheStatus = "Zakázáno";
      } else if (cacheControl.includes("max-age")) {
        const maxAge = cacheControl.match(/max-age=(\d+)/);
        cacheStatus = `Povoleno (${maxAge[1]}s)`;
      }

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
        <title>{pageTitle}</title>
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
        <p className="section-text">
          Více informací o API naleznete na{" "}
          <Link to="optimalizace/api" className="highlight-link">
            API optimalizace
          </Link>
          .
        </p>
      </FadeInOnScroll>
    </>
  );
};

export default APITesting;
