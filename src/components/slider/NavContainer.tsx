import styled from "styled-components";
import useKeyControls from "../../hooks/useKeyControls";
import useSwipeControls from "../../hooks/useSwipeControls";
import { AlbumType } from "../../types/albumType";
import NavButtonSlider from "../buttons/NavButtonSlider";

type NavContainerProps = {
  album: AlbumType | null;
  imageIndex: number;
  setImageIndex: (index: number) => void;
  closeSlider: () => void;
  updateSessionStorage: (imageID: number) => void;
};

const NavContainer = ({
  closeSlider,
  setImageIndex,
  updateSessionStorage,
  album,
  imageIndex,
}: NavContainerProps) => {
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

  const { setSwipeDisabled } = useSwipeControls({
    handleNext,
    handlePrev,
    // closeSlider, verticalSensitivity: 100, // Swipe vers le bas pour fermer le slider
    horizontalSensitivity: 75,
    maxSwipeDistance: 300,
  });

  useKeyControls({
    handleNext,
    handlePrev,
    closeSlider,
  });

  return (
    <NavContainerStyled>
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
    </NavContainerStyled>
  );
};

const NavContainerStyled = styled.div``;

export default NavContainer;
