import styled from "styled-components";

type BackgroundImageType = {
  img: string;
  blur?: boolean;
  align?: string | undefined;
};

const BackgroundImage = ({ img, blur, align }: BackgroundImageType) => {
  return (
    <BackgroundImageStyled
      src={img}
      alt="Katherine & Eliott - Photo de couverture"
      className={blur ? "blur" : ""}
      style={{ objectPosition: `50% ${align}` }}
    />
  );
};

const BackgroundImageStyled = styled.img`
  width: 102%;
  height: 102%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -100;
  object-fit: cover;
  object-position: 50% 70%;

  &.blur {
    filter: brightness(0.8) blur(5px);
  }
`;

export default BackgroundImage;
