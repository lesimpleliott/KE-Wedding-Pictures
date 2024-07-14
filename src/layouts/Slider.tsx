import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import data from "../assets/exportData.json";
import ActionButton from "../components/buttons/ActionButton";
import NavButtonSlider from "../components/buttons/NavButtonSlider";
import ImageContainer from "../components/slider/ImageContainer";
import ImageTitle from "../components/slider/ImageTitle";
import LastSlide from "../components/slider/LastSlide";
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
    sessionStorage.removeItem("sliderState");
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

  // Trouver le prochain album
  const nextAlbumIndex = data.findIndex((a) => a.title === album?.title) + 1;
  const nextAlbum = data[nextAlbumIndex] || null;

  return album && currentImage ? (
    <SliderStyled>
      {imageIndex < album.images.length ? (
        <>
          <ImageContainer images={album.images} imageIndex={imageIndex} />
          <ImageTitle image={currentImage} albumTitle={album.title} />
          <div className="actionContainer">
            <ActionButton
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
            <ActionButton
              icon="fa-solid fa-xmark"
              text="Fermez"
              onClick={(e) => {
                e.stopPropagation(); // Empêche la propagation du clic vers le conteneur
                closeSlider();
              }}
            />
          </div>
        </>
      ) : (
        <>
          <LastSlide
            nextAlbum={nextAlbum}
            downloadZip={`${album.path}${album.zipFile}`}
          />
          <div className="actionContainer">
            <ActionButton
              icon="fa-solid fa-xmark"
              text="Fermez"
              onClick={closeSlider}
            />
          </div>
        </>
      )}

      <NavButtonSlider
        icon="fa-solid fa-arrow-left"
        onClick={handlePrevClick}
        position="left"
      />
      <NavButtonSlider
        icon="fa-solid fa-arrow-right"
        onClick={handleNextClick}
        position="right"
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
  gap: 1rem;
  overflow: auto; /* Permet le zoom sur le contenu */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: sliderIN 200ms ease-out;

  .actionContainer {
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .navContainer {
    border: solid deeppink 1px;
    width: 100%;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default Slider;
