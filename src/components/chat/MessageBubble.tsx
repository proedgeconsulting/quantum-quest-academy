
import { Avatar } from "@/components/ui/avatar";
import ReactMarkdown from "react-markdown";
import { Message } from "./types";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`flex gap-3 max-w-[85%] ${
          message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <Avatar className={`h-8 w-8 ${
          message.sender === 'user' ? 'bg-primary' : 'bg-secondary'
        }`}>
          <div className="flex h-full items-center justify-center text-xs font-medium uppercase">
            {message.sender === 'user' ? 'U' : 'A'}
          </div>
        </Avatar>
        <div 
          className={`rounded-lg p-3 text-sm ${
            message.sender === 'user' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted'
          }`}
        >
          {message.sender === 'bot' ? (
            <ReactMarkdown className="prose dark:prose-invert prose-sm max-w-none">
              {message.text}
            </ReactMarkdown>
          ) : (
            message.text
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
