import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ArtigoDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  const relatedArticles = articles.filter((a) => a.id !== id).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-40 container-editorial text-center">
          <h1 className="heading-editorial text-3xl text-foreground">Artigo não encontrado</h1>
          <Link to="/artigos" className="text-gold font-sans text-sm mt-4 inline-block">
            Voltar aos artigos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-deep-blue pt-32 pb-20">
        <div className="container-editorial max-w-4xl">
          <Link
            to="/artigos"
            className="inline-flex items-center gap-2 text-cream/50 hover:text-gold text-xs tracking-[0.15em] uppercase font-sans mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Voltar aos artigos
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold text-xs font-sans tracking-wide uppercase">
              {article.category}
            </span>
            <span className="text-cream/30">·</span>
            <span className="text-cream/50 text-xs font-sans">
              {new Date(article.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="heading-editorial text-cream text-3xl md:text-4xl lg:text-5xl leading-tight">
            {article.title}
          </h1>
          <p className="text-cream/60 font-sans text-sm mt-6">
            Por {article.author}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream">
        <div className="container-editorial max-w-3xl">
          <div className="prose-editorial">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-foreground/80 font-sans text-base leading-[1.9] mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-background">
        <div className="container-editorial">
          <h3 className="heading-editorial text-2xl text-foreground mb-12">
            Artigos relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((a) => (
              <Link
                key={a.id}
                to={`/artigos/${a.id}`}
                className="group"
              >
                <span className="text-gold text-xs font-sans tracking-wide uppercase">
                  {a.category}
                </span>
                <h4 className="heading-editorial text-lg text-foreground mt-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {a.title}
                </h4>
                <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium mt-4 group-hover:gap-3 transition-all duration-300">
                  Ler <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArtigoDetail;
