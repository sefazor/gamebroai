import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, Send, User } from 'lucide-react';
import type { Message, Question } from '../types/chat';

export function AI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [askedQuestions, setAskedQuestions] = useState<Set<number>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const questions: Question[] = [
    {
      id: 1,
      question: "Who is the highest goalscorer of all time?",
      answer: "Cristiano Ronaldo is the highest goalscorer of all time with over 850 official career goals."
    },
    {
      id: 2,
      question: "Which team has won the most Premier League titles?",
      answer: "Manchester United has won the most Premier League titles with 20 championships."
    },
    {
      id: 3,
      question: "Who has won the most Ballon d'Or awards?",
      answer: "Lionel Messi has won the most Ballon d'Or awards with 8 titles."
    },
    {
      id: 4,
      question: "Which country has won the most World Cups?",
      answer: "Brazil has won the most FIFA World Cup titles with 5 championships (1958, 1962, 1970, 1994, 2002)."
    }
  ];

  const handleQuestionClick = async (id: number, question: string, answer: string) => {
    if (askedQuestions.has(id)) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add question immediately
    setMessages(prev => [...prev, { type: 'question', content: question, timestamp }]);
    
    // Show typing indicator
    setIsTyping(true);
    scrollToBottom();

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add answer after delay
    setMessages(prev => [...prev, { type: 'answer', content: answer, timestamp }]);
    setIsTyping(false);
    
    setAskedQuestions(prev => new Set([...prev, id]));
  };

  return (
    <main>
      <div className="page-content">
        <h1 className="page-title">
          <div className="flex items-center gap-3 justify-center">
            <Bot className="w-8 h-8 text-[#4ade80]" />
            GameBro AI
          </div>
        </h1>

        <div className="max-w-5xl mx-auto">
          {/* Chat Interface with Quick Questions */}
          <div className="bg-[#111] rounded-xl border border-gray-800/50">
            <div className="p-4 border-b border-gray-800/50">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#4ade80]" />
                <span className="font-medium">GameBro AI Chat</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 h-[500px]">
              {/* Quick Questions Sidebar */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-800/50 overflow-hidden flex flex-col h-full">
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-gray-400 mb-4">Quick Questions</h2>
                </div>
                <div className="flex-1 overflow-y-auto px-4 pb-4">
                  <div className="space-y-3">
                    {questions.map((q) => (
                      <button
                        key={q.id}
                        onClick={() => handleQuestionClick(q.id, q.question, q.answer)}
                        className={`w-full bg-black/30 p-4 rounded-xl border text-left transition-colors text-sm ${
                          askedQuestions.has(q.id)
                            ? 'border-[#4ade80] bg-[#4ade80]/10 cursor-default'
                            : 'border-gray-800/50 hover:border-[#4ade80]/50 cursor-pointer'
                        }`}
                        disabled={askedQuestions.has(q.id)}
                      >
                        {q.question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-8 p-4 flex flex-col h-full overflow-hidden">
                <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                  {messages.length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        Select a question to see the answer
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.type === 'question' ? 'justify-end' : 'justify-start'} message-animation`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="max-w-[80%]">
                            <div className="flex items-center gap-2 mb-1">
                              {message.type === 'question' ? (
                                <>
                                  <span className="text-xs text-gray-400">{message.timestamp}</span>
                                  <span className="text-xs bg-[#4ade80]/20 text-[#4ade80] px-2 py-0.5 rounded-full">Question</span>
                                  <User className="w-3 h-3 text-[#4ade80]" />
                                </>
                              ) : (
                                <>
                                  <Bot className="w-3 h-3 text-[#4ade80]" />
                                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">Answer</span>
                                  <span className="text-xs text-gray-400">{message.timestamp}</span>
                                </>
                              )}
                            </div>
                            <div
                              className={`p-4 rounded-xl ${
                                message.type === 'question'
                                  ? 'bg-[#4ade80] text-black'
                                  : 'bg-gray-800 text-white'
                              }`}
                            >
                              {message.content}
                            </div>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start message-animation">
                          <div className="max-w-[80%]">
                            <div className="flex items-center gap-2 mb-1">
                              <Bot className="w-3 h-3 text-[#4ade80]" />
                              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">Answer</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-800 text-white">
                              <span className="typing-indicator">...</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={chatEndRef} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Ask Your Own Question */}
          <div className="bg-[#111] p-8 rounded-xl border border-gray-800/50 mt-8">
            <h2 className="text-xl font-semibold mb-4">Ask Your Own Question</h2>
            <p className="text-gray-400 mb-6">
              To get answers to your football questions, start chatting with GameBro on WhatsApp.
            </p>
            <a
              href="https://wa.me/1234567890"
              className="inline-flex items-center gap-2 bg-[#4ade80] text-black px-6 py-3 rounded-full font-medium hover:bg-[#22c55e] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Start on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}