import { useEffect, useRef } from "react";

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
  verticalSensitivity = 100, // Provide a default value for horizontalSensitivity
  maxSwipeDistance,
}: SwipeControlsProps) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].screenX;
      touchEndY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = () => {
      const horizontalDistance = Math.abs(
        touchStartX.current - touchEndX.current
      );
      const verticalDistance = Math.abs(
        touchStartY.current - touchEndY.current
      );

      console.log("horizontalDistance:", horizontalDistance);
      console.log("verticalDistance:", verticalDistance);

      if (
        horizontalDistance > horizontalSensitivity &&
        horizontalDistance < maxSwipeDistance
      ) {
        if (touchEndX.current - touchStartX.current > 0) {
          console.log("Swipe vers la droite");
          handlePrev(); // Swipe vers la droite
        } else {
          console.log("Swipe vers la gauche");
          handleNext(); // Swipe vers la gauche
        }
      }

      if (
        verticalDistance > verticalSensitivity &&
        verticalDistance < maxSwipeDistance
      ) {
        if (touchEndY.current - touchStartY.current > 0) {
          console.log("Swipe vers le bas");
          closeSlider && closeSlider(); // Swipe vers le bas
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
