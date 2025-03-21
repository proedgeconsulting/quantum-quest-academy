
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
import CourseDetails from "./pages/CourseDetails";
import LearningApproach from "./pages/LearningApproach";
import LevelDetails from "./pages/LevelDetails";
import ResetPassword from "@/pages/ResetPassword";
import AdminDashboard from "@/pages/AdminDashboard";
import Pricing from "@/pages/Pricing";
import Checkout from "@/pages/Checkout";
import SubscriptionManagement from "@/pages/SubscriptionManagement";
import { AuthProvider } from "./context/AuthContext";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import FloatingChatbot from "./components/chat/FloatingChatbot";
import { useEffect } from "react";
import { initGA, usePageTracking } from "./utils/analytics";

const queryClient = new QueryClient();

// Analytics wrapper component
const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    initGA();
  }, []);

  usePageTracking();

  return <>{children}</>;
};

const AppRoutes = () => (
  <AnalyticsWrapper>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/curriculum/level/:levelId" element={<LevelDetails />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/about" element={<About />} />
      <Route path="/learning-approach/:approach" element={<LearningApproach />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/checkout/:planId" element={<Checkout />} />
      <Route path="/subscription" element={<SubscriptionManagement />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AnalyticsWrapper>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SubscriptionProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <AppRoutes />
              <FloatingChatbot />
            </TooltipProvider>
          </SubscriptionProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
