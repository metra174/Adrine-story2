import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

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
      ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm py-3' 
      : 'bg-gradient-to-b from-black/50 to-transparent py-6'
  }`;

  const textClasses = isScrolled ? 'text-stone-900 dark:text-stone-100' : 'text-white';
  
  // Button styles based on scroll and theme
  const buttonBase = "border px-6 py-2 transition-all text-sm uppercase tracking-wide font-semibold";
  const buttonClasses = isScrolled 
    ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-stone-900' 
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
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="https://wa.me/950124243" 
            className={buttonClasses}
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className={`${textClasses} p-1`}
          >
             {isDark ? <Sun size={24} /> : <Moon size={24} />}
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
      <div className={`md:hidden fixed inset-0 bg-white dark:bg-stone-950 z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-stone-900 dark:text-white">
             <X size={32} />
           </button>
          <a href="#sobre" className="text-stone-900 dark:text-white font-serif text-2xl" onClick={() => setIsOpen(false)}>Quem Somos</a>
          <a href="#catalogo" className="text-stone-900 dark:text-white font-serif text-2xl" onClick={() => setIsOpen(false)}>Catálogo</a>
          <a href="https://wa.me/950124243" className="bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-10 py-4 uppercase tracking-widest" onClick={() => setIsOpen(false)}>
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
};