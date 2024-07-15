import React from "react";
import styled from "styled-components";
import ActionButton from "../buttons/ActionButton";

type ActionContainerProps = {
  closeSlider: () => void;
  downloadImg?: string;
};

const ActionContainer: React.FC<ActionContainerProps> = ({
  closeSlider,
  downloadImg,
}) => {
  const handleDownload = (url: string) => {
    // Créer un lien invisible pour le téléchargement
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ActionContainerStyled>
      {downloadImg && (
        <ActionButton
          text="Téléchargez HD"
          onClick={(e) => {
            e.stopPropagation(); // Empêche la propagation du clic vers le conteneur
            handleDownload(downloadImg);
          }}
        >
          <svg viewBox="0 0 116.1 112.1">
            <path d="M111.6,20l-14.5-15.1c-3-3.1-7.3-4.9-11.6-4.9H17.6C7.9,0,0,7.9,0,17.6v76.9c0,9.7,7.9,17.6,17.6,17.6h80.9c9.7,0,17.6-7.9,17.6-17.6V31.1c0-4.2-1.6-8.1-4.5-11.2ZM79.8,8.4v20.5H25.9V8.4h53.9ZM107.7,94.5c0,5.1-4.1,9.2-9.2,9.2H17.6c-5.1,0-9.2-4.1-9.2-9.2V17.6c0-5.1,4.1-9.2,9.1-9.2v24.7c0,2.3,1.9,4.2,4.2,4.2h62.3c2.3,0,4.2-1.9,4.2-4.2V8.9c1.1.4,2.1,1,2.9,1.9l14.5,15.1c1.4,1.4,2.1,3.3,2.1,5.3v63.3ZM54.1,52.4v34.4c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2v-13.6h-18.3v13.6c0,2.3-1.9,4.2-4.2,4.2s-4.2-1.9-4.2-4.2v-34.4c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2v12.5h18.3v-12.5c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2ZM64.8,48.2c-2.3,0-4.2,1.9-4.2,4.2v34.4c0,2.3,1.9,4.2,4.2,4.2,12.9,0,32.3,0,32.3-21.4s-19.4-21.4-32.3-21.4ZM69,82.5v-25.9c13.4.3,19.7,2.3,19.7,13s-6.3,12.7-19.7,13Z" />
          </svg>
        </ActionButton>
      )}
      <ActionButton
        icon="fa-solid fa-xmark"
        text="Fermez"
        onClick={(e) => {
          e.stopPropagation(); // Empêche la propagation du clic vers le conteneur
          closeSlider();
        }}
      />
    </ActionContainerStyled>
  );
};

const ActionContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;
`;

export default ActionContainer;
