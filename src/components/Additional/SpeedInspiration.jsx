import React from "react";
import AdditionalSection from "./AdditionalSection";
import FactList from "./FactList";

const SpeedInspiration = () => {
  const facts = [
    {
      text: "Pinterest snížil dobu načítání o 40 % implementací lazy loadingu.",
      url: "https://www.medresponsive.com/blog/lazy-loading-bad-seo/",
    },
    {
      text: "Vodafone zlepšil LCP o 31 %, což vedlo k 8% nárůstu prodeje.",
      url: "https://web.dev/case-studies/vodafone",
    },
    {
      text: "Yelp snížil FCP o 45 % a zvýšil míru konverze o 15 %.",
      url: "https://engineeringblog.yelp.com/2021/01/boosting-user-conversion-with-ux-performance-wins.html",
    },
    {
      text: "BBC zjistilo, že za každou další sekundu načítání ztrácí 10 % uživatelů.",
      url: "https://www.creativebloq.com/features/how-the-bbc-builds-websites-that-scale",
    },
  ];

  return (
    <AdditionalSection title="Inspirace pro rychlost" className="-speed">
      <FactList facts={facts} />
    </AdditionalSection>
  );
};

export default SpeedInspiration;
