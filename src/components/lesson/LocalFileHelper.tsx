
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalFileHelper: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-lg">How to Serve Local HTML Simulator Files</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Browser Security Restrictions</AlertTitle>
          <AlertDescription>
            For security reasons, browsers restrict direct access to local files through iframes. To use your local HTML simulators, you'll need to serve them through a local web server.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-2">
          <h3 className="font-semibold">Option 1: Use Visual Studio Code with Live Server</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Install the "Live Server" extension in VS Code</li>
            <li>Right-click on your HTML file and select "Open with Live Server"</li>
            <li>Your file will be served at an address like <code>http://127.0.0.1:5500/simulator.html</code></li>
            <li>Update your lesson configuration with this URL</li>
          </ol>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">Option 2: Use a simple HTTP server</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Navigate to your simulator files directory in the terminal</li>
            <li>If you have Python installed, run:
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto">
                <code>python -m http.server 8000</code>
              </pre>
            </li>
            <li>Your files will be available at <code>http://localhost:8000/simulator.html</code></li>
          </ol>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">Option 3: Upload to a development server</h3>
          <p>
            If you have access to a development server or static hosting service, you can upload your simulator files there and use the resulting URL.
          </p>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Learn more about local servers
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalFileHelper;
