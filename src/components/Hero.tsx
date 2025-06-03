import React from 'react';
// import heroImage from '../assets/images/hero-bg.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          // src={heroImage} 
          alt="IA para vendas digitais" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Revolucione suas Vendas Digitais com Inteligência Artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Descubra como aumentar suas conversões em até 300% usando estratégias avançadas de IA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://kirvano.com/checkout" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-center text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              QUERO VENDER MAIS COM IA
            </a>
            
            <a 
              href="#como-funciona" 
              className="bg-white/20 backdrop-blur-sm text-white font-medium py-4 px-8 rounded-full text-center text-lg hover:bg-white/30 transition-all duration-300"
            >
              Saiba como funciona
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white text-sm mb-2">Role para descobrir</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
