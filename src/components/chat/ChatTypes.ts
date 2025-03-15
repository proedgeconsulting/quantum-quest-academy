
export type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
};

export type ChatMode = 'general' | 'quantum';
