import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareText, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToAgent } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: 'Olá! Sou a Adrine, sua assistente virtual. Como posso ajudar você hoje? ✨',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Build history for context
    const history = messages.map(m => `${m.role === 'user' ? 'Cliente' : 'Adrine'}: ${m.text}`);
    
    const responseText = await sendMessageToAgent(userMessage.text, history);

    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-stone-900 w-[350px] h-[500px] mb-4 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-brand-gold/20 animate-fade-up transition-colors">
          {/* Header */}
          <div className="bg-stone-900 dark:bg-stone-950 p-4 flex justify-between items-center text-white border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-stone-900">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-serif font-bold">Adrine Virtual</h3>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online agora
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-stone-50 dark:bg-stone-900 space-y-4 scrollbar-thin">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-white rounded-br-none' 
                      : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-brand-gold/20 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-stone-800 p-3 rounded-2xl rounded-bl-none shadow-sm border border-stone-100 dark:border-stone-700">
                  <Loader2 size={16} className="animate-spin text-brand-gold" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-stone-100 dark:bg-stone-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold text-stone-800 dark:text-white transition-colors placeholder:text-stone-400"
            />
            <button 
              type="submit" 
              disabled={isLoading || !inputText.trim()}
              className="bg-brand-gold text-white p-2 rounded-full hover:bg-stone-900 dark:hover:bg-white dark:hover:text-stone-900 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-gold text-white rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] flex items-center justify-center hover:bg-stone-900 dark:hover:bg-stone-100 dark:hover:text-stone-900 hover:scale-110 transition-all duration-300 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquareText size={24} className="group-hover:animate-bounce" />}
      </button>
    </div>
  );
};