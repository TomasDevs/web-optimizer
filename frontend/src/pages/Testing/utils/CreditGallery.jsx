const CreditGallery = ({ source, link }) => (
  <p className="gallery__credit">
    Obrázky pocházejí z{" "}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="highlight-link">
      {source}
    </a>
    .
  </p>
);

export default CreditGallery;
