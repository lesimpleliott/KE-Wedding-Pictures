import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openSlider } from "../../redux/slider.slice";
import { ImageType } from "../../types/imageType";
import ActionButton from "./ActionButton";

type ImageCardProps = {
  image: ImageType;
  rowHeight: number;
};

const ImageCard: React.FC<ImageCardProps> = ({ image, rowHeight }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const aspectRatio = image.size.width / image.size.height;
  const imageWidth = rowHeight * aspectRatio;
  const dispatch = useDispatch();

  useEffect(() => {
    const currentImgRef = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            if (currentImgRef) {
              observer.unobserve(currentImgRef);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px 200px 0px", // Optionnel : pour charger légèrement avant qu'il soit visible
        threshold: 0.1, // Optionnel : pour déclencher quand au moins 10% de l'image est visible
      }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  const handleDownload = (url: string, filename: string) => {
    // Créer un lien invisible pour le téléchargement
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Ouvrir le slider avec l'image sélectionnée
  const handleSliderOpen = () => {
    dispatch(openSlider({ imageID: image.id }));
  };

  return (
    <ImageContainerStyled
      style={{ width: `${imageWidth}px`, height: `${rowHeight}px` }}
      onClick={handleSliderOpen}
    >
      <img
        ref={imgRef}
        src={isLoaded ? image.path.display : ""}
        alt={image.filename}
        loading="lazy"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />
      <div className="actionContainer">
        <ActionButton
          icon="fa-solid fa-download"
          onClick={(e) => {
            e.stopPropagation(); // Empêche la propagation du clic vers le conteneur
            handleDownload(image.path.hd, image.filename);
          }}
        />
        {/* Fonctionnalité future : 'MON' Album */}
        {/* <ActionButton
          icon="fa-solid fa-cart-arrow-down"
          onClick={() => console.log("Add to cart")}
        /> */}
      </div>
    </ImageContainerStyled>
  );
};

// Styled-components
const ImageContainerStyled = styled.div`
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
  transition: all 300ms ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--mainColor-light);
    transition: transform 500ms ease;
  }

  .actionContainer {
    opacity: 0;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .actionContainer {
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      opacity: 1;
      transition: opacity 200ms ease-in-out;
    }
  }
`;

export default ImageCard;
