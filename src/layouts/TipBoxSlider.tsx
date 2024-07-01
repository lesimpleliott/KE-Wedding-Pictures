import { useEffect, useState } from "react";
import styled from "styled-components";
import Tip from "../components/Tip";

const TipBoxSlider = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(true);
  const [userClosedTips] = useState(
    sessionStorage.getItem("userClosedTips") === "true" ? true : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeTipBox = () => {
    setTipsOpen(false);
    sessionStorage.setItem("userClosedTips", "true");
  };

  return (
    userClosedTips === false &&
    isDesktop && (
      <TipBoxSliderStyled
        className={`${tipsOpen ? "open" : "close"} ${
          isDesktop ? "desktop" : ""
        }`}
        id="tipbox"
      >
        <button className="closeBtn" onClick={closeTipBox}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <h3>
          <i className="fa-regular fa-lightbulb"></i>Astuces
        </h3>
        <div className="content">
          <Tip
            keys={[
              { icon: "fa-solid fa-chevron-left" },
              { icon: "fa-solid fa-chevron-right" },
            ]}
            description="Faites défiler les photos en utilisant les flèches de votre clavier."
          />
          {/* <Tip
            keys={[{ text: "esc" }]}
            description="Utiliser la touche 'esc' pour retourner à la galerie."
          /> */}
        </div>
      </TipBoxSliderStyled>
    )
  );
};

const TipBoxSliderStyled = styled.aside`
  position: absolute;
  right: 15px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  border: solid grey 1px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  &.open {
    animation: fadeIn 300ms ease-out forwards;
    @keyframes fadeIn {
      from {
        opacity: 0;
        bottom: -200px;
      }
      to {
        opacity: 1;
        bottom: 30px;
      }
    }
  }
  &.close {
    animation: fadeOut 300ms ease-out forwards;
    @keyframes fadeOut {
      from {
        opacity: 1;
        bottom: 30px;
      }
      to {
        opacity: 0;
        bottom: -200px;
      }
    }
  }

  .closeBtn {
    position: absolute;
    top: 15px;
    right: 10px;
    height: 20px;
    width: 20px;
    border: solid var(--mainColor) 1px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: var(--secondColor);
      transition: border-color 250ms ease-out;
      i {
        color: var(--secondColor);
        transition: color 250ms ease-out;
      }
    }
  }

  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    i {
      font-size: 1.5rem;
    }
  }

  &.desktop {
    width: 400px;

    .content {
      padding-block: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default TipBoxSlider;
