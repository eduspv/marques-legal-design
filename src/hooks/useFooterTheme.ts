import { useEffect, RefObject } from "react";

const useFooterTheme = (targetRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const root = document.documentElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      root.classList.remove("dark");
    };
  }, [targetRef]);
};

export default useFooterTheme;