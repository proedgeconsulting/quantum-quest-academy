
import { Button } from "@/components/ui/button";
import { ChatMode } from "./ChatTypes";
import { Atom, MessageCircle } from "lucide-react";

interface ChatModeToggleProps {
  currentMode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
}

const ChatModeToggle = ({ currentMode, onModeChange }: ChatModeToggleProps) => {
  return (
    <div className="flex items-center space-x-2 p-2 mb-2">
      <Button
        variant={currentMode === 'general' ? "default" : "outline"}
        size="sm"
        onClick={() => onModeChange('general')}
        className="flex items-center space-x-1"
      >
        <MessageCircle size={16} />
        <span>General</span>
      </Button>
      
      <Button
        variant={currentMode === 'quantum' ? "default" : "outline"}
        size="sm"
        onClick={() => onModeChange('quantum')}
        className="flex items-center space-x-1 bg-quantum-500 hover:bg-quantum-600"
      >
        <Atom size={16} />
        <span>Quantum Expert</span>
      </Button>
    </div>
  );
};

export default ChatModeToggle;
