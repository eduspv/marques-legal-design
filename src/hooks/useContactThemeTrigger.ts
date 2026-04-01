import { useEffect, useState } from "react";

const useContactThemeTrigger = () => {
  const [isDarkZone, setIsDarkZone] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("contact-theme-trigger");
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkZone(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  return isDarkZone;
};

export default useContactThemeTrigger;