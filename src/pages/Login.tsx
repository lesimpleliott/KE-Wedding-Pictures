import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <LoginStyled>
      <BackgroundImage img="./KE_mainCover.webp" align="70%" blur />
      <img
        src="./logos/LogoKE_WhitePink_NoDate_V2_RVB.svg"
        alt="Katherine & Eliott - Logo"
        className="logo"
      />
      <LoginForm />
    </LoginStyled>
  );
};

//Styled Component
const LoginStyled = styled.main`
  width: 100vw;
  height: 100vh;
  padding-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .logo {
    width: 70vw;
    max-width: 350px;
    margin-bottom: 20px;
    position: relative;
    left: 5px;
  }
`;

export default Login;
