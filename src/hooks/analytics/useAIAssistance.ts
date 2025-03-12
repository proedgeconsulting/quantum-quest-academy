
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useAIAssistance = (userId: string | undefined) => {
  const { toast } = useToast();

  // Get AI assistance for a specific concept
  const getAIAssistance = async (concept: string, question: string) => {
    if (!userId) return null;
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-learning-assistant', {
        body: { 
          user_id: userId, 
          concept: concept,
          question: question,
          chatMode: 'quantum'
        }
      });
      
      if (error) throw error;
      
      // Track this interaction for analytics
      await supabase.from('user_learning_interactions').insert({
        user_id: userId,
        concept: concept,
        interaction_type: 'ai_assistance'
      });
      
      return data;
    } catch (error) {
      console.error("Error getting AI assistance:", error);
      toast({
        title: "AI Assistant Error",
        description: "Couldn't get an answer right now. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  };

  return {
    getAIAssistance
  };
};
