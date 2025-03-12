
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput = ({ onSendMessage, isLoading }: MessageInputProps) => {
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    
    if (!currentMessage.trim()) return;
    
    onSendMessage(currentMessage);
    setCurrentMessage("");
  };

  return (
    <div className="p-4 border-t">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="min-h-[40px] resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isLoading || !currentMessage.trim()}
          className="h-10 w-10"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;
