import React from "react";
import { Link } from "react-router-dom";

const LCPDetail = () => {
  return (
    <div className="page lcp-detail-page">
      <h1 className="subpage-title">Largest Contentful Paint (LCP)</h1>

      <p className="section-text">
        Metrika <strong>Largest Contentful Paint (LCP)</strong> sleduje, za jak
        dlouho se uživateli zobrazí <em>největší prvek</em> ve viditelné oblasti
        stránky (obvykle hero obrázek, pozadí nebo výrazný nadpis). Podle
        doporučení Googlu by LCP mělo ideálně proběhnout do{" "}
        <strong>2,5 sekundy</strong>. Každé zdržení zvyšuje riziko, že uživatelé
        ztratí trpělivost a odejdou.
      </p>

      <p className="section-text">
        Níže najdete praktické tipy a ukázky kódu, jak LCP zlepšit. Pokud vás
        zajímá více teorie, mrkněte na praktické články v dolní části stránky.
      </p>

      <div className="tip-block">
        <h3>Optimalizace hlavního (LCP) prvku</h3>
        <p>
          V praxi bývá LCP elementem hero obrázek, banner, velký titulek nebo
          video. Prohlížeč vyhodnotí, co je „největší viditelný prvek“ v horní
          části stránky, a jeho načtení změří jako LCP.
        </p>
        <p>
          <strong>Rozměry a formát:</strong> Použijte moderní formáty jako{" "}
          <code>WebP</code>a <code>AVIF</code>, které jsou výrazně efektivnější
          než JPEG nebo PNG. Zmenšete rozlišení obrázku na skutečnou velikost
          zobrazovanou v layoutu. Pro konverzi obrázků můžete využít nástroj
          jako{" "}
          <a
            href="https://squoosh.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link -external">
            Squoosh
          </a>
          .
        </p>
        <p>
          <strong>Vyhněte se lazy loadingu:</strong> Pokud jde o hero obrázek
          nebo jiný klíčový vizuální prvek, nepoužívejte lazy loading. Naopak,
          prvky, které nejsou v horní části stránky, načítejte s atributem
          <code>loading="lazy"</code>.
        </p>
        <p>
          <strong>
            Použijte <code>&lt;img&gt;</code> místo{" "}
            <code>background-image</code>:
          </strong>{" "}
          Pokud je hlavní vizuální prvek stránky obrázek, měli byste ho raději
          vložit do HTML pomocí značky <code>&lt;img&gt;</code>. Prohlížeč tak
          může efektivněji vyhodnotit jeho načítání a prioritu, což má pozitivní
          dopad na LCP.
        </p>
        <p>
          <strong>Přednostní načítání:</strong> U hlavního (nad viditelnou částí
          stránky) obrázku použijte atribut <code>fetchpriority="high"</code>,
          aby měl prohlížeč vyšší prioritu při stahování.
        </p>
        <pre>
          {`<img
      src="hero.webp"
      alt="Hero obrázek"
      width="1200"
      height="600"
      fetchpriority="high"
    />`}
        </pre>
      </div>

      <div className="tip-block">
        <h3>Rychlá odezva serveru (TTFB)</h3>
        <p>
          <strong>TTFB (Time to First Byte)</strong> úzce souvisí s LCP. Pokud
          server reaguje pomalu, první bajty HTML dorazí se zpožděním a zdržuje
          se tak i vykreslení klíčového prvku.
        </p>
        <p>
          <strong>Kvalitní hosting:</strong> Vyberte hostingovou službu, která
          zaručuje nízkou latenci a vysokou dostupnost. Servery by měly být
          geograficky blízko hlavním uživatelům, aby se minimalizovala doba
          přenosu.
        </p>
        <p>
          <strong>CDN (Content Delivery Network):</strong> Použijte CDN ke
          zkrácení vzdálenosti mezi uživatelem a serverem. Statické soubory,
          jako jsou obrázky a skripty, mohou být načítány z uzlů blízkých
          uživateli, což výrazně zlepšuje TTFB.
        </p>
        <p>
          <strong>Cache:</strong> Implementujte serverovou cache pro dynamické
          stránky nebo API odpovědi. To zajišťuje rychlejší doručení obsahu bez
          nutnosti opakovaného generování.
        </p>
        <p>
          <strong>Moderní protokoly:</strong> Využijte <code>HTTP/2</code> nebo{" "}
          <code>HTTP/3</code>, které umožňují efektivnější přenos dat,
          multiplexing a nižší latenci ve srovnání s HTTP/1.1.
        </p>
        <p>
          <strong>Optimalizace databáze:</strong> Pokud vaše aplikace využívá
          databázi, zajistěte optimalizaci dotazů, indexů a případně použijte
          cache na úrovni databáze pro opakované dotazy.
        </p>
      </div>

      <div className="tip-block">
        <h3>Optimalizace CSS a fontů</h3>
        <p>
          Velké a blokující <code>CSS</code> může oddálit vykreslení LCP. Stejně
          tak fonty načítané bez předešlého definování stylu mohou zdržovat.
        </p>
        <p>
          <strong>Preload (zvýšení priority v hlavičce dokumentu):</strong>{" "}
          Pomocí tagu
          <code>&lt;link rel="preload"&gt;</code> lze zajistit, že prohlížeč
          začne stahovat důležité zdroje, jako jsou fonty, co nejdříve.
        </p>
        <pre>
          {`<link 
      rel="preload" 
      href="/fonts/my-custom-font.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin="anonymous"
    />`}
        </pre>
        <p>
          <strong>Umístění:</strong> Preload fontů by měl být umístěn co nejvýše
          v hlavičce
          <code>&lt;head&gt;</code>, ideálně před ostatními styly, aby měl
          nejvyšší prioritu.
        </p>
        <p>
          <strong>Lokální hostování vs. externí služby:</strong> Pokud je to
          možné, vždy preferujte lokální hostování fontů na vlastním serveru.
          Lokální fonty zvyšují rychlost načítání, umožňují subsetting a
          eliminují závislost na třetích stranách, jako je Google Fonts. Pro
          generování lokálních souborů z Google Fonts můžete využít nástroje
          jako{" "}
          <a
            href="https://google-webfonts-helper.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link -external">
            Google Web Fonts Helper
          </a>
          .
        </p>
        <p>
          <strong>Externí služby:</strong> Pokud se rozhodnete pro použití
          Google Fonts, doporučuje se přidat <code>preconnect</code> pro
          rychlejší spojení s jejich servery:
        </p>
        <pre>
          {`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">`}
        </pre>
        <p>
          Externí služby mohou být jednodušší na implementaci, ale mohou mít
          negativní dopad na soukromí uživatelů a rychlost načítání v závislosti
          na geografické poloze.
        </p>
      </div>

      <div className="tip-block">
        <h3>Odklad (defer) nepotřebných skriptů</h3>
        <p>
          <strong>JavaScript</strong> může brzdit zobrazení, pokud je potřeba ho
          zpracovat dřív, než se stránka vykreslí. Pro skripty, které nejsou
          nutné pro první vykreslení stránky, použijte atribut{" "}
          <code>defer</code>.
        </p>
        <p>
          <strong>Defer:</strong> Pomocí atributu <code>defer</code> zajistíte,
          že se JavaScript načte asynchronně a provede až po vykreslení stránky.
        </p>
        <pre>{`<script src="app.js" defer></script>`}</pre>
        <p>
          <strong>Umístění:</strong> Skripty s <code>defer</code> vložte buď
          před značku <code>&lt;/body&gt;</code> nebo do hlavičky před značku
          <code>&lt;head&gt;</code>.
        </p>
        <p>
          <strong>Vyhněte se ad-hoc skriptům:</strong> Nepřidávejte inline
          JavaScript přímo do stránky. Použijte externí soubory, abyste
          zajistili lepší organizaci kódu a umožnili snadnou správu.
        </p>
      </div>

      <div className="section-text">
        <h2>Další zdroje o LCP</h2>
        <p>
          Podrobný rozbor najdete v{" "}
          <a
            href="https://docs.pagespeed.cz/docs/lcp-optimisation"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            praktickém článku na docs.pagespeed.cz
          </a>{" "}
          nebo v{" "}
          <a
            href="https://www.vzhurudolu.cz/prirucka/metrika-lcp"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            příručce na VzhůruDolů.cz
          </a>
          . Více teorie najdete i na{" "}
          <a
            href="https://web.dev/lcp/"
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
    </div>
  );
};

export default LCPDetail;
