import { ReactNode } from "react";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

type HeroBannerProps = {
  img: string;
  imgAlign?: string;
  height?: string;
  children?: ReactNode;
};

const HeroBanner = ({ img, imgAlign, height, children }: HeroBannerProps) => {
  return (
    <HeroBannerStyled height={height}>
      <BackgroundImage img={img} align={imgAlign} />
      {children}
    </HeroBannerStyled>
  );
};

const HeroBannerStyled = styled.section<{ height?: string }>`
  width: 100%;
  height: ${({ height }) => height || "100vh"};
  position: relative;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

export default HeroBanner;
