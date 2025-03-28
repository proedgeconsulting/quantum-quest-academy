
import React from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Check } from "lucide-react";

interface Element {
  name: string;
  symbol: string;
  protons: number;
  stable: boolean;
}

interface ElementDetailsProps {
  element: Element;
  protons: number;
  electrons: number;
  completed: boolean;
  onReset: () => void;
  onComplete: () => void;
  animalTheme?: boolean;
  creativeMode?: boolean;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ 
  element, 
  protons, 
  electrons, 
  completed, 
  onReset, 
  onComplete,
  animalTheme = false,
  creativeMode = false
}) => {
  return (
    <div className={`mt-4 ${animalTheme ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-quantum-100 dark:bg-quantum-900'} p-4 rounded-lg`}>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-xl">
            {creativeMode ? 'Create Your ' : ''}
            {animalTheme ? `${element.name} Animal` : element.name}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              animalTheme 
                ? 'bg-amber-200 dark:bg-amber-800 font-bold text-amber-800 dark:text-amber-200'
                : 'bg-quantum-200 dark:bg-quantum-800 font-bold text-quantum-800 dark:text-quantum-200'
            }`}>
              {element.symbol}
            </div>
            <div className="text-sm text-muted-foreground">
              <div>Protons: {protons}</div>
              <div>Electrons: {electrons}</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onReset}>
            <RefreshCw className="h-4 w-4 mr-1" /> Reset
          </Button>
          <Button 
            onClick={onComplete}
            disabled={completed}
            className={`${completed ? "bg-success-500 hover:bg-success-600" : ""} ${
              animalTheme ? "bg-amber-500 hover:bg-amber-600" : 
              creativeMode ? "bg-purple-500 hover:bg-purple-600" : ""
            }`}
          >
            {completed ? (
              <>
                <Check className="h-4 w-4 mr-1" /> Completed
              </>
            ) : (
              "Complete Activity"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
