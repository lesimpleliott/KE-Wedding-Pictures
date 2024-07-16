import styled from "styled-components";
import data from "../assets/exportData_demo.json";
import AlbumCard from "../components/AlbumCard";

const AlbumsGallery = () => {
  return (
    <AlbumsGalleryStyled id="albumsContainer">
      {data.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </AlbumsGalleryStyled>
  );
};

const AlbumsGalleryStyled = styled.section`
  width: 100%;
  max-width: calc(1260px + 5vw);
  padding-block: clamp(2vw, 40px, 5vw);
  padding-inline: 5vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 2vw;
  row-gap: clamp(2vw, 20px, 5vw);

  @media screen and (max-width: 350px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export default AlbumsGallery;
