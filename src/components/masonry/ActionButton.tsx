import styled from "styled-components";

type ActionButtonProps = {
  icon: string; // FontAwesome icon class e.g., "fa-solid fa-download"
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const ActionButton = ({ icon, onClick }: ActionButtonProps) => {
  return (
    <ActionButtonStyled onClick={onClick}>
      <i className={icon}></i>
    </ActionButtonStyled>
  );
};

const ActionButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  transition: transform 150ms ease;
  cursor: pointer;

  i {
    color: var(--mainColor);
    transition: transform 150ms ease;
  }

  &:hover {
    transform: scale(1.2);
    background-color: rgba(255, 255, 255, 0.8);

    i {
      color: var(--secondColor);
    }
  }
`;

export default ActionButton;
