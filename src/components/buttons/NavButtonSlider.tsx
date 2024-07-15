import styled from "styled-components";

type NavButtonSliderProps = {
  icon: string;
  position: "left" | "right";
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const NavButtonSlider = ({ icon, position, onClick }: NavButtonSliderProps) => {
  return (
    <NavButtonSliderStyled $position={position} onClick={onClick}>
      <button className="button">
        <i className={icon}></i>
      </button>
    </NavButtonSliderStyled>
  );
};

const NavButtonSliderStyled = styled.div<{ $position: "left" | "right" }>`
  --transitionTime: 300ms;

  ${({ $position }) =>
    $position === "left"
      ? "--gradientDirection: -90deg;"
      : "--gradientDirection: 90deg;"}

  height: calc(100% - 50px);
  top: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
  ${({ $position }) => ($position === "left" ? "left: 0;" : "right: 0;")}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    background: linear-gradient(
      var(--gradientDirection),
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(222, 222, 222, 0.7) 100%
    );
  }

  &:active::before {
    animation: fadeNavbutton 2000ms;
  }

  .button {
    width: clamp(30px, 5vw, 40px);
    height: clamp(30px, 5vw, 40px);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(222, 222, 222, 0.5);
    box-shadow: 0px 0px 0px 4px rgba(222, 222, 222, 0.2),
      0px 0px 20px rgba(70, 70, 70, 0.2);
    transition: transform var(--transitionTime),
      background-color var(--transitionTime), box-shadow var(--transitionTime);

    // ICON STYLE
    i {
      font-size: clamp(14px, 3vw, 20px);
      color: #8e8e8e;
      transition: color var(--transitionTime);
    }

    // HOVER STYLE
    &:hover {
      transform: scale(1.1);
      background-color: rgba(222, 222, 222, 0.7);
      box-shadow: 0px 0px 0px 4px rgba(222, 222, 222, 0.4),
        0px 0px 20px rgba(70, 70, 70, 0.4);

      i {
        color: #646464;
      }
    }
  }
`;
export default NavButtonSlider;
