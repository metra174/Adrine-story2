import React from 'react';
import { Truck, CheckCircle, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-rose/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-brand-gold/10 min-h-[400px]">
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-stone-800 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1550614000-4b9519e0926f?q=80&w=800&auto=format&fit=crop" 
                alt="Adrine Story Collection" 
                className="relative z-10 w-full h-auto shadow-xl object-cover"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-2">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-brand-black mb-6">ADRINE STORY</h3>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              Somos uma loja especializada em moda feminina, com destaque em <strong>saltos finos, sandálias, socas e calçados modernos</strong>. Trabalhamos com produtos selecionados, excelente acabamento e modelos que valorizam a elegância da mulher angolana.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3">
                {['Saltos finos de vários estilos', 'Sandálias modernas', 'Socas elegantes'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700">
                    <CheckCircle size={16} className="text-stone-800" /> {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {['Tendências atualizadas', 'Produtos selecionados', 'Qualidade Garantida'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-700">
                    <Star size={16} className="text-stone-800" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 border-l-4 border-stone-800 shadow-sm">
              <div className="flex items-start gap-3">
                <Truck size={24} className="text-stone-800 mt-1" />
                <div>
                  <p className="font-bold text-lg text-stone-900">Entrega Imediata</p>
                  <p className="text-stone-600">Taxa fixa de <span className="font-bold text-stone-900">2.000 Kz</span> para toda Luanda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};