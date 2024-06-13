import styled from "styled-components";
import { AlbumType } from "../../types/albumType";
import HoverBox from "./HoverBox";

const CardAlbum = ({ album }: { album: AlbumType }) => {
  return (
    <CardAlbumStyled>
      <div className="imageWrapper">
        <img
          className="cover"
          src={`${album.path}/lowRes/${album.cover}`}
          alt={`Photos de l'album ${album.title}`}
        />
        <HoverBox imageCount={album.images.length} />
      </div>
      <h2 className="title">{album.title}</h2>
    </CardAlbumStyled>
  );
};

const CardAlbumStyled = styled.article`
  display: flex;
  flex-direction: column;

  .imageWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: 10px;

    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      .hoverBox {
        opacity: 1;
        transition: opacity 400ms ease-out;
      }

      & + .title {
        font-weight: 600;
        letter-spacing: 0.2em;
        transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
      }
    }
  }

  .title {
    height: fit-content;
    padding-top: 0.5rem;
    text-align: center;
    transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
  }
`;

export default CardAlbum;
