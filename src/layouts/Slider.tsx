import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import data from "../assets/exportData.json";
import CloseButton from "../components/slider/CloseButton";
import ImageContainer from "../components/slider/ImageContainer";
import ImageTitle from "../components/slider/ImageTitle";
import NavButtons from "../components/slider/NavButtons";
import useKeyControls from "../hooks/useKeyControls";
import useSwipeControls from "../hooks/useSwipeControls";
import { closeSlider as closeSliderAction } from "../redux/slider.slice";
import { RootState } from "../store";

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const dispatch = useDispatch();
  const imageID = useSelector((state: RootState) => state.slider.imageID);

  // Trouver l'image et l'album avec l'ID de l'image
  const findImageAndAlbumById = (id: number | null) => {
    for (let i = 0; i < data.length; i++) {
      const album = data[i];
      const image = album.images.find((img) => img.id === id);
      if (image) {
        return { album, image };
      }
    }
    return { album: null, image: null };
  };
  const { album, image } = findImageAndAlbumById(imageID);
  const [currentImage, setCurrentImage] = useState(image); //// Voir pour déplacer cette ligne au dessus de la fonction findImageAndAlbumById avec les declaration de state imageIndex !!

  useEffect(() => {
    if (album && image) {
      const index = album.images.findIndex((img) => img.id === image.id);
      setImageIndex(index);
      setCurrentImage(image);
    }
  }, [album, image]);

  useEffect(() => {
    if (album) {
      setCurrentImage(album.images[imageIndex]);
    }
  }, [album, imageIndex]);

  // Fonctions pour la navigation
  const handleNext = () => {
    if (album && imageIndex < album.images.length - 1) {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePrev = () => {
    if (album && imageIndex > 0) {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
  };
  const closeSlider = () => {
    dispatch(closeSliderAction());
  };

  // Utilisation des hooks pour les contrôles de swipe et de clavier
  useSwipeControls({
    handleNext,
    handlePrev,
    closeSlider,
    horizontalSensitivity: 75,
    verticalSensitivity: 100,
    maxSwipeDistance: 200,
  });

  useKeyControls({
    handleNext,
    handlePrev,
    closeSlider,
  });

  return album && currentImage ? (
    <SliderStyled>
      <ImageContainer images={album.images} imageIndex={imageIndex} />
      <ImageTitle image={currentImage} albumTitle={album.title} />
      <CloseButton closeSlider={closeSlider} />
      <NavButtons
        imageIndex={imageIndex}
        imagesLength={album.images.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </SliderStyled>
  ) : null;
};

const SliderStyled = styled.aside`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  touch-action: pan-y;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  animation: sliderIN 200ms ease-out;
  @keyframes sliderIN {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding-block: 5vh;
  }
`;

export default Slider;
