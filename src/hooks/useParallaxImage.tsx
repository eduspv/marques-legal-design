import { useEffect, useRef } from "react";

interface Options {
  speed?: number;
  maxOffset?: number;
}

export function useParallaxImage<T extends HTMLElement>(
  options: Options = {}
) {
  const { speed = 0.05, maxOffset = 12 } = options;
  const ref = useRef<T>(null);

  const lastScrollY = useRef(0);
  const currentTranslate = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const parent = el.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const scrollY = window.scrollY;

      // detectar direção
      const direction = scrollY > lastScrollY.current ? 1 : -1;
      lastScrollY.current = scrollY;

      // progresso baseado no centro (igual Hafnia)
      const progress =
        (rect.top + rect.height / 2 - viewportH / 2) / viewportH;

      // cálculo base
      let target = progress * speed * 100;

      // clamp para não escapar
      target = Math.max(-maxOffset, Math.min(maxOffset, target));

      // 🔥 suavização (ESSENCIAL)
      currentTranslate.current += (target - currentTranslate.current) * 0.08;

      el.style.transform = `translate3d(0, calc(-50% + ${currentTranslate.current}%), 0)`;

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    requestUpdate();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [speed, maxOffset]);

  return ref;
}