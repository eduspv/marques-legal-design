import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { news } from "@/data/news";

import heroBg1 from "@/assets/HeroPage/hero_background.png";
import heroBg3 from "@/assets/HeroPage/hero_background2.png";
import heroBg2 from "@/assets/HeroPage/hero_background3.png";
import heroVideo from "@/assets/HeroPage/hero_background.mp4";

const Hero = () => {
  const recentNews = news.slice(0, 4);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const rotatingTexts = [
    "inteligência jurídica",
    "estratégia empresarial",
    "segurança legal",
  ];

  const heroImages = [heroBg1, heroBg2, heroBg3];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const SCROLL_SPEED = 0.15;
    const MIN_HEIGHT_VH = 80;

    const update = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const newHeightPx = Math.max(
        vh * (MIN_HEIGHT_VH / 100),
        vh - scrollY * SCROLL_SPEED * (vh / 100)
      );
      const newHeightVh = (newHeightPx / vh) * 100;

      container.style.setProperty("--height", `${newHeightVh}vh`);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ zIndex: 20 }}>
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{
          height: "var(--height, 100vh)",
          willChange: "height",
        }}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark via-deep-blue-dark/40 to-deep-blue/10" />
        </div>

        <button
          type="button"
          onClick={prevImage}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full  text-cream backdrop-blur-sm  hover:bg-black/20 transition-ease-out duration-300"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full text-cream backdrop-blur-sm hover:bg-black/20 transition"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={24} />
        </button>

        <div className="relative z-10 container-editorial pb-0 pt-24 flex h-full flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="gold-accent-line-wide mb-8" />

            <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              Sua melhor solução com{" "}
              <span className="relative inline-block text-gold italic min-w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingTexts[currentTextIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 top-0"
                  >
                    {rotatingTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>

                <span className="invisible">estratégia empresarial</span>
              </span>
            </h1>

            <Link to="/contato">
              <Button variant="gold" size="lg">
                Fale com nosso escritório
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0 }}
          className="absolute bottom-0 left-0 right-0 z-10"
        >
          <div className="border-t border-cream/10 bg-deep-blue-dark/60 backdrop-blur-sm">
            <div className="container-editorial">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream/10">
                {recentNews.map((item, i) => (
                  <Link
                    key={item.id}
                    to="/noticias"
                    className="group py-5 md:py-6 md:px-6 first:md:pl-0 last:md:pr-0 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-gold/50 font-serif text-2xl font-light leading-none mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-cream/80 text-sm font-sans leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </p>
                        <span className="text-cream/30 text-xs font-sans mt-2 block">
                          {new Date(item.date).toLocaleDateString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;