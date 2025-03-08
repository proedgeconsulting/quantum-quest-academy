
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalFileHelper: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-lg">How to Serve HTML Simulator Files</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Development vs. Production</AlertTitle>
          <AlertDescription>
            For development, you can use a local web server. For production deployment, you should move your simulator files to the public folder of your project.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-2">
          <h3 className="font-semibold">For Development: Use Visual Studio Code with Live Server</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Install the "Live Server" extension in VS Code</li>
            <li>Right-click on your HTML file and select "Open with Live Server"</li>
            <li>Your file will be served at an address like <code>http://127.0.0.1:5500/simulator.html</code></li>
            <li>Update your lesson configuration with this URL</li>
          </ol>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">For Production: Move files to your public folder</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Create a <code>simulators</code> directory in your project's <code>public</code> folder</li>
            <li>Move your HTML simulator files and related assets there</li>
            <li>Use relative paths in your lesson configuration: <code>/simulators/your-simulator.html</code></li>
            <li>These files will be accessible at <code>https://your-site.com/simulators/your-simulator.html</code> when deployed</li>
          </ol>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold">Other options</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Host your simulators on a separate server and use the full URL</li>
            <li>Use a CDN for hosting simulation assets</li>
            <li>Consider converting complex simulators to React components for better integration</li>
          </ul>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="https://vitejs.dev/guide/assets.html#the-public-directory" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Learn more about public assets
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalFileHelper;
