
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { Navigate } from "react-router-dom";
import Chatbot from "@/components/chat/Chatbot";

const Auth = () => {
  const { user } = useAuth();

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
              <Tabs defaultValue="signin" className="w-full">
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
