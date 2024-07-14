import styled from "styled-components";

type ActionButtonProps =
  | {
      icon?: string; // FontAwesome icon class e.g., "fa-solid fa-download"
      children: React.ReactNode;
      text: string;
      onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    }
  | {
      icon: string; // FontAwesome icon class e.g., "fa-solid fa-download"
      children?: React.ReactNode;
      text: string;
      onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    };

const ActionButton = ({ icon, children, text, onClick }: ActionButtonProps) => {
  return (
    <ActionButtonStyled onClick={onClick}>
      <button className="button">
        {children && children}
        {icon && <i className={icon}></i>}
        <span className="text">{text}</span>
      </button>
    </ActionButtonStyled>
  );
};

const ActionButtonStyled = styled.div`
  --transitionTime: 300ms;

  .button {
    width: 40px;
    height: 40px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: rgba(222, 222, 222, 0.8);
    box-shadow: 0px 0px 0px 4px rgba(222, 222, 222, 0.3),
      0px 0px 20px rgba(70, 70, 70, 0.5);
    transition: width var(--transitionTime),
      background-color var(--transitionTime);

    // ICON STYLE
    svg {
      width: 22px;
      transition: width var(--transitionTime);
      & path {
        fill: var(--secondColor);
      }
    }
    i {
      font-size: 20px;
      color: var(--secondColor);
      transition-duration: var(--transitionTime);
    }

    // TEXT STYLE
    .text {
      position: absolute;
      bottom: -20px;
      color: white;
      font-size: 0;
      font-weight: 500;
      opacity: 0;
      transition: font-size var(--transitionTime), opacity var(--transitionTime);
    }

    // HOVER STYLE
    &:hover {
      width: 140px;
      background-color: var(--secondColor);
      box-shadow: 0px 0px 0px 4px rgba(227, 45, 115, 0.4);
      align-items: center;

      & svg {
        transform: translateY(-200%);
      }

      & .text {
        font-size: 13px;
        opacity: 1;
        bottom: unset;
      }
    }
  }
`;

export default ActionButton;
