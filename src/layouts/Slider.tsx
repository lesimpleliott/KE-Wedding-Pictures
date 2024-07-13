import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import data from "../assets/exportData.json";
import ActionButtons from "../components/slider/ActionButtons";
import ImageContainer from "../components/slider/ImageContainer";
import ImageTitle from "../components/slider/ImageTitle";
import LastSlide from "../components/slider/LastSlide";
import NavButtons from "../components/slider/NavButtons";
import TipsBoxSlider from "../components/slider/Tipbox";
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
  const [currentImage, setCurrentImage] = useState(image);

  // Mettre à jour le localStorage
  const updateSessionStorage = (imageID: number) => {
    sessionStorage.setItem(
      "sliderState",
      JSON.stringify({ isOpen: true, imageID })
    );
  };

  useEffect(() => {
    if (album && imageID) {
      const index = album.images.findIndex((img) => img.id === imageID);
      if (index !== -1) {
        setImageIndex(index);
        setCurrentImage(album.images[index]);
        updateSessionStorage(imageID);
      }
    }
  }, [album, imageID]);

  useEffect(() => {
    if (album && imageIndex < album.images.length) {
      setCurrentImage(album.images[imageIndex]);
      updateSessionStorage(album.images[imageIndex].id);
    }
  }, [album, imageIndex]);

  const sliderIsOpen = useSelector((state: RootState) => state.slider.isOpen);
  useEffect(() => {
    if (sliderIsOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [sliderIsOpen]);

  // Fonctions pour la navigation
  const handleNext = () => {
    if (album) {
      const newIndex = imageIndex + 1;
      if (newIndex <= album.images.length) {
        setImageIndex(newIndex);
      }
    }
  };

  const handlePrev = () => {
    if (album && imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setImageIndex(newIndex);
      updateSessionStorage(album.images[newIndex].id);
    }
  };

  const handleNextClick = () => {
    setSwipeDisabled(true);
    handleNext();
    setTimeout(() => setSwipeDisabled(false), 500);
  };

  const handlePrevClick = () => {
    setSwipeDisabled(true);
    handlePrev();
    setTimeout(() => setSwipeDisabled(false), 500);
  };

  const closeSlider = () => {
    dispatch(closeSliderAction());
  };

  // Utilisation des hooks pour les contrôles de swipe et de clavier
  const { setSwipeDisabled } = useSwipeControls({
    handleNext,
    handlePrev,
    // closeSlider,
    // verticalSensitivity: 100,
    horizontalSensitivity: 75,
    maxSwipeDistance: 300,
  });

  useKeyControls({
    handleNext,
    handlePrev,
    closeSlider,
  });

  // Trouver le prochain album
  const nextAlbumIndex = data.findIndex((a) => a.title === album?.title) + 1;
  const nextAlbum = data[nextAlbumIndex] || null;

  return album && currentImage ? (
    <SliderStyled>
      {imageIndex < album.images.length ? (
        <>
          <ImageContainer images={album.images} imageIndex={imageIndex} />
          <ImageTitle image={currentImage} albumTitle={album.title} />
        </>
      ) : (
        <LastSlide
          nextAlbum={nextAlbum}
          downloadLink={`${album.path}${album.zipFile}`}
        />
      )}
      <ActionButtons
        closeSlider={closeSlider}
        download={currentImage.path.hd}
      />
      <NavButtons
        imageIndex={imageIndex}
        imagesLength={album.images.length}
        handleNext={handleNextClick}
        handlePrev={handlePrevClick}
      />
      <TipsBoxSlider />
    </SliderStyled>
  ) : null;
};

const SliderStyled = styled.aside`
  width: 100%;
  height: 100vh;
  max-height: 100dvh;
  padding-block-start: 1rem;
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: auto; /* Permet le zoom sur le contenu */
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
`;

export default Slider;
