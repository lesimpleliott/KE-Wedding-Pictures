import { useEffect, useState } from "react";
import styled from "styled-components";

type JumpinButtonProps = {
  linky: string;
  className: string;
};

const JumpinButton = ({ linky, className }: JumpinButtonProps) => {
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsJumping((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <JumpinButtonStyled href={linky}>
      <span className={`btn ${isJumping ? "jumpButton" : ""}`}>
        <i className={`icon ${className}`}></i>
      </span>
    </JumpinButtonStyled>
  );
};

const JumpinButtonStyled = styled.a`
  --size: 70px;
  --arrowsize: 1.7rem;

  /* display: inline-block; */
  color: var(--contrast);

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
      height: calc(var(--size) - 10px);
      width: calc(var(--size) - 10px);
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
  @keyframes jumpButton {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    10% {
      transform: translateY(0) scale(1.3, 0.8);
    }
    11% {
      transform: translateY(0) scale(0.7, 1.2);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    39% {
      transform: translateY(-50px) scale(1);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    40% {
      transform: translateY(-50px) scale(1);
    }
    41% {
      transform: translateY(-50px) scale(1);
      animation-timing-function: cubic-bezier(1, 0, 1, 1);
    }
    69% {
      transform: translateY(0px) scale(1, 1);
      animation-timing-function: cubic-bezier(1, 0, 1, 1);
    }
    70% {
      transform: translateY(0) scale(1.5, 0.4);
    }
    80% {
      transform: translateY(0) scale(0.8, 1.2);
    }
    90% {
      transform: translateY(0) scale(1.1, 0.8);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }
`;

export default JumpinButton;
