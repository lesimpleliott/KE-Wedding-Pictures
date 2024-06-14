import styled from "styled-components";
import dataPhotos from "../assets/dataPhotos.json";
import CardAlbum from "../components/cardAlbum/CardAlbum";

const Albums = () => {
  return (
    <AlbumsStyled id="albumsContainer">
      {dataPhotos.albums.map((album) => (
        <CardAlbum key={album.id} album={album} />
      ))}
    </AlbumsStyled>
  );
};

const AlbumsStyled = styled.section`
  width: 100%;
  max-width: calc(1260px + 5vw);
  padding-block: clamp(2vw, 40px, 5vw);
  padding-inline: 5vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  column-gap: 2vw;
  row-gap: clamp(2vw, 20px, 5vw);
`;

export default Albums;