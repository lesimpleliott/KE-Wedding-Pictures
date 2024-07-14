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

  position: absolute;
  top: 50%;
  transform: translateY(-100%);
  margin: 1rem;
  z-index: 10;
  ${({ $position }) => ($position === "left" ? "left: 0;" : "right: 0;")}

  .button {
    width: clamp(25px, 5vw, 40px);
    height: clamp(25px, 5vw, 40px);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(222, 222, 222, 0.5);
    box-shadow: 0px 0px 0px 4px rgba(222, 222, 222, 0.2),
      0px 0px 20px rgba(70, 70, 70, 0.2);

    transition: border-radius var(--transitionTime),
      background-color var(--transitionTime), box-shadow var(--transitionTime),
      transform var(--transitionTime);

    // ICON STYLE
    i {
      font-size: clamp(14px, 3vw, 20px);
      color: grey;
      transition-duration: var(--transitionTime);
    }

    // HOVER STYLE
    &:hover {
      transform: scale(1.1);
      background-color: rgba(222, 222, 222, 0.7);
      box-shadow: 0px 0px 0px 4px rgba(222, 222, 222, 0.4),
        0px 0px 20px rgba(70, 70, 70, 0.4);
    }
  }
`;
export default NavButtonSlider;
