import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import JumpinButton from "../components/JumpinButton";

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <BackgroundImage img="./KE_mainCover.webp" />
      <div className="banner">
        <img src="./logos/LogoKE_WhitePink_V2_RVB.svg" alt="" />
      </div>
      <JumpinButton
        linky="#albumsContainer"
        className="fa-solid fa-angles-down"
      />
    </HeroBannerStyled>
  );
};

const HeroBannerStyled = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  .banner {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(78, 78, 78, 0.3);
    position: absolute;
    top: 33%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20vw;
      min-width: 250px;
      max-height: 300px;
    }

    h1 {
      font-size: 3rem;
      color: #fff;

      &::after {
        content: "";
        display: block;
        width: 100px;
        height: 2px;
        background-color: #fff;
        margin: 0 auto;
      }
    }

    h2 {
      margin-top: 8px;
      font-size: 2rem;
      color: #fff;
      font-weight: 400;
    }
  }
`;

export default HeroBanner;
