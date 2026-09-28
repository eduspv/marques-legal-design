import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInViewport } from "@/hooks/useInViewport";
import useFooterTheme from "@/hooks/useFooterTheme";

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  useFooterTheme(footerRef);

  const isInViewport = useInViewport(footerRef, {
    threshold: 0.2,
  });

  return (
    <footer
      ref={footerRef}
      className={`bg-background text-foreground theme-shift ${
        isInViewport ? "dark-section" : ""
      }`}
    >
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-light tracking-wide">
              Ricardo Marques
            </span>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mt-1 font-sans">
              Advogados Associados
            </p>
            <p className="text-cream/60 text-sm mt-6 leading-relaxed font-sans">
              Excelência jurídica com compromisso institucional e visão
              estratégica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-sans font-medium">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", path: "/" },
                { label: "Áreas de Atuação", path: "/areas-de-atuacao" },
                { label: "Notícias", path: "/noticias" },
                { label: "Artigos", path: "/artigos" },
                { label: "Contato", path: "/contato" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-sans font-medium">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              {[
                "Direito Empresarial",
                "Direito Tributário",
                "Direito Civil",
                "Direito Digital",
              ].map((area) => (
                <li key={area}>
                  <span className="text-cream/60 text-sm font-sans">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6 font-sans font-medium">
              Contato
            </h4>
            <div className="space-y-3 text-cream/60 text-sm font-sans">
              <p>SCN, Quadra 1, Bloco F, Ed. America Office Tower sala 317 asa norte</p>
              <p>BRASÍLIA - DF</p>

              <p className="mt-4">RUA DO ACRE, 83, 11º ANDAR, SALA 1106 - CENTRO</p>
              <p>RIO DE JANEIRO - RJ</p>

              <p className="mt-4">+55 (61) 3526-6972</p>
              <p>rmadv@rmadvassociados.com.br</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs font-sans">
            © {new Date().getFullYear()} Ricardo Marques Advogados Associados.
            Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <span className="text-cream/40 text-xs font-sans hover:text-gold transition-colors cursor-pointer">
              Política de Privacidade
            </span>
            <span className="text-cream/40 text-xs font-sans hover:text-gold transition-colors cursor-pointer">
              Termos de Uso
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;