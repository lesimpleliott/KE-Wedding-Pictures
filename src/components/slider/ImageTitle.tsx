import styled from "styled-components";
import { ImageType } from "../../types/imageType";

type ImageTitleProps = {
  image: ImageType;
  albumTitle: string;
};

const ImageTitle = ({ image, albumTitle }: ImageTitleProps) => {
  return (
    <ImageTitleStyled>
      <p>
        {image.author} - {albumTitle} ({image.id})
      </p>
    </ImageTitleStyled>
  );
};

const ImageTitleStyled = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.8rem;
    position: relative;

    @media screen and (min-width: 768px) {
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 60px;
        height: 1px;
        top: 50%;
        background-color: var(--mainColor);
      }

      &::before {
        left: -70px;
      }
      &::after {
        right: -70px;
      }
    }
  }
`;

export default ImageTitle;
