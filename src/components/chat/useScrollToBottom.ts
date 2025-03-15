
import { useCallback, RefObject } from "react";

export function useScrollToBottom(messagesEndRef: RefObject<HTMLDivElement>) {
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);
  
  return { scrollToBottom };
}
