import styled from "styled-components";

type BackgroundImageType = {
  img: string;
  align?: string | undefined;
  blur?: boolean;
};

const BackgroundImage = ({ img, blur, align }: BackgroundImageType) => {
  return (
    <BackgroundImageStyled
      src={img}
      alt="Photo de couverture"
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

  &.blur {
    filter: brightness(0.8) blur(5px);
  }
`;

export default BackgroundImage;
