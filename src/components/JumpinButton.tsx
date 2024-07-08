import { useEffect, useState } from "react";
import styled from "styled-components";

type JumpinButtonProps = {
  onClick: () => void;
  className: string;
};

const JumpinButton = ({ onClick, className }: JumpinButtonProps) => {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <JumpinButtonStyled onClick={onClick}>
      <span className={`btn ${isJumping ? "jumpButton" : ""}`}>
        <i className={`icon ${className}`}></i>
      </span>
    </JumpinButtonStyled>
  );
};

const JumpinButtonStyled = styled.button`
  --size: 60px;
  --arrowsize: 1.5rem;
  color: var(--contrast);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  .btn {
    height: var(--size);
    width: var(--size);
    border-radius: 75px;
    background: rgba(78, 78, 78, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: var(--arrowsize);
    transform-origin: bottom;

    &::before {
      content: "";
      height: calc(var(--size) - 8px);
      width: calc(var(--size) - 8px);
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(78, 78, 78, 0.2);
      border-radius: 75px;
    }

    &::after {
      content: "";
      height: calc(var(--size) - 20px);
      width: calc(var(--size) - 20px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: solid 2px var(--contrast);
      border-radius: 75px;
    }
  }

  .icon {
    color: var(--contrast);
    font-size: 100%;
  }

  .jumpButton {
    animation-name: jumpButton;
    animation-duration: 1000ms;
  }
`;

export default JumpinButton;
