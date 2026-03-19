import { useEffect, useRef } from "react";

// Parallax via transform: translateY() — igual ao Hafnia
// A imagem é maior que o container (overflow: hidden no pai)
// O JS move a imagem verticalmente conforme o scroll
// Resultado: o "recorte" visível muda sem a imagem sair do lugar

interface Options {
  // Intensidade do movimento — Hafnia usa ~0.15
  // 0.1 = sutil | 0.15 = igual Hafnia | 0.3 = dramático
  speed?: number;
}

export function useParallaxImage<T extends HTMLElement>(
  options: Options = {}
) {
  const { speed = 0.15 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      if (!el) return;

      const rect = el.parentElement!.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Progresso: quanto o centro do container está deslocado do centro da tela
      // -1 = container todo abaixo da tela | 0 = centro | 1 = todo acima
      const progress =
        (rect.top + rect.height / 2 - viewportH / 2) / viewportH;

      // translateY em % relativo à altura da própria imagem
      // Negativo = move para cima (igual ao Hafnia: translate(0%, -15.227%))
      const translateY = progress * speed * 100;

      el.style.transform = `translateY(${translateY}%)`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // posição inicial

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}