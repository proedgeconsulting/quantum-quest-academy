
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface SimulatorDiagnosticToolProps {
  initialUrl: string;
}

const SimulatorDiagnosticTool: React.FC<SimulatorDiagnosticToolProps> = ({
  initialUrl
}) => {
  const [url, setUrl] = useState(initialUrl);
  const [results, setResults] = useState<Array<{ path: string; exists: boolean; status?: number }>>([]);
  const [isChecking, setIsChecking] = useState(false);

  const checkUrl = async (path: string) => {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return { 
        path, 
        exists: response.ok, 
        status: response.status 
      };
    } catch (error) {
      return { path, exists: false };
    }
  };

  const generatePaths = (baseUrl: string) => {
    const paths = [];
    const fileName = baseUrl.startsWith('/') ? baseUrl.substring(1) : baseUrl;
    
    // Basic paths
    paths.push('/' + fileName);
    paths.push(fileName);
    
    // With different folders
    paths.push('/simulators/' + fileName);
    paths.push('simulators/' + fileName);
    
    // Try with spaces replaced
    paths.push('/' + fileName.replace(/ /g, '-'));
    paths.push('/' + fileName.replace(/ /g, '_'));
    
    // With extensions added if not present
    if (!fileName.endsWith('.html')) {
      paths.push('/' + fileName + '.html');
      paths.push(fileName + '.html');
      paths.push('/simulators/' + fileName + '.html');
    }
    
    return [...new Set(paths)]; // Remove duplicates
  };

  const handleCheck = async () => {
    setIsChecking(true);
    setResults([]);
    
    const paths = generatePaths(url);
    const checks = await Promise.all(paths.map(path => checkUrl(path)));
    setResults(checks);
    
    setIsChecking(false);
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-lg">Simulator Path Diagnostic Tool</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="Enter simulator URL to check"
          />
          <Button onClick={handleCheck} disabled={isChecking}>
            {isChecking ? 'Checking...' : 'Check'}
          </Button>
        </div>
        
        {results.length > 0 && (
          <>
            <Separator className="my-2" />
            
            <div className="text-sm font-medium mb-2">Results:</div>
            
            <ScrollArea className="h-[200px]">
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div 
                    key={index} 
                    className={`p-2 border rounded flex items-center gap-2 ${
                      result.exists ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    {result.exists ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <div className="flex-1 overflow-hidden overflow-ellipsis">
                      <span className="font-mono text-sm">{result.path}</span>
                      {result.status && (
                        <span className="ml-2 text-xs">
                          (Status: {result.status})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {!results.some(r => r.exists) && (
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium mb-1">No valid paths found!</div>
                  <p>
                    Make sure the simulator file is in the correct location. The file should be
                    in either the root of the <code>public</code> folder or in 
                    <code>public/simulators/</code>.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SimulatorDiagnosticTool;
