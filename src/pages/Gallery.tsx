import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import dataPhotos from "../assets/dataPhotos.json";
import AlbumBanner from "../layouts/AlbumBanner";
import GalleryPhotos from "../layouts/GalleryPhotos";

const Gallery = () => {
  const { idAlbum } = useParams<{ idAlbum: string }>();
  const [albumIndex, setAlbumIndex] = useState<number | null>(null);
  const [album, setAlbum] = useState(dataPhotos.albums[0]);

  useEffect(() => {
    const index = dataPhotos.albums.findIndex((album) => album.id === idAlbum);
    setAlbumIndex(index);
    setAlbum(dataPhotos.albums[index]);
  }, [idAlbum]);

  const previousAlbum =
    albumIndex !== null && albumIndex > 0
      ? dataPhotos.albums[albumIndex - 1]
      : null;
  const nextAlbum =
    albumIndex !== null && albumIndex < dataPhotos.albums.length - 1
      ? dataPhotos.albums[albumIndex + 1]
      : null;

  return (
    <GalleryStyled>
      {album && (
        <AlbumBanner
          title={album.title}
          image={`../${album.path}/lowRes/${album.cover}.webp`}
        />
      )}
      <section className="infosContainer">
        {previousAlbum && (
          <NavLink
            to={`/gallery/${previousAlbum.id}`}
            className="actionBtn prev"
            title={`Voir ${previousAlbum.title}`}
          >
            <i className="fa-solid fa-chevron-left"></i>
            {previousAlbum.title}
          </NavLink>
        )}
        {nextAlbum && (
          <NavLink
            to={`/gallery/${nextAlbum.id}`}
            className="actionBtn next"
            title={`Voir ${nextAlbum.title}`}
          >
            {nextAlbum.title}
            <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        )}
      </section>
      <GalleryPhotos path={album.path} photos={album.images} />
    </GalleryStyled>
  );
};

const GalleryStyled = styled.main`
  .infosContainer {
    width: 100%;
    height: clamp(50px, 5vw, 75px);
    max-width: calc(1260px + (2 * 5vw));
    padding-inline: 5vw;
    position: relative;

    .actionBtn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      font-weight: 500;
      &.prev {
        left: 5vw;
      }
      &.next {
        right: 5vw;
      }

      i {
        font-size: 1.3rem;
      }

      &:hover {
        color: var(--secondColor);
        transition: color 250ms ease-out;
        i {
          color: var(--secondColor);
          transition: color 250ms ease-out;
        }
      }
    }
  }
`;

export default Gallery;
