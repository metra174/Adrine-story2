import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = "950124243";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531310197839-ccf54dd34bd0?q=80&w=1920&auto=format&fit=crop" 
          alt="Adrine Story Background" 
          className="w-full h-full object-cover object-center animate-[scale_20s_ease-in-out_infinite_alternate]"
          style={{ animationDuration: '30s' }}
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
        {/* Gradiente mais sofisticado para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-up">
        <span className="inline-block py-1 px-3 border border-white/30 bg-black/20 backdrop-blur-sm rounded-full text-brand-rose tracking-[0.2em] text-xs md:text-sm mb-6 uppercase font-bold">
          Moda Feminina em Luanda
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Elegância <span className="italic text-brand-gold">Feminina</span> <br />
          para Todas as Ocasiões
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          ADRINE STORY – Loja de roupas femininas com foco em saltos finos, sandálias e socas sofisticadas para mulheres de estilo.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <a 
            href="#catalogo" 
            className="group relative px-10 py-4 bg-white text-stone-900 font-bold tracking-wide transition-all hover:bg-brand-rose hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            VER CATÁLOGO
          </a>
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 border border-white/80 text-white font-bold tracking-wide hover:bg-white hover:text-stone-900 transition-all w-full md:w-auto flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <MessageCircle size={18} />
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};