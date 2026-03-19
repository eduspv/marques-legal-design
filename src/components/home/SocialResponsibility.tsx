import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import socialImg from "@/assets/social-responsibility.jpg";

const stages = [
  {
    num: "01",
    title: "Programas de capacitação e qualificação profissional",
    text: "Investimos no desenvolvimento contínuo de nossos profissionais através de programas internos de capacitação, workshops com especialistas e incentivo à produção acadêmica. Acreditamos que a excelência jurídica nasce do conhecimento atualizado e da formação sólida.",
  },
  {
    num: "02",
    title: "Abertura de vagas para estagiários",
    text: "Nosso programa de estágio é reconhecido como um dos mais completos do mercado. Estudantes de Direito têm a oportunidade de vivenciar a prática jurídica em um ambiente de aprendizado real, com mentoria direta de nossos sócios e associados.",
  },
  {
    num: "03",
    title: "Projetos de residência jurídica",
    text: "A residência jurídica do escritório oferece aos recém-formados uma imersão profunda na prática advocatícia. Durante 12 meses, os residentes atuam em casos reais, participam de audiências e desenvolvem competências essenciais para uma carreira de destaque.",
  },
];

const SocialResponsibility = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Responsabilidade Social
            </span>
          </div>
          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl mb-16">
            Formação Jurídica e{" "}
            <span className="text-gold italic">Compromisso Social</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <RevealOnScroll className="lg:col-span-5" direction="left">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src={socialImg}
                alt="Formação jurídica"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark/40 to-transparent" />
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div className="lg:col-span-7">
            {/* Stage selectors */}
            <div className="flex gap-6 mb-12">
              {stages.map((stage, i) => (
                <button
                  key={stage.num}
                  onClick={() => setActiveStage(i)}
                  className={`flex items-center gap-3 transition-all duration-400 ${
                    i === activeStage
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <span
                    className={`font-serif text-3xl md:text-4xl font-light ${
                      i === activeStage ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {stage.num}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="heading-editorial text-2xl md:text-3xl text-foreground mb-6">
                  {stages[activeStage].title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-lg">
                  {stages[activeStage].text}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex gap-2 mt-10">
              {stages.map((_, i) => (
                <div
                  key={i}
                  className={`h-0.5 transition-all duration-500 ${
                    i === activeStage
                      ? "w-12 bg-gold"
                      : "w-6 bg-foreground/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;
