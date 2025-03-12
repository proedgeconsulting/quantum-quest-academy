import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { BrainCircuit, Send, Sparkles } from "lucide-react";
import { useLearningAnalytics } from "@/hooks/useLearningAnalytics";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface AIAssistanceSectionProps {
  userId: string;
}

const AIAssistanceSection = ({ userId }: AIAssistanceSectionProps) => {
  const [concept, setConcept] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getAIAssistance } = useLearningAnalytics(userId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!concept.trim() || !question.trim()) {
      return;
    }
    
    setIsLoading(true);
    setResponse("");
    
    try {
      // Try using the hook first
      try {
        const data = await getAIAssistance(concept, question);
        
        if (data && (data.explanation || data.reply)) {
          setResponse(data.explanation || data.reply);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.log("Falling back to direct function call:", error);
      }
      
      // Fall back to direct function call if the hook fails
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          concept: concept,
          question: question,
          userId: userId, 
          chatMode: 'quantum'
        }
      });
      
      if (error) throw error;
      
      setResponse(data.explanation || data.reply || "I don't have a specific answer for that question right now.");
      
    } catch (error) {
      console.error("Error getting AI assistance:", error);
      toast({
        title: "AI Assistant Error",
        description: "Couldn't get an answer right now. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="text-energy-500" />
          Quantum Learning Assistant
        </CardTitle>
        <CardDescription>
          Ask questions about quantum concepts and get personalized explanations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Enter a quantum concept (e.g., Superposition, Quantum Gates)"
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              className="mb-2"
            />
            <Textarea
              placeholder="Ask your question about this concept..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full sm:w-auto"
            disabled={isLoading || !concept.trim() || !question.trim()}
          >
            {isLoading ? (
              <>Processing</>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Get AI Explanation
              </>
            )}
          </Button>
        </form>
        
        {response && (
          <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-energy-500" />
              <h3 className="font-medium">AI Explanation</h3>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              {response.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-2">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIAssistanceSection;
