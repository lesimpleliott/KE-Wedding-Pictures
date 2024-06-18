import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMenuIsOpen } from "../../feature/app.slice";
import { RootState } from "../../store";

const BurgerButton: React.FC = () => {
  const menuIsOpen = useSelector((state: RootState) => state.app.menuIsOpen);
  const dispatch = useDispatch();

  return (
    <BurgerButtonStyled
      onClick={() => dispatch(setMenuIsOpen(!menuIsOpen))}
      className={`${menuIsOpen ? "open" : "close"}`}
    >
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerButtonStyled>
  );
};

const BurgerButtonStyled = styled.button`
  height: 35px;
  width: 35px;
  padding: 5px;
  margin: 20px;
  position: fixed;
  z-index: 25;
  background: rgba(15, 15, 15, 0.4);
  border-radius: 5px;
  transition: transform 250ms ease-in-out;

  .burger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    span {
      height: 3px;
      width: 100%;
      background: var(--contrast);
      border-radius: 5px;
      transition: transform 250ms ease-in-out;
    }
  }

  &.open {
    transform: translateX(300px);

    & .burger {
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        transform: scale(0);
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
`;

export default BurgerButton;
