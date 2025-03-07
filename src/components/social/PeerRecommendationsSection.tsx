
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UsersRound, RefreshCw, Users, UserPlus, BrainCircuit } from "lucide-react";
import type { PeerRecommendation } from "@/hooks/usePeerConnections";

interface PeerRecommendationsSectionProps {
  recommendations: PeerRecommendation[];
  onConnect: (peerId: string) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
}

const PeerRecommendationsSection: React.FC<PeerRecommendationsSectionProps> = ({
  recommendations,
  onConnect,
  onRefresh,
  isRefreshing
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <UsersRound className="text-energy-500" />
              Learning Partners
            </CardTitle>
            <CardDescription>Connect with peers at a similar level or with complementary skills</CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRefresh} 
            disabled={isRefreshing}
            className="flex items-center gap-1"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
            {isRefreshing ? "Finding peers..." : "Find peers"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {recommendations.length > 0 ? (
          <div className="space-y-4">
            {recommendations.map((recommendation) => (
              <div key={recommendation.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={recommendation.peer_avatar_url || ""} />
                    <AvatarFallback className="bg-quantum-200 text-quantum-700">
                      {recommendation.peer_username?.substring(0, 2).toUpperCase() || "QS"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-quantum-900 dark:text-quantum-100">
                      {recommendation.peer_username || "Quantum Scholar"}
                    </h4>
                    <div className="flex items-center mt-1 gap-2">
                      <Badge variant={recommendation.match_type === 'similar-level' ? "default" : "outline"} className="text-xs">
                        {recommendation.match_type === 'similar-level' ? (
                          <Users className="h-3 w-3 mr-1" />
                        ) : (
                          <BrainCircuit className="h-3 w-3 mr-1" />
                        )}
                        {recommendation.match_type === 'similar-level' ? 'Similar Level' : 'Complementary Skills'}
                      </Badge>
                      <span className="text-xs text-quantum-500">
                        {Math.round(recommendation.match_score * 100)}% match
                      </span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onConnect(recommendation.peer_id)}
                  className="flex items-center gap-1"
                >
                  <UserPlus className="h-4 w-4" />
                  Connect
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-quantum-500 dark:text-quantum-400">
            <UsersRound className="h-12 w-12 mx-auto mb-2 opacity-40" />
            <p>No peer recommendations yet.</p>
            <p className="text-sm mt-1">Click "Find peers" to discover learning partners.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PeerRecommendationsSection;
