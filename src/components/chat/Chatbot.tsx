
import { useState, useRef, useEffect } from "react";
import { useChatLogic } from "./useChatLogic";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import ChatModeToggle from "./ChatModeToggle";
import { useScrollToBottom } from "./useScrollToBottom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChatbotProps {
  initialMessage?: string;
  title?: string;
}

const Chatbot = ({ 
  initialMessage = "Hello! I'm your Quantum Quest AI assistant. How can I help you today?",
  title = "Quantum Quest Assistant"
}: ChatbotProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, sendMessage, chatMode, switchChatMode } = useChatLogic(initialMessage);
  const { scrollToBottom } = useScrollToBottom(messagesEndRef);
  
  // Auto scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <Card className="w-full max-w-2xl mx-auto border shadow-md">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-quantum-600 text-white">
        <CardTitle className="text-center">{title}</CardTitle>
        <ChatModeToggle currentMode={chatMode} onModeChange={switchChatMode} />
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="h-[400px] overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }}>
          <ChatMessageList messages={messages} />
          <div ref={messagesEndRef} />
        </div>
        
        <div className="border-t p-4 bg-gray-50 dark:bg-gray-900">
          <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
