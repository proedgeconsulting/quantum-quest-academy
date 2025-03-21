
import React, { createContext, useContext, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthContextType } from "@/types/auth";
import { useAuthState } from "@/hooks/useAuthState";
import { useAuthActions } from "@/hooks/useAuthActions";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { user, profile, session, loading: stateLoading, setProfile } = useAuthState();
  const { signUp, signIn, signInWithGoogle, signOut, updateProfile } = useAuthActions(setProfile, setLoading);

  // Sync loading state from useAuthState
  React.useEffect(() => {
    setLoading(stateLoading);
  }, [stateLoading]);

  // Create a memoized value to prevent unnecessary re-renders
  const value = React.useMemo(() => ({
    user,
    profile,
    session,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    loading,
    updateProfile,
    supabaseClient: supabase,
  }), [user, profile, session, loading, signUp, signIn, signInWithGoogle, signOut, updateProfile]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
