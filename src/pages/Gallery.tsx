import { useEffect } from "react"; // Import de useEffect depuis React
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../assets/exportData.json";
import HeroBanner from "../components/HeroBanner";
import MasonryRow from "../layouts/MasonryRow";

const Gallery = () => {
  const { idAlbum } = useParams<{ idAlbum: string }>();
  const navigate = useNavigate();
  const album = data.find((album) => album.id === idAlbum);

  useEffect(() => {
    if (!album) {
      navigate("/error");
    }
  }, [album, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!album) {
    return null;
  }

  const images = album.images;

  return (
    <GalleryStyled>
      <HeroBanner
        img={`${album.path}/display/${album.cover.cover}.avif`}
        imgAlign={album.cover.coverAlignment}
        height="50vh"
      >
        <h1>{album.title}</h1>
      </HeroBanner>
      <MasonryRow images={images} />
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
    padding-block: 2vw;
  }
`;

export default Gallery;
