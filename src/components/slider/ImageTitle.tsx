import styled from "styled-components";
import { ImageType } from "../../types/imageType";

type ImageTitleProps = {
  image: ImageType;
  albumTitle: string;
};

const ImageTitle = ({ image, albumTitle }: ImageTitleProps) => {
  return (
    <ImageTitleStyled>
      {image.author === "Fabrice Joubert Photographe" ? (
        <p className="text">
          <a href="https://fabricejoubert.fr/" target="_blank" rel="noreferrer">
            {image.author}
          </a>
          &nbsp;- {albumTitle} ({image.id})
        </p>
      ) : (
        <p className="text">
          {image.author} - {albumTitle} ({image.id})
        </p>
      )}
    </ImageTitleStyled>
  );
};

const ImageTitleStyled = styled.section`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.8rem;
    position: relative;

    a {
      color: var(--mainColor);
      transition: color 150ms ease-out;

      &:hover {
        color: var(--secondColor);
      }
    }

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
