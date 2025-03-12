
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface ApiSimulatorProps {
  apiEndpoint: string;
  height?: number | string;
  width?: number | string;
  params?: Record<string, string>;
}

const ApiSimulator: React.FC<ApiSimulatorProps> = ({ 
  apiEndpoint, 
  height = 500, 
  width = "100%",
  params = {}
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Build query string from params
        const queryString = Object.entries(params)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');
        
        const url = `${apiEndpoint}${queryString ? `?${queryString}` : ''}`;
        
        console.log(`Fetching simulator data from: ${url}`);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching simulator data:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [apiEndpoint, JSON.stringify(params)]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center" style={{ height: typeof height === 'number' ? `${height}px` : height }}>
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading simulator...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <Card className="p-6 bg-destructive/10 text-center">
        <h3 className="text-lg font-medium mb-2">Simulator Error</h3>
        <p>{error}</p>
        <p className="text-sm mt-4">Please try refreshing the page or contact support if the issue persists.</p>
      </Card>
    );
  }
  
  if (!data) {
    return (
      <div className="p-6 text-center text-gray-500">
        No simulator data available.
      </div>
    );
  }
  
  // Render simulator with data
  return (
    <div style={{ height: typeof height === 'number' ? `${height}px` : height, width }}>
      <div className="p-6 text-center">
        <pre className="text-left bg-muted p-4 rounded-md overflow-auto max-h-[500px]">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default ApiSimulator;
