
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Message, ChatbotProps } from "./types";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const Chatbot = ({ initialMessage = "Hi! How can I help you today?", onClose, isFloating = true }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  // Initialize with bot welcome message
  useEffect(() => {
    if (!messages.length) {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: initialMessage,
          timestamp: new Date()
        }
      ]);
    }
  }, [initialMessage, messages.length]);

  const handleSendMessage = async (message: string) => {
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user' as const,
      text: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      console.log("Sending request to AI assistant with:", { 
        message: message,
        userId: user?.id,
        chatMode: 'general'
      });
      
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          message: message,
          userId: user?.id,
          chatMode: 'general'
        }
      });
      
      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }
      
      console.log("Received response from AI assistant:", data);
      
      const botReply = data.reply || data.explanation || "I couldn't generate a response at this time.";
      
      setMessages(prev => [
        ...prev, 
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botReply,
          timestamp: new Date()
        }
      ]);
      
    } catch (error) {
      console.error("Error getting chatbot response:", error);
      toast({
        title: "Failed to get response",
        description: "There was an error contacting the assistant. Please try again.",
        variant: "destructive",
      });
      
      setMessages(prev => [
        ...prev, 
        {
          id: `error-${Date.now()}`,
          sender: 'bot',
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

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
                  <MessageList messages={messages} isLoading={isLoading} />
                  <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
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
        <MessageList messages={messages} isLoading={isLoading} />
        <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default Chatbot;
