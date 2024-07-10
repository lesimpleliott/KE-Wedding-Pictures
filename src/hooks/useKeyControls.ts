import { useEffect } from "react";

type KeyControlsProps = {
  handleNext: () => void;
  handlePrev: () => void;
  closeSlider: () => void;
};

const useKeyControls = ({
  handleNext,
  handlePrev,
  closeSlider,
}: KeyControlsProps) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        closeSlider();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handleNext, handlePrev, closeSlider]);
};

export default useKeyControls;
