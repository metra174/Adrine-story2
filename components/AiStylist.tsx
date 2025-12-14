import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getFashionAdvice } from '../services/geminiService';

export const AiStylist: React.FC = () => {
  const [occasion, setOccasion] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!occasion.trim()) return;

    setLoading(true);
    setAdvice(null);
    
    const response = await getFashionAdvice(occasion);
    
    setAdvice(response);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden border-t border-stone-800">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 text-brand-gold mb-4">
              <Sparkles size={20} />
              <span className="uppercase tracking-[0.2em] text-xs font-bold">Cael Personal Stylist</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Não sabe o que vestir <br /> <span className="text-brand-gold italic font-light">nesta ocasião?</span>
            </h2>
            <p className="text-stone-400 mb-10 text-lg font-light leading-relaxed max-w-lg">
              Descreva seu evento (Gala, Jantar Romântico, Trabalho) e nossa IA sugerirá o look Cael perfeito para você impressionar.
            </p>
            
            <form onSubmit={handleAskAi} className="relative max-w-lg">
              <div className="relative group">
                <input
                  type="text"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  placeholder="Ex: Jantar de aniversário em restaurante chique..."
                  className="w-full px-6 py-5 bg-stone-900/50 border-b border-stone-700 text-xl text-white placeholder-stone-600 focus:outline-none focus:border-brand-gold transition-colors pr-16"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="absolute right-0 bottom-4 text-brand-gold hover:text-white transition-colors disabled:opacity-50 p-2"
                >
                  {loading ? <Loader2 className="animate-spin" size={24} /> : <Send size={24} />}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 min-h-[300px] flex items-center justify-center relative shadow-2xl">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-gold"></div>
              
              {!advice && !loading && (
                <div className="text-center text-stone-500">
                  <Sparkles className="mx-auto mb-4 opacity-20" size={40} />
                  <p className="font-serif italic text-xl">"Aguardando para revelar seu potencial..."</p>
                </div>
              )}

              {loading && (
                <div className="text-center text-brand-gold">
                  <Loader2 className="animate-spin mx-auto mb-4" size={30} />
                  <p className="text-[10px] uppercase tracking-[0.3em]">Consultando stylists...</p>
                </div>
              )}

              {advice && (
                <div className="animate-fade-up text-center">
                  <h3 className="font-serif text-2xl text-brand-gold mb-6">Sugestão Exclusiva</h3>
                  <p className="text-lg leading-relaxed text-stone-200 font-light italic mb-8">
                    "{advice}"
                  </p>
                  <a href="#colecoes" className="inline-block px-8 py-3 bg-white text-black hover:bg-brand-gold transition-all text-xs font-bold uppercase tracking-widest">
                    Ver Opções no Catálogo
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};