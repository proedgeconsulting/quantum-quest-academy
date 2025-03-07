
import React from "react";
import ToolCard from "./ToolCard";
import { TOOL_DATA } from "./ToolsData";

interface ToolsGridProps {
  onLaunchTool: (toolId: string) => void;
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ onLaunchTool }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TOOL_DATA.map((tool) => (
        <ToolCard
          key={tool.id}
          title={tool.title}
          description={tool.description}
          icon={tool.icon}
          onLaunch={() => onLaunchTool(tool.id)}
        >
          {tool.visualization}
        </ToolCard>
      ))}
    </div>
  );
};

export default ToolsGrid;
