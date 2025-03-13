
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Profile } from "@/types/auth";
import { updateUserProfile } from "@/utils/auth-utils";

export function useAuthActions(setProfile: React.Dispatch<React.SetStateAction<Profile | null>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
  const { toast } = useToast();
  const navigate = useNavigate();

  const signUp = async (email: string, password: string, username: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      if (error) {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Sign up successful",
        description: "Please check your email for verification",
      });
      
      navigate("/auth");
    } catch (error: any) {
      toast({
        title: "An error occurred",
        description: error.message || "Failed to sign up",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Welcome back!",
        description: "You have successfully signed in",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "An error occurred",
        description: error.message || "Failed to sign in",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message || "Failed to sign out",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      setLoading(true);
      
      // Get the current user first
      const { data: { user } } = await supabase.auth.getUser();
      
      // Check if we have a valid user before updating profile
      if (!user) return;
      
      const success = await updateUserProfile(user.id, updates);
      
      if (success) {
        setProfile(prev => prev ? { ...prev, ...updates } : null);
      }
    } finally {
      setLoading(false);
    }
  };

  return { signUp, signIn, signOut, updateProfile };
}
