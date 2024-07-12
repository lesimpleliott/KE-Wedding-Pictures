import { useEffect, useRef, useState } from "react";

const useResizeObserver = () => {
  const [width, setWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (entries[0].contentRect) {
        setWidth(entries[0].contentRect.width);
      }
    };

    const observer = new ResizeObserver((entries) => handleResize(entries));

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { width, containerRef };
};

export default useResizeObserver;
