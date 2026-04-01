import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredAreas } from "@/data/practiceAreas";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const rmAccentColors = [
  "bg-gold",
  "bg-[#B08D57]",
  "bg-[#C8A46A]",
  "bg-[#A67C52]",
  "bg-gold",
  "bg-[#B08D57]",
  "bg-[#C8A46A]",
];

const PracticeAreasPreview = () => {
  const areas = featuredAreas.slice(0, 7); // 7 cards reais

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-accent-line" />
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Expertise
            </span>
          </div>

          <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl mb-16">
            Áreas de <span className="text-gold italic">Atuação</span>
          </h2>
        </RevealOnScroll>

        {/* GRID FIXO EM 4 COLUNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARDS NORMAIS */}
          {areas.map((area, i) => (
            <RevealOnScroll key={area.id} delay={i * 0.08}>
              <Link to="/areas-de-atuacao" className="block h-full">
                <article className="group relative h-full min-h-[240px] overflow-hidden rounded-[22px] border border-gold/10 bg-background shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">

                  {/* BARRA */}
                  <div
                    className={`absolute left-0 top-0 h-full w-[4px] ${
                      rmAccentColors[i % rmAccentColors.length]
                    } z-20`}
                  />

                  {/* OVERLAY (MESMA COR) */}
                  <div
                    className={`absolute inset-0 ${
                      rmAccentColors[i % rmAccentColors.length]
                    } origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 z-0`}
                  />

                  {/* CONTEÚDO */}
                  <div className="relative z-10 flex h-full flex-col p-6 md:p-7 transition-colors duration-500">
                    
                    <h3 className="heading-editorial text-xl md:text-2xl text-foreground mb-4 group-hover:text-white">
                      {area.title}
                    </h3>

                    <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8 group-hover:text-white/90">
                      {area.shortDescription}
                    </p>

                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium transition-all duration-300 group-hover:text-white group-hover:gap-3">
                        Saiba mais
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </RevealOnScroll>
          ))}

          {/* CARD FINAL (+7 ÁREAS) */}
          <RevealOnScroll delay={0.6}>
            <Link to="/areas-de-atuacao" className="block h-full">
              <article className="group relative h-full min-h-[240px] flex items-center justify-center rounded-[22px] border border-dashed border-gold/30 bg-background transition-all duration-500 hover:bg-gold/5">

                <div className="text-center">
                  <p className="text-8xl font-serif text-gold mb-2">
                    +7
                  </p>

                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans group-hover:text-gold transition-colors">
                    áreas
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.15em] font-medium">
                    Saiba mais
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default PracticeAreasPreview;