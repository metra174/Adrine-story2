import React from 'react';
import { Truck, Gem, HeartHandshake, Globe } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Diferenciais Cael</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Por Que a Cael é Sua Melhor Escolha</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800 border border-stone-800">
          {[
            { icon: <Gem size={32} />, title: "Exclusividade", desc: "Peças únicas que você não encontra em outro lugar." },
            { icon: <Globe size={32} />, title: "Envio Global", desc: "Entrega segura para todo o país e exterior." },
            { icon: <HeartHandshake size={32} />, title: "Atendimento VIP", desc: "Suporte personalizado via WhatsApp." },
            { icon: <Truck size={32} />, title: "Rapidez", desc: "Logística eficiente para você receber logo." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-brand-black p-10 text-center hover:bg-stone-900 transition-colors duration-300 group">
              <div className="text-stone-500 group-hover:text-brand-gold transition-colors duration-300 flex justify-center mb-6">{feature.icon}</div>
              <h3 className="font-serif font-bold text-lg mb-3 text-white">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};