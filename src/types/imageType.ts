type PathType = {
  hd: string;
  display: string;
};

type SizeType = {
  width: number;
  height: number;
};

export type ImageType = {
  id: number;
  filename: string;
  author: string;
  path: PathType;
  size: SizeType;
};
