// ProgressBar.tsx
import React from "react";
import styled from "styled-components";

type ProgressBarProps = {
  value: number;
  max: number;
  onChange: (value: number) => void;
};

const ProgressBar = ({ value, max, onChange }: ProgressBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <ProgressBarStyled>
      <input type="range" value={value} max={max} onChange={handleChange} />
    </ProgressBarStyled>
  );
};

const ProgressBarStyled = styled.div`
  border: solid deeppink 1px;
  width: 90%;
  position: relative;
  z-index: 10;

  input {
    all: unset;
    width: 100%;
    height: 8px;
    cursor: pointer;
    background-color: rgba(230, 230, 230, 0.5);
    transition: background-color 250ms ease-in-out;

    &::-ms-thumb,
    &::-webkit-slider-thumb,
    &::-moz-range-thumb {
      background-color: var(--mainColor);
      border: solid var(--mainColor) 1px;
      border-radius: 50%;
      cursor: pointer;
    }

    &:hover {
      background-color: rgba(230, 230, 230, 0.8);
    }
  }
`;

export default ProgressBar;
