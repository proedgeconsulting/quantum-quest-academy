
import { FormEvent, useState } from "react";

export function useChatInputState(onSendMessage: (message: string) => void) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e?: FormEvent) => {
    if (e) e.preventDefault();
    
    if (!message.trim()) return;
    
    onSendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return {
    message,
    setMessage,
    handleSubmit,
    handleKeyDown
  };
}
