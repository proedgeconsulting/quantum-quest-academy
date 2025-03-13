
import { Profile } from "@/types/auth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export async function fetchUserProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  
  if (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
  
  return data as Profile;
}

export async function updateUserProfile(userId: string, updates: Partial<Profile>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId);
      
    if (error) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
    
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });
    
    return true;
  } catch (error: any) {
    toast({
      title: "An error occurred",
      description: error.message || "Failed to update profile",
      variant: "destructive",
    });
    return false;
  }
}
