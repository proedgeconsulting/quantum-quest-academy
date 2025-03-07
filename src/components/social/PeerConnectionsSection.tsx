
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Users, UserMinus, CheckCircle, XCircle, Bell } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import type { PeerConnection } from "@/hooks/usePeerConnections";

interface PeerConnectionsSectionProps {
  connections: PeerConnection[];
  pendingRequests: PeerConnection[];
  onAccept: (connectionId: string) => void;
  onDecline: (connectionId: string) => void;
  onRemove: (connectionId: string) => void;
}

const PeerConnectionsSection: React.FC<PeerConnectionsSectionProps> = ({
  connections,
  pendingRequests,
  onAccept,
  onDecline,
  onRemove
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="text-primary-500" />
          Your Learning Network
        </CardTitle>
        <CardDescription>Manage your connections with other quantum learners</CardDescription>
      </CardHeader>
      <CardContent>
        {pendingRequests.length > 0 && (
          <div className="mb-6 border-b pb-4">
            <h3 className="text-sm font-medium text-quantum-900 dark:text-quantum-100 mb-3 flex items-center gap-2">
              <Bell className="h-4 w-4 text-warning-500" />
              Pending Connection Requests ({pendingRequests.length})
            </h3>
            <div className="space-y-3">
              {pendingRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={request.peer_avatar_url || ""} />
                      <AvatarFallback className="bg-quantum-200 text-quantum-700">
                        {request.peer_username?.substring(0, 2).toUpperCase() || "QS"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-quantum-900 dark:text-quantum-100">
                        {request.peer_username || "Quantum Scholar"}
                      </h4>
                      <p className="text-xs text-quantum-500">Wants to connect with you</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onDecline(request.id)}
                      className="h-8 w-8 p-0"
                    >
                      <XCircle className="h-5 w-5 text-destructive-500" />
                      <span className="sr-only">Decline</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onAccept(request.id)}
                      className="h-8 w-8 p-0"
                    >
                      <CheckCircle className="h-5 w-5 text-success-500" />
                      <span className="sr-only">Accept</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-medium text-quantum-900 dark:text-quantum-100 mb-3">
            Connected Partners ({connections.length})
          </h3>
          
          {connections.length > 0 ? (
            <div className="space-y-4">
              {connections.map((connection) => (
                <div key={connection.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={connection.peer_avatar_url || ""} />
                      <AvatarFallback className="bg-quantum-200 text-quantum-700">
                        {connection.peer_username?.substring(0, 2).toUpperCase() || "QS"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-quantum-900 dark:text-quantum-100">
                        {connection.peer_username || "Quantum Scholar"}
                      </h4>
                      <p className="text-xs text-quantum-500">
                        Connected since {new Date(connection.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem disabled>View profile</DropdownMenuItem>
                      <DropdownMenuItem disabled>Send message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-destructive focus:text-destructive"
                        onClick={() => onRemove(connection.id)}
                      >
                        <UserMinus className="h-4 w-4 mr-2" />
                        Remove connection
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-quantum-500 dark:text-quantum-400">
              <Users className="h-12 w-12 mx-auto mb-2 opacity-40" />
              <p>You haven't connected with any learning partners yet.</p>
              <p className="text-sm mt-1">Browse recommendations to find peers.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PeerConnectionsSection;
