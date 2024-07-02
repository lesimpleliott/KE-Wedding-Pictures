import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import JumpinButton from "../components/JumpinButton";
import AlbumsGallery from "../layouts/AlbumsGallery";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <HomeStyled>
      <section className="heroBanner">
        <BackgroundImage img="./KE_mainCover.avif" align="70%" />
        <div className="banner">
          <img src="./logos/LogoKE_WhitePink_V2_RVB.svg" alt="" />
        </div>
        <JumpinButton
          href="#albumsContainer"
          className="fa-solid fa-angles-down"
        />
      </section>

      <AlbumsGallery />
    </HomeStyled>
  );
};

const HomeStyled = styled.main`
  .heroBanner {
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
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 35%;
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
    }
  }
`;

export default Home;
