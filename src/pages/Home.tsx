import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GalleryAlbums from "../layouts/GalleryAlbums";
import HeroBanner from "../layouts/HeroBanner";

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
      <HeroBanner />
      <GalleryAlbums />
    </HomeStyled>
  );
};

const HomeStyled = styled.main``;

export default Home;
