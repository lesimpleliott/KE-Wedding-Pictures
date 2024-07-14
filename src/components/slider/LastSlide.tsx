import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { closeSlider as closeSliderAction } from "../../redux/slider.slice";
import { AlbumType } from "../../types/albumType";

type LastSlideProps = {
  nextAlbum: AlbumType;
  downloadZip: string;
};

const LastSlide = ({ nextAlbum, downloadZip }: LastSlideProps) => {
  const dispatch = useDispatch();
  const closeSlider = () => {
    dispatch(closeSliderAction());
    sessionStorage.removeItem("sliderState");
  };

  useEffect(() => {
    return () => {
      sessionStorage.setItem(
        "sliderState",
        JSON.stringify({ isOpen: false, imageID: null })
      );
    };
  }, []);

  return (
    <>
      {nextAlbum ? (
        <LastSlideStyled>
          <h4>Fin de l'album... 😢</h4>
          <NavLink
            to={`/gallery/${nextAlbum.id}`}
            onClick={closeSlider}
            className="button main"
          >
            Album suivant : {nextAlbum.title}
          </NavLink>
          <a href={downloadZip} download className="button ">
            Téléchargez l'album (zip)
          </a>
          <NavLink
            to="/home#albumsContainer"
            onClick={closeSlider}
            className="button"
          >
            Retour à l'accueil
          </NavLink>
        </LastSlideStyled>
      ) : (
        <LastSlideStyled>
          <h4>C'est vraiment la fin... 😭</h4>
          <NavLink
            to="/home#albumsContainer"
            onClick={closeSlider}
            className="button main"
          >
            Retour à l'accueil
          </NavLink>
          <a href={downloadZip} download className="button ">
            Téléchargez l'album (zip)
          </a>
        </LastSlideStyled>
      )}
    </>
  );
};

const LastSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  top: -40px;

  h4 {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--mainColor);
  }

  .button {
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: center;
    user-select: none;
    border-radius: 8px;
    border: solid 2px var(--buttonColor);
    color: var(--buttonColor);
    transition: border 250ms ease-in-out, background-color 250ms ease-in-out,
      color 250ms ease-in-out, box-shadow 250ms ease-in-out;

    &.main {
      color: #fff;
      background-color: var(--buttonColor);
    }

    &:hover {
      background-color: var(--secondColor);
      box-shadow: 0 0 0 5px var(--secondColor-light);
      color: #fff;
      border: solid 2px transparent;
    }
  }
`;

export default LastSlide;
