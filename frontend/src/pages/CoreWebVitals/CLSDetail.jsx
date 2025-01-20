import React from "react";
import { Link } from "react-router-dom";
import TipBlock from "../../components/TipBlock";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const CLSDetail = () => {
  return (
    <div className="page cls-detail-page">
      <FadeInOnScroll className="section-description">
        <h1 className="subpage-title">Cumulative Layout Shift (CLS)</h1>
        <p className="section-text">
          Metrika <strong>Cumulative Layout Shift (CLS)</strong> sleduje
          vizuální stabilitu stránky během načítání. Pokud se prvky na stránce
          pohybují nebo posouvají, může to uživatele zmást a vést ke špatnému
          uživatelskému zážitku. Podle doporučení Googlu by hodnota CLS měla být
          nižší než <strong>0,1</strong>.
        </p>

        <p className="section-text">
          Níže najdete praktické tipy a ukázky kódu, jak CLS snížit. Pokud vás
          zajímá více teorie, podívejte se na doporučené články ve spodní části
          stránky.
        </p>
      </FadeInOnScroll>

      <TipBlock
        title="Rezervace prostoru pro obrázky"
        content={[
          <>
            Pokud obrázky nemají definovanou šířku a výšku, může to způsobit
            posuny layoutu během načítání. Prohlížeč totiž neví, kolik prostoru
            má pro obrázek rezervovat.
          </>,
          <>
            <strong>Řešení:</strong> Vždy definujte atributy <code>width</code>{" "}
            a<code>height</code> pro každý obrázek, případně použijte CSS
            pravidlo
            <code>aspect-ratio</code>.
          </>,
          <>
            {" "}
            <pre>
              {`<img
  src="example.jpg"
  alt="Příklad obrázku"
  width="800"
  height="600"
  loading="lazy"
/>

.class {
    aspect-ratio: auto 16/9;
}`}
            </pre>
          </>,
          <>
            {" "}
            <strong>Tip:</strong> Pokud používáte dynamické obrázky, zajistěte,
            že server vrátí správné rozměry.
          </>,
        ]}
      />

      <TipBlock
        title="Správné načítání fontů"
        content={[
          <>
            Webové fonty mohou způsobit „flash“ efekt, kdy se text nejprve
            zobrazí ve výchozím fontu a poté se přepne na cílový font.
          </>,
          <>
            <strong>Řešení:</strong> Použijte atribut{" "}
            <code>font-display: swap</code>v definici fontu, aby byl text
            zobrazen co nejdříve.
          </>,
          <>
            {" "}
            <pre>
              {`@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-display: swap;
}`}
            </pre>
          </>,
        ]}
      />

      <TipBlock
        title="Reklamy a iframe prvky"
        content={[
          <>
            Pokud na stránce používáte reklamy nebo <code>iframe</code> prvky,
            měly by mít vždy pevně definovaný rozměr. Dynamická změna jejich
            velikosti může způsobit výrazné posuny layoutu.
          </>,
          <>
            <strong>Řešení:</strong> Rezervujte prostor pomocí CSS pravidel nebo
            atributů <code>width</code> a <code>height</code>.
          </>,
        ]}
      />

      <TipBlock
        title="Animace a přechody"
        content={[
          <>
            Použití animací nebo přechodů by mělo být plynulé a nemělo by vést k
            nečekaným posunům prvků.
          </>,
          <>
            <strong>Řešení:</strong> Používejte transformace jako
            <code>transform: translate()</code> namísto změn vlastností jako
            <code>top</code> nebo <code>margin</code>.
          </>,
        ]}
      />

      <TipBlock
        title="Odezva serveru a dynamické prvky"
        content={[
          <>
            Dynamicky načítané prvky, jako jsou produkty v e-shopu nebo
            komentáře, mohou způsobit vizuální posuny během načítání, protože
            nejsou ihned dostupné.
          </>,
          <>
            <strong>Řešení:</strong> Rezervujte místo pro tyto prvky ještě před
            tím, než se načtou data. Toho lze dosáhnout pomocí "placeholderů"
            nebo skeletonů, které vyplní prostor, dokud není k dispozici
            skutečný obsah.
          </>,
          <>
            <pre>{`<div class="skeleton"></div>

.skeleton {
    width: 100%;
    height: 200px;
    background: #f0f0f0;
}`}</pre>
          </>,
          <>
            Tímto způsobem zajistíte stabilitu layoutu a předejdete posunům
            prvků, jakmile se obsah načte.
          </>,
        ]}
      />

      <FadeInOnScroll className="section-description">
        <div className="section-text">
          <h2>Další zdroje o CLS</h2>
          <p>
            Podrobné informace najdete v článku na{" "}
            <a
              href="https://docs.pagespeed.cz/docs/cls-optimisation"
              className="highlight-link -external"
              target="_blank"
              rel="noopener noreferrer">
              docs.pagespeed.cz
            </a>{" "}
            nebo na stránce{" "}
            <a
              href="https://web.dev/cls/"
              className="highlight-link -external"
              target="_blank"
              rel="noopener noreferrer">
              web.dev
            </a>
            .
          </p>
          <p>
            Chcete zjistit, jak měřit tyto metriky? Navštivte stránku{" "}
            <Link to="/nastroje" className="highlight-link">
              nástroje
            </Link>
            , kde najdete podrobný přehled měřících nástrojů.
          </p>
        </div>

        <p className="section-text">
          <strong>Tip:</strong> Pro širší souvislosti o tom, jak rychlost
          ovlivňuje UX i SEO, navštivte{" "}
          <Link to="/core-web-vitals" className="highlight-link">
            Core Web Vitals
          </Link>{" "}
          nebo{" "}
          <Link to="/optimalizace" className="highlight-link">
            optimalizaci webu
          </Link>
          .
        </p>
      </FadeInOnScroll>
    </div>
  );
};

export default CLSDetail;
