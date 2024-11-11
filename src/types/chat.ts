export interface Message {
  type: 'question' | 'answer';
  content: string;
  timestamp: string;
}

export interface Question {
  id: number;
  question: string;
  answer: string;
}