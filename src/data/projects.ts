import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "cozinha-moderna",
    title: "Cozinha Moderna",
    category: "Cozinha",
    image: "/imagens/cozainha-r.png",
    gallery: [
      "/imagens/cozainha-r.png",
      // Adicione mais imagens aqui quando tiver
    ],
    description: "Projeto de cozinha planejada com design moderno e funcional. Desenvolvida com materiais de alta qualidade, esta cozinha combina estética contemporânea com praticidade no dia a dia. Cada detalhe foi pensado para otimizar o espaço e proporcionar conforto aos usuários.",
    features: [
      "Armários planejados em MDF com acabamento em laca branca",
      "Bancada em quartzo com 3cm de espessura",
      "Iluminação LED embutida nos armários superiores",
      "Gavetas com sistema de fechamento suave",
      "Puxadores em aço inox escovado",
      "Organização interna com divisórias personalizadas"
    ],
    dimensions: "12m² de área útil",
    completionDate: "Março 2024",
    tags: [
      "cozinha planejada",
      "cozinha moderna",
      "móveis planejados",
      "cozinha branca",
      "armários planejados",
      "bancada de quartzo"
    ]
  },
  {
    slug: "quarto-planejado",
    title: "Quarto Planejado",
    category: "Quarto",
    image: "/imagens/quarto-r.png",
    gallery: [
      "/imagens/quarto-r.png",
      // Adicione mais imagens aqui quando tiver
    ],
    description: "Ambiente acolhedor e funcional com guarda-roupa planejado que aproveita cada centímetro do espaço disponível. O projeto inclui soluções inteligentes de armazenamento e um design que combina elegância e praticidade.",
    features: [
      "Guarda-roupa de canto otimizando o espaço",
      "Portas de correr com espelho bisotado",
      "Interior totalmente organizado com nichos e gavetas",
      "Criado-mudo suspenso integrado",
      "Painel para TV com prateleiras decorativas",
      "Iluminação interna automática"
    ],
    dimensions: "15m² de área útil",
    completionDate: "Fevereiro 2024",
    tags: [
      "quarto planejado",
      "guarda-roupa planejado",
      "móveis para quarto",
      "armário de canto",
      "quarto com espelho",
      "closet planejado"
    ]
  },
  {
    slug: "banheiro-elegante",
    title: "Banheiro Elegante",
    category: "Banheiro",
    image: "/imagens/banheiro-r1.png",
    gallery: [
      "/imagens/banheiro-r1.png",
      // Adicione mais imagens aqui quando tiver
    ],
    description: "Projeto sofisticado de banheiro planejado com móveis sob medida que maximizam o aproveitamento do espaço. Design clean com materiais resistentes à umidade e acabamentos de alto padrão.",
    features: [
      "Gabinete suspenso em MDF naval",
      "Acabamento em laminado texturizado resistente à água",
      "Espelheira com iluminação LED integrada",
      "Nichos embutidos no box",
      "Prateleiras de vidro temperado",
      "Sistema de gavetas com organização interna"
    ],
    dimensions: "6m² de área útil",
    completionDate: "Janeiro 2024",
    tags: [
      "banheiro planejado",
      "móveis para banheiro",
      "gabinete de banheiro",
      "banheiro moderno",
      "espelheira com LED",
      "banheiro sob medida"
    ]
  },
  {
    slug: "saguao-personalizado",
    title: "Saguão Personalizado",
    category: "Sala",
    image: "/imagens/saguao.png",
    gallery: [
      "/imagens/saguao.png",
      // Adicione mais imagens aqui quando tiver
    ],
    description: "Projeto exclusivo de móveis planejados para sala de estar, criando um ambiente sofisticado e aconchegante. O design integrado valoriza o espaço e proporciona funcionalidade sem comprometer a estética.",
    features: [
      "Painel para TV com nichos decorativos",
      "Estante modular com iluminação LED",
      "Rack suspenso com portas basculantes",
      "Acabamento em laca brilhante",
      "Sistema de passagem de cabos embutido",
      "Prateleiras em vidro temperado fumê"
    ],
    dimensions: "25m² de área útil",
    completionDate: "Abril 2024",
    tags: [
      "sala planejada",
      "painel para TV",
      "móveis para sala",
      "estante planejada",
      "rack moderno",
      "sala de estar"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

// Agrupa projetos por categoria para uso com Tabs
export function getProjectsByCategory() {
  const categories = Array.from(new Set(projects.map(p => p.category)));
  return categories.map(category => ({
    category,
    projects: projects.filter(p => p.category === category)
  }));
}
