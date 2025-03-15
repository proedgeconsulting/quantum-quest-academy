
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2 } from "lucide-react";
import { Message } from "./ChatTypes";
import MessageBubble from "./MessageBubble";
import { Avatar } from "@/components/ui/avatar";
import { useScrollToBottom } from "./useScrollToBottom";

interface ChatMessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessageList = ({ messages, isLoading }: ChatMessageListProps) => {
  const messagesEndRef = useScrollToBottom(messages);

  return (
    <ScrollArea className="h-[400px] p-4">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <Avatar className="h-8 w-8 bg-secondary">
                <div className="flex h-full items-center justify-center text-xs">
                  A
                </div>
              </Avatar>
              <div className="rounded-lg bg-muted p-3">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatMessageList;
