"use client";

import { ChefHat, Bed, Bath, Building2, Shirt, BookOpen } from 'lucide-react';
import { FadeIn } from "@/components/ui/FadeIn";

export function Services() {
  const services = [
    {
      title: "Cozinhas Planejadas",
      description: "Cozinhas funcionais e modernas com design personalizado.",
      icon: ChefHat
    },
    {
      title: "Quartos Planejados",
      description: "Guarda-roupas e móveis sob medida para seu quarto.",
      icon: Bed
    },
    {
      title: "Banheiros Planejados",
      description: "Móveis que combinam funcionalidade e elegância.",
      icon: Bath
    },
    {
      title: "Móveis Corporativos",
      description: "Soluções para escritórios e ambientes comerciais.",
      icon: Building2
    },
    {
      title: "Closets",
      description: "Closets personalizados para organizar com estilo.",
      icon: Shirt
    },
    {
      title: "Estantes e Painéis",
      description: "Estantes e painéis sob medida para salas.",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nossos Serviços
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em móveis planejados para todos os ambientes da sua casa ou empresa.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="mb-3 md:mb-4">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}