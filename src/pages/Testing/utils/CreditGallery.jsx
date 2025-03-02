const CreditGallery = ({ source, link }) => {
  return (
    <p className="gallery__credit">
      Obrázky pocházejí z{" "}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="highlight-link -external">
        {source}
      </a>
      .
    </p>
  );
};

export default CreditGallery;
