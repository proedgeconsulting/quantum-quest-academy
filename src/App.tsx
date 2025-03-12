import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "@/pages/Index";
import About from "@/pages/About";
import Auth from "@/pages/Auth";
import Courses from "@/pages/Courses";
import Curriculum from "@/pages/Curriculum";
import Faq from "@/pages/Faq";
import Profile from "@/pages/Profile";
import Progress from "@/pages/Progress";
import Tools from "@/pages/Tools";
import Chatbot from "@/components/chat/Chatbot";
import { AuthProvider } from './context/AuthContext';

// Import our new pages
import SocialLearning from "@/pages/SocialLearning";
import TeachersResources from "@/pages/TeachersResources";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Chatbot />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/tools" element={<Tools />} />
          
          {/* Add our new routes */}
          <Route path="/social-learning" element={<SocialLearning />} />
          <Route path="/teachers" element={<TeachersResources />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
