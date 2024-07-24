import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../assets/exportData.json";
import ScrollProgressButton from "../components/buttons/ScrollProgressButton";
import NavbarGallery from "../components/gallery/NavbarGallery";
import HeroBanner from "../components/HeroBanner";
import MasonryLayout from "../layouts/MasonryLayout";
import Slider from "../layouts/Slider";
import { closeSlider, openSlider } from "../redux/slider.slice";
import { RootState } from "../store";

const Gallery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { idAlbum } = useParams<{ idAlbum: string }>();
  const album = data.find((album) => album.id === idAlbum);
  const sliderIsOpen = useSelector((state: RootState) => state.slider.isOpen);
  const images = album ? album.images : [];

  useEffect(() => {
    if (!album) {
      navigate("/error");
    }
  }, [album, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idAlbum]);

  useEffect(() => {
    dispatch(closeSlider());
  }, [dispatch]);

  useEffect(() => {
    // Vérifie s'il y a une image active dans Redux au chargement de la page
    const storedState = sessionStorage.getItem("sliderState");
    if (storedState) {
      const { isOpen, imageID } = JSON.parse(storedState);
      if (isOpen && imageID) {
        dispatch(openSlider({ imageID }));
      }
    }
  }, [dispatch]);

  if (!album) {
    return null;
  }

  const albumIndex = data.findIndex((a) => a.id === idAlbum);
  const previousAlbum = albumIndex > 0 ? data[albumIndex - 1] : null;
  const nextAlbum = albumIndex < data.length - 1 ? data[albumIndex + 1] : null;

  return (
    <GalleryStyled>
      <HeroBanner
        img={`${album.path}/display/${album.cover.cover}.avif`}
        imgAlign={album.cover.coverAlignment}
        height="50dvh"
      >
        <h1>{album.title}</h1>
      </HeroBanner>
      <NavbarGallery
        album={album}
        previousAlbum={previousAlbum}
        nextAlbum={nextAlbum}
      />
      <MasonryLayout images={images} />
      {sliderIsOpen && <Slider />}
      <ScrollProgressButton />
    </GalleryStyled>
  );
};

const GalleryStyled = styled.main`
  h1 {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-inline: 5vw;
    font-family: "Dancing Script", cursive;
    font-size: clamp(5rem, 10vw, 7rem);
    text-align: center;
    line-height: 0.9;
    color: var(--contrast);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    user-select: none;
  }

  .masonryContainer {
    max-width: calc(1280px + 5vw);
    padding-inline: 5vw;
    padding-block-end: 2rem;
  }
`;

export default Gallery;
