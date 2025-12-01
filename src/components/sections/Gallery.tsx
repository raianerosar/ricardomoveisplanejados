"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { getProjectsByCategory } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";

export function Gallery() {
  const projectsByCategory = getProjectsByCategory();

  // Normalizar IDs para as tabs (remover espaços e caracteres especiais)
  const getCategoryId = (category: string) => {
    return category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
  };

  // Mapear categoria para slug do ambiente
  const getAmbienteSlug = (category: string) => {
    const slugMap: Record<string, string> = {
      'Cozinha': 'cozinha-planejada',
      'Quarto': 'quarto-planejado',
      'Banheiro': 'banheiro-planejado',
      'Sala': 'sala-planejada'
    };
    return slugMap[category] || category.toLowerCase() + '-planejada';
  };

  return (
    <section id="projetos" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Projetos</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que realizamos com excelência e dedicação em São José, SC
            </p>
          </FadeIn>
        </div>

        <Tabs defaultValue={getCategoryId(projectsByCategory[0]?.category || '')} className="w-full">
          <div className="relative mb-8 flex justify-center">
            <TabsList className="inline-flex items-center justify-center overflow-x-auto overflow-y-hidden h-auto p-1 bg-background border rounded-lg flex-nowrap max-w-fit">
              {projectsByCategory.map(({ category }) => (
                <TabsTrigger
                  key={category}
                  value={getCategoryId(category)}
                  className="relative whitespace-nowrap px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:font-semibold transition-all"
                >
                  {category === 'Cozinha' && 'Cozinhas Planejadas'}
                  {category === 'Quarto' && 'Dormitórios Completos'}
                  {category === 'Banheiro' && 'Banheiros Planejados'}
                  {category === 'Sala' && 'Salas de Estar'}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projectsByCategory.map(({ category, projects }) => (
            <TabsContent
              key={category}
              value={getCategoryId(category)}
              className="mt-0"
            >
              {projects.map((project) => (
                <FadeIn key={project.slug}>
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Imagem do Projeto */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Móveis Planejados São José`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Detalhes do Projeto */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Informações Adicionais */}
                    {(project.dimensions || project.completionDate) && (
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        {project.dimensions && (
                          <div>
                            <span className="font-semibold">Área:</span> {project.dimensions}
                          </div>
                        )}
                        {project.completionDate && (
                          <div>
                            <span className="font-semibold">Conclusão:</span> {project.completionDate}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Lista de Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg">O que foi desenvolvido:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <Link
                        href={`/ambientes/${getAmbienteSlug(project.category)}`}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-4 focus-visible:ring-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105 active:scale-95 h-12 rounded-lg px-8 w-full md:w-auto shadow-md"
                      >
                        Ver Mais Sobre {project.category}s
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
