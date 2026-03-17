import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { news } from "@/data/news";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const recentNews = news.slice(0, 4);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark via-deep-blue-dark/80 to-deep-blue/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial pb-0 pt-40 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="gold-accent-line-wide mb-8" />
          <h1 className="heading-editorial text-cream text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
            Advocacia de excelência com{" "}
            <span className="text-gold italic">visão estratégica</span>
          </h1>
          <p className="text-cream/70 text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl mb-10">
            Soluções jurídicas personalizadas para empresas e indivíduos que buscam
            segurança, resultados e compromisso.
          </p>
          <Link to="/contato">
            <Button variant="gold" size="lg">
              Fale com nosso escritório
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* News Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-16"
      >
        <div className="border-t border-cream/10 bg-deep-blue-dark/60 backdrop-blur-sm">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cream/10">
              {recentNews.map((item, i) => (
                <Link
                  key={item.id}
                  to={`/noticias`}
                  className="group py-5 md:py-6 md:px-6 first:md:pl-0 last:md:pr-0 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gold/50 font-serif text-2xl font-light leading-none mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-cream/80 text-sm font-sans leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </p>
                      <span className="text-cream/30 text-xs font-sans mt-2 block">
                        {new Date(item.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
