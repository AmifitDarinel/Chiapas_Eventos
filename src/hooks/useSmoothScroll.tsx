import { useEffect } from "react";

function useSmoothScroll() {
  useEffect(() => {
    let scrollTarget = window.scrollY;
    let currentScroll = window.scrollY;
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollTarget += e.deltaY;
      scrollTarget = Math.max(0, scrollTarget);
      requestTick();
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const updateScroll = () => {
      const diff = scrollTarget - currentScroll;
      currentScroll += diff * 0.06;
      window.scrollTo(0, currentScroll);

      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        ticking = false;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}

export default useSmoothScroll;
