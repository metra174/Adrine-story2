import React from 'react';
import { Award, Clock, Heart, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-stone-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2 block">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-white">Por Que Escolher a ADRINE STORY</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: <Award size={36} />, title: "Qualidade Premium", desc: "Produtos selecionados com acabamento impecável." },
            { icon: <Heart size={36} />, title: "Modelos Modernos", desc: "Curadoria de estilo para todas as ocasiões." },
            { icon: <Zap size={36} />, title: "Entrega Rápida", desc: "Receba em Luanda por apenas 2.000 Kz." },
            { icon: <Clock size={36} />, title: "Atendimento VIP", desc: "Suporte personalizado e ágil via WhatsApp." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-stone-50 dark:bg-stone-800 p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-brand-rose/50 dark:hover:border-brand-gold/30 rounded-sm">
              <div className="text-brand-gold flex justify-center mb-6">{feature.icon}</div>
              <h3 className="font-serif font-bold text-xl mb-3 text-stone-900 dark:text-white">{feature.title}</h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};