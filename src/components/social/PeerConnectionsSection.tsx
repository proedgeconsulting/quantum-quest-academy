
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, UserMinus, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PeerConnectionsSectionProps } from './types';

const PeerConnectionsSection = ({
  connections,
  pendingRequests,
  onAccept,
  onDecline,
  onRemove
}: PeerConnectionsSectionProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>My Connections</CardTitle>
        <CardDescription>Manage your learning peers</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="connections">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="connections" className="flex-1">
              Connections ({connections.length})
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex-1">
              Requests ({pendingRequests.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="connections">
            {connections.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No connections yet. Connect with peers to see them here.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {connections.map((connection) => (
                  <Card key={connection.id} className="overflow-hidden">
                    <div className="flex items-center p-3">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={connection.avatar_url || ''} alt={connection.username || 'User'} />
                        <AvatarFallback>
                          {connection.username ? connection.username.charAt(0).toUpperCase() : 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">
                          {connection.username || 'Quantum User'}
                        </h4>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-destructive"
                        onClick={() => onRemove(connection.connection_id!)}
                      >
                        <UserMinus className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="requests">
            {pendingRequests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <p>No pending connection requests.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingRequests.map((request) => (
                  <Card key={request.id} className="overflow-hidden">
                    <div className="flex items-center p-3">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={request.avatar_url || ''} alt={request.username || 'User'} />
                        <AvatarFallback>
                          {request.username ? request.username.charAt(0).toUpperCase() : 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">
                          {request.username || 'Quantum User'}
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="outline" className="text-xs">
                            Pending
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-green-600" 
                          onClick={() => onAccept(request.connection_id!)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-destructive"
                          onClick={() => onDecline(request.connection_id!)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PeerConnectionsSection;
