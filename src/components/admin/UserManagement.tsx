
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserCog, Shield, Mail } from "lucide-react";

export const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data - would come from your database
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Student", status: "Active", joinDate: "2023-05-12" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Student", status: "Inactive", joinDate: "2023-06-18" },
    { id: 3, name: "Carol Williams", email: "carol@example.com", role: "Admin", status: "Active", joinDate: "2023-02-24" },
    { id: 4, name: "David Brown", email: "david@example.com", role: "Student", status: "Active", joinDate: "2023-07-30" },
    { id: 5, name: "Eve Davis", email: "eve@example.com", role: "Moderator", status: "Active", joinDate: "2023-04-15" },
  ];
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <UserCog className="h-4 w-4 mr-2" />
            Manage Roles
          </Button>
          <Button variant="default" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Email Users
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {user.role === "Admin" && <Shield className="h-3 w-3 mr-1 text-blue-500" />}
                    {user.role}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
