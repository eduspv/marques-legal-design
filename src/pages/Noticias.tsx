import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { news } from "@/data/news";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import headerImage from "@/assets/news/hero/hero.png";
const categories = ["Todos", "Institucional", "Internacional", "Eventos", "Publicações"];

const Noticias = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section
        className="relative pt-60 pb-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className="absolute inset-0 bg-deep-blue/0" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-deep-blue/65 to-deep-blue/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/50 via-transparent to-transparent" />
        <div className="relative container-editorial">
          <div className="gold-accent-line-wide mb-8" />
          <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl">
            Notícias e <span className="text-gold italic">Destaques</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-editorial">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((cat) => (
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

          {/* News List */}
          <div className="space-y-0 divide-y divide-border">
            {filtered.map((item, i) => (
              <RevealOnScroll key={item.id} delay={i * 0.05}>
                <Link to={`/noticias/${item.id}`} className="block">
                  <article className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group cursor-pointer">
                    <div className="md:col-span-2">
                      <span className="text-muted-foreground font-sans text-xs">
                        {new Date(item.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="block text-gold text-xs font-sans mt-1 tracking-wide uppercase">
                        {item.category}
                      </span>
                    </div>

                    <div className="md:col-span-10">
                      <h3 className="heading-editorial text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors duration-300 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-2xl">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Noticias;