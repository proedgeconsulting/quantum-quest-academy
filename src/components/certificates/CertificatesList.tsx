
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Mail, Award } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { formatDistanceToNow } from "date-fns";
import { useLearningAnalytics } from "@/hooks/useLearningAnalytics";

interface Certificate {
  id: string;
  certificate_id: string;
  course_id: string;
  course_name: string;
  issued_at: string;
  user_id: string;
}

const CertificatesList = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const { generateCertificate } = useLearningAnalytics(user?.id);

  useEffect(() => {
    const fetchCertificates = async () => {
      if (!user) return;
      
      setIsLoading(true);
      
      try {
        // Use edge function instead of direct table query
        const { data, error } = await supabase.functions.invoke('get-certificates', {
          body: { userId: user.id }
        });
          
        if (error) throw error;
        
        setCertificates(data || []);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        toast({
          title: "Failed to load certificates",
          description: "There was an error loading your certificates. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCertificates();
  }, [user]);

  const resendCertificate = async (certificate: Certificate) => {
    if (!user) return;
    
    try {
      await generateCertificate(certificate.course_id, certificate.course_name);
      
      toast({
        title: "Certificate Sent",
        description: "Your certificate has been sent to your email.",
      });
      
    } catch (error) {
      console.error("Error sending certificate:", error);
      toast({
        title: "Failed to send certificate",
        description: "There was an error sending your certificate. Please try again.",
        variant: "destructive",
      });
    }
  };

  const downloadCertificate = async (certificate: Certificate) => {
    // In a real implementation, this would generate and download a PDF
    // For now, we'll show a toast message
    toast({
      title: "Download Feature Coming Soon",
      description: "Certificate downloads will be available in a future update.",
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Certificates</CardTitle>
          <CardDescription>Loading your achievement certificates...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (certificates.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Certificates</CardTitle>
          <CardDescription>Complete courses to earn certificates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Award className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">You haven't earned any certificates yet.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Complete courses to receive certificates of achievement.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Certificates</CardTitle>
        <CardDescription>Certificates earned for course completion</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {certificates.map((cert) => (
              <Card key={cert.id} className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-base">{cert.course_name}</h4>
                      <p className="text-xs text-muted-foreground">
                        Issued {formatDistanceToNow(new Date(cert.issued_at), { addSuffix: true })}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Certificate ID: {cert.certificate_id}
                      </p>
                    </div>
                    <div className="flex gap-2 self-end sm:self-auto">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-1"
                        onClick={() => resendCertificate(cert)}
                      >
                        <Mail size={14} />
                        <span className="hidden sm:inline">Email</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-1"
                        onClick={() => downloadCertificate(cert)}
                      >
                        <Download size={14} />
                        <span className="hidden sm:inline">Download</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CertificatesList;
