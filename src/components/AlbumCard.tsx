import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AlbumType } from "../types/albumType";

const AlbumCard = ({ album }: { album: AlbumType }) => {
  // const albumLink = `/gallery/${album.id}`;
  const albumLink = `/gallery`;

  return (
    <AlbumCardStyled>
      <NavLink to={albumLink} className="imageWrapper">
        <img
          className="preview"
          src={`${album.path}/display/${album.cover.mini}.avif`}
          alt={`Photos de l'album ${album.title}`}
        />
      </NavLink>
      <div className="hoverBox">
        <div className="btnContainer">
          <a href={albumLink} className="btn">
            Voir l'album
          </a>
          <a href={album.zipFile} download className="btn">
            Télécharger
          </a>
        </div>
        <p className="infos">
          <i className="fa-regular fa-image"></i>
          {album.images.length} photos
        </p>
      </div>
      <h2 className="title">{album.title}</h2>
    </AlbumCardStyled>
  );
};

const AlbumCardStyled = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  .hoverBox {
    position: absolute;
    opacity: 0;
  }

  .imageWrapper {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .preview {
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

  &:hover {
    & .title {
      font-weight: 600;
      letter-spacing: 0.15em;
      transition: letter-spacing 400ms ease-out, font-weight 400ms ease-out;
    }

    // affichage de la hoverBox seulement sur desktop
    @media screen and (min-width: 768px) {
      & .hoverBox {
        height: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: rgba(255, 255, 255, 0.8);
        opacity: 1;
        transition: opacity 400ms ease-out;

        .infos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }

        .btnContainer {
          display: flex;
          gap: 0.5rem;

          .btn {
            position: relative;
            padding: 0.5rem 1rem;
            border: 1px solid var(--mainColor);
            overflow: hidden;
            transition: color 300ms;
            z-index: 1;

            &::before {
              content: "";
              width: 0;
              height: 300%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(45deg);
              background: var(--mainColor);
              transition: width 500ms ease;
              z-index: -1;
            }

            &:hover::before {
              width: 105%;
            }

            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export default AlbumCard;
