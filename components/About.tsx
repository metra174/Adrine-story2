import React from 'react';
import { Star, Globe, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Decorative Text */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 text-[8rem] md:text-[12rem] font-serif font-bold text-stone-100 dark:text-white/5 opacity-60 select-none pointer-events-none rotate-90 leading-none whitespace-nowrap">
        CAEL BOUTIQUE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
               <img 
                src="https://i.imgur.com/cL8P8Zb.jpeg" 
                alt="Woman in Cael Fashion Dress" 
                className="w-full h-80 object-cover object-top mt-12 shadow-2xl"
              />
               <img 
                src="https://i.imgur.com/yccN1GK.jpeg" 
                alt="Luxury Cael Fashion Detail" 
                className="w-full h-80 object-cover object-top shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-brand-black p-8 shadow-xl border border-brand-gold/20 text-center min-w-[200px]">
              <span className="text-4xl font-serif text-brand-gold block mb-2">+7.400</span>
              <span className="text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">Mulheres Confiam</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
               <h2 className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase mb-4">Sobre a Marca</h2>
               <h3 className="text-4xl md:text-5xl font-serif text-brand-black dark:text-white mb-6 leading-tight">
                 Mais que Moda, <br />
                 <span className="italic">Um Estado de Espírito.</span>
               </h3>
            </div>
            
            <p className="text-stone-600 dark:text-stone-300 mb-8 leading-relaxed text-lg font-light">
              Na <strong className="text-brand-black dark:text-brand-gold">Cael Fashion Boutique</strong>, não vendemos apenas roupas. Entregamos confiança, glamour e exclusividade. Nossa curadoria é pensada para a mulher moderna que não aceita nada menos que o extraordinário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-50 dark:bg-stone-900 p-3 rounded-sm border border-brand-gold/30">
                  <Star size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black dark:text-white mb-1">Peças Exclusivas e Selecionadas</h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Coleções limitadas para garantir que você seja única em qualquer evento.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-stone-50 dark:bg-stone-900 p-3 rounded-sm border border-brand-gold/30">
                  <Globe size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black dark:text-white mb-1">Envio Nacional e Internacional</h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Levamos a elegância da Cael para Luanda e para o mundo.</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                 <div className="bg-stone-50 dark:bg-stone-900 p-3 rounded-sm border border-brand-gold/30">
                  <ShieldCheck size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black dark:text-white mb-1">Qualidade Premium</h4>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Tecidos nobres, cortes impecáveis e acabamento de alto padrão.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <a href="https://wa.me/244925412200" className="text-brand-black dark:text-white font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors text-sm tracking-widest uppercase">
                 Conheça nossa História
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};