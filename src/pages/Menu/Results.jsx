import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Results = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data pro Core Web Vitals na různých zařízeních
  const devicePerformanceData = [
    {
      name: "Střední PC",
      LCP_Unopt: 3360,
      LCP_Opt: 448,
      CLS_Unopt: 0.332,
      CLS_Opt: 0.014,
      INP_Unopt: 2376,
      INP_Opt: 64,
    },
    {
      name: "Výkonný Mac",
      LCP_Unopt: 2692,
      LCP_Opt: 420,
      CLS_Unopt: 0.33,
      CLS_Opt: 0.001,
      INP_Unopt: 688,
      INP_Opt: 48,
    },
    {
      name: "Starý PC",
      LCP_Unopt: 2590,
      LCP_Opt: 1264,
      CLS_Unopt: 0.42,
      CLS_Opt: 0.03,
      INP_Unopt: 5776,
      INP_Opt: 464,
    },
  ];

  // Data pro INP na mobilních zařízeních
  const mobileInpData = [
    {
      name: "iPhone 13",
      Fibonacci_Unopt: 1432,
      Fibonacci_Opt: 0,
      Form_Unopt: 672,
      Form_Opt: 0,
    },
    {
      name: "Lenovo P20",
      Fibonacci_Unopt: 33658,
      Fibonacci_Opt: 0.4,
      Form_Unopt: 8556,
      Form_Opt: 0.4,
    },
    {
      name: "Xiaomi",
      Fibonacci_Unopt: 7426.6,
      Fibonacci_Opt: 0.1,
      Form_Unopt: 2744.4,
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

  return (
    <div className="section-page">
      <Helmet>
        <title>Výsledky testování | Web Optimizer</title>
      </Helmet>

      <h1 className="page-title">Výsledky testování optimalizací</h1>
      <p className="section-text">
        Tato stránka prezentuje klíčové výsledky z testování optimalizačních
        technik na různých zařízeních a v různých podmínkách. Grafy ukazují
        srovnání optimalizované a neoptimalizované verze aplikace.
      </p>

      <Tabs
        selectedIndex={activeTab}
        onSelect={(index) => setActiveTab(index)}
        className="tabs-container">
        <TabList>
          <Tab>Vliv hardwaru</Tab>
          <Tab>Mobilní zařízení</Tab>
          <Tab>Rychlost připojení</Tab>
        </TabList>

        <TabPanel>
          <h2 className="section-subtitle">Vliv hardwaru na Core Web Vitals</h2>
          <p className="section-text">
            Graf znázorňuje vliv hardwarové konfigurace na metriky Core Web
            Vitals. Testování probíhalo na třech různých počítačích: středně
            výkonném PC s 16GB RAM a SSD, výkonném MacBooku Air M3 a starším PC
            s 4GB RAM a HDD.
          </p>

          <div className="chart-container">
            <h3>Largest Contentful Paint (LCP)</h3>
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
                  fill="#f87979"
                />
                <Bar
                  dataKey="LCP_Opt"
                  name="Optimalizovaná verze"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>

            <h3>Interaction to Next Paint (INP)</h3>
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
                  fill="#f87979"
                />
                <Bar
                  dataKey="INP_Opt"
                  name="Optimalizovaná verze"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="key-finding">
            <h3>Klíčové zjištění</h3>
            <p>
              Hardwarová konfigurace má zásadní vliv zejména na INP. Starší
              zařízení s HDD vykazují výrazně horší výkon při zpracování
              JavaScript kódu. Optimalizace však přinášejí konzistentní zlepšení
              napříč všemi zařízeními.
            </p>
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="section-subtitle">Mobilní zařízení vs. PC</h2>
          <p className="section-text">
            Porovnání výkonu mobilních zařízení a počítačů při zpracování
            náročných JavaScript úloh. Testování bylo provedeno na iPhone 13,
            Lenovo P20 lite a běžném Xiaomi telefonu.
          </p>

          <div className="chart-container">
            <h3>INP - Fibonacci výpočet (logaritmické měřítko)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={mobileInpData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis scale="log" domain={[0.1, 40000]} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="Fibonacci_Unopt"
                  name="Neoptimalizovaná verze"
                  fill="#f87979"
                />
                <Bar
                  dataKey="Fibonacci_Opt"
                  name="Optimalizovaná verze"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="key-finding">
            <h3>Klíčové zjištění</h3>
            <p>
              Mobilní zařízení střední třídy jsou dramaticky ovlivněna
              neoptimalizovaným kódem. Na Lenovo P20 lite trvá neoptimalizovaný
              Fibonacci výpočet přes 33 sekund, zatímco optimalizovaná verze je
              téměř okamžitá. Asynchronní zpracování JavaScriptu je proto
              klíčovou optimalizací pro mobilní zařízení.
            </p>
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="section-subtitle">Vliv rychlosti připojení</h2>
          <p className="section-text">
            Testování vlivu rychlosti připojení na metriku LCP (Largest
            Contentful Paint). Testy byly provedeny pomocí GTmetrix s nastavením
            3G a 4G připojení.
          </p>

          <div className="chart-container">
            <h3>LCP při různých rychlostech připojení (s)</h3>
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
                  fill="#f87979"
                />
                <Bar
                  dataKey="Optimized"
                  name="Optimalizovaná verze"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="key-finding">
            <h3>Klíčové zjištění</h3>
            <p>
              Rychlost připojení má dramatický dopad na LCP, zejména u
              neoptimalizované verze. Při přechodu z 4G na 3G se LCP
              neoptimalizované verze zhoršuje více než čtyřnásobně (z 5 na 23
              sekund). Optimalizovaná verze je mnohem méně citlivá na změnu
              rychlosti připojení.
            </p>
          </div>
        </TabPanel>
      </Tabs>

      <div className="conclusion-box">
        <h2>Závěr</h2>
        <p>
          Provedené testy jasně ukazují, že optimalizace mají zásadní vliv na
          výkon webových aplikací ve všech testovaných podmínkách. Největší
          přínos má asynchronní zpracování JavaScriptu, optimalizace obrázků a
          správné nastavení rezervace prostoru pro dynamicky načítaný obsah.
        </p>
        <p>
          Optimalizace jsou obzvláště důležité pro mobilní zařízení a pomalá
          připojení, kde mohou změnit aplikaci z nepoužitelné na plynulou.
        </p>
      </div>

      <div className="methodology-section">
        <h3>Metodika testování</h3>
        <p>
          Všechny testy byly provedeny na vlastní testovací aplikaci, která
          umožňuje přepínání mezi optimalizovanou a neoptimalizovanou verzí.
          Měření probíhalo pomocí knihovny web-vitals a nástroje Lighthouse.
          Každý test byl proveden minimálně třikrát a výsledky byly zprůměrovány
          pro eliminaci náhodných odchylek.
        </p>
      </div>
    </div>
  );
};

export default Results;
