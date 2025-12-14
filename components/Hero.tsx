import React from 'react';
import { ShoppingBag, MessageCircle, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = "244925412200";

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Luxury Grade Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1920&auto=format&fit=crop" 
          alt="Cael Fashion Luxury Background" 
          className="w-full h-full object-cover object-[center_30%] animate-[scale_30s_ease-in-out_infinite_alternate]"
          onError={(e) => e.currentTarget.style.display = 'none'}
        />
        {/* Gradiente dramático para sofisticação e leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto animate-fade-up flex flex-col items-center">
        
        <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <span className="inline-block py-2 px-6 border border-brand-gold/50 bg-black/40 backdrop-blur-md text-brand-gold tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold">
            Cael Fashion Boutique
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
          Onde o Glamour <br/>
          <span className="italic text-brand-gold font-light">Encontra a Elegância</span>
        </h1>
        
        <p className="text-stone-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg tracking-wide">
          Vestidos e looks exclusivos para mulheres que querem se destacar em qualquer ocasião — do evento de luxo ao casual sofisticado.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-lg">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Olá, gostaria de receber o Catálogo Exclusivo da Cael Fashion.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-5 bg-brand-gold text-black font-bold tracking-[0.15em] uppercase text-sm w-full transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-3 shadow-lg"
          >
            <MessageCircle size={20} />
            Receber Catálogo VIP
          </a>
          <a 
            href="#colecoes" 
            className="group px-8 py-5 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold tracking-[0.15em] uppercase text-sm w-full transition-all hover:bg-black hover:border-brand-gold flex items-center justify-center gap-2"
          >
            Ver Coleção
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 block text-center">Descubra</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold to-transparent mx-auto"></div>
      </div>
    </section>
  );
};