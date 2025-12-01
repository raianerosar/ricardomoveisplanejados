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
      title: 'Banheiro Planejado em Florianópolis | Projetos Sob Medida',
      subtitle: 'Do pequeno ao luxuoso: projetos inteligentes de banheiro planejado para apartamentos e casas em Florianópolis, Palhoça, São José e região. Gabinetes sob medida, nichos embutidos e espelheiras LED que transformam espaços pequenos em ambientes sofisticados.',
      backgroundImage: '/images/banheiro/banheiroooo.png'
    },
    about: {
      title: 'Banheiro Planejado Sob Medida: Funcionalidade e Sofisticação em Florianópolis',
      description: 'Há mais de 10 anos, a Ricardo Móveis projeta banheiros planejados sob medida em Florianópolis, Palhoça, São José e toda Grande Florianópolis. Seja para otimizar um banheiro pequeno de apartamento ou criar um ambiente de luxo com closet integrado, desenvolvemos cada projeto com materiais premium resistentes à umidade e acabamentos que duram décadas.\n\nNossos gabinetes sob medida, nichos embutidos estratégicos e espelheiras com iluminação LED transformam até o menor banheiro em um espaço funcional, organizado e sofisticado. Do projeto 3D à instalação final, você acompanha cada detalhe da transformação do seu banheiro.',
      image: '/images/about/banheiro-about.jpg',
      highlights: [
        'Otimização inteligente para banheiros pequenos',
        'Materiais resistentes à umidade (MDF naval certificado)',
        'Espelheiras planejadas com iluminação LED integrada',
        'Acabamentos premium e duráveis (garantia estendida)'
      ]
    },
    whyChoose: {
      title: 'Por Que Escolher a Ricardo Móveis para Seu Banheiro Planejado',
      items: [
        {
          icon: 'Maximize2',
          title: 'Especialistas em Banheiros Pequenos e Otimização de Espaço',
          description: 'Transformamos banheiros compactos em ambientes funcionais e organizados. Com nichos embutidos estratégicos, gabinetes suspensos sob medida e espelheiras multifuncionais, aproveitamos cada centímetro do seu banheiro pequeno sem perder a sofisticação. Perfeito para apartamentos em Florianópolis e região.'
        },
        {
          icon: 'Droplet',
          title: 'Materiais Especiais Resistentes à Umidade e Área Molhada',
          description: 'Utilizamos exclusivamente MDF naval, revestimentos antimicrobianos e ferragens em aço inox – materiais certificados para áreas molhadas que garantem durabilidade superior. Seus móveis planejados resistem à umidade do banheiro por muitos anos, sem deformação ou manchas.'
        },
        {
          icon: 'Lightbulb',
          title: 'Espelheiras Planejadas com Iluminação LED Integrada',
          description: 'Nossas espelheiras planejadas vêm com iluminação LED de alta qualidade já integrada, com diferentes temperaturas de cor para você escolher. Além de valorizar o ambiente, facilitam o uso diário e incluem opções com tomadas e USB embutidos, seguindo todas as normas de segurança elétrica.'
        },
        {
          icon: 'Sparkles',
          title: 'Projeto 3D Personalizado Antes da Execução',
          description: 'Cada banheiro planejado é 100% personalizado para seu espaço e estilo de vida. Com nosso projeto 3D detalhado, você visualiza cada detalhe – gabinetes, nichos, espelheiras, acabamentos – antes mesmo de começarmos a produção. Aprovação garantida antes de qualquer investimento.'
        }
      ]
    },
    gallery: {
      projectName: 'Projetos de Banheiros Planejados em Florianópolis',
      images: [
        { src: '/images/gallery/banheiro-1.jpg', alt: 'Banheiro planejado pequeno com gabinete suspenso branco e espelheira LED em apartamento Florianópolis' },
        { src: '/images/gallery/banheiro-2.jpg', alt: 'Banheiro de luxo planejado com mármore, nichos embutidos e iluminação LED Palhoça' },
        { src: '/images/gallery/banheiro-3.jpg', alt: 'Gabinete sob medida banheiro pequeno com organização inteligente São José SC' },
        { src: '/images/gallery/banheiro-4.jpg', alt: 'Espelheira planejada LED com tomadas integradas banheiro moderno Florianópolis' },
        { src: '/images/gallery/banheiro-5.jpg', alt: 'Banheiro planejado com closet integrado madeira clara projeto completo' },
        { src: '/images/gallery/banheiro-6.jpg', alt: 'Projeto 3D banheiro planejado sob medida antes e depois transformação' }
      ]
    },
    faq: {
      title: 'Perguntas Frequentes sobre Banheiro Planejado em Florianópolis',
      questions: [
        {
          question: 'Os móveis são resistentes à umidade do banheiro?',
          answer: 'Sim! Todos os nossos móveis planejados para banheiro utilizam MDF naval e revestimentos especiais 100% resistentes à umidade e áreas molhadas. Estes materiais são certificados e testados especificamente para ambientes com exposição constante à água, garantindo que seu gabinete, espelheira e nichos embutidos mantenham a beleza e estrutura por muitos anos, sem deformação, manchas ou problemas de infiltração.'
        },
        {
          question: 'Vocês fazem projeto para banheiros pequenos?',
          answer: 'Sim! Somos especialistas em projetos de banheiro planejado para espaços pequenos e compactos. Seja um apartamento no Centro de Florianópolis, em Palhoça ou São José, criamos soluções inteligentes que maximizam cada centímetro: gabinetes suspensos sob medida, nichos embutidos estratégicos, espelheiras multifuncionais e organizadores internos. Nosso projeto 3D mostra exatamente como transformar seu banheiro pequeno em um ambiente funcional, organizado e sofisticado.'
        },
        {
          question: 'Qual o prazo de instalação de um banheiro planejado?',
          answer: 'O prazo médio para um projeto completo de banheiro planejado é de 25 a 35 dias corridos após aprovação do projeto 3D. Este período inclui fabricação sob medida dos móveis (gabinete, espelheiras, nichos) e instalação profissional completa. Por ser um ambiente menor que cozinhas ou closets, a entrega costuma ser mais rápida. Você recebe um cronograma detalhado no orçamento inicial com todas as etapas.'
        },
        {
          question: 'Quanto custa um banheiro planejado em Florianópolis?',
          answer: 'O investimento em um banheiro planejado varia conforme o tamanho, materiais e acabamentos escolhidos. Em Florianópolis e região, projetos para banheiros pequenos de apartamento geralmente partem de valores mais acessíveis, enquanto banheiros de luxo com closet integrado e acabamentos premium têm investimento maior. Oferecemos orçamento gratuito com visita técnica e projeto 3D para você avaliar custo-benefício antes de qualquer compromisso. Solicite seu orçamento personalizado!'
        },
        {
          question: 'A iluminação da espelheira está inclusa?',
          answer: 'Sim, a iluminação LED da espelheira planejada está incluída no projeto. Trabalhamos com fitas LED de alta qualidade e durabilidade, com diferentes temperaturas de cor (luz quente, neutra ou fria) para você escolher conforme preferência. A instalação elétrica segue todas as normas para áreas molhadas, garantindo segurança total no seu banheiro.'
        },
        {
          question: 'Posso incluir tomadas e USB no espelho?',
          answer: 'Sim! Podemos integrar tomadas padrão e entradas USB diretamente na espelheira planejada, super prático para uso de secador, chapinha, barbeador elétrico e aparelhos eletrônicos. Toda instalação elétrica segue rigorosamente as normas de segurança NBR para ambientes úmidos, com proteção IP adequada e aterramento. É um dos recursos mais solicitados em projetos de banheiro sob medida!'
        },
        {
          question: 'Vocês atendem toda Grande Florianópolis?',
          answer: 'Sim! Atendemos toda a Grande Florianópolis com nossos projetos de banheiro planejado sob medida. Realizamos projetos em Florianópolis (Centro, Trindade, Ingleses, Lagoa, Canasvieiras), Palhoça (Pedra Branca, Pagani), São José (Kobrasol, Campinas), Biguaçu e demais cidades da região. A visita técnica e medição são gratuitas em toda área de cobertura. Entre em contato e agende sua visita!'
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
      title: 'Pronto para Transformar Seu Banheiro?',
      description: 'Receba um projeto 3D gratuito do seu banheiro planejado sob medida. Veja exatamente como ficarão os gabinetes, nichos e espelheiras antes de decidir. Atendemos Florianópolis, Palhoça, São José e região com visita técnica sem custo.',
      buttonText: 'Solicitar Projeto 3D Grátis'
    },
    metadata: {
      title: 'Banheiro Planejado Florianópolis e Palhoça | Ricardo Móveis',
      description: 'Banheiro planejado sob medida em Florianópolis e região. Especialistas em banheiros pequenos e de luxo. Gabinetes, nichos e espelheiras LED. Orçamento grátis!',
      keywords: [
        'banheiro planejado Florianópolis',
        'banheiro planejado Palhoça',
        'banheiro sob medida São José',
        'banheiro planejado Grande Florianópolis',
        'banheiro pequeno planejado',
        'banheiro de luxo planejado',
        'gabinete banheiro sob medida',
        'espelheira planejada LED',
        'otimização espaço banheiro',
        'nicho embutido banheiro',
        'banheiro planejado apartamento',
        'projeto 3D banheiro planejado',
        'móveis planejados área molhada',
        'banheiro planejado com closet',
        'gabinete suspenso banheiro'
      ]
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
