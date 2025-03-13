
import { useState, useEffect } from "react";
import { Message } from "./ChatTypes";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const useChatLogic = (initialMessage: string) => {
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

  const sendMessage = async (currentMessage: string) => {
    if (!currentMessage.trim()) return;
    
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user' as const,
      text: currentMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          message: currentMessage,
          userId: user?.id,
          chatMode: 'general'
        }
      });
      
      if (error) throw error;
      
      setMessages(prev => [
        ...prev, 
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: data.reply,
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

  return {
    messages,
    isLoading,
    sendMessage
  };
};
