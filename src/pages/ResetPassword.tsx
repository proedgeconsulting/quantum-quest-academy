
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Password validation with specific requirements
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

const formSchema = z.object({
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

const ResetPassword = () => {
  const [loading, setLoading] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [hash, setHash] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    // Get the hash from the URL
    const hashFromUrl = window.location.hash.substring(1);
    if (hashFromUrl) {
      setHash(hashFromUrl);
    }
    setLoading(false);
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!hash) {
      toast({
        title: "Error",
        description: "Invalid or missing password reset token",
        variant: "destructive",
      });
      return;
    }

    setIsResetting(true);
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password
      });
      
      if (error) throw error;
      
      setResetSuccess(true);
      toast({
        title: "Password reset successful",
        description: "Your password has been updated. You can now sign in with your new password.",
      });
      
      // Reset the form
      form.reset();
      
      // Redirect to sign in page after 3 seconds
      setTimeout(() => {
        navigate("/auth");
      }, 3000);
      
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed",
        description: error.message || "Unable to reset your password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResetting(false);
    }
  };

  // Helper function to check password requirement status
  const getPasswordRequirementMet = (requirement: RegExp | ((val: string) => boolean)): boolean => {
    const password = form.watch("password");
    if (!password) return false;
    
    if (typeof requirement === 'function') {
      return requirement(password);
    }
    
    return requirement.test(password);
  };

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Reset Your Password</CardTitle>
              <CardDescription>
                Enter your new password below
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : !hash ? (
                <Alert variant="destructive">
                  <AlertTitle>Invalid Reset Link</AlertTitle>
                  <AlertDescription>
                    This password reset link is invalid or has expired. Please request a new password reset link.
                  </AlertDescription>
                  <Button 
                    variant="outline" 
                    className="mt-4" 
                    onClick={() => navigate("/auth")}
                  >
                    Back to Sign In
                  </Button>
                </Alert>
              ) : resetSuccess ? (
                <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                  <AlertTitle>Password Reset Successful!</AlertTitle>
                  <AlertDescription>
                    Your password has been successfully updated. You'll be redirected to the sign in page shortly.
                  </AlertDescription>
                  <Button 
                    variant="outline" 
                    className="mt-4" 
                    onClick={() => navigate("/auth")}
                  >
                    Go to Sign In
                  </Button>
                </Alert>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input placeholder="••••••••" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                          <div className="mt-2 text-xs space-y-1">
                            <p className={getPasswordRequirementMet(p => p.length >= 8) ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}>
                              At least 8 characters
                            </p>
                            <p className={getPasswordRequirementMet(/[A-Z]/) ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}>
                              At least one uppercase letter
                            </p>
                            <p className={getPasswordRequirementMet(/[a-z]/) ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}>
                              At least one lowercase letter
                            </p>
                            <p className={getPasswordRequirementMet(/[0-9]/) ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}>
                              At least one number
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input placeholder="••••••••" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isResetting}>
                      {isResetting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Resetting Password...
                        </>
                      ) : (
                        "Reset Password"
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
