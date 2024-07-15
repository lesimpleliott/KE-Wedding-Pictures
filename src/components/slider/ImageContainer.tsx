import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ImageType } from "../../types/imageType";

type ImageContainerProps = {
  images: ImageType[];
  imageIndex: number;
};

const ImageContainer = ({ images, imageIndex }: ImageContainerProps) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [loadedIndices, setLoadedIndices] = useState<number[]>([]);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const currentImageRefs = imageRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index")!,
              10
            );
            setLoadedIndices((prev) => [...new Set([...prev, index])]);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px 200px 0px", // Optionnel : pour charger légèrement avant qu'il soit visible
        threshold: 0.1, // Optionnel : pour déclencher quand au moins 10% de l'image est visible
      }
    );

    currentImageRefs.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    // Définir un délai avant d'activer la transition
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 1000);

    return () => {
      currentImageRefs.forEach((img) => {
        if (img) {
          observer.unobserve(img);
        }
      });
      clearTimeout(timeout); // Nettoyage du timeout si le composant se démonte avant la fin du délai
    };
  }, [images, imageIndex]);

  const shouldPreload = (index: number) => {
    const distance = Math.abs(index - imageIndex);
    return distance <= 3 || distance >= images.length - 3;
  };

  return (
    <ImageContainerStyled>
      {images.map((image, index) => (
        <img
          key={image.id.toString()}
          src={
            loadedIndices.includes(index) || shouldPreload(index)
              ? image.path.display
              : ""
          }
          alt={image.filename}
          data-index={index}
          ref={(el) => (imageRefs.current[index] = el)}
          loading={shouldPreload(index) ? "eager" : "lazy"}
          style={{
            transform: `translateX(${-100 * imageIndex}%)`,
            transition: shouldAnimate ? "transform 300ms ease-in-out" : "none",
          }}
        />
      ))}
    </ImageContainerStyled>
  );
};

const ImageContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding-block: 1rem;
  overflow: hidden;
  display: flex;

  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: contain;
  }
`;

export default ImageContainer;
