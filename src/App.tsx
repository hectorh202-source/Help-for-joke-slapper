import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelpProvider } from "@/contexts/HelpContext";
import HelpHome from "./pages/help/HelpHome";
import HelpArticlePage from "./pages/help/HelpArticlePage";
import HelpSectionPage from "./pages/help/HelpSectionPage";
import AdminHelp from "./pages/admin/AdminHelp";
import AdminArticleEditor from "./pages/admin/AdminArticleEditor";
import AdminSectionEditor from "./pages/admin/AdminSectionEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelpProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/help" replace />} />
            <Route path="/help" element={<HelpHome />} />
            <Route path="/help/article/:slug" element={<HelpArticlePage />} />
            <Route path="/help/:slug" element={<HelpSectionPage />} />
            <Route path="/admin/help" element={<AdminHelp />} />
            <Route path="/admin/help/article/:id" element={<AdminArticleEditor />} />
            <Route path="/admin/help/section/:id" element={<AdminSectionEditor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelpProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
