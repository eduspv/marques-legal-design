import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredAreas } from "@/data/practiceAreas";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const PracticeAreasPreview = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {featuredAreas.map((area, i) => (
            <RevealOnScroll key={area.id} delay={i * 0.1}>
              <div className="bg-background p-8 md:p-12 group cursor-pointer transition-colors duration-500 hover:bg-secondary">
                <span className="text-gold/40 font-serif text-4xl font-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-editorial text-xl md:text-2xl text-foreground mt-4 mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                  {area.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium group-hover:gap-3 transition-all duration-300">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-12 text-center">
          <Link to="/areas-de-atuacao">
            <Button variant="gold-outline" size="lg">
              Ver mais áreas
            </Button>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default PracticeAreasPreview;
