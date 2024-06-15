import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AlbumType } from "../../types/albumType";
import HoverBox from "./HoverBox";

const CardAlbum = ({ album }: { album: AlbumType }) => {
  return (
    <CardAlbumStyled>
      <NavLink to={`/gallery`} className="imageWrapper">
        <img
          className="cover"
          src={`${album.path}/lowRes/${album.cover}`}
          alt={`Photos de l'album ${album.title}`}
        />
      </NavLink>
      <HoverBox album={album} />
      <h2 className="title">{album.title}</h2>
    </CardAlbumStyled>
  );
};

const CardAlbumStyled = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    &:hover {
      .hoverBox {
        opacity: 1;
        transition: opacity 400ms ease-out;
      }
      & .title {
        font-weight: 600;
        letter-spacing: 0.2em;
        transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
        z-index: 2;
      }
    }
  }
  .imageWrapper {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 5px;

    .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    font-size: 1rem;
    font-weight: 500;
    height: fit-content;
    padding-top: 0.5rem;
    text-align: center;
    transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
  }
`;

export default CardAlbum;
