
import { useState, useEffect } from "react";
import { Message, ChatMode } from "./ChatTypes";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useChatLogic = (initialMessage: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>('general');
  const { user } = useAuth();
  const { toast } = useToast();

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
      // Log the request to help with debugging
      console.log("Sending chatbot request:", { 
        message: currentMessage,
        userId: user?.id,
        chatMode
      });
      
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          message: currentMessage,
          userId: user?.id,
          chatMode
        }
      });
      
      console.log("Chatbot response:", data, error);
      
      if (error) {
        throw error;
      }
      
      if (!data || !data.reply) {
        throw new Error("No valid response received from the assistant");
      }
      
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
      
      // Check if we have the toast function available
      if (typeof useToast === 'function') {
        toast({
          title: "Failed to get response",
          description: "There was an error contacting the assistant. Please try again.",
          variant: "destructive",
        });
      }
      
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

  const switchChatMode = (mode: ChatMode) => {
    setChatMode(mode);
    
    // Add a message informing the user of the mode change
    let modeMessage = mode === 'quantum' 
      ? "Quantum mode activated! I'm now optimized to answer questions about quantum physics and computation."
      : "General mode activated. I'll help with any type of question you have.";
    
    setMessages(prev => [
      ...prev,
      {
        id: `mode-switch-${Date.now()}`,
        sender: 'bot',
        text: modeMessage,
        timestamp: new Date()
      }
    ]);
  };

  return {
    messages,
    isLoading,
    sendMessage,
    chatMode,
    switchChatMode
  };
};
