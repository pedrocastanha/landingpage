import React from 'react';
import testimonial1 from '../assets/images/testimonial1.jpg';
import testimonial2 from '../assets/images/testimonial2.jpg';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, text }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">
            ★
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{text}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Empreendedor Digital",
      image: testimonial1,
      text: "Depois de implementar as estratégias de IA para vendas, minhas conversões aumentaram em 287% em apenas 2 meses. O método é simplesmente revolucionário!",
      rating: 5
    },
    {
      name: "Juliana Santos",
      role: "Coach de Negócios",
      image: testimonial2,
      text: "Eu estava cética no início, mas os resultados falam por si. Meu funil de vendas está completamente otimizado e minhas vendas triplicaram desde que comecei a usar IA.",
      rating: 5
    },
    {
      name: "Ricardo Oliveira",
      role: "Infoprodutor",
      image: testimonial1,
      text: "A metodologia de IA para vendas digitais transformou meu negócio. Consegui automatizar processos que antes tomavam horas do meu dia e aumentei meu faturamento em 340%.",
      rating: 5
    },
    {
      name: "Fernanda Lima",
      role: "Consultora de Marketing Digital",
      image: testimonial2,
      text: "Incrível como a IA pode personalizar a jornada de compra! Meus clientes se sentem muito mais engajados e a taxa de abandono de carrinho caiu drasticamente.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Dizem Nossos Alunos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centenas de empreendedores já transformaram seus negócios digitais com nossa metodologia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
