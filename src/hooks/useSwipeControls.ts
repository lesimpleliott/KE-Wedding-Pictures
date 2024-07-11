import { useEffect } from "react";

type SwipeControlsProps = {
  handleNext: () => void;
  handlePrev: () => void;
  closeSlider: () => void;
  horizontalSensitivity: number; // Ajoute une option de sensibilité personnalisée pour swipe horizontal
  verticalSensitivity: number; // Ajoute une option de sensibilité personnalisée pour swipe vertical
  maxSwipeDistance: number; // Ajoute une option pour la distance maximale de swipe
};

const useSwipeControls = ({
  handleNext,
  handlePrev,
  closeSlider,
  horizontalSensitivity,
  verticalSensitivity,
  maxSwipeDistance,
}: SwipeControlsProps) => {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = () => {
      const horizontalDistance = Math.abs(touchStartX - touchEndX);
      const verticalDistance = Math.abs(touchStartY - touchEndY);

      if (
        horizontalDistance > horizontalSensitivity &&
        horizontalDistance < maxSwipeDistance
      ) {
        if (touchEndX - touchStartX > 0) {
          handlePrev(); // Swipe vers la droite
        } else {
          handleNext(); // Swipe vers la gauche
        }
      }

      if (
        verticalDistance > verticalSensitivity &&
        verticalDistance < maxSwipeDistance
      ) {
        if (touchEndY - touchStartY > 0) {
          closeSlider(); // Swipe vers le bas
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    handleNext,
    handlePrev,
    closeSlider,
    horizontalSensitivity,
    verticalSensitivity,
    maxSwipeDistance,
  ]);
};

export default useSwipeControls;
