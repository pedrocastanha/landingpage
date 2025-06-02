import React from 'react';
import benefits from '../assets/images/benefits.jpg';

const Results: React.FC = () => {
  return (
    <section id="resultados" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Comprovados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos alunos estão transformando seus negócios com Inteligência Artificial
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-lg p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Espaço para Suas Evidências</h3>
            
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 mb-4">Adicione screenshots dos seus resultados de vendas</p>
                <p className="text-sm text-gray-400">Imagens de gráficos, métricas ou depoimentos de clientes</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h4 className="text-4xl font-bold text-blue-600 mb-2">+300%</h4>
                  <p className="text-gray-700">Aumento médio em conversões</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <h4 className="text-4xl font-bold text-purple-600 mb-2">-40%</h4>
                  <p className="text-gray-700">Redução no custo de aquisição</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <h4 className="text-4xl font-bold text-green-600 mb-2">5x</h4>
                  <p className="text-gray-700">Aumento no ROI</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={benefits} 
              alt="Resultados com IA" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            <div className="mt-8 bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-bold mb-4">O que você vai conquistar:</h3>
              
              <ul className="space-y-3">
                {[
                  "Automação completa do seu funil de vendas",
                  "Personalização em escala para cada cliente",
                  "Copywriting otimizado por IA para maior conversão",
                  "Análise preditiva para identificar leads mais propensos a comprar",
                  "Sistema de recomendação inteligente para upsells"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
