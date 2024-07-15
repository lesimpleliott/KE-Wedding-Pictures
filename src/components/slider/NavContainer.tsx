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
        updateSessionStorage(album.images[newIndex].id);
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

  useSwipeControls({
    handleNext,
    handlePrev,
    closeSlider,
    sensitivityX: 75, // valeur par défaut 100(px)
  });

  useKeyControls({
    handleNext,
    handlePrev,
    closeSlider,
  });

  const isLastSlide = album ? imageIndex === album.images.length : false;

  return (
    <NavContainerStyled>
      <NavButtonSlider
        icon="fa-solid fa-arrow-left"
        onClick={handlePrev}
        position="left"
      />
      {!isLastSlide && (
        <NavButtonSlider
          icon="fa-solid fa-arrow-right"
          onClick={handleNext}
          position="right"
        />
      )}
    </NavContainerStyled>
  );
};

const NavContainerStyled = styled.div``;

export default NavContainer;
