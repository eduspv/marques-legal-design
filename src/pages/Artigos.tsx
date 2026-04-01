import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles, articleCategories } from "@/data/articles";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import headerImage from "@/assets/articles/articles-header.png";
import useFooterTheme from "@/hooks/useFooterTheme";

const Artigos = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  useFooterTheme("footer-theme-trigger");

  const filtered =
    activeCategory === "Todos"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section
        className="relative pt-60 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-deep-blue/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/30 to-transparent" />

        <div className="relative container-editorial">
          <div className="gold-accent-line-wide mb-8" />
          <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl">
            <span className="text-gold italic">Artigos</span>
          </h1>
          <p className="text-cream/60 font-sans text-sm mt-6 max-w-lg leading-relaxed">
            Análises aprofundadas e pareceres especializados sobre temas
            relevantes do cenário jurídico brasileiro.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="flex flex-wrap gap-4 mb-16">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-[0.15em] uppercase font-sans font-medium py-2 px-4 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-gold text-gold"
                    : "border-foreground/15 text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {filtered.map((article, i) => (
              <RevealOnScroll key={article.id} delay={i * 0.05}>
                <Link
                  to={`/artigos/${article.id}`}
                  className="block bg-background p-8 md:p-10 group hover:bg-cream transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold text-xs font-sans tracking-wide uppercase">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-muted-foreground text-xs font-sans">
                      {new Date(article.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="heading-editorial text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors duration-300 mb-4 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium group-hover:gap-3 transition-all duration-300">
                    Ler artigo <ArrowRight size={14} />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        {/* 👇 GATILHO DO DARK MODE */}
      <div id="footer-theme-trigger" className="h-[200px]" />
      </section>

      <Footer />
    </div>
  );
};

export default Artigos;