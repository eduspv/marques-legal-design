import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { news } from "@/data/news";
import useFooterTheme from "@/hooks/useFooterTheme";

const NewsDetail = () => {
  const { id } = useParams();
  const article = news.find((item) => item.id === id);
  useFooterTheme("footer-theme-trigger");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-40 pb-24">
          <div className="container-editorial text-center">
            <h1 className="heading-editorial text-3xl text-foreground mb-4">
              Notícia não encontrada
            </h1>
            <Link
              to="/noticias"
              className="text-gold uppercase tracking-[0.15em] text-sm font-sans"
            >
              Voltar para notícias
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero da notícia */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.coverImage})` }}
      >
        <div className="absolute inset-0 bg-deep-blue/70" />
        <div className="relative container-editorial max-w-4xl">
          <Link
            to="/noticias"
            className="inline-block mb-8 text-cream/80 hover:text-gold transition-colors text-sm uppercase tracking-[0.15em] font-sans"
          >
            ← Voltar para notícias
          </Link>

          <span className="block text-gold text-xs font-sans tracking-[0.2em] uppercase mb-4">
            {article.category}
          </span>

          <h1 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            {article.title}
          </h1>

          <div className="text-cream/80 font-sans text-sm flex flex-wrap gap-4">
            <span>
              {new Date(article.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            {article.author && <span>Por {article.author}</span>}
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding bg-background">
        <div className="container-editorial max-w-3xl">
          <div className="mb-10 overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-auto object-cover"
            />

            {article.imageCaption && (
              <p className="text-xs text-muted-foreground mt-3 font-sans">
                {article.imageCaption}
              </p>
            )}
          </div>

          <div className="gold-accent-line-wide mb-10" />

          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground/85 font-sans text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
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

export default NewsDetail;