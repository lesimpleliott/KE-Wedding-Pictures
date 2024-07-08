import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
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
        // Supprime le hash de l'URL
        window.history.replaceState(null, "", location.pathname);
      }
    }
  }, [location]);

  const handleButtonClick = () => {
    const element = document.getElementById("albumsContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Supprime le hash de l'URL
      window.history.replaceState(null, "", location.pathname);
    }
  };

  return (
    <HomeStyled>
      <HeroBanner img="./KE_mainCover.avif" imgAlign="70%">
        <div className="banner">
          <img
            src="./logos/LogoKE_WhitePink_V2_RVB.svg"
            alt="Logo Katherine & Eliott"
          />
        </div>
        <JumpinButton
          onClick={handleButtonClick}
          className="fa-solid fa-angles-down"
        />
      </HeroBanner>
      <AlbumsGallery />
    </HomeStyled>
  );
};

const HomeStyled = styled.main`
  scroll-behavior: smooth;

  .banner {
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.15);
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
`;

export default Home;
