import { useEffect, useRef } from "react";

type SwipeControlsProps = {
  handleNext: () => void;
  handlePrev: () => void;
  closeSlider?: () => void;
  sensitivityY?: number;
  sensitivityX?: number;
  maxSwipeDistance?: number;
};

const useSwipeControls = ({
  handleNext,
  handlePrev,
  closeSlider,
  sensitivityY = 200 /* Valeur par défaut */,
  sensitivityX = 100 /* Valeur par défaut */,
  maxSwipeDistance = 300 /* Valeur par défaut */,
}: SwipeControlsProps) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const touchStartTime = useRef(0);
  const touchEndTime = useRef(0);
  const pinchDetected = useRef(false);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      pinchDetected.current = false;
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
      touchStartTime.current = e.timeStamp;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length >= 2) {
        // Si plus de deux touches, potentiellement un pinch
        pinchDetected.current = true;
      }
      touchEndX.current = e.changedTouches[0].screenX;
      touchEndY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndTime.current = e.timeStamp;
      const timeElapsed = touchEndTime.current - touchStartTime.current;
      const distanceX = Math.abs(touchStartX.current - touchEndX.current);
      const distanceY = Math.abs(touchStartY.current - touchEndY.current);

      // console.log("-----------------");
      // console.log("horizontal", distanceX);
      // console.log("vertical", distanceY);
      // console.log("timeElapsed", timeElapsed);

      // Gestion du swipe horizontal (X)
      if (!pinchDetected.current) {
        if (
          distanceX >= sensitivityX &&
          distanceX < maxSwipeDistance &&
          distanceY < sensitivityY &&
          timeElapsed > 100 // Vérifie que ce n'est pas un tap rapide (100ms)
        ) {
          if (touchEndX.current - touchStartX.current > 0) {
            // console.log("swipe droite");
            handlePrev(); // Swipe vers la droite
          } else {
            // console.log("swipe gauche");
            handleNext(); // Swipe vers la gauche
          }
        } else if (timeElapsed <= 100) {
          // console.log("tap détecté, aucune action");
        }

        // Gestion du swipe vertical (Y)
        if (distanceY >= sensitivityY && distanceY > distanceX) {
          // console.log("swipe vertical détecté");
          closeSlider && closeSlider();
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
    sensitivityX,
    sensitivityY,
    maxSwipeDistance,
  ]);
};

export default useSwipeControls;
