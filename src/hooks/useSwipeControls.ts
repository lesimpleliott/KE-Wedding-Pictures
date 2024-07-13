import { useEffect, useRef, useState } from "react";

type SwipeControlsProps = {
  handleNext: () => void;
  handlePrev: () => void;
  closeSlider?: () => void;
  verticalSensitivity?: number;
  horizontalSensitivity: number;
  maxSwipeDistance: number;
};

const useSwipeControls = ({
  handleNext,
  handlePrev,
  closeSlider,
  horizontalSensitivity,
  verticalSensitivity = 150, // Valeur par défaut
  maxSwipeDistance,
}: SwipeControlsProps) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const [swipeDisabled, setSwipeDisabled] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!swipeDisabled) {
        touchStartX.current = e.changedTouches[0].screenX;
        touchStartY.current = e.changedTouches[0].screenY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!swipeDisabled) {
        touchEndX.current = e.changedTouches[0].screenX;
        touchEndY.current = e.changedTouches[0].screenY;
      }
    };

    const handleTouchEnd = () => {
      if (!swipeDisabled) {
        const horizontalDistance = Math.abs(
          touchStartX.current - touchEndX.current
        );
        const verticalDistance = Math.abs(
          touchStartY.current - touchEndY.current
        );

        if (
          horizontalDistance > horizontalSensitivity &&
          horizontalDistance < maxSwipeDistance
        ) {
          if (touchEndX.current - touchStartX.current > 0) {
            handlePrev(); // Swipe vers la droite
          } else {
            handleNext(); // Swipe vers la gauche
          }
        }

        if (
          verticalDistance > verticalSensitivity &&
          verticalDistance < maxSwipeDistance
        ) {
          if (touchEndY.current - touchStartY.current > 0) {
            closeSlider && closeSlider(); // Swipe vers le bas
          }
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
    swipeDisabled,
    horizontalSensitivity,
    verticalSensitivity,
    maxSwipeDistance,
  ]);

  return { setSwipeDisabled };
};

export default useSwipeControls;
