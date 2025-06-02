import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IA Vendas Pro
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#beneficios" className="text-gray-700 hover:text-blue-600 font-medium">Benefícios</a>
          <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 font-medium">Como Funciona</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 font-medium">Depoimentos</a>
          <a href="#resultados" className="text-gray-700 hover:text-blue-600 font-medium">Resultados</a>
        </nav>
        
        <div>
          <a 
            href="https://kirvano.com/checkout" 
            className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Comprar Agora
          </a>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
