import { ImageType } from "./imageType";

type CoverType = {
  mini: string;
  cover: string;
  coverAlignment: string;
};

export type AlbumType = {
  title: string;
  id: string;
  path: string;
  zipFile: string;
  cover: CoverType;
  images: ImageType[];
};
