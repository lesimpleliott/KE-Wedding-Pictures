export type ImageType = {
  id: number;
  author: string;
  filename: string;
  path: {
    display: string;
    hd: string;
  };
  size: {
    height: number;
    width: number;
  };
};
