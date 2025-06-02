import React from 'react';
import aiSales from '../assets/images/ai-sales.webp';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comece Agora a Transformar Suas Vendas com IA
            </h2>
            
            <p className="text-xl mb-8 text-gray-200">
              Não perca mais tempo com estratégias ultrapassadas. Junte-se a centenas de empreendedores que já estão revolucionando seus negócios digitais com Inteligência Artificial.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">O que você vai receber:</h3>
              
              <ul className="space-y-3">
                {[
                  "Acesso completo à metodologia IA Vendas Pro",
                  "Templates prontos para implementação imediata",
                  "Treinamento passo a passo em vídeo",
                  "Suporte exclusivo por 30 dias",
                  "Bônus: 10 prompts de IA para copywriting"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="https://kirvano.com/checkout" 
              className="block w-full sm:w-auto sm:inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-center text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              QUERO ACESSAR AGORA
            </a>
            
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">Avaliado por mais de 500 clientes</span>
            </div>
            
            <div className="mt-6 text-center sm:text-left">
              <p className="text-sm">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs mr-2">SEGURO</span>
                Pagamento seguro via Kirvano • Garantia de 7 dias
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src={aiSales} 
              alt="IA para vendas" 
              className="rounded-xl shadow-2xl w-full h-auto transform rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
