
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, UserPlus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { PeerRecommendationsSectionProps } from './types';

const PeerRecommendationsSection = ({
  recommendations,
  onConnect,
  onRefresh,
  isRefreshing
}: PeerRecommendationsSectionProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Peer Recommendations</CardTitle>
          <CardDescription>Connect with learners who match your learning style</CardDescription>
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onRefresh} 
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No recommendations available. Generate some recommendations.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((peer) => (
              <Card key={peer.id} className="overflow-hidden">
                <div className="flex items-center p-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={peer.avatar_url || ''} alt={peer.username || 'User'} />
                    <AvatarFallback>
                      {peer.username ? peer.username.charAt(0).toUpperCase() : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">{peer.username || 'Quantum User'}</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {peer.match_type === 'similar-level' ? 'Similar Level' : 'Complementary Skills'}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Match: {Math.round(peer.match_score! * 100)}%
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="ml-2"
                    onClick={() => onConnect(peer.id)}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="text-xs text-muted-foreground">
          Recommendations are based on your learning path and progress.
        </div>
      </CardFooter>
    </Card>
  );
};

export default PeerRecommendationsSection;
