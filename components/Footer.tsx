import React from 'react';
import { Instagram, Facebook, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-serif text-white mb-6 tracking-wider uppercase">Cael Fashion</h2>
            <p className="text-stone-400 mb-8 font-light max-w-sm">
              Moda feminina premium para mulheres que buscam glamour e sofisticação em cada detalhe.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/cael_fashion_boutique1" target="_blank" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white rounded-full">
                <Facebook size={18} />
              </a>
               <a href="mailto:contato@caelfashion.com" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white rounded-full">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="md:w-1/3">
            <h3 className="font-bold text-brand-gold uppercase tracking-widest text-xs mb-6">Coleções</h3>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Black Collection <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Red Carpet <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">White Lace <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Acessórios VIP <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div className="md:w-1/3">
             <h3 className="font-bold text-brand-gold uppercase tracking-widest text-xs mb-6">Contato VIP</h3>
             <p className="text-stone-400 mb-4">Dúvidas ou compras personalizadas?</p>
             
             <a 
              href="https://wa.me/244925412200" 
              className="inline-flex items-center gap-3 text-xl font-serif text-white hover:text-brand-gold transition-colors"
            >
              <Phone size={24} /> +244 925 412 200
            </a>
            <p className="mt-4 text-sm text-stone-500">
              Enviamos para Luanda e Internacionalmente.
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Cael Fashion Boutique.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400">Privacidade</a>
            <a href="#" className="hover:text-stone-400">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};