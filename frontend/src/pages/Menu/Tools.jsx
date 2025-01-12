import React from "react";

const Tools = () => {
  return (
    <div className="tools-page">
      <section className="section-page">
        <h1 className="subpage-title">Nástroje pro měření výkonu</h1>
        <p className="section-text">
          Váš web může být rychlý jako blesk nebo pomalý jako šnek – to záleží
          jen na tom, jak dobře jej optimalizujete. Naštěstí existují špičkové
          nástroje, které vám s tím pomohou. Ponořte se do světa měření výkonu a
          objevte, co vše můžete vylepšit pro rychlejší, stabilnější a
          uživatelsky příjemnější web.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Nástroje, které musíte znát</h2>
        <ul className="tools-list">
          <li>
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              PageSpeed Insights
            </a>
            <p className="section-text">
              Chcete vědět, co zpomaluje váš web? Tento nástroj od Googlu vám
              přesně řekne, co zlepšit – od obrázků až po kód. Využijte jeho
              rady a už nikdy nezklamte netrpělivé uživatele.
            </p>
          </li>
          <li>
            <a
              href="https://developers.google.com/web/tools/lighthouse"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Google Lighthouse
            </a>
            <p className="section-text">
              Váš osobní průvodce výkonností, přístupností a SEO. Tento nástroj
              je integrovaný přímo v prohlížeči Chrome a poskytuje vám hloubkové
              audity pro vyladění každého detailu vašeho webu.
            </p>
          </li>
          <li>
            <a
              href="https://gtmetrix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              GTmetrix
            </a>
            <p className="section-text">
              Viděli jste někdy svůj web „pod kapotou“? GTmetrix vám ukáže
              přesná data o rychlosti načítání, Core Web Vitals a doporučí
              konkrétní kroky ke zlepšení.
            </p>
          </li>
          <li>
            <a
              href="https://webpagetest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              WebPageTest
            </a>
            <p className="section-text">
              Simulujte, jak váš web funguje při různých rychlostech připojení
              nebo v různých zemích. Perfektní nástroj pro podrobnou analýzu a
              testování reálných podmínek.
            </p>
          </li>
          <li>
            <a
              href="https://tools.pingdom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Pingdom Tools
            </a>
            <p className="section-text">
              Nepřetržité sledování rychlosti a dostupnosti vašeho webu. Pingdom
              je ideální pro každého, kdo chce mít svůj web pod neustálým
              dohledem.
            </p>
          </li>
        </ul>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Objevte další užitečné pomocníky</h2>
        <ul className="tools-list">
          <li>
            <a
              href="https://pagespeed.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              PageSpeed.cz Tester
            </a>
            <p className="section-text">
              Český nástroj založený na Google Lighthouse, který vás provede
              testováním rychlosti vašeho webu krok za krokem. Ideální pro
              detailní analýzu.
            </p>
          </li>
          <li>
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Google Analytics
            </a>
            <p className="section-text">
              Chcete vědět, odkud přicházejí vaši návštěvníci a co na vašem webu
              dělají? Google Analytics poskytuje neocenitelné informace o
              chování uživatelů, včetně technických metrik.
            </p>
          </li>
          <li>
            <a
              href="https://developer.chrome.com/docs/devtools/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Chrome DevTools
            </a>
            <p className="section-text">
              Ladění v reálném čase, analýza síťových požadavků nebo simulace
              pomalého připojení – to vše zvládnete s DevTools, které jsou
              součástí prohlížeče Chrome.
            </p>
          </li>
          <li>
            <a
              href="https://speedcurve.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              SpeedCurve
            </a>
            <p className="section-text">
              Pro ty, kdo to myslí s výkonností vážně. SpeedCurve kombinuje
              syntetické testování s reálnými daty uživatelů a poskytuje
              komplexní přehled o výkonu vašeho webu.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Tools;
