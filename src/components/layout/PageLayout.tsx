import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useFooterTheme from "@/hooks/useFooterTheme";

interface PageLayoutProps {
  children: ReactNode;
  bare?: boolean;
}

const PageLayout = ({ children, bare = false }: PageLayoutProps) => {
  useFooterTheme();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-900">
      {!bare && <Navbar />}
      {children}
      {!bare && <Footer />}
    </div>
  );
};

export default PageLayout;