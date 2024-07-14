import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openSlider } from "../../redux/slider.slice";
import { ImageType } from "../../types/imageType";
import ActionButton from "../buttons/ActionButton";

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
          // icon="fa-solid fa-download"
          text="Téléchargez HD"
          onClick={(e) => {
            e.stopPropagation(); // Empêche la propagation du clic vers le conteneur
            handleDownload(image.path.hd, image.filename);
          }}
        >
          <svg viewBox="0 0 116.1 112.1">
            <path d="M111.6,20l-14.5-15.1c-3-3.1-7.3-4.9-11.6-4.9H17.6C7.9,0,0,7.9,0,17.6v76.9c0,9.7,7.9,17.6,17.6,17.6h80.9c9.7,0,17.6-7.9,17.6-17.6V31.1c0-4.2-1.6-8.1-4.5-11.2ZM79.8,8.4v20.5H25.9V8.4h53.9ZM107.7,94.5c0,5.1-4.1,9.2-9.2,9.2H17.6c-5.1,0-9.2-4.1-9.2-9.2V17.6c0-5.1,4.1-9.2,9.1-9.2v24.7c0,2.3,1.9,4.2,4.2,4.2h62.3c2.3,0,4.2-1.9,4.2-4.2V8.9c1.1.4,2.1,1,2.9,1.9l14.5,15.1c1.4,1.4,2.1,3.3,2.1,5.3v63.3ZM54.1,52.4v34.4c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2v-13.6h-18.3v13.6c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2v-34.4c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2v12.5h18.3v-12.5c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2ZM64.8,48.2c-2.3,0-4.2,1.9-4.2,4.2v34.4c0,2.3,1.9,4.2,4.2,4.2,12.9,0,32.3,0,32.3-21.4s-19.4-21.4-32.3-21.4ZM69,82.5v-25.9c13.4.3,19.7,2.3,19.7,13s-6.3,12.7-19.7,13Z" />
          </svg>
        </ActionButton>
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
