
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useCertificates = (userId: string | undefined) => {
  const { toast } = useToast();

  // Generate a certificate
  const generateCertificate = async (courseId: string, courseName: string) => {
    if (!userId) return false;
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-certificate', {
        body: { 
          userId: userId,
          courseId: courseId,
          courseName: courseName
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Certificate Generated",
        description: "Your certificate has been generated and sent to your email!",
        variant: "default",
      });
      
      return true;
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast({
        title: "Certificate Generation Error",
        description: "Couldn't generate your certificate right now. Please try again later.",
        variant: "destructive",
      });
      return false;
    }
  };

  return {
    generateCertificate
  };
};
