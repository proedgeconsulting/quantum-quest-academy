
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShieldCheck, Key } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdminAuthProps {
  onAuthenticate: (isAuthenticated: boolean) => void;
}

export const AdminAuth: React.FC<AdminAuthProps> = ({ onAuthenticate }) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // In a real app, you would check this against a securely stored password
  // This is just for demonstration purposes
  const adminPassword = "quantum-admin";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate server delay
    setTimeout(() => {
      if (password === adminPassword) {
        toast({
          title: "Admin access granted",
          description: "Welcome to the admin dashboard",
        });
        onAuthenticate(true);
      } else {
        toast({
          title: "Access denied",
          description: "Incorrect admin password",
          variant: "destructive",
        });
        setPassword("");
      }
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-2">
          <ShieldCheck className="h-12 w-12 text-quantum-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-center">Admin Authentication</CardTitle>
        <CardDescription className="text-center">
          Enter the admin password to access the dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Admin Password</Label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="pr-10"
              />
              <Key className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Access Dashboard"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
