import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorStyled>
      <img src="/404Error.svg" alt="" />
      <NavLink to="/home#albumsContainer" className="button main">
        Retour à l'accueil
      </NavLink>
      {/* <h1>404</h1>
      <p>La page demandée n'existe pas</p> */}
    </ErrorStyled>
  );
};

const ErrorStyled = styled.main`
  min-height: calc(100dvh - 125px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8vh;

  img {
    width: 90%;
    max-width: 700px;
    object-fit: contain;
  }

  .button {
    width: 150px;
    padding: 0.5rem 1rem;
    text-align: center;
    user-select: none;
    border-radius: 8px;
    border: solid 2px var(--buttonColor);
    color: var(--buttonColor);
    transition: border 250ms ease-in-out, background-color 250ms ease-in-out,
      color 250ms ease-in-out, box-shadow 250ms ease-in-out;

    &.main {
      color: #fff;
      background-color: var(--buttonColor);
    }

    &:hover {
      background-color: var(--secondColor);
      box-shadow: 0 0 0 5px var(--secondColor-light);
      color: #fff;
      border: solid 2px transparent;
    }
  }
`;

export default Error;
