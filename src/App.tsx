import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelpProvider } from "@/contexts/HelpContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import HelpHome from "./pages/help/HelpHome";
import HelpArticlePage from "./pages/help/HelpArticlePage";
import HelpSectionPage from "./pages/help/HelpSectionPage";
import AdminHelp from "./pages/admin/AdminHelp";
import AdminArticleEditor from "./pages/admin/AdminArticleEditor";
import AdminSectionEditor from "./pages/admin/AdminSectionEditor";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <HelpProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/help" replace />} />
              <Route path="/help" element={<HelpHome />} />
              <Route path="/help/article/:slug" element={<HelpArticlePage />} />
              <Route path="/help/:slug" element={<HelpSectionPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/admin/help" element={
                <ProtectedRoute requireAdmin>
                  <AdminHelp />
                </ProtectedRoute>
              } />
              <Route path="/admin/help/article/:id" element={
                <ProtectedRoute requireAdmin>
                  <AdminArticleEditor />
                </ProtectedRoute>
              } />
              <Route path="/admin/help/section/:id" element={
                <ProtectedRoute requireAdmin>
                  <AdminSectionEditor />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </HelpProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
