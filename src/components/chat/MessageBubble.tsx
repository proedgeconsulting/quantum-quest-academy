
import { Message } from "./ChatTypes";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
        <Avatar className="h-8 w-8 bg-secondary">
          <div className="flex h-full items-center justify-center text-xs">
            {isUser ? "U" : "A"}
          </div>
        </Avatar>
        <div className={cn(
          "rounded-lg p-3 max-w-[80%]", 
          isUser 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        )}>
          <p className="whitespace-pre-wrap">{message.text}</p>
          <div className="text-xs opacity-70 mt-1">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
