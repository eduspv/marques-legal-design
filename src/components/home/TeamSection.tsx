import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { useParallaxImage } from "@/hooks/useParallaxImage";
import ricardoImg from "@/assets/team/ricardo-marques.jpeg";
import civilImg from "@/assets/team/civil-lawyer.png";
import tributarioImg from "@/assets/team/tributario-lawyer.png";
import teamGroupImg from "@/assets/team/teamgroup/team-group.png";

const TeamSection = () => {
  const teamImgRef = useParallaxImage<HTMLImageElement>({
    speed: 0.12,
    maxOffset: 10,
  });

  const ricardoImgRef = useParallaxImage<HTMLImageElement>({
    speed: 0.12,
    maxOffset: 10,
  });

  const civilImgRef = useParallaxImage<HTMLImageElement>({
    speed: 0.1,
    maxOffset: 8,
  });

  const tributarioImgRef = useParallaxImage<HTMLImageElement>({
    speed: 0.1,
    maxOffset: 8,
  });

  return (
    <section className="section-padding bg-background">
  <div className="container-editorial">
    <RevealOnScroll>
      <div className="flex items-center gap-4 mb-4">
        <div className="gold-accent-line" />
        <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
          Nosso Time
        </span>
      </div>

      <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl mb-12">
        Nossa <span className="text-gold italic">Equipe</span>
      </h2>
    </RevealOnScroll>

    {/* Foto do time primeiro */}
    <RevealOnScroll delay={0.05}>
      <article className="border border-foreground/10 bg-background mb-10 md:mb-14">
        <div
          className="relative overflow-hidden"
          style={{ height: "480px" }}
        >
          <img
            ref={teamImgRef}
            src={teamGroupImg}
            alt="Equipe completa Ricardo Marques Advogados"
            className="absolute left-0 top-1/2 w-full object-cover"
            style={{
              height: "130%",
              willChange: "transform",
              objectPosition: "top center",
            }}
          />
        </div>
      </article>
    </RevealOnScroll>

    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 lg:gap-6">
      {/* Ricardo */}
      <RevealOnScroll delay={0.08}>
        <article className="group border border-foreground/10 bg-background overflow-hidden">
          <div
            className="relative overflow-hidden"
            style={{ height: "830px" }}
          >
            <img
              ref={ricardoImgRef}
              src={ricardoImg}
              alt="Ricardo Marques"
              className="absolute left-0 top-1/2 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              style={{
                height: "130%",
                willChange: "transform",
                objectPosition: "center ",
              }}
            />

            <div className="absolute inset-0 transition-all duration-700 ease-out bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-deep-blue-dark group-hover:via-deep-blue-dark/40 group-hover:to-deep-blue/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="w-10 h-px bg-gold/90 mb-4" />
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold font-sans mb-3">
                CEO • Sócio Fundador
              </p>
              <h3 className="font-serif text-3xl md:text-[38px] text-white mb-3">
                Ricardo Marques
              </h3>
              <p className="text-sm md:text-[15px] text-white/85 leading-relaxed max-w-xl">
                Liderança estratégica do escritório, com atuação voltada à
                condução institucional, relacionamento com clientes e visão
                jurídica de alto nível.
              </p>
            </div>
          </div>
        </article>
      </RevealOnScroll>

      {/* Coluna direita */}
      <div className="flex flex-col gap-5 lg:gap-6">
        {/* Civil */}
        <RevealOnScroll delay={0.12}>
          <article className="group border border-foreground/10 bg-background overflow-hidden">
            <div
              className="relative overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                ref={civilImgRef}
                src={civilImg}
                alt="Valdineia Santos"
                className="absolute left-0 top-1/2 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{
                  height: "130%",
                  willChange: "transform",
                  objectPosition: "top",
                }}
              />

              <div className="absolute inset-0 transition-all duration-700 ease-out bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-deep-blue-dark group-hover:via-deep-blue-dark/40 group-hover:to-deep-blue/10" />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="w-8 h-px bg-gold/90 mb-3" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans mb-2">
                  Civil
                </p>
                <h4 className="font-serif text-2xl text-white mb-2">
                  Valdineia Santos
                </h4>
                <p className="text-sm text-white/85 leading-relaxed">
                  Atuação técnica e estratégica em demandas cíveis.
                </p>
              </div>
            </div>
          </article>
        </RevealOnScroll>

        {/* Tributário */}
        <RevealOnScroll delay={0.16}>
          <article className="group border border-foreground/10 bg-background overflow-hidden">
            <div
              className="relative overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                ref={tributarioImgRef}
                src={tributarioImg}
                alt="Marcellus Victor"
                className="absolute left-0 top-1/2 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{
                  height: "150%",
                  willChange: "transform",
                  objectPosition: "top",
                }}
              />

              <div className="absolute inset-0 transition-all duration-700 ease-out bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-deep-blue-dark group-hover:via-deep-blue-dark/40 group-hover:to-deep-blue/10" />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="w-8 h-px bg-gold/90 mb-3" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans mb-2">
                  Tributário
                </p>
                <h4 className="font-serif text-2xl text-white mb-2">
                  Marcellus Victor
                </h4>
                <p className="text-sm text-white/85 leading-relaxed">
                  Assessoria e contencioso tributário com abordagem técnica.
                </p>
              </div>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </div>
</section>
  );
};

export default TeamSection;