import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { practiceAreas } from "@/data/practiceAreas";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const AreasDeAtuacao = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-deep-blue pt-32 pb-20">
        <div className="container-editorial">
          <div className="gold-accent-line-wide mb-8" />
          <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl">
            Áreas de <span className="text-gold italic">Atuação</span>
          </h1>
          <p className="text-cream/60 font-sans text-sm mt-6 max-w-lg leading-relaxed">
            Atuação multidisciplinar com equipes especializadas para cada demanda,
            garantindo profundidade técnica e visão estratégica em todas as áreas do Direito.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-cream">
        <div className="container-editorial">
          <div className="space-y-0 divide-y divide-border">
            {practiceAreas.map((area, i) => (
              <RevealOnScroll key={area.id} delay={i * 0.05}>
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group cursor-pointer">
                  <div className="md:col-span-1">
                    <span className="text-gold/40 font-serif text-3xl font-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="heading-editorial text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <ArrowRight className="text-gold/0 group-hover:text-gold transition-all duration-300 w-5 h-5" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasDeAtuacao;
