
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Curriculum from "./pages/Curriculum";
import Progress from "./pages/Progress";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Faq from "./pages/Faq";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/curriculum" element={<Curriculum />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/progress" element={<Progress />} />
    <Route path="/about" element={<About />} />
    <Route path="/tools" element={<Tools />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/profile" element={<Profile />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
