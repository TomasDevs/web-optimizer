import FadeInOnScroll from "../../../components/UI/FadeInOnScroll";
import CreditGallery from "./CreditGallery";

const Gallery = ({ format, isLazy, showAttributes }) => {
  return (
    <FadeInOnScroll className="section-page gallery">
      <h2 className="section-subtitle -small">Galerie obrázků</h2>
      <div className="gallery__container">
        {Array.from({ length: 24 }, (_, index) => {
          const imageSrc = `/assets/images/image${index + 1}.${format}`;
          const altText = `Obrázek ${
            index + 1
          } ve formátu ${format.toUpperCase()}`;

          return (
            <img
              key={index}
              src={imageSrc}
              alt={altText}
              className="gallery__item"
              loading={isLazy ? "lazy" : "eager"}
              width={showAttributes ? "800" : undefined}
              height={showAttributes ? "600" : undefined}
            />
          );
        })}
      </div>

      <CreditGallery source="Unsplash" link="https://unsplash.com" />
    </FadeInOnScroll>
  );
};

export default Gallery;
