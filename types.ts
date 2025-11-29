export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export interface Review {
  id: number;
  text: string;
  author: string;
}

export interface AiResponse {
  advice: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}