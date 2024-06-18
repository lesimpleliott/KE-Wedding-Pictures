import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";

type AlbumBannerProps = {
  title: string;
  image: string;
  align?: string | undefined;
};

const AlbumBanner = ({ title, image, align }: AlbumBannerProps) => {
  return (
    <AlbumBannerStyled className="banner">
      <h1>{title}</h1>
      <BackgroundImage img={image} align={align} />
    </AlbumBannerStyled>
  );
};

const AlbumBannerStyled = styled.section`
  position: relative;
  height: 50vh;
  width: 100%;
  overflow: hidden;

  h1 {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-inline: 5vw;
    font-family: "Dancing Script", cursive;
    font-size: clamp(5rem, 10vw, 7rem);
    text-align: center;
    line-height: 0.9;
    color: var(--contrast);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    user-select: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

export default AlbumBanner;
