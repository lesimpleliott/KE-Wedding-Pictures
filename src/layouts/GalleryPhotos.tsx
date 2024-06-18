import { Suspense, useCallback, useEffect, useState } from "react";
import PhotoAlbum, { Photo as PhotoAlbumPhoto } from "react-photo-album";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import { setSelectedPicture } from "../feature/app.slice";
import { ImageType } from "../types/imageType";

type GalleryPhotosProps = {
  path: string;
  photos: ImageType[];
};

const GalleryPhotos = ({ path, photos }: GalleryPhotosProps) => {
  const [transformedPhotos, setTransformedPhotos] = useState<PhotoAlbumPhoto[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const idAlbum = useParams<{ idAlbum: string }>().idAlbum;
  const dispatch = useDispatch();

  // Fonction pour obtenir les dimensions des images
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

  // Fonction pour transformer l'objet 'ImageType' en objet 'PhotoAlbumPhoto'
  // Ajoute les dimensions de l'image
  const formatPhotosArray = useCallback(
    async (path: string, photos: ImageType[]): Promise<PhotoAlbumPhoto[]> => {
      return Promise.all(
        photos.map(async (photo) => {
          const src = `${path}/thumbnail/${photo.name}.webp`;
          const { width, height } = await getImageDimensions(src);
          return {
            src,
            width,
            height,
            key: photo.name,
          };
        })
      );
    },
    []
  );

  useEffect(() => {
    const fetchFormatPhotosArray = async () => {
      const transformed = await formatPhotosArray(path, photos);
      setTransformedPhotos(transformed);
      setIsLoading(false);
    };
    fetchFormatPhotosArray();
  }, [path, photos, formatPhotosArray]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryPhotosStyled>
        {isLoading ? (
          <Loader />
        ) : (
          <PhotoAlbum
            layout="masonry"
            photos={transformedPhotos}
            columns={(containerWidth) => {
              if (containerWidth < 400) return 1;
              if (containerWidth < 768) return 2;
              return 4;
            }}
            // onClick={({ index }) => {
            //   navigate(`/slider/${idAlbum}`);
            //  console.log(index)
            // }}
            onClick={({ index }) => {
              navigate(`/slider/${idAlbum}`);
              dispatch(setSelectedPicture(index));
            }}
          />
        )}
      </GalleryPhotosStyled>
    </Suspense>
  );
};

const GalleryPhotosStyled = styled.section`
  width: 100%;
  max-width: calc(1260px + (2 * 5vw));
  padding-inline: 5vw;

  .react-photo-album--photo {
    &:hover {
      transform: scale(1.02);
      transition: transform 150ms ease-in-out;
    }
  }
`;

export default GalleryPhotos;
