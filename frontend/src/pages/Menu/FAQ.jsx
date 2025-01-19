import React, { useState } from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Co je Core Web Vitals a proč jsou důležité?",
      answer:
        "Core Web Vitals jsou metriky vyvinuté Googlem pro měření klíčových aspektů uživatelského zážitku, jako jsou rychlost načítání (LCP), vizuální stabilita (CLS) a interaktivita (INP). Jsou důležité pro hodnocení stránek ve vyhledávačích i pro uživatelskou spokojenost.",
    },
    {
      question: "Jak mohu zrychlit načítání svého webu?",
      answer:
        "Mezi základní metody patří minifikace kódu, optimalizace obrázků, využití CDN, lazy loading a implementace cache. Tyto techniky mohou významně snížit dobu načítání stránky.",
    },
    {
      question: "Jaký nástroj použít pro měření výkonu webu?",
      answer:
        "Mezi oblíbené nástroje patří PageSpeed Insights, GTmetrix, WebPageTest, Pingdom Tools a Google Lighthouse. Každý z nich nabízí různé funkce a doporučení pro zlepšení výkonu.",
    },
    {
      question: "Proč je vizuální stabilita stránky důležitá?",
      answer:
        "Vizuální stabilita zajišťuje, že se obsah stránky při načítání nepohybuje. Tento problém může být frustrující pro uživatele, zejména pokud omylem kliknou na nesprávné místo. Metrika CLS (Cumulative Layout Shift) hodnotí tento aspekt.",
    },
    {
      question: "Co je lazy loading a kdy ho použít?",
      answer:
        "Lazy loading je technika, která načítá obrázky a další zdroje pouze tehdy, když se blíží k zobrazení ve výřezu uživatele. Je ideální pro stránky s velkým množstvím obrázků nebo dlouhým obsahem.",
    },
    {
      question: "Jak ovlivňuje velikost obrázků výkon webu?",
      answer:
        "Velké a neoptimalizované obrázky zpomalují načítání stránky. Používání moderních formátů jako WebP nebo AVIF, stejně jako komprese a správná velikost obrázků, mohou výrazně zlepšit výkon.",
    },
    {
      question: "Jak mohu testovat výkon webu na mobilních zařízeních?",
      answer:
        "Kromě standardních nástrojů, jako je Lighthouse či PageSpeed Insights, můžete využít Chrome DevTools Mobile Emulation nebo pokročilejší nástroje pro simulaci různých zařízení a rychlostí připojení (3G, 4G). Tak lépe zjistíte, jak se váš web chová při slabším signálu a na méně výkonných zařízeních.",
    },
    {
      question:
        "Jak mohu optimalizovat JavaScript a CSS pro rychlejší načítání?",
      answer:
        "Minimalizujte a komprimujte své soubory, využijte code splitting, lazy loading skriptů a odkládání nepotřebných stylů či knihoven. Rozdělením kódu do menších částí docílíte rychlejšího načtení toho, co je nezbytné pro první vykreslení stránky.",
    },
    {
      question: "Jakou roli hraje hosting a server při výkonu webu?",
      answer:
        "Kvalita hostingu a konfigurace serveru může mít značný vliv na rychlost webu. Například nasazení HTTP/2, využití kvalitní CDN, vhodné nastavení cache na straně serveru či moderní verze PHP či Node.js mohou výrazně zkrátit dobu odezvy.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="section-page flex">
        <div className="left-col">
          <h1 className="subpage-title">
            Co vás zajímá ohledně rychlosti a optimalizace
          </h1>
        </div>

        <div className="right-col">
          <FadeInOnScroll className="section-description">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={index}>
                  <div
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}>
                    {faq.question}
                    <span className="faq-icon">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
