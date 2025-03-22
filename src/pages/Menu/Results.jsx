import React, { useState } from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Info } from "lucide-react";

const Results = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data pro Core Web Vitals na různých zařízeních
  const devicePerformanceData = [
    {
      name: "Střední PC",
      LCP_Unopt: 3360,
      LCP_Opt: 448,
      CLS_Unopt: 0.332 * 1000,
      CLS_Opt: 0.014 * 1000,
      INP_Unopt: 2376,
      INP_Opt: 64,
    },
    {
      name: "Mac M3",
      LCP_Unopt: 2692,
      LCP_Opt: 420,
      CLS_Unopt: 0.33 * 1000,
      CLS_Opt: 0.001 * 1000,
      INP_Unopt: 688,
      INP_Opt: 48,
    },
    {
      name: "Starý PC",
      LCP_Unopt: 3790,
      LCP_Opt: 1264,
      CLS_Unopt: 0.42 * 1000,
      CLS_Opt: 0.03 * 1000,
      INP_Unopt: 5776,
      INP_Opt: 464,
    },
  ];

  // Data pro Core Web Vitals (Lighthouse)
  const lighthousePerformanceData = [
    {
      name: "Střední PC",
      LCP_Unopt: 10100,
      LCP_Opt: 448,
      CLS_Unopt: 0.273 * 1000,
      CLS_Opt: 0.014 * 1000,
      INP_Unopt: 1060,
      INP_Opt: 64,
    },
    {
      name: "Mac M3",
      LCP_Unopt: 8500,
      LCP_Opt: 900,
      CLS_Unopt: 0.367 * 1000,
      CLS_Opt: 0.003 * 1000,
      INP_Unopt: 710,
      INP_Opt: 32,
    },
    {
      name: "Starý PC",
      LCP_Unopt: 15500,
      LCP_Opt: 2300,
      CLS_Unopt: 0.45 * 1000,
      CLS_Opt: 0.04 * 1000,
      INP_Unopt: 6000,
      INP_Opt: 500,
    },
  ];

  // Data pro INP na mobilních zařízeních
  const mobileInpData = [
    {
      name: "iPhone 13",
      Fibonacci_Unopt: 1432,
      Fibonacci_Opt: 0.01,
      Form_Unopt: 672,
      Form_Opt: 0.01,
    },
    {
      name: "Lenovo P20",
      Fibonacci_Unopt: 17658,
      Fibonacci_Opt: 0.4,
      Form_Unopt: 7556,
      Form_Opt: 0.4,
    },
    {
      name: "Xiaomi",
      Fibonacci_Unopt: 7426.6,
      Fibonacci_Opt: 0.1,
      Form_Unopt: 2744.4,
      Form_Opt: 0.1,
    },
    {
      name: "Dell PC",
      Fibonacci_Unopt: 2523.5,
      Fibonacci_Opt: 0.2,
      Form_Unopt: 952,
      Form_Opt: 0.1,
    },
    {
      name: "Mac M3",
      Fibonacci_Unopt: 1739,
      Fibonacci_Opt: 0.1,
      Form_Unopt: 571.3,
      Form_Opt: 0.1,
    },
    {
      name: "Starý PC",
      Fibonacci_Unopt: 6742.4,
      Fibonacci_Opt: 0.2,
      Form_Unopt: 2574.9,
      Form_Opt: 0.1,
    },
  ];

  // Data pro vliv rychlosti připojení
  const connectionSpeedData = [
    {
      name: "PC 4G",
      Unoptimized: 4.8,
      Optimized: 2.5,
    },
    {
      name: "PC 3G",
      Unoptimized: 20.9,
      Optimized: 4.6,
    },
    {
      name: "iPhone 4G",
      Unoptimized: 5.1,
      Optimized: 1.8,
    },
    {
      name: "iPhone 3G",
      Unoptimized: 23.1,
      Optimized: 5.2,
    },
  ];

  // Data pro CDN test
  const cdnComparisonData = [
    {
      name: "Lodash",
      CDN_jsDelivr: 86.9,
      CDN_cdnjs: 81.1,
      Local: 256,
      Cached_jsDelivr: 49.6,
      Cached_cdnjs: 30.3,
      Cached_Local: 26.3,
      Onload_jsDelivr: 61.5,
      Onload_cdnjs: 77.5,
      Onload_Local: 62.9,
      Cached_Onload_jsDelivr: 8.7,
      Cached_Onload_cdnjs: 9.3,
      Cached_Onload_Local: 35.5,
      Size: 71.3,
    },
    {
      name: "Chart.js",
      CDN_jsDelivr: 31.1,
      CDN_cdnjs: 30.6,
      Local: 375.7,
      Cached_jsDelivr: 29.8,
      Cached_cdnjs: 40.4,
      Cached_Local: 29.3,
      Onload_jsDelivr: 46.1,
      Onload_cdnjs: 91.8,
      Onload_Local: 43.6,
      Cached_Onload_jsDelivr: 20.3,
      Cached_Onload_cdnjs: 20.0,
      Cached_Onload_Local: 36.9,
      Size: 201.06,
    },
    {
      name: "TensorFlow",
      CDN_jsDelivr: 41,
      CDN_cdnjs: 758.7,
      Local: 229.7,
      Cached_jsDelivr: 24.2,
      Cached_cdnjs: 28.2,
      Cached_Local: 53.9,
      Onload_jsDelivr: 208.9,
      Onload_cdnjs: 229.2,
      Onload_Local: 195.6,
      Cached_Onload_jsDelivr: 176.8,
      Cached_Onload_cdnjs: 136.8,
      Cached_Onload_Local: 168.8,
      Size: 1427.01,
    },
    {
      name: "Babylon.js",
      CDN_jsDelivr: 694.5,
      CDN_cdnjs: 88.3,
      Local: 274.1,
      Cached_jsDelivr: 50.8,
      Cached_cdnjs: 30.1,
      Cached_Local: 24.1,
      Onload_jsDelivr: 170.0,
      Onload_cdnjs: 409.9,
      Onload_Local: 441.5,
      Cached_Onload_jsDelivr: 170.5,
      Cached_Onload_cdnjs: 46.5,
      Cached_Onload_Local: 220.6,
      Size: 4718.33,
    },
  ];

  // Data pro API testy
  const apiPerformanceData = [
    {
      name: "Crypto Prices",
      First: 257.5,
      Second: 17.5,
      Cache: "Povoleno (30s)",
      Compression: 0,
      Size: "51 B",
      Improvement: 92.8,
    },
    {
      name: "Dog Breeds",
      First: 200.2,
      Second: 14.5,
      Cache: "Povoleno (1800s)",
      Compression: 56.8,
      Size: "2.34 kB",
      Improvement: 92.3,
    },
    {
      name: "GitHub Users",
      First: 234.1,
      Second: 12.7,
      Cache: "Povoleno (60s)",
      Compression: 0,
      Size: "30.16 kB",
      Improvement: 94.0,
    },
    {
      name: "Countries",
      First: 456.7,
      Second: 16.1,
      Cache: "Povoleno (31556926s)",
      Compression: 79.2,
      Size: "161.57 kB",
      Improvement: 96.1,
    },
    {
      name: "Pokemon API",
      First: 295.4,
      Second: 14.3,
      Cache: "Povoleno (86400s)",
      Compression: 87,
      Size: "65.33 kB",
      Improvement: 94.6,
    },
    {
      name: "Random Users",
      First: 589.3,
      Second: 401.7,
      Cache: "Zakázáno",
      Compression: 0,
      Size: "1.03 MB",
      Improvement: 31.8,
    },
    {
      name: "Cat Fact",
      First: 236.4,
      Second: 154.1,
      Cache: "Zakázáno",
      Compression: 0,
      Size: "177 B",
      Improvement: 34.7,
    },
    {
      name: "Programming Books",
      First: 2671.4,
      Second: 1214.9,
      Cache: "Není nastaveno",
      Compression: 0,
      Size: "20.40 kB",
      Improvement: 54.5,
    },
  ];

  // Data pro konkrétní testy optimalizace
  const specificTestsData = [
    {
      name: "Fibonacci výpočet",
      Unopt: 3049.8,
      Opt: 0.1,
      Improvement: 99.997,
      Type: "INP",
    },
    {
      name: "Odeslání formuláře",
      Unopt: 1013.0,
      Opt: 0.1,
      Improvement: 99.99,
      Type: "INP",
    },
    {
      name: "Galerie obrázků",
      Unopt: 0.048 * 1000,
      Opt: 0.014 * 1000,
      Improvement: 70.8,
      Type: "CLS",
    },
    {
      name: "Reklamy",
      Unopt: 0.108 * 1000,
      Opt: 0.001 * 1000,
      Improvement: 99.1,
      Type: "CLS",
    },
    {
      name: "Dynamický obsah",
      Unopt: 0.087 * 1000,
      Opt: 0.001 * 1000,
      Improvement: 98.9,
      Type: "CLS",
    },
    {
      name: "Fonty",
      Unopt: 0.023 * 1000,
      Opt: 0.011 * 1000,
      Improvement: 52.2,
      Type: "CLS",
    },
  ];

  // Data pro LCP v různých nástrojích
  const lcpToolsData = [
    {
      name: "Web-vitals knihovna",
      Unopt: 1130,
      Opt: 590,
      Improvement: 47.8,
    },
    {
      name: "PageSpeed Insights API",
      Unopt: 3200,
      Opt: 1000,
      Improvement: 68.8,
    },
    {
      name: "PageSpeed Insights",
      Unopt: 3300,
      Opt: 1100,
      Improvement: 66.7,
    },
    {
      name: "GTmetrix - Londýn",
      Unopt: 1300,
      Opt: 740,
      Improvement: 43.1,
    },
    {
      name: "GTmetrix - San Antonio",
      Unopt: 1700,
      Opt: 1300,
      Improvement: 23.5,
    },
    {
      name: "GTmetrix - Hong Kong",
      Unopt: 3200,
      Opt: 2900,
      Improvement: 9.4,
    },
    {
      name: "GTmetrix - Sydney",
      Unopt: 4400,
      Opt: 1600,
      Improvement: 63.6,
    },
    {
      name: "WebPageTest - Londýn",
      Unopt: 6720,
      Opt: 1970,
      Improvement: 70.7,
    },
    {
      name: "WebPageTest - Virginia",
      Unopt: 6730,
      Opt: 1410,
      Improvement: 79.0,
    },
    {
      name: "WebPageTest - Hong Kong",
      Unopt: 7990,
      Opt: 2380,
      Improvement: 70.2,
    },
    {
      name: "WebPageTest - Sydney",
      Unopt: 6800,
      Opt: 1470,
      Improvement: 78.4,
    },
    {
      name: "Chrome DevTools",
      Unopt: 1150,
      Opt: 540,
      Improvement: 53.0,
    },
  ];

  const tabs = [
    "Vliv hardwaru",
    "LCP testy v nástrojích",
    "Mobilní zařízení",
    "Rychlost připojení",
    "CDN",
    "API",
    "Specifické testy",
  ];

  return (
    <div className="resullts-page">
      <Helmet>
        <title>Výsledky testování | Web Optimizer</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Výsledky testování optimalizací</h1>
        <p className="section-text">
          Tato stránka prezentuje klíčové výsledky z testování optimalizačních
          technik na různých zařízeních a v různých podmínkách. Grafy ukazují
          srovnání optimalizované a neoptimalizované verze aplikace, které byly
          získány pomocí testovací platformy vyvinuté v rámci bakalářské práce.
        </p>
      </FadeInOnScroll>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabs__item ${
              activeTab === index ? "tabs__item--active" : ""
            }`}
            onClick={() => setActiveTab(index)}>
            {tab}
          </button>
        ))}
      </div>

      <div className="info" style={{ marginTop: "0.5rem" }}>
        <p>
          Použijte záložky výše pro navigaci mezi jednotlivými testy a datovými
          sadami.
        </p>
      </div>

      <div className="tabs-content">
        {activeTab === 0 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">
              Vliv hardwaru na Core Web Vitals
            </h2>
            <p className="section-text">
              Graf znázorňuje vliv hardwarové konfigurace na metriky Core Web
              Vitals měřené pomocí knihovny web-vitals. Testování probíhalo na
              třech různých počítačích: středně výkonném PC s 16GB RAM a SSD,
              výkonném MacBooku Air M3 a starším PC s 4GB RAM a HDD.
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                Largest Contentful Paint (LCP)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={devicePerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="LCP_Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="LCP_Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Cumulative Layout Shift (CLS)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={devicePerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="CLS_Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="CLS_Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Interaction to Next Paint (INP)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={devicePerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="INP_Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="INP_Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Procentuální zlepšení po optimalizaci
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    { name: "Střední PC", LCP: 86.7, CLS: 95.8, INP: 97.3 },
                    { name: "Mac M3", LCP: 84.4, CLS: 99.7, INP: 93.0 },
                    { name: "Starý PC", LCP: 66.65, CLS: 92.9, INP: 92.0 },
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, "Zlepšení"]} />
                  <Legend />
                  <Bar dataKey="LCP" name="LCP zlepšení" fill="#96c291" />
                  <Bar dataKey="CLS" name="CLS zlepšení" fill="#f0a202" />
                  <Bar dataKey="INP" name="INP zlepšení" fill="#7d5ba6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                Hardwarová konfigurace má zásadní vliv zejména na INP. Starší
                zařízení s HDD vykazují výrazně horší výkon při zpracování
                JavaScript kódu. Zajímavé je, že LCP hodnoty jsou méně závislé
                na hardwaru, což naznačuje, že jsou více ovlivněny rychlostí
                připojení než výkonem procesoru. Optimalizace přinášejí
                konzistentní zlepšení napříč všemi zařízeními, přičemž
                procentuální zlepšení je nejvýraznější u interaktivity (INP) a
                stability layoutu (CLS).
              </p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">Test LCP stránky (Desktop)</h2>
            <p className="section-text">
              Testování bylo provedeno na URL adrese{" "}
              <a
                href="https://web-optimizer.netlify.app/testovani/lcp-testing"
                className="highlight-link -external">
                web-optimizer.netlify.app/testovani/lcp-testing
              </a>
              , kde LCP prvkem je hlavní hero obrázek. Grafy zobrazují porovnání
              naměřených hodnot LCP pomocí různých nástrojů a z různých
              geografických lokalit.
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                LCP v různých testovacích nástrojích (ms)
              </h3>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  data={lcpToolsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis unit=" ms" />
                  <Tooltip
                    formatter={(value) => [`${value} ms`, "Doba načítání"]}
                  />
                  <Legend />
                  <Bar
                    dataKey="Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Procentuální zlepšení LCP po optimalizaci podle nástrojů
              </h3>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  data={lcpToolsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis unit="%" domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, "Zlepšení"]} />
                  <Legend />
                  <Bar
                    dataKey="Improvement"
                    name="Procentuální zlepšení"
                    fill="#96c291"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Srovnání LCP podle lokality testovacího serveru (WebPageTest)
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={lcpToolsData.filter((item) =>
                    item.name.includes("WebPageTest")
                  )}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit=" ms" />
                  <Tooltip
                    formatter={(value) => [`${value} ms`, "Doba načítání"]}
                  />
                  <Legend />
                  <Bar
                    dataKey="Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                Testování v různých nástrojích ukázalo výrazné rozdíly v
                naměřených hodnotách LCP. Zatímco lokální nástroje jako
                Web-vitals knihovna nebo Chrome DevTools naměřily rychlejší časy
                načítání, nástroje testující z geograficky vzdálených lokalit
                jako WebPageTest ukázaly výrazně pomalejší LCP. Nejzajímavější
                je, že optimalizace přinesly konzistentní zlepšení ve všech
                nástrojích, i když s různou mírou efektivity.
              </p>
              <p>
                Zlepšení je nejméně patrné v Hong Kongu (9.4%), což může být
                způsobeno latencí sítě, která se optimalizacemi obtížně
                eliminuje. Naopak největší zlepšení bylo zaznamenáno ve Virginii
                (79%) a Sydney (78.4%), což naznačuje, že lokální optimalizace
                mají významný dopad i při přístupu ze vzdálených lokací.
              </p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">Mobilní zařízení vs. PC</h2>
            <p className="section-text">
              Porovnání výkonu mobilních zařízení a počítačů při zpracování
              náročných JavaScript úloh. Testování bylo provedeno na iPhone 13,
              Lenovo P20 lite a běžném Xiaomi telefonu. Pro srovnání jsou
              uvedeny i výsledky z PC.
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                INP - Fibonacci výpočet (logaritmické měřítko)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={mobileInpData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis scale="log" domain={[0.01, 40000]} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Fibonacci_Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Fibonacci_Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                INP - Odeslání formuláře (logaritmické měřítko)
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={mobileInpData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis scale="log" domain={[0.01, 10000]} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Form_Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Form_Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                Mobilní zařízení střední třídy jsou dramaticky ovlivněna
                neoptimalizovaným kódem. Na Lenovo P20 lite trvá
                neoptimalizovaný Fibonacci výpočet přes 17 sekund, zatímco
                optimalizovaná verze je téměř okamžitá. iPhone 13 dosahuje
                hodnot srovnatelných s výkonným MacBookem, zatímco Android
                zařízení střední třídy jsou výrazně pomalejší. Asynchronní
                zpracování JavaScriptu je proto klíčovou optimalizací pro
                mobilní zařízení.
              </p>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">Vliv rychlosti připojení</h2>
            <p className="section-text">
              Testování vlivu rychlosti připojení na metriku LCP (Largest
              Contentful Paint). Testy byly provedeny pomocí GTmetrix s
              nastavením 3G a 4G připojení na PC a iPhone 13.
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                LCP při různých rychlostech připojení (s)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={connectionSpeedData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Unoptimized"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Optimized"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                Rychlost připojení má dramatický dopad na LCP, zejména u
                neoptimalizované verze. Při přechodu z 4G na 3G se LCP
                neoptimalizované verze zhoršuje více než čtyřnásobně (z ~5s na
                ~23s). Optimalizovaná verze je mnohem méně citlivá na změnu
                rychlosti připojení a poskytuje konzistentní výkon i na pomalých
                sítích. Tyto výsledky jasně demonstrují důležitost optimalizací
                pro uživatele s pomalejším připojením.
              </p>
            </div>
          </div>
        )}

        {activeTab === 4 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">Testování vlivu CDN</h2>
            <p className="section-text">
              Porovnání rychlosti načítání JavaScriptových knihoven z různých
              CDN poskytovatelů (jsDelivr, cdnjs) a z lokálního hostingu. Grafy
              zobrazují časy prvního načtení (Fetch) a načtení při zapnutém
              cachování. Testováno bylo pro knihovny různých velikostí od malých
              (Lodash) až po extrémně velké (Babylon.js).
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                Rychlost načítání knihoven z různých zdrojů - Fetch (ms)
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={cdnComparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis type="number" domain={[0, 1100]} />
                  <Tooltip
                    formatter={(value) => [`${value} ms`, "Doba načítání"]}
                  />
                  <Legend />
                  <Bar dataKey="CDN_jsDelivr" name="jsDelivr" fill="#ff7d7d" />
                  <Bar dataKey="CDN_cdnjs" name="cdnjs" fill="#5e7dff" />
                  <Bar dataKey="Local" name="Lokální" fill="#96c291" />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Rychlost načítání knihoven z cache - Fetch (ms)
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={cdnComparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 60]} />
                  <Tooltip
                    formatter={(value) => [`${value} ms`, "Doba načítání"]}
                  />
                  <Legend />
                  <Bar
                    dataKey="Cached_jsDelivr"
                    name="jsDelivr (cache)"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Cached_cdnjs"
                    name="cdnjs (cache)"
                    fill="#5e7dff"
                  />
                  <Bar
                    dataKey="Cached_Local"
                    name="Lokální (cache)"
                    fill="#96c291"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Velikost testovaných knihoven (KB)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={cdnComparisonData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit=" KB" />
                  <Tooltip formatter={(value) => [`${value} KB`, "Velikost"]} />
                  <Legend />
                  <Bar dataKey="Size" name="Velikost knihovny" fill="#7d5ba6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                Při prvním načtení jsou CDN obecně rychlejší než lokální hosting
                pro menší knihovny (Lodash.js, Chart.js), zatímco pro velké
                knihovny (TensorFlow.js, Babylon.js) může být lokální hosting
                překvapivě efektivnější. Zajímavým zjištěním je rozdíl v době
                načítání Babylon.js (694.5 ms z jsDelivr vs. 274 ms z lokálního
                hostingu), který ukazuje na variabilitu výkonu CDN. Při
                cachovaném načtení jsou výkonnostní rozdíly mezi CDN a lokálním
                hostingem minimální, což podtrhuje význam správně nastaveného
                cachování pro opakované návštěvy.
              </p>
            </div>
          </div>
        )}

        {activeTab === 5 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">Testování výkonu API</h2>
            <p className="section-text">
              Porovnání rychlosti odezvy různých veřejných API při prvním a
              druhém volání. Grafy ukazují vliv cachování na rychlost odpovědi,
              míru komprese dat a celkové zlepšení při opakovaném volání.
              Rozšířený test zahrnuje 8 různých API s různými charakteristikami.
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                Rychlost odezvy API (TTFB) při prvním a druhém volání (ms)
              </h3>
              <ResponsiveContainer width="100%" height={450}>
                <BarChart
                  data={apiPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`${value} ms`, "Doba odezvy"]}
                  />
                  <Legend />
                  <Bar dataKey="First" name="První volání" fill="#ff7d7d" />
                  <Bar dataKey="Second" name="Druhé volání" fill="#5e7dff" />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Procentuální zlepšení při opakovaném volání
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={apiPerformanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis unit="%" domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, "Zlepšení"]} />
                  <Legend />
                  <Bar
                    dataKey="Improvement"
                    name="Míra zlepšení"
                    fill="#7d5ba6"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Komprese dat u API (%)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={apiPerformanceData.filter(
                    (item) => item.Compression > 0
                  )}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} unit="%" />
                  <Tooltip formatter={(value) => [`${value}%`, "Komprese"]} />
                  <Legend />
                  <Bar
                    dataKey="Compression"
                    name="Míra komprese"
                    fill="#96c291"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                U endpointů s povoleným cachováním je zlepšení při druhém volání
                výrazně vyšší (průměrně 93%) oproti API bez cachování (průměrně
                45%). Největší kompresi vykazuje Pokemon API (87%), což výrazně
                zrychluje přenos dat. Cachování API odpovědí je jednou z
                nejefektivnějších optimalizací pro zlepšení responzivity
                aplikace, zvláště u opakovaně načítaných dat.
              </p>
            </div>
          </div>
        )}

        {activeTab === 6 && (
          <div className="tab-panel">
            <h2 className="section-subtitle">Specifické testy optimalizace</h2>
            <p className="section-text">
              Výsledky testů zaměřených na konkrétní optimalizace pro INP a CLS
              metriky. Grafy ukazují porovnání neoptimalizované a optimalizované
              verze pro různé běžné scénáře webu jako zpracování formulářů,
              JavaScriptových výpočtů, práce s reklamami nebo dynamickým
              obsahem.
            </p>

            <div className="chart-container">
              <h3 className="section-subtitle -small">
                Testy optimalizace pro INP (ms)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={specificTestsData.filter((item) => item.Type === "INP")}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis type="number" domain={[0, 3500]} />
                  <Tooltip
                    formatter={(value) => [`${value} ms`, "Doba interakce"]}
                  />
                  <Legend />
                  <Bar
                    dataKey="Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Testy optimalizace pro CLS
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={specificTestsData.filter((item) => item.Type === "CLS")}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Unopt"
                    name="Neoptimalizovaná verze"
                    fill="#ff7d7d"
                  />
                  <Bar
                    dataKey="Opt"
                    name="Optimalizovaná verze"
                    fill="#5e7dff"
                  />
                </BarChart>
              </ResponsiveContainer>

              <h3 className="section-subtitle -small">
                Procentuální zlepšení u testovaných scénářů
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={specificTestsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, "Zlepšení"]} />
                  <Legend />
                  <Bar
                    dataKey="Improvement"
                    name="Procentuální zlepšení"
                    fill="#96c291"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="info">
              <h3 className="section-subtitle -small">Klíčové zjištění</h3>
              <p>
                Nejdramatičtější zlepšení bylo zaznamenáno u JavaScriptových
                výpočtů (Fibonacci test), kde optimalizace pomocí asynchronního
                zpracování přinesla téměř stoprocentní zlepšení (99,997%). U CLS
                testů byl největší efekt pozorován při optimalizaci reklam a
                dynamického obsahu, kde rezervace prostoru v layoutu eliminovala
                nežádoucí posuny.
              </p>
              <p>
                Výsledky testů jasně ukazují, že způsob implementace konkrétních
                prvků webu má zásadní vliv na Core Web Vitals metriky, a tím i
                na uživatelský zážitek.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="info">
        <h2 className="section-subtitle">Závěr</h2>
        <p>
          Provedené testy jasně ukazují, že optimalizace mají zásadní vliv na
          výkon webových aplikací ve všech testovaných podmínkách. Největší
          přínos má asynchronní zpracování JavaScriptu, optimalizace obrázků a
          správné nastavení rezervace prostoru pro dynamicky načítaný obsah.
        </p>
        <p>
          Optimalizace jsou obzvláště důležité pro mobilní zařízení a pomalá
          připojení, kde mohou změnit aplikaci z nepoužitelné na plynulou. U
          moderních webových aplikací představují tyto optimalizace klíčový
          faktor pro zajištění dobré uživatelské zkušenosti.
        </p>
      </div>
    </div>
  );
};

export default Results;
