import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollButton = () => {
  const [show, setShow] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => {
    setShow(window.scrollY > 100);

    const scrollValue =
      ((window.scrollY + window.innerHeight) / document.body.offsetHeight) *
      100;
    setScrollValue(scrollValue);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <ScrollButtonContainer
      show={show}
      onClick={scrollToTop}
      scrollValue={scrollValue}
    >
      <span className="progressbar"></span>
      <i className="fa-solid fa-chevron-up"></i>
    </ScrollButtonContainer>
  );
};

const ScrollButtonContainer = styled.button<{
  show: boolean;
  scrollValue: number;
}>`
  all: unset;
  cursor: pointer;
  position: fixed;
  bottom: 5vh;
  right: 10vw;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(110px)")};
  transition: transform 150ms ease-in-out;

  .progressbar {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 5px),
      #fff calc(100% - 5px)
    );
    background-image: conic-gradient(
      var(--buttonColor) ${({ scrollValue }) => scrollValue}%,
      rgb(239, 239, 239) ${({ scrollValue }) => scrollValue}%
    );
  }

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    color: #808080;
    transition: color 200ms ease-out;
  }

  &:hover {
    i {
      color: var(--buttonColor);
    }
  }
`;

export default ScrollButton;
