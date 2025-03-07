
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onLaunch: () => void;
  children: React.ReactNode;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon: Icon,
  onLaunch,
  children
}) => {
  return (
    <Card className="border-quantum-200 dark:border-quantum-800 hover:border-quantum-400 dark:hover:border-quantum-600 transition-all">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-6 w-6 text-quantum-500" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-quantum-100 dark:bg-quantum-800 rounded-md overflow-hidden flex items-center justify-center">
          {children}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onLaunch}>Launch Tool</Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
