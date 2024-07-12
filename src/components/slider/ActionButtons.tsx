import styled from "styled-components";

type ActionButtonsProps = {
  closeSlider: () => void;
  download: string;
};

const ActionButtons = ({ closeSlider, download }: ActionButtonsProps) => {
  return (
    <ActionButtonsStyled>
      <button className="btn" onClick={closeSlider}>
        <i className="fa-solid fa-xmark"></i>
      </button>

      <a className="btn" download href={download}>
        <i className="fa-solid fa-download"></i>
      </a>
    </ActionButtonsStyled>
  );
};

const ActionButtonsStyled = styled.div`
  position: absolute;
  top: 2vw;
  right: 2vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .btn {
    position: relative;
    width: clamp(2.5rem, 5vw, 3rem);
    height: clamp(2.5rem, 5vw, 3rem);
    border-radius: 100%;
    background-color: rgba(200, 200, 200, 0.3);
    transition: background-color 250ms ease-out, transform 250ms ease-out;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(150, 150, 150);
      font-size: 1.5rem;
    }

    &:hover {
      background-color: rgba(200, 200, 200, 0.8);
      transform: scale(1.1);

      i {
        color: rgb(100, 100, 100);
      }
    }
  }
`;

export default ActionButtons;
