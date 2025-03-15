
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { FormEvent } from "react";
import { useChatInputState } from "./useChatInputState";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const { message, setMessage, handleSubmit, handleKeyDown } = useChatInputState(onSendMessage);

  return (
    <div className="p-4 border-t">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[40px] resize-none"
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isLoading || !message.trim()}
          className="h-10 w-10"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
