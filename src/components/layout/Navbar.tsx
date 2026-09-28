import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, Phone } from "lucide-react";
import logo from "@/assets/Logo/RmLogo-SemFundo.png";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Áreas de Atuação", path: "/areas-de-atuacao" },
  { label: "Notícias", path: "/noticias" },
  { label: "Artigos", path: "/artigos" },
  { label: "Contato", path: "/contato" },
];

interface NavbarProps {
  isFooterDark?: boolean;
}

const Navbar = ({ isFooterDark = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 10;

      setIsScrolled(currentScrollY > 50);

      if (Math.abs(currentScrollY - lastScrollY.current) < threshold) return;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsVisible(true);
  }, [location]);

  // Fundo sempre escuro — sombra só aparece ao scrollar
  const navBackground = isScrolled
    ? "bg-[#08131f] backdrop-blur-md shadow-lg py-3"
    : "bg-[#08131f] py-4";

  // Cores únicas — sempre as do modo scrolled
  const textColor = "text-white";
  const goldColor = "text-[#C9A96E]";
  const linkColor = "text-white/90 hover:text-[#C9A96E]";
  const iconColor = "text-white/60 hover:text-[#C9A96E]";
  const dividerColor = "bg-[#C9A96E]/25";
  const brandGoldColor = "text-[#D4AF70]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible || isMobileOpen ? "translate-y-0" : "-translate-y-full"
      } ${navBackground}`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link to="/" className="relative z-10 flex items-center gap-4 group">
          <img
            src={logo}
            alt="Logo"
            className="h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="flex flex-col leading-[1.1]">
            <span
              className={`hidden md:block text-[15px] tracking-[0.25em] uppercase font-sans font-light ${brandGoldColor}`}
            >
              Ricardo Marques
            </span>

            <span
              className={`font-serif text-xl md:text-1xl font-light tracking-[0.02em] ${textColor}`}
            >
              Advogados Associados
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs tracking-[0.15em] uppercase font-sans font-medium transition-all duration-300 ${
                location.pathname === link.path ? goldColor : linkColor
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className={`h-4 w-px mx-2 ${dividerColor}`} />

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rmadvogadosoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:-translate-y-[1px] ${iconColor}`}
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/rm-advogados-associados/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:-translate-y-[1px] ${iconColor}`}
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://wa.me/5521984100046"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:-translate-y-[1px] ${iconColor}`}
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`lg:hidden z-10 ${textColor}`}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-0 left-0 right-0 pt-24 pb-8 px-6 bg-[#08131f]"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`block py-3 text-sm tracking-[0.15em] uppercase font-sans transition-colors ${
                    location.pathname === link.path
                      ? "text-[#C9A96E]"
                      : "text-white/80 hover:text-[#C9A96E]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-[#C9A96E]/20">
              <a
                href="https://www.instagram.com/rmadvogadosoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#C9A96E] transition"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/rm-advogados-associados/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#C9A96E] transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://wa.me/5521984100046"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#C9A96E] transition"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;