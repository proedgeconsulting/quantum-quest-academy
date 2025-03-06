
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AtSign, Camera, Mail, UserCircle } from "lucide-react";

const Profile = () => {
  const { user, profile, loading: authLoading, updateProfile } = useAuth();
  const [username, setUsername] = useState(profile?.username || "");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  if (!user && !authLoading) {
    return <Navigate to="/auth" replace />;
  }

  const handleUpdateProfile = async () => {
    setIsSaving(true);
    await updateProfile({ username });
    setIsEditing(false);
    setIsSaving(false);
  };

  return (
    <div className="min-h-screen bg-quantum-50 dark:bg-quantum-950">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-quantum-900 dark:text-white">
            Your Profile
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="pt-6 flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-quantum-200 text-quantum-700 text-2xl">
                        {profile?.username ? profile.username.substring(0, 2).toUpperCase() : 'QS'}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="icon" className="absolute bottom-0 right-0 rounded-full bg-white dark:bg-quantum-800">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-semibold mt-4 text-center text-quantum-900 dark:text-white">
                    {profile?.username || "Quantum Scholar"}
                  </h2>
                  <p className="text-sm text-quantum-500 text-center">
                    {user?.email}
                  </p>

                  <div className="w-full mt-6">
                    <Separator className="my-4" />
                    <div className="flex items-center gap-2 text-sm text-quantum-700 dark:text-quantum-300 mb-2">
                      <Mail className="h-4 w-4 text-quantum-500" />
                      <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-quantum-700 dark:text-quantum-300">
                      <AtSign className="h-4 w-4 text-quantum-500" />
                      <span>{profile?.username || "Not set"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <UserCircle className="h-5 w-5 text-quantum-500" />
                        <span>Profile Information</span>
                      </CardTitle>
                      <CardDescription>
                        Manage your account details
                      </CardDescription>
                    </div>
                    {!isEditing && (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        Edit
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        value={user?.email || ""}
                        disabled
                        className="bg-quantum-100 dark:bg-quantum-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-quantum-100 dark:bg-quantum-800" : ""}
                      />
                    </div>
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => {
                      setIsEditing(false);
                      setUsername(profile?.username || "");
                    }}>
                      Cancel
                    </Button>
                    <Button onClick={handleUpdateProfile} disabled={isSaving}>
                      {isSaving ? "Saving..." : "Save Changes"}
                    </Button>
                  </CardFooter>
                )}
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-quantum-500" />
                    <span>Email Preferences</span>
                  </CardTitle>
                  <CardDescription>
                    Manage your email notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-quantum-700 dark:text-quantum-300">
                    Email notification settings will be available soon.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
