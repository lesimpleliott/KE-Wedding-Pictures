import { useEffect } from "react";

type SwipeControlsProps = {
  handleNext: () => void;
  handlePrev: () => void;
  sensitivity?: number; // Ajoute une option de sensibilité personnalisée
  maxSwipeDistance?: number; // Ajoute une option pour la distance maximale de swipe
};

const useSwipeControls = ({
  handleNext,
  handlePrev,
  sensitivity = 50,
  maxSwipeDistance = 200,
}: SwipeControlsProps) => {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      const distance = Math.abs(touchStartX - touchEndX);

      if (distance > sensitivity && distance < maxSwipeDistance) {
        if (touchEndX - touchStartX > 0) {
          handlePrev(); // Swipe vers la droite
        } else {
          handleNext(); // Swipe vers la gauche
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
  }, [handleNext, handlePrev, sensitivity, maxSwipeDistance]);
};

export default useSwipeControls;
