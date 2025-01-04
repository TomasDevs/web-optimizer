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
];

const Cards = () => {
  return (
    <section className="cards">
      {features.map((feature, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{feature.title}</h2>
          <p className="card-text">{feature.description}</p>
          <a href={feature.link} className="card-link">
            Zjistit více
          </a>
        </div>
      ))}
    </section>
  );
};

export default Cards;
