import { Ambiente } from '@/types/ambiente';

export const ambientes: Ambiente[] = [
  {
    slug: 'cozinha-planejada',
    title: 'Cozinha Planejada',
    category: 'Cozinha',
    hero: {
      title: 'Cozinhas Planejadas sob Medida',
      subtitle: 'Transforme sua cozinha em um espaço funcional e elegante, projetado especialmente para você',
      backgroundImage: '/images/hero/cozinha-bg.jpg'
    },
    about: {
      title: 'Estúdio de design de interiores de luxo',
      description: 'Nossas cozinhas planejadas combinam design contemporâneo com alta funcionalidade. Utilizamos materiais de primeira qualidade e acabamentos premium para criar ambientes que facilitam o dia a dia e valorizam seu imóvel. Cada projeto é desenvolvido considerando suas necessidades específicas, otimizando espaços e criando soluções inteligentes de armazenamento.',
      image: '/images/about/cozinha-about.jpg',
      highlights: [
        'Materiais de alta qualidade e durabilidade',
        'Projeto 3D personalizado antes da execução',
        'Acabamentos premium e modernos',
        'Otimização inteligente de espaços'
      ]
    },
    whyChoose: {
      title: 'Por que nos escolher',
      items: [
        {
          icon: '📐',
          title: 'Projetos 100% personalizados',
          description: 'Cada cozinha é única e projetada especialmente para atender suas necessidades e estilo de vida.'
        },
        {
          icon: '⭐',
          title: 'Materiais premium',
          description: 'Trabalhamos apenas com fornecedores certificados e materiais de primeira linha, garantindo durabilidade.'
        },
        {
          icon: '⚡',
          title: 'Entrega no prazo',
          description: 'Comprometimento com cronograma estabelecido, desde o projeto até a instalação final.'
        },
        {
          icon: '🛠️',
          title: 'Garantia estendida',
          description: 'Oferecemos garantia de 5 anos para todos os móveis e 1 ano para instalações e acabamentos.'
        }
      ]
    },
    gallery: {
      projectName: 'Projetos de Cozinhas',
      images: [
        { src: '/images/gallery/cozinha-1.jpg', alt: 'Cozinha planejada moderna 1' },
        { src: '/images/gallery/cozinha-2.jpg', alt: 'Cozinha planejada moderna 2' },
        { src: '/images/gallery/cozinha-3.jpg', alt: 'Cozinha planejada moderna 3' },
        { src: '/images/gallery/cozinha-4.jpg', alt: 'Cozinha planejada moderna 4' },
        { src: '/images/gallery/cozinha-5.jpg', alt: 'Cozinha planejada moderna 5' },
        { src: '/images/gallery/cozinha-6.jpg', alt: 'Cozinha planejada moderna 6' }
      ]
    },
    faq: {
      title: 'Perguntas frequentes',
      questions: [
        {
          question: 'Qual o prazo médio para instalação de uma cozinha planejada?',
          answer: 'O prazo médio varia entre 30 a 45 dias corridos após aprovação do projeto final. O cronograma completo é apresentado logo no orçamento inicial e inclui todas as etapas: desde a fabricação dos móveis até a instalação e acabamentos finais.'
        },
        {
          question: 'Que tipo de materiais vocês utilizam?',
          answer: 'Trabalhamos com MDF de alta densidade, acabamentos em laminado melamínico, laca UV, portas em vidro temperado, puxadores em alumínio ou aço inox, e bancadas em granito, mármore ou quartzo. Todos os materiais possuem certificação de qualidade e procedência.'
        },
        {
          question: 'É possível fazer alterações no projeto após aprovação?',
          answer: 'Sim, alterações podem ser feitas antes do início da produção. Após a fabricação ter iniciado, mudanças estruturais podem gerar custos adicionais. Por isso, trabalhamos com projeto 3D detalhado para que você visualize tudo antes da aprovação final.'
        },
        {
          question: 'Vocês oferecem garantia?',
          answer: 'Sim! Oferecemos 5 anos de garantia para estruturas e móveis planejados, e 1 ano para instalações, dobradiças, corrediças e demais ferragens. A garantia cobre defeitos de fabricação e problemas estruturais.'
        },
        {
          question: 'Como funciona o processo de orçamento?',
          answer: 'Primeiro agendamos uma visita técnica gratuita para tirar medidas e entender suas necessidades. Em seguida, desenvolvemos o projeto 3D personalizado e apresentamos o orçamento detalhado. Tudo sem compromisso!'
        }
      ]
    },
    social: {
      title: 'Nosso Social',
      posts: [
        { image: '/images/social/cozinha-post-1.jpg', link: '#' },
        { image: '/images/social/cozinha-post-2.jpg', link: '#' },
        { image: '/images/social/cozinha-post-3.jpg', link: '#' },
        { image: '/images/social/cozinha-post-4.jpg', link: '#' },
        { image: '/images/social/cozinha-post-5.jpg', link: '#' },
        { image: '/images/social/cozinha-post-6.jpg', link: '#' }
      ]
    },
    cta: {
      title: 'O lugar onde você vive é uma expressão de sua vida',
      description: 'Ele cresce conforme você cresce, ele inspira conforme você inspira',
      buttonText: 'Solicitar Orçamento'
    },
    metadata: {
      title: 'Cozinha Planejada sob Medida | Ricardo Móveis',
      description: 'Projetos personalizados de cozinhas planejadas com materiais premium e garantia estendida. Transforme sua cozinha em um espaço funcional e elegante.',
      keywords: ['cozinha planejada', 'móveis planejados', 'cozinha sob medida', 'projeto de cozinha', 'móveis para cozinha']
    }
  },
  {
    slug: 'quarto-planejado',
    title: 'Quarto Planejado',
    category: 'Quarto',
    hero: {
      title: 'Quartos Planejados Exclusivos',
      subtitle: 'Crie o ambiente perfeito para descanso e organização com móveis planejados sob medida',
      backgroundImage: '/images/hero/quarto-bg.jpg'
    },
    about: {
      title: 'Estúdio de design de interiores de luxo',
      description: 'Nossos quartos planejados são desenvolvidos para maximizar o conforto e a funcionalidade. Criamos soluções personalizadas que aproveitam cada centímetro do espaço, com guarda-roupas amplos, cabeceiras estilosas e móveis que combinam perfeitamente com seu estilo de vida.',
      image: '/images/about/quarto-about.jpg',
      highlights: [
        'Guarda-roupas com organização inteligente',
        'Aproveitamento máximo de espaços',
        'Design contemporâneo e atemporal',
        'Iluminação integrada e espelhos'
      ]
    },
    whyChoose: {
      title: 'Por que nos escolher',
      items: [
        {
          icon: '🎨',
          title: 'Design personalizado',
          description: 'Cada detalhe é pensado para refletir seu estilo pessoal e atender suas necessidades específicas.'
        },
        {
          icon: '📦',
          title: 'Organização otimizada',
          description: 'Sistemas inteligentes de gavetas, nichos e prateleiras para manter tudo sempre organizado.'
        },
        {
          icon: '💎',
          title: 'Acabamento impecável',
          description: 'Qualidade superior em cada detalhe, desde dobradiças até os puxadores e revestimentos.'
        },
        {
          icon: '🔧',
          title: 'Instalação profissional',
          description: 'Equipe especializada e treinada, garantindo perfeição na montagem e acabamento.'
        }
      ]
    },
    gallery: {
      projectName: 'Projetos de Quartos',
      images: [
        { src: '/images/gallery/quarto-1.jpg', alt: 'Quarto planejado 1' },
        { src: '/images/gallery/quarto-2.jpg', alt: 'Quarto planejado 2' },
        { src: '/images/gallery/quarto-3.jpg', alt: 'Quarto planejado 3' },
        { src: '/images/gallery/quarto-4.jpg', alt: 'Quarto planejado 4' },
        { src: '/images/gallery/quarto-5.jpg', alt: 'Quarto planejado 5' },
        { src: '/images/gallery/quarto-6.jpg', alt: 'Quarto planejado 6' }
      ]
    },
    faq: {
      title: 'Perguntas frequentes',
      questions: [
        {
          question: 'Qual o prazo de entrega para um quarto planejado?',
          answer: 'O prazo médio é de 35 a 50 dias corridos após a aprovação do projeto. Este prazo inclui fabricação e instalação completa de todos os móveis planejados.'
        },
        {
          question: 'É possível incluir iluminação nos armários?',
          answer: 'Sim! Oferecemos iluminação LED integrada nos armários e guarda-roupas, com sensores de presença ou acionamento por toque. É uma solução moderna que facilita muito o uso no dia a dia.'
        },
        {
          question: 'Vocês trabalham com quartos infantis?',
          answer: 'Sim, desenvolvemos projetos especiais para quartos infantis e de adolescentes, com soluções criativas que crescem junto com as crianças, incluindo escrivaninhas, nichos para brinquedos e camas funcionais.'
        },
        {
          question: 'O guarda-roupa vai até o teto?',
          answer: 'Sim, nossos projetos geralmente aproveitam o pé-direito completo do ambiente, evitando acúmulo de poeira na parte superior e maximizando o espaço de armazenamento.'
        },
        {
          question: 'Posso escolher as cores e acabamentos?',
          answer: 'Totalmente! Você escolhe entre diversas opções de cores, texturas e acabamentos. Apresentamos um catálogo completo com amostras físicas para você visualizar antes de decidir.'
        }
      ]
    },
    social: {
      title: 'Nosso Social',
      posts: [
        { image: '/images/social/quarto-post-1.jpg', link: '#' },
        { image: '/images/social/quarto-post-2.jpg', link: '#' },
        { image: '/images/social/quarto-post-3.jpg', link: '#' },
        { image: '/images/social/quarto-post-4.jpg', link: '#' },
        { image: '/images/social/quarto-post-5.jpg', link: '#' },
        { image: '/images/social/quarto-post-6.jpg', link: '#' }
      ]
    },
    cta: {
      title: 'O lugar onde você vive é uma expressão de sua vida',
      description: 'Ele cresce conforme você cresce, ele inspira conforme você inspira',
      buttonText: 'Solicitar Orçamento'
    },
    metadata: {
      title: 'Quarto Planejado sob Medida | Ricardo Móveis',
      description: 'Projetos exclusivos de quartos planejados com guarda-roupas, cabeceiras e móveis personalizados. Conforto e organização para seu ambiente.',
      keywords: ['quarto planejado', 'guarda-roupa planejado', 'móveis para quarto', 'dormitório planejado', 'closet planejado']
    }
  },
  {
    slug: 'banheiro-planejado',
    title: 'Banheiro Planejado',
    category: 'Banheiro',
    hero: {
      title: 'Banheiros Planejados Sofisticados',
      subtitle: 'Ambientes elegantes e funcionais que transformam a rotina em experiência',
      backgroundImage: '/images/banheiro/banheiroooo.png'
    },
    about: {
      title: 'Estúdio de design de interiores de luxo',
      description: 'Nossos projetos de banheiros planejados unem sofisticação e praticidade. Desenvolvemos gabinetes, espelheiras e nichos sob medida, com materiais resistentes à umidade e acabamentos de alto padrão que garantem durabilidade e elegância por muitos anos.',
      image: '/images/about/banheiro-about.jpg',
      highlights: [
        'Materiais resistentes à umidade',
        'Espelheiras com iluminação LED',
        'Aproveitamento inteligente de nichos',
        'Acabamentos sofisticados e duráveis'
      ]
    },
    whyChoose: {
      title: 'Por que nos escolher',
      items: [
        {
          icon: '💧',
          title: 'Materiais especiais',
          description: 'Utilizamos materiais específicos para áreas molhadas, garantindo maior durabilidade e resistência.'
        },
        {
          icon: '✨',
          title: 'Design funcional',
          description: 'Cada elemento é pensado para facilitar o dia a dia, com soluções inteligentes de armazenamento.'
        },
        {
          icon: '🪞',
          title: 'Iluminação integrada',
          description: 'Espelheiras com LED embutido que valorizam o ambiente e facilitam o uso diário.'
        },
        {
          icon: '🎯',
          title: 'Otimização de espaço',
          description: 'Aproveitamos cada centímetro com nichos embutidos e gabinetes planejados sob medida.'
        }
      ]
    },
    gallery: {
      projectName: 'Projetos de Banheiros',
      images: [
        { src: '/images/gallery/banheiro-1.jpg', alt: 'Banheiro planejado 1' },
        { src: '/images/gallery/banheiro-2.jpg', alt: 'Banheiro planejado 2' },
        { src: '/images/gallery/banheiro-3.jpg', alt: 'Banheiro planejado 3' },
        { src: '/images/gallery/banheiro-4.jpg', alt: 'Banheiro planejado 4' },
        { src: '/images/gallery/banheiro-5.jpg', alt: 'Banheiro planejado 5' },
        { src: '/images/gallery/banheiro-6.jpg', alt: 'Banheiro planejado 6' }
      ]
    },
    faq: {
      title: 'Perguntas frequentes',
      questions: [
        {
          question: 'Os móveis são resistentes à umidade do banheiro?',
          answer: 'Sim! Utilizamos MDF naval e revestimentos especiais que são totalmente resistentes à umidade. Todos os materiais são testados e certificados para uso em áreas molhadas, garantindo durabilidade superior.'
        },
        {
          question: 'Qual o prazo de instalação de um banheiro planejado?',
          answer: 'O prazo médio é de 25 a 35 dias corridos após aprovação do projeto. Por ser um ambiente menor, geralmente a fabricação e instalação são mais rápidas que outros ambientes.'
        },
        {
          question: 'Vocês fazem projeto para banheiros pequenos?',
          answer: 'Sim! Somos especialistas em otimizar espaços reduzidos. Criamos soluções inteligentes com gabinetes suspensos, nichos embutidos e espelheiras multifuncionais que maximizam a área útil.'
        },
        {
          question: 'A iluminação da espelheira está inclusa?',
          answer: 'Sim, a iluminação LED da espelheira está incluída no projeto. Trabalhamos com fitas LED de alta qualidade, com diferentes temperaturas de cor para você escolher.'
        },
        {
          question: 'Posso incluir tomadas no espelho?',
          answer: 'Sim! Podemos integrar tomadas e até USB na espelheira, seguindo todas as normas de segurança elétrica para ambientes úmidos. É super prático para uso de secador, chapinha e outros aparelhos.'
        }
      ]
    },
    social: {
      title: 'Nosso Social',
      posts: [
        { image: '/images/social/banheiro-post-1.jpg', link: '#' },
        { image: '/images/social/banheiro-post-2.jpg', link: '#' },
        { image: '/images/social/banheiro-post-3.jpg', link: '#' },
        { image: '/images/social/banheiro-post-4.jpg', link: '#' },
        { image: '/images/social/banheiro-post-5.jpg', link: '#' },
        { image: '/images/social/banheiro-post-6.jpg', link: '#' }
      ]
    },
    cta: {
      title: 'O lugar onde você vive é uma expressão de sua vida',
      description: 'Ele cresce conforme você cresce, ele inspira conforme você inspira',
      buttonText: 'Solicitar Orçamento'
    },
    metadata: {
      title: 'Banheiro Planejado sob Medida | Ricardo Móveis',
      description: 'Projetos sofisticados de banheiros planejados com gabinetes, espelheiras e nichos. Materiais resistentes e design elegante para seu banheiro.',
      keywords: ['banheiro planejado', 'gabinete para banheiro', 'espelheira planejada', 'móveis para banheiro', 'banheiro sob medida']
    }
  },
  {
    slug: 'sala-planejada',
    title: 'Sala Planejada',
    category: 'Sala',
    hero: {
      title: 'Salas Planejadas Modernas',
      subtitle: 'Ambientes integrados que refletem seu estilo e acolhem momentos especiais',
      backgroundImage: '/images/hero/sala-bg.jpg'
    },
    about: {
      title: 'Estúdio de design de interiores de luxo',
      description: 'Desenvolvemos projetos completos para salas de estar, jantar e ambientes integrados. Painéis de TV, estantes modulares, racks suspensos e móveis multifuncionais que trazem sofisticação e organização para o coração da sua casa.',
      image: '/images/about/sala-about.jpg',
      highlights: [
        'Painéis de TV com gestão de cabos',
        'Estantes modulares personalizadas',
        'Integração perfeita entre ambientes',
        'Iluminação decorativa integrada'
      ]
    },
    whyChoose: {
      title: 'Por que nos escolher',
      items: [
        {
          icon: '🏠',
          title: 'Ambientes integrados',
          description: 'Criamos projetos que integram sala de estar, jantar e outros espaços com harmonia e funcionalidade.'
        },
        {
          icon: '📺',
          title: 'Painéis modernos',
          description: 'Painéis de TV com design exclusivo, sistema de organização de cabos e iluminação decorativa.'
        },
        {
          icon: '📚',
          title: 'Soluções versáteis',
          description: 'Estantes e nichos modulares que se adaptam às suas necessidades de armazenamento e decoração.'
        },
        {
          icon: '🎭',
          title: 'Estilo único',
          description: 'Móveis que refletem sua personalidade e criam um ambiente acolhedor para receber família e amigos.'
        }
      ]
    },
    gallery: {
      projectName: 'Projetos de Salas',
      images: [
        { src: '/images/gallery/sala-1.jpg', alt: 'Sala planejada 1' },
        { src: '/images/gallery/sala-2.jpg', alt: 'Sala planejada 2' },
        { src: '/images/gallery/sala-3.jpg', alt: 'Sala planejada 3' },
        { src: '/images/gallery/sala-4.jpg', alt: 'Sala planejada 4' },
        { src: '/images/gallery/sala-5.jpg', alt: 'Sala planejada 5' },
        { src: '/images/gallery/sala-6.jpg', alt: 'Sala planejada 6' }
      ]
    },
    faq: {
      title: 'Perguntas frequentes',
      questions: [
        {
          question: 'Vocês fazem projetos para ambientes integrados (sala e cozinha)?',
          answer: 'Sim! Somos especialistas em criar projetos para ambientes integrados. Desenvolvemos soluções que harmonizam sala, cozinha e área de jantar, mantendo unidade visual e funcionalidade em todo o espaço.'
        },
        {
          question: 'O painel de TV comporta qual tamanho de televisão?',
          answer: 'Projetamos o painel de acordo com o tamanho da sua TV atual e com previsão para upgrades futuros. Podemos fazer desde painéis para TVs de 32" até 75" ou mais, sempre com suporte adequado e seguro.'
        },
        {
          question: 'É possível incluir iluminação decorativa?',
          answer: 'Sim! Oferecemos iluminação LED decorativa integrada aos painéis, nichos e estantes. A iluminação pode ser em diversas cores e com controle de intensidade, criando diferentes atmosferas no ambiente.'
        },
        {
          question: 'As estantes são modulares?',
          answer: 'Sim, trabalhamos com estantes modulares que podem ser reconfiguradas de acordo com suas necessidades. Você pode ajustar prateleiras, adicionar ou remover módulos conforme seu uso evolui.'
        },
        {
          question: 'Qual o prazo para instalação de uma sala planejada?',
          answer: 'O prazo médio varia entre 30 a 45 dias corridos após aprovação do projeto, dependendo da complexidade e quantidade de móveis. Ambientes integrados podem levar um pouco mais de tempo.'
        }
      ]
    },
    social: {
      title: 'Nosso Social',
      posts: [
        { image: '/images/social/sala-post-1.jpg', link: '#' },
        { image: '/images/social/sala-post-2.jpg', link: '#' },
        { image: '/images/social/sala-post-3.jpg', link: '#' },
        { image: '/images/social/sala-post-4.jpg', link: '#' },
        { image: '/images/social/sala-post-5.jpg', link: '#' },
        { image: '/images/social/sala-post-6.jpg', link: '#' }
      ]
    },
    cta: {
      title: 'O lugar onde você vive é uma expressão de sua vida',
      description: 'Ele cresce conforme você cresce, ele inspira conforme você inspira',
      buttonText: 'Solicitar Orçamento'
    },
    metadata: {
      title: 'Sala Planejada sob Medida | Ricardo Móveis',
      description: 'Projetos modernos de salas planejadas com painéis de TV, estantes e móveis integrados. Transforme sua sala em um ambiente acolhedor e sofisticado.',
      keywords: ['sala planejada', 'painel de TV', 'estante planejada', 'rack planejado', 'móveis para sala', 'sala de estar planejada']
    }
  }
];

// Helper functions
export function getAmbienteBySlug(slug: string): Ambiente | undefined {
  return ambientes.find(ambiente => ambiente.slug === slug);
}

export function getAllAmbienteSlugs(): string[] {
  return ambientes.map(ambiente => ambiente.slug);
}

export function getAmbientesByCategory(category: string): Ambiente[] {
  return ambientes.filter(ambiente => ambiente.category === category);
}
