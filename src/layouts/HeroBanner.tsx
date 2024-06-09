import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import JumpinButton from "../components/JumpinButton";

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <BackgroundImage />
      <div className="textBanner">
        <h1>
          Katherine <strong>&</strong> Eliott
        </h1>
        <h2>18 mai 2024</h2>
      </div>
      <JumpinButton linky="#" className="fa-solid fa-angles-down" />
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

  .textBanner {
    width: 100%;
    padding: 2rem;
    background-color: rgba(78, 78, 78, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

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
