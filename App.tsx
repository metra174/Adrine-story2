import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { AiStylist } from './components/AiStylist';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <AiStylist />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;