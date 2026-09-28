import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { practiceAreas } from "@/data/practiceAreas";

import {
  ArrowLeft,
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

const AreaDetail = () => {
  const { id } = useParams();

  const area = practiceAreas.find((a) => a.id === id);
  const relatedAreas = practiceAreas.filter((a) => a.id !== id).slice(0, 3);

  if (!area) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-40 pb-24 container-editorial text-center">
          <h1 className="heading-editorial text-3xl text-foreground">
            Área não encontrada
          </h1>
          <Link
            to="/areas-de-atuacao"
            className="text-gold font-sans text-sm mt-4 inline-block hover:opacity-80 transition"
          >
            Voltar às áreas de atuação
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[area.icon as keyof typeof iconMap];

  const paragraphs = (area.content || area.description)
    .split("\n\n")
    .filter((item) => item.trim() !== "");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section
        className="relative pt-32 pb-24 overflow-hidden bg-deep-blue"
        style={
          area.image
            ? {
                backgroundImage: `url(${area.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-deep-blue/0" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/45 to-deep-blue/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 via-transparent to-transparent" />

        <div className="relative z-10 container-editorial">
          <Link
            to="/areas-de-atuacao"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold text-xs tracking-[0.15em] uppercase font-sans mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            Voltar às áreas
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl border border-gold/20 bg-gold/10 backdrop-blur-sm flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                {Icon && <Icon className="w-8 h-8 text-gold" strokeWidth={1.6} />}
              </div>

              <div className="gold-accent-line-wide max-w-[120px]" />
            </div>

            <h1 className="heading-editorial text-cream text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
              {area.title}
            </h1>

            <p className="text-cream/70 font-sans text-sm md:text-base mt-6 max-w-2xl leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Intro / destaque */}
      <section className="bg-background">
        <div className="container-editorial py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="border-l-2 border-[#263D55] pl-6 md:pl-8">
                <span className="text-gold text-xs font-sans tracking-[0.18em] uppercase">
                  Visão estratégica
                </span>

                <p className="mt-4 text-foreground/80 font-sans text-base md:text-lg leading-[1.9]">
                  Atuação jurídica estruturada com profundidade técnica, segurança
                  institucional e foco preventivo, consultivo e contencioso.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Coluna lateral */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-gold text-xs font-sans tracking-[0.18em] uppercase">
                    Área de atuação
                  </span>

                  <h3 className="heading-editorial text-xl text-foreground mt-3">
                    {area.title}
                  </h3>

                  <div className="mt-5 h-px bg-border" />

                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mt-5">
                    Assessoria jurídica com abordagem técnica, estratégica e
                    institucional.
                  </p>
                </div>
              </div>
            </aside>

            {/* Conteúdo principal */}
            <div className="lg:col-span-9">
              <div className="rounded-[28px] border border-border bg-card p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="gold-accent-line" />
                  <span className="text-xs tracking-[0.18em] uppercase text-gold font-sans">
                    Conteúdo
                  </span>
                </div>

                <div className="space-y-8">
                  {paragraphs.map((paragraph, i) => {
                    const isBulletBlock =
                      paragraph.includes("•") && paragraph.split("•").length > 2;

                    if (isBulletBlock) {
                      const items = paragraph
                        .split("•")
                        .map((item) => item.trim())
                        .filter(Boolean);

                      return (
                        <div key={i} className="space-y-4">
                          <div className="h-px bg-border/80" />
                          <div className="grid gap-3">
                            {items.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/70 px-4 py-4 transition-colors duration-300 hover:border-[#263D55]/30 hover:bg-[#263D55]/[0.03]"
                              >
                                <span className="mt-2 w-2 h-2 rounded-full bg-gold shrink-0" />
                                <p className="text-foreground/80 font-sans text-[15px] leading-[1.85]">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={i} className="space-y-4">
                        {i !== 0 && <div className="h-px bg-border/80" />}
                        <p className="text-foreground/80 font-sans text-base leading-[1.95]">
                          {paragraph}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container-editorial">
          <div className="flex items-center justify-between gap-6 mb-12 flex-wrap">
            <div>
              <span className="text-gold text-xs tracking-[0.18em] uppercase font-sans">
                Explore também
              </span>
              <h3 className="heading-editorial text-2xl md:text-3xl text-foreground mt-3">
                Outras áreas de atuação
              </h3>
            </div>

            <Link
              to="/areas-de-atuacao"
              className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium hover:gap-3 transition-all duration-300"
            >
              Ver todas
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedAreas.map((item) => {
              const RelatedIcon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <Link
                  key={item.id}
                  to={`/areas-de-atuacao/${item.id}`}
                  className="group relative overflow-hidden rounded-[24px] border border-border bg-card p-6 md:p-7 transition-all duration-400 hover:-translate-y-1 hover:border-[#263D55]/30 hover:shadow-[0_20px_60px_rgba(38,61,85,0.10)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#263D55]/0 via-transparent to-[#263D55]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold/10 group-hover:scale-105">
                      {RelatedIcon && (
                        <RelatedIcon className="w-7 h-7 text-gold" strokeWidth={1.6} />
                      )}
                    </div>

                    <span className="text-gold text-xs font-sans tracking-wide uppercase">
                      Área de atuação
                    </span>

                    <h4 className="heading-editorial text-lg text-foreground mt-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-muted-foreground font-sans text-sm mt-4 leading-relaxed">
                      {item.shortDescription}
                    </p>

                    <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium mt-6 group-hover:gap-3 transition-all duration-300">
                      Ver mais
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* 👇 GATILHO DO DARK MODE */}
      <div id="footer-theme-trigger" className="h-[200px]" />
      </section>

      <Footer />
    </div>
  );
};

export default AreaDetail;