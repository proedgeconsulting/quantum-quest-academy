import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Loader2, MessageSquare, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface ChatbotProps {
  initialMessage?: string;
  onClose?: () => void;
  isFloating?: boolean;
}

const Chatbot = ({ initialMessage = "Hi! How can I help you today?", onClose, isFloating = true }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!currentMessage.trim()) return;
    
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user' as const,
      text: currentMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);
    
    try {
      console.log("Sending request to AI assistant with:", { 
        message: currentMessage,
        userId: user?.id,
        chatMode: 'general'
      });
      
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          message: currentMessage,
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
                  <ScrollArea className="h-[400px] p-4">
                    <div className="flex flex-col gap-4">
                      {messages.map((message) => (
                        <div 
                          key={message.id} 
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`flex gap-3 max-w-[85%] ${
                              message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                            }`}
                          >
                            <Avatar className={`h-8 w-8 ${
                              message.sender === 'user' ? 'bg-primary' : 'bg-secondary'
                            }`}>
                              <div className="flex h-full items-center justify-center text-xs font-medium uppercase">
                                {message.sender === 'user' ? 'U' : 'A'}
                              </div>
                            </Avatar>
                            <div 
                              className={`rounded-lg p-3 text-sm ${
                                message.sender === 'user' 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted'
                              }`}
                            >
                              {message.sender === 'bot' ? (
                                <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none">
                                  {message.text}
                                </ReactMarkdown>
                              ) : (
                                message.text
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="flex gap-3">
                            <Avatar className="h-8 w-8 bg-secondary">
                              <div className="flex h-full items-center justify-center text-xs">
                                A
                              </div>
                            </Avatar>
                            <div className="rounded-lg bg-muted p-3">
                              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                  
                  <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Textarea
                        placeholder="Type your message..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="min-h-[40px] resize-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      <Button 
                        type="submit" 
                        size="icon" 
                        disabled={isLoading || !currentMessage.trim()}
                        className="h-10 w-10"
                      >
                        <Send size={18} />
                      </Button>
                    </form>
                  </div>
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
        <ScrollArea className="h-[400px] p-4">
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`flex gap-3 max-w-[85%] ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <Avatar className={`h-8 w-8 ${
                    message.sender === 'user' ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    <div className="flex h-full items-center justify-center text-xs font-medium uppercase">
                      {message.sender === 'user' ? 'U' : 'A'}
                    </div>
                  </Avatar>
                  <div 
                    className={`rounded-lg p-3 text-sm ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}
                  >
                    {message.sender === 'bot' ? (
                      <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none">
                        {message.text}
                      </ReactMarkdown>
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 bg-secondary">
                    <div className="flex h-full items-center justify-center text-xs">
                      A
                    </div>
                  </Avatar>
                  <div className="rounded-lg bg-muted p-3">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Textarea
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              className="min-h-[40px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={isLoading || !currentMessage.trim()}
              className="h-10 w-10"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
