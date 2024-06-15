import { useEffect, useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import styled from "styled-components";
import data from "../assets/dataPhotos.json";

// Types pour les albums et les images
type ImageType = {
  id: string;
  author: string;
  hd: string;
  lowRes: string;
};

type AlbumType = {
  id: string;
  title: string;
  downloadLink: string;
  path: string;
  cover: string;
  images: ImageType[];
};

type AlbumDataType = {
  albums: AlbumType[];
};

// Charger les données JSON
const albumData: AlbumDataType = data;

// Fonction pour obtenir les dimensions d'une image
const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = src;
  });
};

// Fonction pour transformer les photos d'un album
const transformPhotos = async (album: AlbumType): Promise<Photo[]> => {
  const transformedImages = await Promise.all(
    album.images.map(async (image) => {
      const { width, height } = await getImageDimensions(
        `${album.path}/thumbnail/${image.lowRes}`
      );
      return {
        src: `${album.path}/thumbnail/${image.lowRes}`,
        width,
        height,
        alt: image.id,
        title: image.author,
      };
    })
  );
  return transformedImages;
};

// Transformation des albums avec les photos
const albums = albumData.albums.map((album) => ({
  id: album.id,
  title: album.title,
  photos: transformPhotos(album),
}));

// Composant GalleryPhotos
const GalleryPhotos = () => {
  const [currentAlbum /*, setCurrentAlbum*/] = useState<{
    id: string;
    title: string;
    photos: Promise<Photo[]>;
  }>(albums[0]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const albumPhotos = await currentAlbum.photos;
      setPhotos(albumPhotos);
    };
    loadPhotos();
  }, [currentAlbum]);

  return (
    <GalleryPhotosStyled>
      {/* <div className="album-selector">
        {albums.map((album) => (
          <button key={album.id} onClick={() => setCurrentAlbum(album)}>
          {album.title}
          </button>
          ))}
          </div> */}
      <PhotoAlbum layout="masonry" photos={photos} />
    </GalleryPhotosStyled>
  );
};

const GalleryPhotosStyled = styled.section`
  width: 100%;
  max-width: calc(1260px + (2 * 5vw));
  padding-inline: 5vw;
`;

export default GalleryPhotos;
