import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderStyled className="myLoader">
      <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      <p>Chargement en cours ...</p>
    </LoaderStyled>
  );
};

const LoaderStyled = styled.section`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    width: 4em;
    transform-origin: center;
    animation: rotate 2000ms linear infinite;

    circle {
      fill: none;
      stroke: var(--secondColor);
      stroke-width: 3;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1500ms ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }

      50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
      }

      100% {
        stroke-dashoffset: -125px;
      }
    }
  }

  p {
    font-weight: 300;
    color: var(--secondColor);
  }
`;

export default Loader;
