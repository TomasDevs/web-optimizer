import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestButton from "../../components/UI/TestButton";
import LazyLoadingExample from "../../components/UI/LazyLoadingExample";

const LazyLoading = () => {
  return (
    <>
      <Helmet>
        <title>Lazy Loading | Web Optimizer</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">
          Lazy Loading: Efektivní načítání obrázků
        </h1>

        <p className="section-text">
          Lazy loading je technika, která zpožďuje načítání obrázků, dokud
          nejsou v zorném poli uživatele. To pomáhá zrychlit načítání stránky a
          snížit množství přenesených dat.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Jak funguje Lazy Loading?</h2>
        <p className="section-text">
          Prohlížeč standardně načítá obrázky s atributem{" "}
          <code>loading="eager"</code>, což znamená, že obrázky jsou načteny
          okamžitě po načtení stránky, bez ohledu na jejich viditelnost. Naopak
          atribut <code>loading="lazy"</code> odloží načítání obrázků, dokud
          nejsou v zorném poli uživatele. Atribut <code>loading="auto"</code>{" "}
          nechává rozhodnutí na prohlížeči, který obvykle používá eager
          načítání.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Kdy použít jednotlivé režimy?</h2>

        <p className="section-text">
          Atribut <strong>loading="eager"</strong> se hodí pro důležité obrázky,
          například nad skládacím (fold) nebo v kritické cestě vykreslování
          stránky. Tyto obrázky by měly být načteny co nejdříve pro zlepšení
          metrik, jako je <strong>Largest Contentful Paint (LCP)</strong>.
          Naopak <strong>loading="lazy"</strong> je vhodné pro obrázky mimo
          viditelnou oblast stránky, aby se zbytečně nezvyšovala velikost
          stránky při prvním načtení.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Proč používat lazy loading?</h2>

        <p className="section-text">
          Lazy loading zlepšuje výkon stránek tím, že: <br />
          <strong>Zrychluje načítání:</strong> Snižuje počáteční velikost
          stránky a zrychluje vykreslení. <br />
          <strong>Šetří data:</strong> Obrázky, které nejsou v zorném poli, se
          nenačítají, což snižuje přenos dat.{" "}
          <strong>Zlepšuje uživatelský zážitek:</strong> Stránka je rychleji
          interaktivní a působí svižnějším dojmem.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <LazyLoadingExample />
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování lazy loading</h2>

        <p className="section-text">
          Chcete-li otestovat, jak lazy loading ovlivňuje výkon načítání
          obrázků, přejděte na testovací stránku.
        </p>

        <TestButton
          to="/testovani/lazy-loading"
          label="Testování lazy loading"
          className="-bottom"
        />
      </FadeInOnScroll>
    </>
  );
};

export default LazyLoading;
