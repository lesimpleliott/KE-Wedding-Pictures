import styled from "styled-components";

type CloseButtonProps = {
  closeSlider: () => void;
};

const CloseButton = ({ closeSlider }: CloseButtonProps) => {
  return (
    <CloseButtonStyled onClick={closeSlider}>
      <span></span>
      <span></span>
    </CloseButtonStyled>
  );
};

const CloseButtonStyled = styled.button`
  position: absolute;
  top: 2vw;
  right: 2vw;
  z-index: 100;
  width: clamp(2.5rem, 5vw, 3rem);
  height: clamp(2.5rem, 5vw, 3rem);
  border-radius: 100%;
  background-color: rgba(253, 216, 216, 0.4);
  transition: background-color 250ms ease-out, transform 250ms ease-out;

  span {
    width: 60%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgb(150, 150, 150);
    border-radius: 10px;
    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &:hover {
    background-color: rgba(253, 216, 216, 0.8);
    transform: scale(1.1);

    span {
      background-color: rgb(100, 100, 100);
    }
  }
`;

export default CloseButton;
