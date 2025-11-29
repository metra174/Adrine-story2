import React from 'react';
import { Truck, CheckCircle, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-brand-rose/30 dark:bg-stone-900">
      {/* Decorative Elements to fix "plain pink screen" */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="text-stone-800 dark:text-brand-gold" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
         </svg>
      </div>
      
      {/* Watermark Text */}
      <div className="absolute -bottom-10 -right-10 text-[10rem] md:text-[15rem] font-serif font-bold text-white dark:text-white/5 opacity-40 select-none pointer-events-none leading-none">
        LUXURY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-stone-800 dark:border-brand-gold z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b9519e0926f?q=80&w=800&auto=format&fit=crop" 
                alt="Adrine Story Collection" 
                className="relative z-10 w-full h-auto shadow-2xl object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 text-white shadow-lg hidden md:block">
                <p className="font-serif text-2xl font-bold">Desde 2024</p>
                <p className="text-xs uppercase tracking-widest">Elegância Angolana</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block border-b-2 border-brand-gold mb-4 pb-1">
               <h2 className="text-xs font-bold tracking-[0.3em] text-stone-500 dark:text-stone-400 uppercase">Quem Somos</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white mb-8">ADRINE STORY</h3>
            
            <p className="text-stone-600 dark:text-stone-300 mb-8 leading-relaxed text-lg font-light">
              Somos uma loja especializada em moda feminina, com destaque em <strong className="text-stone-900 dark:text-brand-gold">saltos finos, sandálias, socas e calçados modernos</strong>. Trabalhamos com produtos selecionados, excelente acabamento e modelos que valorizam a elegância da mulher angolana.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              <ul className="space-y-4">
                {['Saltos finos de vários estilos', 'Sandálias modernas', 'Socas elegantes'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 dark:text-stone-300">
                    <span className="w-5 h-5 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                        <CheckCircle size={12} className="text-stone-800 dark:text-brand-gold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {['Tendências atualizadas', 'Produtos selecionados', 'Qualidade Garantida'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 dark:text-stone-300">
                     <span className="w-5 h-5 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center">
                        <Star size={12} className="text-stone-800 dark:text-brand-gold" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-800 p-6 border-l-4 border-stone-800 dark:border-brand-gold shadow-sm transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 dark:bg-stone-700 rounded-full">
                    <Truck size={24} className="text-stone-800 dark:text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg text-stone-900 dark:text-white">Entrega Imediata</p>
                  <p className="text-stone-600 dark:text-stone-400">Taxa fixa de <span className="font-bold text-brand-gold">2.000 Kz</span> para toda Luanda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};