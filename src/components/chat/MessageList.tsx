
import { useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Message } from "./types";
import MessageBubble from "./MessageBubble";

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

export default MessageList;
