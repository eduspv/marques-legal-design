import { useEffect, useState, RefObject } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
};

export function useInViewport<T extends HTMLElement>(
  ref: RefObject<T>,
  options?: Options
) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        threshold: options?.threshold ?? 0.35,
        rootMargin: options?.rootMargin ?? "0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options?.threshold, options?.rootMargin]);

  return isInViewport;
}