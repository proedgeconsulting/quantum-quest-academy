
import { useState, useEffect, useCallback } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Profile } from "@/types/auth";
import { fetchUserProfile } from "@/utils/auth-utils";

export function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch profile data
  const fetchProfile = useCallback(async (userId: string) => {
    try {
      const profileData = await fetchUserProfile(userId);
      setProfile(profileData);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setProfile(null);
    }
  }, []);

  // Update auth state
  const updateAuthState = useCallback(async (newSession: Session | null) => {
    setSession(newSession);
    setUser(newSession?.user ?? null);

    if (newSession?.user) {
      await fetchProfile(newSession.user.id);
    } else {
      setProfile(null);
    }
    
    setLoading(false);
  }, [fetchProfile]);

  useEffect(() => {
    const setInitialSession = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        await updateAuthState(initialSession);
      } catch (error) {
        console.error("Error getting initial session:", error);
        setLoading(false);
      }
    };
    
    setInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log("Auth state changed:", event, newSession ? "session exists" : "no session");
      await updateAuthState(newSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [updateAuthState]);

  return { user, profile, session, loading, setProfile };
}
