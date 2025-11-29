import React from 'react';
import { Product } from '../types';
import { MessageCircle, ArrowRight } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: "Salto Fino Royal",
    category: "Saltos Finos ✨",
    price: "Consulte",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    description: "Elegância pura para jantares e eventos."
  },
  {
    id: 2,
    name: "Sandália Verão Chic",
    category: "Sandálias Femininas 👡",
    price: "Consulte",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
    description: "Conforto e estilo para o dia a dia."
  },
  {
    id: 3,
    name: "Soca de Luxo Gold",
    category: "Socas de Luxo 👠",
    price: "Consulte",
    image: "https://images.unsplash.com/photo-1581100904036-a67816048d0b?auto=format&fit=crop&q=80&w=800",
    description: "Um toque moderno para o seu look."
  },
  {
    id: 4,
    name: "Scarpin Verniz",
    category: "Novidades da Semana 🛍️",
    price: "Consulte",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
    description: "Brilho intenso para mulheres poderosas."
  }
];

export const Catalog: React.FC = () => {
  const whatsappNumber = "950124243";

  return (
    <section id="catalogo" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6">Catálogo Exclusivo</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-lg font-light">
            Descubra nossa coleção selecionada. Toque no item desejado para comprar diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-stone-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá, gostei do ${product.name} que vi no site.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-stone-900 px-6 py-3 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-gold hover:text-white uppercase tracking-wider text-sm"
                  >
                    Ver no WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="text-center px-2">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">{product.category}</span>
                <h3 className="text-xl font-serif text-stone-900 mt-2 mb-2">{product.name}</h3>
                <p className="text-sm text-stone-500 mb-4 italic font-light border-b border-stone-100 pb-4">{product.description}</p>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Quero comprar o ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-stone-800 font-semibold text-sm hover:text-brand-gold transition-colors group-hover:gap-3"
                >
                  <MessageCircle size={16} />
                  COMPRAR AGORA
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            className="inline-flex items-center gap-3 px-12 py-5 bg-stone-900 text-white text-lg font-bold hover:bg-brand-gold transition-colors shadow-xl tracking-widest uppercase"
          >
            Ver Catálogo Completo <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};