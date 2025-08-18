
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load das páginas para reduzir bundle inicial
import Index from "./pages/Index";
// const SobreNos = lazy(() => import("./pages/SobreNos")); // Removido
const NiveisEnsino = lazy(() => import("./pages/NiveisEnsino"));
const OColegio = lazy(() => import("./pages/OColegio"));
const ContatoPage = lazy(() => import("./pages/ContatoPage"));
const Dependencias = lazy(() => import("./pages/Dependencias"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Componente de loading otimizado
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-pulse">
      <div className="bg-gray-200 h-8 w-48 mx-auto mb-4 rounded"></div>
      <div className="bg-gray-200 h-4 w-32 mx-auto rounded"></div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/sobre-nos" element={<SobreNos />} /> */}
            <Route path="/niveis-ensino" element={<NiveisEnsino />} />
            <Route path="/o-colegio" element={<OColegio />} />
            <Route path="/dependencias" element={<Dependencias />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
