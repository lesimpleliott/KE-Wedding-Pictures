import styled from "styled-components";

import GalleryAlbums from "../layouts/GalleryAlbums";
import HeroBanner from "../layouts/HeroBanner";

const Home = () => {
  return (
    <HomeStyled>
      <HeroBanner />
      <GalleryAlbums />
    </HomeStyled>
  );
};

const HomeStyled = styled.main``;

export default Home;
