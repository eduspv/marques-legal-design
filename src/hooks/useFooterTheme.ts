import { useEffect, useState } from "react";

const useFooterTheme = (triggerId = "footer-theme-trigger") => {
  const [isFooterDark, setIsFooterDark] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById(triggerId);
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterDark(entry.isIntersecting);
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, [triggerId]);

  useEffect(() => {
    const root = document.documentElement;

    if (isFooterDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    return () => {
      root.classList.remove("dark");
    };
  }, [isFooterDark]);

  return { isFooterDark };
};

export default useFooterTheme;