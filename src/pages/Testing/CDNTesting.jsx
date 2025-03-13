import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import { sources } from "./utils/cdnSources";

const CDNTesting = () => {
  const [loadTimes, setLoadTimes] = useState({});
  const [loadedLibraries, setLoadedLibraries] = useState({});
  const [randomNumber, setRandomNumber] = useState(null);
  const [chartInitialized, setChartInitialized] = useState(false);
  const canvasRef = useRef(null);

  const testSource = async (source, url, type) => {
    const start = performance.now();
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }
      const end = performance.now();

      // Získání velikosti souboru
      const blob = await response.blob();
      const fileSize = `${(blob.size / 1024).toFixed(2)} KB`;

      // Dynamické načtení skriptu a měření doby onload
      const loadStart = performance.now();
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.onload = () => {
        const loadEnd = performance.now();
        setLoadTimes((prev) => ({
          ...prev,
          [`${source.name} (${type})`]: `${(end - start).toFixed(
            2
          )} ms (fetch) / ${(loadEnd - loadStart).toFixed(
            2
          )} ms (onload) / ${fileSize}`,
        }));
        setLoadedLibraries((prev) => ({
          ...prev,
          [`${source.name} (${type})`]: true,
        }));
        executeTest(source.name);
      };

      // Ošetření chyby při načítání skriptu
      script.onerror = () => {
        setLoadTimes((prev) => ({
          ...prev,
          [`${source.name} (${type})`]: "Soubor nenalezen",
        }));
        setLoadedLibraries((prev) => ({
          ...prev,
          [`${source.name} (${type})`]: false,
        }));
      };
      document.body.appendChild(script);
    } catch (error) {
      setLoadTimes((prev) => ({
        ...prev,
        [`${source.name} (${type})`]: "Soubor nenalezen",
      }));
    }
  };

  // Otestování funkcionality načtených knihoven
  const executeTest = (name) => {
    // Test Lodash.js
    if (name === "Lodash.js" && window._) {
      setRandomNumber(window._.random(1, 100));
    }

    // Test Babylon.js
    if (name === "Babylon.js" && window.BABYLON) {
      console.log("Babylon.js úspěšně načten!");

      requestAnimationFrame(() => {
        const canvas = document.getElementById("babylon-canvas");
        if (!canvas) {
          console.error("Chyba: Nenalezen <canvas> prvek!");
          return;
        }

        const engine = new window.BABYLON.Engine(canvas, true);

        const scene = new window.BABYLON.Scene(engine);
        const camera = new window.BABYLON.ArcRotateCamera(
          "Camera",
          Math.PI / 4,
          Math.PI / 4,
          5,
          window.BABYLON.Vector3.Zero(),
          scene
        );
        camera.attachControl(canvas, true);

        const light = new window.BABYLON.HemisphericLight(
          "light",
          new window.BABYLON.Vector3(1, 1, 0),
          scene
        );

        // Vytvoření kostky a rotace
        const box = window.BABYLON.MeshBuilder.CreateBox(
          "box",
          { size: 1 },
          scene
        );
        box.position.y = 0.5;

        scene.onBeforeRenderObservable.add(() => {
          box.rotation.y += 0.02;
        });

        engine.runRenderLoop(() => {
          scene.render();
        });

        window.addEventListener("resize", () => {
          engine.resize();
        });

        console.log("Babylon.js scéna vytvořena!");
      });
    }

    // Test TensorFlow.js - jednoduchý model pro učení
    if (name === "TensorFlow.js" && window.tf) {
      console.log("TensorFlow.js úspěšně načten!");

      const vstupy = window.tf.tensor([1, 2, 3, 4, 5]);
      const výstupy = window.tf.tensor([2, 4, 6, 8, 10]);

      const model = window.tf.sequential();
      model.add(window.tf.layers.dense({ units: 1, inputShape: [1] }));

      model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

      model.fit(vstupy, výstupy, { epochs: 100 }).then(() => {
        console.log("Model úspěšně natrénován!");

        const testData = window.tf.tensor([6, 7, 8]);
        const prediction = model.predict(testData);
        prediction.print();

        prediction.data().then((values) => {
          document.getElementById("tensorflow-test").innerHTML = `
            <strong>Test TensorFlow.js:</strong> Neuronová síť se učí jednoduchou lineární funkci x * 2 a předpovídá výstup pro nová čísla.<br>
            <strong>Model se naučil vztah: x * 2</strong><br>
            <strong>Predikce pro [6, 7, 8]:</strong> ${values
              .map((v) => v.toFixed(2))
              .join(", ")}
            `;
        });
      });
    }

    // Test Chart.js - vykreslení grafu
    if (name === "Chart.js" && window.Chart && !chartInitialized) {
      setTimeout(() => {
        const ctx = canvasRef.current.getContext("2d");
        new window.Chart(ctx, {
          type: "line",
          data: {
            labels: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen"],
            datasets: [
              {
                label: "Růst návštěvnosti (v tisících)",
                data: [1, 3, 2, 4, 4.5, 5],
                borderColor: "#007bff",
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: "#007bff",
                tension: 0.3,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: "#333",
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Měsíce",
                  color: "#333",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Počet návštěvníků (v tisících)",
                  color: "#333",
                },
                beginAtZero: true,
              },
            },
          },
        });
        setChartInitialized(true);
      }, 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Testování CDN a vlastního hostingu | Web Optimizer</title>
      </Helmet>
      <section className="section-page">
        <h1 className="subpage-title">Testování CDN a vlastního hostingu</h1>
        <p className="section-text">
          Tento test měří dobu načítání souborů z různých CDN poskytovatelů a z
          vlastního hostingu. Kliknutím na tlačítko <strong>Načíst </strong>
          se soubor stáhne a vykoná test, ve kterém se ověří, zda byl soubor
          úspěšně načten.
        </p>

        <p className="section-text">
          <strong>Testujeme JavaScript knihovny:</strong>
        </p>

        <ul className="section-text">
          <li>
            <strong>Lodash</strong> – usnadňuje práci s poli, objekty a čísly.
          </li>
          <li>
            <strong>Chart.js</strong> – vizualizace dat pomocí grafů.
          </li>
          <li>
            <strong>TensorFlow.js</strong> – strojové učení přímo v prohlížeči.
          </li>
          <li>
            <strong>Babylon.js</strong> – 3D grafika a renderování scén ve
            WebGL.
          </li>
        </ul>

        <p className="section-text">
          Test porovnává rychlost načítání těchto knihoven z různých CDN (např.
          jsDelivr, cdnjs) a vlastního hostingu. Měříme dobu fetch a dobu onload
          souboru.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Vliv na metriky Core Web Vitals</h2>
        <p className="section-text">
          <strong>Largest Contentful Paint (LCP)</strong> – Pokud se velké
          knihovny načítají pomalu, může to zpomalit vykreslení hlavního obsahu
          stránky a zhoršit LCP.
        </p>

        <p className="section-text">
          <strong>First Input Delay (FID)</strong> – Zpoždění při načítání
          JavaScriptu může ovlivnit interaktivitu stránky, což způsobí delší
          odezvu na první uživatelskou akci.
        </p>

        <p className="section-text">
          <strong>Cumulative Layout Shift (CLS)</strong> – Pokud se knihovny
          načítají asynchronně bez správného prostorového rezervování, může
          dojít k nežádoucímu poskakování obsahu.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Jak číst časy fetch a onload?</h2>

        <p className="section-text">
          <strong>Fetch time</strong> – Doba, za kterou server odpoví na
          požadavek. Čím nižší číslo, tím rychlejší přístup k souboru.
        </p>

        <p className="section-text">
          <strong>Onload time</strong> – Doba, za kterou je soubor nejen stažen,
          ale i proveden (vykonán) a připraven k použití.
        </p>

        <p className="section-text">
          <strong>Proč je rozdíl mezi CDN a vlastním hostingem?</strong>{" "}
          Načítání z CDN zahrnuje kroky jako{" "}
          <strong>DNS lookup, SSL handshake a síťovou latenci</strong>. Vlastní
          hosting může být rychlejší, pokud je blíže k uživateli.
        </p>

        <p className="section-text">
          <strong>
            Proč mají soubory z CDN a vlastního hostingu různou velikost?
          </strong>{" "}
          CDN může poskytnout{" "}
          <strong>komprimovanou verzi (gzip, brotli, zstd)</strong>, zatímco
          vlastní hosting nemusí mít stejnou úroveň komprese. Také se může lišit
          způsob minifikace a optimalizace souborů mezi různými CDN.
        </p>

        <p className="section-text">
          <strong>Proč některé CDN načítají rychleji než jiné? </strong>
          Každá CDN má servery na různých místech. Rychlost závisí na tom, jak
          blízko je uživatel k danému uzlu a zda je soubor v keši daného
          serveru. Při prvním načtení může být soubor pomalejší, ale opakované
          načtení z keše bývá výrazně rychlejší.
        </p>

        <p className="section-text">
          <strong>Proč DevTools ukazuje jiný čas než aplikace? </strong>
          <strong>Network tab</strong> v DevTools zobrazuje hlavně{" "}
          <strong>fetch time</strong> – tedy dobu přenosu souboru přes síť. V
          aplikaci navíc měříme <strong>onload time</strong>, který zahrnuje i
          dobu zpracování skriptu.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">CDN Test</h2>
        <ul>
          {sources.map((source) =>
            source.cdnSources.map((cdn) => (
              <li
                key={`${source.name} (${cdn.provider})`}
                className="section-text">
                <p>
                  <strong>
                    {source.name} ({cdn.provider})
                  </strong>
                  :{" "}
                  {loadTimes[`${source.name} (${cdn.provider})`] ||
                    "Čeká na načtení"}
                </p>
                <button
                  onClick={() => testSource(source, cdn.url, cdn.provider)}
                  className="button">
                  Načíst
                </button>
              </li>
            ))
          )}
        </ul>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Lokální Test</h2>
        <ul>
          {sources
            .filter(
              (source) =>
                source.urlLocal && source.name !== "Neexistující knihovna"
            )
            .map((source) => (
              <li key={`${source.name} (Lokální)`} className="section-text">
                <p>
                  <strong>{source.name} (Lokální)</strong>:{" "}
                  {loadTimes[`${source.name} (Lokální)`] || "Čeká na načtení"}
                </p>
                <button
                  onClick={() => testSource(source, source.urlLocal, "Lokální")}
                  className="button">
                  Načíst
                </button>
              </li>
            ))}
        </ul>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Ověření načtení knihoven</h2>
        {Object.entries(loadedLibraries).map(([name, status]) => (
          <p key={name} className="section-text">
            <strong>{name}:</strong> {status ? "Načteno" : "Nenačteno"}
          </p>
        ))}
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Ověření funkcionality knihoven</h2>

        <p id="lodash-test" className="section-text">
          <strong>Test funkce Lodash:</strong> Vygeneruje náhodné číslo mezi 1 a
          100: <strong>{randomNumber}</strong>
        </p>

        <p id="chart-test" className="section-text">
          <strong>Test vykreslení grafu (Chart.js):</strong> Graf znázorňuje
          růst návštěvnosti v čase pomocí spojnicového grafu.
        </p>

        <canvas
          className="section-text"
          ref={canvasRef}
          style={{
            margin: "0 0 2rem",
            border: "1px solid black",
          }}></canvas>

        <p id="tensorflow-test" className="section-text">
          <strong>Test TensorFlow.js:</strong> Neuronová síť se učí jednoduchou
          lineární funkci <strong>x * 2</strong> a předpovídá výstup pro nová
          čísla.
        </p>

        <p id="babylon-test" className="section-text">
          <strong>Test Babylon.js:</strong> Vytvoří 3D scénu s otočnou kostkou
          vykreslenou pomocí WebGL.
        </p>

        <canvas
          id="babylon-canvas"
          style={{
            border: "1px solid black",
          }}></canvas>
      </section>
    </>
  );
};

export default CDNTesting;
