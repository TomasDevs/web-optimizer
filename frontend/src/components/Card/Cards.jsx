import Card from "./Card";

const features = [
  {
    title: "Optimalizace obrázků",
    description: "Zjistěte, jak zlepšit rychlost načítání obrázků.",
    link: "/image-optimization",
  },
  {
    title: "Optimalizace fontů",
    description: "Naučte se, jak rychle načítat webové fonty.",
    link: "/font-optimization",
  },
  {
    title: "Optimalizace API",
    description: "Zlepšete výkon vašeho API a zrychlete odpovědi.",
    link: "/api-optimization",
  },
  {
    title: "Lazy Loading",
    description: "Naučte se, jak načítat obsah efektivně.",
    link: "/lazy-loading",
  },
  {
    title: "Minifikace kódu",
    description: "Odstraňte zbytečnosti a zrychlete svůj web.",
    link: "/code-minification",
  },
  {
    title: "Využití CDN",
    description: "Zjistěte, jak CDN zlepší výkon vašeho webu.",
    link: "/cdn-optimization",
  },
  {
    title: "Bezpečné načítání",
    description: "Použijte bezpečné techniky načítání pro zajištění dat.",
    link: "/secure-loading",
  },
  {
    title: "Redukce JavaScriptu",
    description: "Minimalizujte nepotřebný JavaScript pro rychlejší načítání.",
    link: "/js-reduction",
  },
];

const Cards = () => {
  return (
    <section className="section cards">
      {features.map((feature, index) => (
        <Card
          key={index}
          title={feature.title}
          description={feature.description}
          link={feature.link}
        />
      ))}
    </section>
  );
};

export default Cards;
