
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const usePersonalizedQuiz = (userId: string | undefined) => {
  const { toast } = useToast();

  // Generate a personalized quiz
  const generatePersonalizedQuiz = async (courseId: string) => {
    if (!userId) return null;
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-personalized-quiz', {
        body: { 
          user_id: userId, 
          course_id: courseId 
        }
      });
      
      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error("Error generating personalized quiz:", error);
      toast({
        title: "Quiz Generation Error",
        description: "Couldn't generate a quiz right now. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  };

  return {
    generatePersonalizedQuiz
  };
};
