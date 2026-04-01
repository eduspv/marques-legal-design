import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AreasDeAtuacao from "./pages/AreasDeAtuacao.tsx";
import Noticias from "./pages/Noticias.tsx";
import Artigos from "./pages/Artigos.tsx";
import ArtigoDetail from "./pages/ArtigoDetail.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";
import NewsDetail from "@/pages/NewsDetail";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { useEffect } from "react";
import AreaDetail from "@/pages/AreasDeAtuacaoDetails";
import { useLayoutEffect } from "react";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => {
  useLenisScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            <Route path="/artigos" element={<Artigos />} />
            <Route path="/artigos/:id" element={<ArtigoDetail />} />
            <Route path="/areas-de-atuacao/:id" element={<AreaDetail />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;