import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-serif text-center mb-16 text-stone-900">Histórias de <span className="text-brand-gold">Encantamento</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-10 shadow-lg relative border-t-4 border-brand-gold rounded-sm group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-6 left-10 w-12 h-12 bg-brand-gold flex items-center justify-center text-white shadow-md">
                <Quote size={20} fill="currentColor" />
            </div>
            <p className="text-stone-600 mb-8 text-lg italic leading-relaxed pt-4">
              "Comprei dois saltos e a qualidade superou minhas expectativas. O acabamento é perfeito e o conforto é real. Recomendo muito a loja!"
            </p>
            <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center font-serif font-bold text-stone-600 text-xl">A</div>
              <div>
                <p className="font-bold text-stone-900 text-lg font-serif">Ana Maria</p>
                <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">Cliente Verificada</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 shadow-lg relative border-t-4 border-brand-gold rounded-sm group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute -top-6 left-10 w-12 h-12 bg-brand-gold flex items-center justify-center text-white shadow-md">
                <Quote size={20} fill="currentColor" />
            </div>
            <p className="text-stone-600 mb-8 text-lg italic leading-relaxed pt-4">
              "Entrega super rápida aqui em Talatona. Os sapatos são ainda mais bonitos pessoalmente do que nas fotos. Virei cliente fiel!"
            </p>
            <div className="flex items-center gap-4 border-t border-stone-100 pt-6">
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center font-serif font-bold text-stone-600 text-xl">C</div>
              <div>
                <p className="font-bold text-stone-900 text-lg font-serif">Carla Sousa</p>
                <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">Cliente Verificada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};