
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatbotProps } from "./ChatTypes";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import { useChatLogic } from "./useChatLogic";

const Chatbot = ({ 
  initialMessage = "Hi! How can I help you today?", 
  onClose, 
  isFloating = true 
}: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const { messages, isLoading, sendMessage } = useChatLogic(initialMessage);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (isFloating) {
    return (
      <>
        {!isOpen && (
          <Button 
            onClick={toggleChat} 
            className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 bg-primary hover:bg-primary/90 shadow-lg"
            aria-label="Open Chat"
          >
            <MessageSquare size={24} />
          </Button>
        )}
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] z-50"
            >
              <Card className="shadow-lg border-muted">
                <CardHeader className="p-4 border-b flex flex-row items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Chat Assistant</span>
                  </CardTitle>
                  <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8">
                    <X size={18} />
                  </Button>
                </CardHeader>
                
                <CardContent className="p-0">
                  <ChatMessageList messages={messages} isLoading={isLoading} />
                  <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
  
  // Non-floating version
  return (
    <Card className="shadow-sm">
      <CardHeader className="p-4 border-b">
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <span>Chat Assistant</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <ChatMessageList messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default Chatbot;
