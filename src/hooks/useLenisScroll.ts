import { useEffect } from "react";
import Lenis from "lenis";

export function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.6,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);
}