
import { useState } from "react";
import Chatbot from "./Chatbot";

const FloatingChatbot = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return <Chatbot onClose={handleClose} />;
};

export default FloatingChatbot;
