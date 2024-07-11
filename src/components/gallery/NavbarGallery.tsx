import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { openSlider } from "../../redux/slider.slice";
import { AlbumType } from "../../types/albumType";

type NavbarGalleryProps = {
  album: AlbumType;
  previousAlbum: AlbumType | null;
  nextAlbum: AlbumType | null;
};

const NavbarGallery = ({
  album,
  previousAlbum,
  nextAlbum,
}: NavbarGalleryProps) => {
  const dispatch = useDispatch();
  const handleSlider = () => {
    dispatch(openSlider({ imageID: album.images[0].id }));
  };

  return (
    <NavbarGalleryStyled>
      <a
        href={`${album.path}${album.zipFile}`}
        className="actionBtn"
        id="download"
        download
      >
        <p className="actionBtn__text">Télécharger l'album</p>
        <i className="actionBtn__icon fa-solid fa-file-zipper" />
      </a>

      {previousAlbum && (
        <NavLink
          to={`/gallery/${previousAlbum.id}`}
          className="actionBtn"
          id="prev"
        >
          <p className="actionBtn__text">{previousAlbum.title}</p>
          <i className="actionBtn__icon fa-solid fa-angles-left"></i>
        </NavLink>
      )}

      <button className="actionBtn" id="play" onClick={handleSlider}>
        <p className="actionBtn__text">Lancer le diaporama</p>
        <i className="actionBtn__icon fa-solid fa-play"></i>
      </button>

      {nextAlbum && (
        <NavLink
          to={`/gallery/${nextAlbum.id}`}
          className="actionBtn"
          id="next"
        >
          <p className="actionBtn__text">{nextAlbum.title}</p>
          <i className="actionBtn__icon fa-solid fa-angles-right"></i>
        </NavLink>
      )}
    </NavbarGalleryStyled>
  );
};

const NavbarGalleryStyled = styled.nav`
  width: 100%;
  height: 44px;
  max-width: calc(1280px + 5vw);
  padding-inline: 5vw;
  padding-block: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .actionBtn {
    all: unset;
    height: 25px;
    width: 25px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--mainColor);
    border-radius: 100%;
    transition: background-color 200ms ease-out;

    &__icon {
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--contrast);
      font-size: 1.1rem;
    }

    &__text {
      height: 25px;
      width: fit-content;
      padding: 15px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -40px;
      z-index: 1;

      background-color: rgb(200, 200, 200, 0.8);
      color: var(--mainColor);
      border-radius: 6px;
      white-space: nowrap;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      visibility: hidden;
      opacity: 0;
      transition: opacity 200ms ease-out;

      &::after {
        content: "";
        position: absolute;
        top: -16px;
        left: 50%;
        transform: translateX(-50%);

        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent rgb(200, 200, 200, 0.8)
          transparent;
      }
    }

    &:hover {
      background-color: var(--secondColor);
      .actionBtn__text {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

export default NavbarGallery;
