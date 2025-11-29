import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
      : 'bg-gradient-to-b from-black/50 to-transparent py-6'
  }`;

  const textClasses = isScrolled ? 'text-stone-900' : 'text-white';
  const buttonClasses = isScrolled 
    ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
    : 'border-white text-white hover:bg-white hover:text-stone-900';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold tracking-widest ${textClasses} transition-colors duration-300`}>
          ADRINE STORY
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 ${textClasses}`}>
          <a href="#sobre" className="hover:text-brand-gold transition-colors font-medium text-sm tracking-wide uppercase">Quem Somos</a>
          <a href="#catalogo" className="hover:text-brand-gold transition-colors font-medium text-sm tracking-wide uppercase">Catálogo</a>
          <a 
            href="https://wa.me/950124243" 
            className={`border px-6 py-2 transition-all text-sm uppercase tracking-wide font-semibold ${buttonClasses}`}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${textClasses}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-stone-900">
             <X size={32} />
           </button>
          <a href="#sobre" className="text-stone-900 font-serif text-2xl" onClick={() => setIsOpen(false)}>Quem Somos</a>
          <a href="#catalogo" className="text-stone-900 font-serif text-2xl" onClick={() => setIsOpen(false)}>Catálogo</a>
          <a href="https://wa.me/950124243" className="bg-stone-900 text-white px-10 py-4 uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
};