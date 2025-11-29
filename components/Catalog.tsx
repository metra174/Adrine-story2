import React from 'react';
import { Product } from '../types';
import { MessageCircle, ArrowRight } from 'lucide-react';

const products: Product[] = [
  {
    id: 1,
    name: "Salto Fino Royal",
    category: "Saltos Finos ✨",
    price: "18.000 Kz",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600",
    description: "Elegância pura para jantares."
  },
  {
    id: 2,
    name: "Sandália Verão Chic",
    category: "Sandálias 👡",
    price: "14.500 Kz",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=600",
    description: "Conforto para o dia a dia."
  },
  {
    id: 3,
    name: "Soca de Luxo Gold",
    category: "Socas 👠",
    price: "16.000 Kz",
    image: "https://images.unsplash.com/photo-1581100904036-a67816048d0b?auto=format&fit=crop&q=80&w=600",
    description: "Toque moderno e dourado."
  },
  {
    id: 4,
    name: "Scarpin Verniz Red",
    category: "Clássicos ❤️",
    price: "22.000 Kz",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600",
    description: "Poder para mulheres fortes."
  },
  {
    id: 5,
    name: "Sandália Gladiadora",
    category: "Sandálias 👡",
    price: "15.000 Kz",
    image: "https://images.unsplash.com/photo-1635773172085-79bbd27dc621?auto=format&fit=crop&q=80&w=600",
    description: "Estilo ousado e fresco."
  },
  {
    id: 6,
    name: "Mule Elegance",
    category: "Conforto ☁️",
    price: "12.000 Kz",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600",
    description: "Praticidade sem perder o charme."
  },
  {
    id: 7,
    name: "Salto Bloco Nude",
    category: "Dia a Dia 💼",
    price: "19.500 Kz",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=600",
    description: "Ideal para o escritório."
  },
  {
    id: 8,
    name: "Sandalha Festa Prata",
    category: "Festa ✨",
    price: "24.000 Kz",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=600",
    description: "Brilhe a noite toda."
  },
  {
    id: 9,
    name: "Peep Toe Clássico",
    category: "Clássicos 🖤",
    price: "21.000 Kz",
    image: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=600",
    description: "Atemporal e sofisticado."
  },
  {
    id: 10,
    name: "Anabela Tropical",
    category: "Verão ☀️",
    price: "13.500 Kz",
    image: "https://images.unsplash.com/photo-1574677228833-2866443d0460?auto=format&fit=crop&q=80&w=600",
    description: "Leveza para dias quentes."
  },
  {
    id: 11,
    name: "Stiletto Preto",
    category: "Saltos Finos 👠",
    price: "25.000 Kz",
    image: "https://images.unsplash.com/photo-1620247656209-a784d16d0043?auto=format&fit=crop&q=80&w=600",
    description: "O básico indispensável."
  },
  {
    id: 12,
    name: "Sandália Trançada",
    category: "Tendência 🔥",
    price: "17.000 Kz",
    image: "https://images.unsplash.com/photo-1647460982766-0d19f6a62f83?auto=format&fit=crop&q=80&w=600",
    description: "O hit da temporada."
  }
];

export const Catalog: React.FC = () => {
  const whatsappNumber = "950124243";

  return (
    <section id="catalogo" className="py-24 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black dark:text-white mb-6">Galeria de Estilo</h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg font-light">
            Explore nossa coleção completa. Preços especiais e entrega imediata em Luanda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white dark:bg-stone-900 p-3 md:p-4 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-sm border border-stone-100 dark:border-stone-800">
              <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-stone-100 dark:bg-stone-800">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold text-stone-900 shadow-sm">
                  {product.price}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá, gostei do ${product.name} (${product.price}) que vi no site.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-stone-900 px-4 py-2 md:px-6 md:py-3 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-gold hover:text-white uppercase tracking-wider text-xs md:text-sm"
                  >
                    Ver no WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="text-center px-1">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">{product.category}</span>
                <h3 className="text-lg md:text-xl font-serif text-stone-900 dark:text-stone-100 mt-1 mb-1 truncate">{product.name}</h3>
                <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 mb-3 italic font-light pb-3 border-b border-stone-100 dark:border-stone-800">{product.description}</p>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Quero comprar o ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-stone-800 dark:text-stone-200 font-bold text-xs md:text-sm hover:text-brand-gold dark:hover:text-brand-gold transition-colors group-hover:gap-3"
                >
                  <MessageCircle size={14} />
                  COMPRAR {product.price}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            className="inline-flex items-center gap-3 px-12 py-5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-lg font-bold hover:bg-brand-gold dark:hover:bg-brand-gold hover:text-white transition-colors shadow-xl tracking-widest uppercase rounded-sm"
          >
            Falar com Vendedora <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};