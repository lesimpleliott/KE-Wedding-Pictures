import styled from "styled-components";
import HeroBanner from "../layouts/HeroBanner";

const Home = () => {
  return (
    <HomeStyled>
      <HeroBanner />
    </HomeStyled>
  );
};

const HomeStyled = styled.main``;

export default Home;
