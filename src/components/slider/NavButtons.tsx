import styled from "styled-components";

type NavButtonsProps = {
  imageIndex: number;
  imagesLength: number;
  handleNext: () => void;
  handlePrev: () => void;
};

const NavButtons = ({
  imageIndex,
  imagesLength,
  handleNext,
  handlePrev,
}: NavButtonsProps) => {
  return (
    <NavBoxStyled>
      {/* PREVIOUS BUTTON */}
      <button
        className={`prev ${imageIndex === 0 ? "hidden" : ""}`}
        onClick={handlePrev}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/*  NEXT BUTTON */}
      <button
        className={`next ${imageIndex === imagesLength - 1 ? "hidden" : ""}`}
        onClick={handleNext}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </NavBoxStyled>
  );
};

const NavBoxStyled = styled.div`
  button {
    width: clamp(2rem, 5vw, 3rem);
    height: clamp(2rem, 5vw, 3rem);
    position: absolute;
    top: 48%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: rgba(230, 230, 230, 0.4);
    transition: background-color 250ms ease-out, transform 250ms ease-out;

    &.prev {
      left: 2vw;
    }
    &.next {
      right: 2vw;
    }
    &.hidden {
      visibility: hidden;
    }

    i {
      font-size: 1.5rem;
      color: rgb(150, 150, 150);
      transition: color 250ms ease-out;
    }

    &:hover {
      background-color: rgba(200, 200, 200, 0.8);
      transform: translateY(-50%) scale(1.1);
      i {
        color: rgb(100, 100, 100);
      }
    }
  }
`;

export default NavButtons;
