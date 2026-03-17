import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-deep-blue overflow-hidden">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Depoimentos
            </span>
          </div>
        </RevealOnScroll>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Quote className="text-gold/30 w-12 h-12 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-cream/90 font-light leading-relaxed italic mb-10">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-cream font-sans text-sm font-medium">
                  {t.name}
                </p>
                <p className="text-cream/50 font-sans text-xs mt-1">
                  {t.role} — {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/50 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-0.5 transition-all duration-500 ${
                    i === current ? "w-8 bg-gold" : "w-4 bg-cream/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/50 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
