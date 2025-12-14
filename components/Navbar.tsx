import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark Mode Logic
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navClasses = `fixed w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg py-4' 
      : 'bg-gradient-to-b from-black/80 to-transparent py-8'
  }`;

  const textClasses = isScrolled ? 'text-brand-black dark:text-brand-creme' : 'text-white';
  
  // Button styles based on scroll and theme
  const buttonBase = "px-8 py-2 transition-all text-xs uppercase tracking-[0.2em] font-bold border border-transparent";
  const buttonClasses = isScrolled 
    ? 'bg-brand-black text-white hover:bg-brand-gold hover:text-black dark:bg-brand-gold dark:text-black dark:hover:bg-white' 
    : 'bg-white text-black hover:bg-brand-gold hover:text-white';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-xl md:text-2xl font-serif font-bold tracking-[0.15em] ${textClasses} transition-colors duration-300 uppercase`}>
          Cael <span className="text-brand-gold">Fashion</span>
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-10 ${textClasses}`}>
          <a href="#colecoes" className="hover:text-brand-gold transition-colors font-medium text-xs tracking-widest uppercase">Coleções</a>
          <a href="#diferenciais" className="hover:text-brand-gold transition-colors font-medium text-xs tracking-widest uppercase">Mundo Cael</a>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors opacity-80 hover:opacity-100"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a 
            href="https://wa.me/244925412200" 
            className={buttonClasses}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className={`${textClasses} p-1 opacity-80`}
          >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className={`${textClasses}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white dark:bg-brand-black z-40 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 relative">
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-brand-black dark:text-white hover:text-brand-gold transition-colors">
             <X size={32} />
           </button>
           
          <div className="mb-8">
            <span className="text-2xl font-serif font-bold tracking-widest uppercase dark:text-white">Cael Fashion</span>
          </div>

          <a href="#colecoes" className="text-brand-black dark:text-brand-creme font-serif text-3xl hover:text-brand-gold transition-colors" onClick={() => setIsOpen(false)}>Coleções</a>
          <a href="#diferenciais" className="text-brand-black dark:text-brand-creme font-serif text-3xl hover:text-brand-gold transition-colors" onClick={() => setIsOpen(false)}>Mundo Cael</a>
          
          <a href="https://wa.me/244925412200" className="mt-8 bg-brand-black text-white dark:bg-brand-gold dark:text-black px-12 py-4 uppercase tracking-[0.2em] text-sm font-bold shadow-xl" onClick={() => setIsOpen(false)}>
            WhatsApp VIP
          </a>
        </div>
      </div>
    </nav>
  );
};