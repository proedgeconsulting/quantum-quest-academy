
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Chatbot from "./Chatbot";
import { MessageCircle, X } from "lucide-react";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[350px] sm:w-[400px] shadow-lg animate-in fade-in slide-in-from-right-5 duration-300">
          <div className="flex justify-end p-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleOpen}
              aria-label="Close chat"
            >
              <X size={18} />
            </Button>
          </div>
          <div className="p-2">
            <Chatbot
              initialMessage="Hi there! I'm your Quantum Quest assistant. How can I help with your quantum learning journey today?"
              title="Chat Assistant"
            />
          </div>
        </Card>
      ) : (
        <Button 
          onClick={toggleOpen}
          className="h-14 w-14 rounded-full shadow-lg bg-quantum-600 hover:bg-quantum-700"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
};

export default FloatingChatbot;
