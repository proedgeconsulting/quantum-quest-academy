
import { useState, FormEvent, KeyboardEvent } from "react";

export const useChatInputState = (onSendMessage: (message: string) => void) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent);
    }
  };

  return {
    message,
    setMessage,
    handleSubmit,
    handleKeyDown,
  };
};
