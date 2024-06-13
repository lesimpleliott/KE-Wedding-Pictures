import styled from "styled-components";

import Albums from "../layouts/Albums";
import HeroBanner from "../layouts/HeroBanner";

const Home = () => {
  return (
    <HomeStyled>
      <HeroBanner />
      <Albums />
    </HomeStyled>
  );
};

const HomeStyled = styled.main``;

export default Home;
