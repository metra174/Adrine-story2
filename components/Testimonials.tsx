import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-creme dark:bg-stone-950 transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-serif mb-4 text-brand-black dark:text-white">A Escolha de <span className="text-brand-gold italic">7.400+</span> Mulheres</h2>
           <p className="text-stone-500 uppercase tracking-widest text-xs">Veja o que nossas clientes dizem</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-stone-900 p-8 shadow-lg border-b-4 border-brand-black dark:border-brand-gold">
            <div className="text-brand-gold mb-6"><Quote size={24} /></div>
            <p className="text-stone-600 dark:text-stone-300 mb-6 text-sm leading-relaxed italic">
              "A Cael mudou minha forma de ver moda. O vestido que comprei para o casamento da minha irmã foi o comentário da festa. Impecável!"
            </p>
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full object-cover grayscale" alt="Cliente" />
              <div>
                <p className="font-bold text-brand-black dark:text-white font-serif">Sofia Mendes</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Luanda, Angola</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-stone-900 p-8 shadow-lg border-b-4 border-brand-black dark:border-brand-gold scale-105 z-10 hidden md:block">
            <div className="text-brand-gold mb-6"><Quote size={24} /></div>
            <p className="text-stone-600 dark:text-stone-300 mb-6 text-sm leading-relaxed italic">
              "Atendimento de excelência! O envio internacional funcionou perfeitamente e as peças chegaram super bem embaladas. Virei fã!"
            </p>
            <div className="flex items-center gap-3">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full object-cover grayscale" alt="Cliente" />
              <div>
                <p className="font-bold text-brand-black dark:text-white font-serif">Isabel K.</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Lisboa, Portugal</p>
              </div>
            </div>
          </div>

           <div className="bg-white dark:bg-stone-900 p-8 shadow-lg border-b-4 border-brand-black dark:border-brand-gold">
            <div className="text-brand-gold mb-6"><Quote size={24} /></div>
            <p className="text-stone-600 dark:text-stone-300 mb-6 text-sm leading-relaxed italic">
              "Qualidade surreal. As peças Red Collection são poderosas demais. Já estou escolhendo o próximo look."
            </p>
            <div className="flex items-center gap-3">
               <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full object-cover grayscale" alt="Cliente" />
              <div>
                <p className="font-bold text-brand-black dark:text-white font-serif">Jandira P.</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">Talatona, Angola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};