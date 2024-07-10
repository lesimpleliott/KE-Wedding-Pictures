import styled from "styled-components";

const NavbarSlider = () => {
  return (
    <NavbarSliderStyled>
      <div className="controlContainer">
        <button>
          <i className="fa-solid fa-backward-step"></i>
        </button>
        <button>
          <i className="fa-solid fa-play"></i>
        </button>
        <button>
          <i className="fa-solid fa-forward-step"></i>
        </button>
        <button>
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </NavbarSliderStyled>
  );
};

const NavbarSliderStyled = styled.nav`
  border: solid deeppink 1px;
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .controlContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;
  }
`;

export default NavbarSlider;
