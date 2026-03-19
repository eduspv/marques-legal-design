import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: ReactNode;
  // Cor de fundo da página — padrão cream
  // Aceita qualquer valor CSS: "#FAF7F2", "var(--color-navy)", "hsl(...)"
  background?: string;
  // Se true, não renderiza Navbar e Footer (útil para páginas especiais)
  bare?: boolean;
}

const PageLayout = ({
  children,
  background = "#FAF7F2",
  bare = false,
}: PageLayoutProps) => {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: background }}
    >
      {!bare && <Navbar />}
      {children}
      {!bare && <Footer />}
    </div>
  );
};

export default PageLayout;