import React from 'react';
import { Product } from '../types';
import { MessageCircle, ArrowRight, Instagram } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: "Vestido Gala Noir",
    category: "Black Collection 🖤",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800",
    description: "Sofisticação absoluta para noites inesquecíveis."
  },
  {
    id: 2,
    name: "Red Velvet Dress",
    category: "Red Collection ❤️",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    description: "Poder e sensualidade em cada detalhe."
  },
  {
    id: 3,
    name: "Renda Branca Luxo",
    category: "White Edition 🕊️",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
    description: "Delicadeza com acabamento premium."
  },
  {
    id: 4,
    name: "Cael Sunglasses VIP",
    category: "Acessórios 🕶️",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    description: "O toque final para um look de impacto."
  },
  {
    id: 5,
    name: "Midi Dress Gold",
    category: "Golden Hour ✨",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1596704017286-07449c258d4a?auto=format&fit=crop&q=80&w=800",
    description: "Brilho discreto para eventos diurnos."
  },
  {
    id: 6,
    name: "Conjunto Alfaiataria",
    category: "Casual Chic 💼",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1549570186-6ff377fa11c5?auto=format&fit=crop&q=80&w=800",
    description: "Elegância e poder para o ambiente corporativo."
  },
  {
    id: 7,
    name: "Clutch Diamond",
    category: "Acessórios 💎",
    price: "Sob Consulta",
    image: "https://images.unsplash.com/photo-1566812328246-15024b33342d?auto=format&fit=crop&q=80&w=800",
    description: "Detalhes que fazem toda a diferença."
  },
  {
    id: 8,
    name: "Look Cliente Real",
    category: "Cael Girls 🌟",
    price: "Inspiração",
    image: "https://images.unsplash.com/photo-1605763240004-7e93b172d754?auto=format&fit=crop&q=80&w=800",
    description: "Nossas clientes brilhando com Cael Fashion."
  }
];

export const Catalog: React.FC = () => {
  const whatsappNumber = "244925412200";

  return (
    <section id="colecoes" className="py-24 bg-stone-50 dark:bg-brand-dark transition-colors relative">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-xs uppercase mb-3 block">Exclusividade</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black dark:text-white mb-6">O Seu Próximo Look Exclusivo</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Navegue por nossas coleções curadas: Black, Red, Looks das Clientes e Acessórios de Luxo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white dark:bg-black/50 p-0 shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 border border-stone-200 dark:border-stone-800">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4">
                   <span className="text-brand-gold font-serif text-2xl italic">{product.name}</span>
                   <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá, me interessei pelo ${product.name} da coleção Cael.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-black px-6 py-3 font-bold uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    Consultar Preço
                  </a>
                </div>
              </div>
              
              <div className="p-6 text-center border-t border-stone-100 dark:border-stone-800">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2 block">{product.category}</span>
                <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100 mb-2">{product.name}</h3>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Quero saber mais sobre o ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-brand-black dark:hover:text-white transition-colors text-sm font-bold border-b border-transparent hover:border-brand-gold pb-0.5 mt-2"
                >
                  <MessageCircle size={14} />
                  VER NO WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-stone-500 dark:text-stone-400 mb-6 italic">Gostaria de ver mais opções exclusivas?</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <a 
              href={`https://wa.me/${whatsappNumber}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-brand-black dark:bg-white text-white dark:text-black text-sm font-bold hover:bg-brand-gold dark:hover:bg-brand-gold hover:text-white transition-colors shadow-lg tracking-[0.2em] uppercase"
            >
              <MessageCircle size={18} />
              Catálogo Completo
            </a>
            <a 
              href="https://instagram.com/cael_fashion_boutique1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-brand-black dark:border-stone-700 text-brand-black dark:text-white text-sm font-bold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors tracking-[0.2em] uppercase"
            >
              <Instagram size={18} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};