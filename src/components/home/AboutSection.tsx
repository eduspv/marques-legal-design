import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { aboutTabs } from "@/data/aboutContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { useParallaxImage } from "@/hooks/useParallaxImage";

const AboutSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  // ref aplicado na <img> — hook faz o translateY via scroll
  const imgRef = useParallaxImage<HTMLImageElement>({ speed: 0.15 });

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      className="section-padding bg-background"
      style={{ zIndex: 10, paddingTop: "80px", overflow: "hidden" }}
    >
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Quem Somos
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-10">

          {/* IMAGEM COM PARALLAX */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.1}>
              <div
                className="relative overflow-hidden"
                style={{ height: "520px" }}
              >
                <div
                  ref={imgRef}
                  className="absolute left-0 top-1/2 w-full"
                  style={{
                    height: "140%",
                    willChange: "transform",
                  }}
                >
                  <img
                    src={aboutTabs[openIndex >= 0 ? openIndex : 0].image}
                    alt={aboutTabs[openIndex >= 0 ? openIndex : 0].title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center 30%",
                    }}
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ACCORDION — sem alterações */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0.15}>
              <div className="space-y-4">
                {aboutTabs.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={item.id} className="border-b border-black/10 pb-4">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between gap-6 text-left group"
                      >
                        <p className="text-lg md:text-xl text-foreground font-sans font-medium transition-colors duration-300 group-hover:text-gold">
                          {item.label}
                        </p>
                        <motion.span
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0 text-gold"
                        >
                          <ChevronRight size={22} />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-5 pr-8">
                              <h3 className="heading-editorial text-2xl md:text-3xl text-foreground mb-4">
                                {item.title}
                              </h3>
                              {item.id === "atuacao" ? (
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                                  {item.text.split("\n").map((line, i) => (
                                    <li key={i}>{line}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-muted-foreground font-sans text-sm md:text-base leading-relaxed">
                                  {item.text}
                                </p>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;