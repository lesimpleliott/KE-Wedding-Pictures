import styled from "styled-components";

const BackgroundImage = ({ blur }: { blur?: boolean }) => {
  return (
    <BackgroundImageStyled
      src="./KE_mainCover.webp"
      alt="Katherine & Eliott - Photo de couverture"
      className={blur ? "blur" : ""}
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
  object-position: 0 70%;

  &.blur {
    filter: brightness(0.8) blur(5px);
  }
`;

export default BackgroundImage;
