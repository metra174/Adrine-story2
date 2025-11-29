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
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 text-brand-gold mb-4">
              <Sparkles size={24} />
              <span className="uppercase tracking-[0.2em] text-sm font-bold">Personal Stylist Adrine</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Qual é a sua próxima <br /> <span className="text-brand-gold italic">ocasião especial?</span>
            </h2>
            <p className="text-stone-300 mb-10 text-lg font-light leading-relaxed max-w-lg">
              Casamento, jantar romântico ou trabalho? Nossa inteligência artificial sugere o calçado perfeito para você brilhar.
            </p>
            
            <form onSubmit={handleAskAi} className="relative max-w-lg">
              <div className="relative group">
                <input
                  type="text"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  placeholder="Ex: Vou a um casamento de tarde..."
                  className="w-full px-6 py-5 bg-transparent border-b-2 border-stone-700 text-xl text-white placeholder-stone-600 focus:outline-none focus:border-brand-gold transition-colors pr-16"
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
            <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 min-h-[300px] flex items-center justify-center relative rounded-sm shadow-2xl">
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-brand-gold/30"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-brand-gold/30"></div>
              
              {!advice && !loading && (
                <div className="text-center text-stone-500">
                  <Sparkles className="mx-auto mb-4 opacity-20" size={56} />
                  <p className="font-serif italic text-xl">"Aguardando para realçar sua elegância..."</p>
                </div>
              )}

              {loading && (
                <div className="text-center text-brand-gold">
                  <Loader2 className="animate-spin mx-auto mb-4" size={40} />
                  <p className="text-xs uppercase tracking-[0.3em]">Analisando tendências...</p>
                </div>
              )}

              {advice && (
                <div className="animate-fade-up text-center">
                  <h3 className="font-serif text-3xl text-brand-gold mb-6">Nossa Sugestão</h3>
                  <p className="text-xl leading-relaxed text-stone-200 font-light italic mb-8">
                    "{advice}"
                  </p>
                  <a href="#catalogo" className="inline-block px-8 py-3 border border-white/20 hover:bg-white hover:text-stone-900 transition-all text-sm uppercase tracking-widest">
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