import styled from "styled-components";
import { ImageType } from "../../types/imageType";

type ImageContainerProps = {
  images: ImageType[];
  imageIndex: number;
};

const ImageContainer = ({ images, imageIndex }: ImageContainerProps) => {
  const shouldPreload = (index: number) => {
    const distance = Math.abs(index - imageIndex);
    return distance <= 3 || distance >= images.length - 3;
  };

  return (
    <ImageContainerStyled>
      {images.map((image, index) => (
        <img
          key={image.id.toString()}
          src={image.path.display}
          alt={image.filename}
          loading={shouldPreload(index) ? "eager" : "lazy"}
          style={{ transform: `translateX(${-100 * imageIndex}%)` }}
        />
      ))}
    </ImageContainerStyled>
  );
};

const ImageContainerStyled = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
  display: flex;

  img {
    min-width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 300ms ease-in-out;
  }
`;

export default ImageContainer;
