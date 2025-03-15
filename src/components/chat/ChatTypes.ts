
export interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface ChatbotProps {
  initialMessage?: string;
  onClose?: () => void;
  isFloating?: boolean;
}
