
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Brain, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface AIAssistantProps {
  lessonId?: string;
  conceptContext?: string;
  onClose?: () => void;
}

const AIAssistant = ({ lessonId, conceptContext, onClose }: AIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsLoading(true);
    setExplanation("");
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          concept: question, 
          userId: user?.id, 
          context: conceptContext || "",
          lessonId
        }
      });
      
      if (error) throw error;
      
      setExplanation(data.explanation);
      
    } catch (error) {
      console.error("Error getting explanation:", error);
      toast({
        title: "Failed to get explanation",
        description: "There was an error contacting the AI assistant. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setExplanation("");
      setQuestion("");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {!isOpen && (
        <Button 
          onClick={toggleAssistant} 
          className="fixed bottom-6 right-6 rounded-full h-14 w-14 p-0 bg-quantum-600 hover:bg-quantum-500 shadow-lg"
          aria-label="Open AI Assistant"
        >
          <Brain size={24} />
        </Button>
      )}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[450px] z-50"
          >
            <Card className="shadow-lg border-quantum-200 dark:border-quantum-800">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Brain className="text-quantum-600" size={20} />
                  <h3 className="font-medium">Quantum AI Assistant</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={handleClose}>
                  <X size={18} />
                </Button>
              </div>
              
              <CardContent className="p-4 pt-4">
                <form onSubmit={handleQuestionSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Ask about a quantum concept..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="min-h-20 resize-none"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading || !question.trim()}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking...
                      </>
                    ) : "Get Explanation"}
                  </Button>
                </form>
                
                {explanation && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-md max-h-[300px] overflow-y-auto">
                    <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none">
                      {explanation}
                    </ReactMarkdown>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
