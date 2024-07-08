import styled from "styled-components";
import data from "../assets/exportData.json";
import MasonryRow from "../layouts/MasonryRow";

const Gallery = () => {
  const album = data[0];
  const images = album.images;

  return (
    <GalleryStyled>
      <MasonryRow images={images} />
    </GalleryStyled>
  );
};

const GalleryStyled = styled.main`
  .masonryContainer {
    max-width: calc(1280px + 5vw);
    padding-inline: 5vw;
  }
`;

export default Gallery;
