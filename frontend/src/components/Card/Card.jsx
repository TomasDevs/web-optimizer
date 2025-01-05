const Card = ({ title, description, link }) => {
  return (
    <article className="card">
      <a href={link} className="card__link">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{description}</p>
      </a>
    </article>
  );
};

export default Card;
