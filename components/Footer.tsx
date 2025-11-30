import React from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif text-white mb-4">ADRINE STORY</h2>
            <p className="max-w-xs mx-auto md:mx-0 mb-4">Loja de Roupas Femininas</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-bold text-white mb-2">Produtos</p>
            <p className="mb-1">Saltos | Sandálias | Socas</p>
            <p className="mb-4 text-sm">Entrega imediata: 2.000 Kz</p>
            
            <a 
              href="https://wa.me/244950124243" 
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors rounded-sm"
            >
              <Phone size={16} /> WhatsApp: +244 950 124 243
            </a>
            <p className="mt-4 text-sm">Luanda – Angola</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} ADRINE STORY. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};