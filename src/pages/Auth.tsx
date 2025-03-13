
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { Navigate, useSearchParams } from "react-router-dom";
import Chatbot from "@/components/chat/Chatbot";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Auth = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") === "signup" ? "signup" : "signin";

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-md mx-auto mb-8">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome to Quantum Quest</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account or create a new one
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                  <SignIn />
                </TabsContent>
                <TabsContent value="signup">
                  <SignUp />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Email verification information */}
          <div className="mt-4">
            <Alert variant="default" className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertDescription className="text-sm">
                After signing up, please check your email inbox (and spam folder) for a verification link.
                You'll need to verify your email before you can sign in.
              </AlertDescription>
            </Alert>
          </div>
        </div>
        
        <div className="max-w-md mx-auto mt-10">
          <Chatbot 
            initialMessage="Hello! Need help signing up or logging in to Quantum Quest? I'm here to assist you." 
            isFloating={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
