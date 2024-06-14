import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import data from "../assets/dataPhotos.json";

const getImageDimensions = (src: string) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = src;
  });
};

const transformPhotos = async (album) => {
  const transformedImages = await Promise.all(
    album.images.map(async (image) => {
      const { width, height } = await getImageDimensions(
        `${album.path}/lowRes/${image.lowRes}`
      );
      return {
        src: `${album.path}/lowRes/${image.lowRes}`,
        width,
        height,
        alt: "agaiiiin",
        title: image.lowRes,
      };
    })
  );
  return transformedImages;
};

const albums = data.albums.map((album) => ({
  id: album.id,
  title: album.title,
  photos: transformPhotos(album),
}));

const PhotoGallery = () => {
  const [currentAlbum, setCurrentAlbum] = useState(albums[0]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const albumPhotos = await currentAlbum.photos;
      setPhotos(albumPhotos);
    };
    loadPhotos();
  }, [currentAlbum]);

  return (
    <div>
      {/* <div className="album-selector">
        {albums.map((album) => (
          <button key={album.id} onClick={() => setCurrentAlbum(album)}>
            {album.title}
          </button>
        ))}
      </div> */}

      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
};

export default PhotoGallery;
