import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutTabs } from "@/data/aboutContent";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = aboutTabs[activeTab];

  return (
    <section className="section-padding bg-cream">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Quem Somos
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left: Navigation */}
          <div className="lg:col-span-4">
            <RevealOnScroll delay={0.1}>
              <div className="space-y-1">
                {aboutTabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(i)}
                    className={`w-full text-left py-4 px-5 font-sans text-sm tracking-wide transition-all duration-400 border-l-2 ${
                      i === activeTab
                        ? "border-gold text-foreground bg-background"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-gold/30"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="heading-editorial text-2xl md:text-3xl text-foreground mb-6">
                      {current.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {current.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
