import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <BackgroundImage />
      <div className="textBanner">
        <h1>Katherine & Eliott</h1>
        <h2>18 mai 2024</h2>
      </div>
    </HeroBannerStyled>
  );
};

const HeroBannerStyled = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  .textBanner {
    width: 100%;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
      font-size: 3rem;
      color: #fff;
    }

    h2 {
      font-size: 2rem;
      color: #fff;
    }
  }
`;

export default HeroBanner;
