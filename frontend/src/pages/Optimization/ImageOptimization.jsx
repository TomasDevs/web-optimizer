import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import TestButton from "../../components/UI/TestButton";
import ImageFormatList from "../../components/UI/ImageFormatList";

const ImageOptimization = () => {
  return (
    <>
      <Helmet>
        <title>Optimalizace obrázků | Web Optimizer</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Optimalizace obrázků</h1>

        <p className="section-text">
          Obrázky tvoří velkou část přenášených dat na webových stránkách.
          Správná optimalizace obrázků může výrazně zlepšit rychlost načítání,
          uživatelskou zkušenost a snížit datovou zátěž serverů. Níže jsou
          uvedeny klíčové techniky a doporučení.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Výběr správného formátu</h2>
        <ImageFormatList />
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Lazy Loading</h2>
        <p className="section-text">
          Lazy loading umožňuje načítání obrázků až ve chvíli, kdy jsou
          viditelné na obrazovce. To výrazně zrychluje počáteční načítání
          stránky.
          <br />
          Příklad:
        </p>
        <pre className="code-block">
          {`<img src="obrazek.jpg" loading="lazy" alt="Ukázkový obrázek" />`}
        </pre>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Responzivní obrázky </h2>
        <p className="section-text">
          Používání <code className="inline-code">&lt;picture&gt;</code> a
          atributu <code className="inline-code">srcset</code>
          umožňuje načíst správnou velikost obrázku podle zařízení a rozlišení
          obrazovky.
        </p>
        <p className="section-text">
          <strong>Příklad:</strong> Níže je uveden příklad, který načte různé
          velikosti obrázků podle šířky obrazovky. Obrázky jsou také
          optimalizovány pomocí atributu{" "}
          <code className="inline-code">loading="lazy"</code>, aby se načítaly
          pouze tehdy, když jsou viditelné na obrazovce.
        </p>
        <pre className="code-block">
          {`<picture>
  <!-- AVIF pro moderní prohlížeče -->
  <source
    srcset="
      images/image-480w.avif 480w,
      images/image-768w.avif 768w,
      images/image-1200w.avif 1200w
    "
    sizes="(max-width: 480px) 480px, 
           (max-width: 768px) 768px, 
           1200px"
    type="image/avif"
  />
  <!-- WebP jako fallback pro moderní prohlížeče -->
  <source
    srcset="
      images/image-480w.webp 480w,
      images/image-768w.webp 768w,
      images/image-1200w.webp 1200w
    "
    sizes="(max-width: 480px) 480px, 
           (max-width: 768px) 768px, 
           1200px"
    type="image/webp"
  />
  <!-- Fallback na klasický JPEG/PNG -->
  <img
    src="images/image-1200w.jpg"
    srcset="
      images/image-480w.jpg 480w,
      images/image-768w.jpg 768w,
      images/image-1200w.jpg 1200w
    "
    sizes="(max-width: 480px) 480px, 
           (max-width: 768px) 768px, 
           1200px"
    loading="lazy"
    width="1200"
    height="800"
    alt="Popis obrázku"
  />
</picture>
`}
        </pre>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Použití SVG pro ikony a loga</h2>
        <p className="section-text">
          SVG (Scalable Vector Graphics) je ideální formát pro ikony, loga a
          další grafiku, která potřebuje být ostrá na všech zařízeních a
          rozlišeních. Na rozdíl od bitmapových obrázků (např. PNG) je SVG
          škálovatelný bez ztráty kvality.
        </p>
        <p className="section-text">
          <strong>Výhody SVG:</strong>
          <ul>
            <li>Menší velikost souboru pro jednoduchou grafiku.</li>
            <li>Možnost úpravy pomocí CSS (např. barva nebo velikost).</li>
            <li>Lepší podpora přístupnosti díky textové povaze formátu.</li>
          </ul>
        </p>
        <pre className="code-block">
          {`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="Logo">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`}
        </pre>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Atributy obrázků</h2>
        <p className="section-text">
          Přidání atributů <code className="inline-code">width</code> a{" "}
          <code className="inline-code">height</code> zajišťuje stabilitu
          layoutu a zabraňuje posunům obsahu (CLS).
          <br />
          <strong>Tip:</strong> Ujistěte se, že všechny obrázky mají popisný{" "}
          <code className="inline-code">alt</code> atribut pro zlepšení
          přístupnosti a SEO.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Obrázky v CSS</h2>
        <p className="section-text">
          Obrázky použité jako pozadí (
          <code className="inline-code">background-image</code>) jsou vhodné pro
          dekorativní prvky. Nicméně, protože neumožňují přidat{" "}
          <code className="inline-code">alt</code>, nejsou vhodné pro obsahové
          obrázky.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Komprese a změna rozlišení</h2>
        <p className="section-text">
          Optimalizace velikosti obrázků pomocí nástrojů jako{" "}
          <code className="inline-code">ImageOptim</code> nebo
          <code className="inline-code">Squoosh</code> může snížit velikost
          souboru bez ztráty kvality. Moderní formáty jako{" "}
          <code className="inline-code">WebP</code> nebo{" "}
          <code className="inline-code">AVIF</code> podporují efektivnější
          kompresi než starší formáty jako{" "}
          <code className="inline-code">JPEG</code> nebo{" "}
          <code className="inline-code">PNG</code>.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování optimalizace</h2>
        <p className="section-text">
          Chcete-li otestovat různé techniky optimalizace obrázků, přejděte na
          testovací stránku.
        </p>

        <TestButton
          to="/testovani/optimalizace-obrazku"
          label="Testování optimalizace obrázků"
          className="-bottom"
        />
      </FadeInOnScroll>
    </>
  );
};

export default ImageOptimization;
