import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { practiceAreas } from "@/data/practiceAreas";
import {
  ArrowRight,
  Building2,
  Calculator,
  Scale,
  Users,
  Home,
  Shield,
  Gavel,
  Landmark,
} from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import areasHeaderImage from "@/assets/areas/areas-header.png";

const iconMap = {
  Building2,
  Calculator,
  Scale,
  Users,
  Home,
  Shield,
  Gavel,
  Landmark,
};

const AreasDeAtuacao = () => {
  const [gridMode, setGridMode] = useState<"1" | "2">("1");

  return (
    <div className="min-h-screen">
      <Navbar />

      <section
        className="relative pt-60 pb-24 overflow-hidden bg-deep-blue"
        style={{
          backgroundImage: `url(${areasHeaderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-deep-blue/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/30 to-transparent" />

        <div className="relative z-10 container-editorial">
          <div className="max-w-2xl">
            <div className="gold-accent-line-wide mb-8" />

            <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl leading-tight">
              Áreas de <span className="text-gold italic">Atuação</span>
            </h1>

            <p className="text-cream/70 font-sans text-sm md:text-base mt-6 leading-relaxed">
              Atuação multidisciplinar com equipes especializadas para cada demanda,
              garantindo profundidade técnica e visão estratégica em todas as áreas do Direito.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="flex justify-end mb-10 gap-3">
            <button
              onClick={() => setGridMode("1")}
              className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                gridMode === "1"
                  ? "bg-deep-blue text-white border-deep-blue"
                  : "bg-transparent text-muted-foreground border-border hover:border-[#263D55] hover:text-foreground"
              }`}
            >
              1 por linha
            </button>

            <button
              onClick={() => setGridMode("2")}
              className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${
                gridMode === "2"
                  ? "bg-deep-blue text-white border-deep-blue"
                  : "bg-transparent text-muted-foreground border-border hover:border-[#263D55] hover:text-foreground"
              }`}
            >
              2 por linha
            </button>
          </div>

          <div
            className={
              gridMode === "2"
                ? "grid grid-cols-1 md:grid-cols-2 gap-x-10"
                : "space-y-0 divide-y divide-border"
            }
          >
            {practiceAreas.map((area, i) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap];

              return (
                <RevealOnScroll key={area.id} delay={i * 0.05}>
                  <Link
                    to={`/areas-de-atuacao/${area.id}`}
                    className={`
                      relative group block overflow-hidden
                      ${
                        gridMode === "2"
                          ? "py-10 border-b border-border min-h-full"
                          : "py-12 md:py-16 pr-10 md:pr-16"
                      }
                    `}
                  >
                    <div className="absolute inset-0 bg-[#263D55]/0 group-hover:bg-[#263D55]/[0.03] transition-colors duration-500 pointer-events-none" />

                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#263D55] transition-all duration-500 ease-out group-hover:w-full" />

                    <div
                      className={
                        gridMode === "2"
                          ? "relative z-10 grid grid-cols-1 gap-6"
                          : "relative z-10 grid grid-cols-1 md:grid-cols-11 gap-6 md:gap-12 items-start"
                      }
                    >
                      <div className={gridMode === "2" ? "flex items-start" : "md:col-span-2 flex items-start"}>
                        <div className="w-16 h-16 md:w-20 ml-4 md:h-20 rounded-2xl border border-gold/20  flex items-center justify-center transition-all duration-300 group-hover:bg-gold/10 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(38,61,85,0.10)]">
                          {Icon && (
                            <Icon
                              className="w-8 h-8 md:w-10 md:h-10 text-gold"
                              strokeWidth={1.6}
                            />
                          )}
                        </div>
                      </div>

                      <div className={gridMode === "2" ? "" : "md:col-span-3"}>
                        <h3 className="heading-editorial text-2xl md:text-3xl text-foreground transition-all duration-300 group-hover:text-gold">
                          {area.title}
                        </h3>
                      </div>

                      <div className={gridMode === "2" ? "" : "md:col-span-6"}>
                        <p className="text-muted-foreground font-sans text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-5 h-5 text-gold/0 translate-x-0 transition-all duration-300 group-hover:text-gold group-hover:translate-x-2" />
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasDeAtuacao;