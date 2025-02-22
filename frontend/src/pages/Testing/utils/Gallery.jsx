import FadeInOnScroll from "../../../components/UI/FadeInOnScroll";

const Gallery = ({ format, isLazy, showAttributes }) => (
  <FadeInOnScroll className="section-page gallery">
    <h2 className="section-subtitle -small">Galerie obrázků</h2>
    <div className="gallery__container">
      {Array.from({ length: 24 }, (_, index) => (
        <img
          key={index}
          src={`/assets/images/image${index + 1}.${format}`}
          alt={`Obrázek ${index + 1} ve formátu ${format.toUpperCase()}`}
          className="gallery__item"
          loading={isLazy ? "lazy" : "eager"}
          width={showAttributes ? "800" : undefined}
          height={showAttributes ? "600" : undefined}
        />
      ))}
    </div>
  </FadeInOnScroll>
);

export default Gallery;
