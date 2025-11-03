"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { useEffect } from "react";

const faqItems = [
  {
    question: "Onde a Ricardo Móveis atende em Santa Catarina?",
    answer: "Atendemos toda a região da Grande Florianópolis, incluindo Palhoça, Florianópolis, São José, Biguaçu e cidades vizinhas. Nossa loja está localizada em Palhoça, mas realizamos projetos de móveis planejados em toda Santa Catarina. Entre em contato para confirmar o atendimento na sua região."
  },
  {
    question: "Fazem móveis planejados em Palhoça e região?",
    answer: "Sim! Somos especializados em móveis planejados em Palhoça e atendemos toda a Grande Florianópolis. Oferecemos projetos personalizados, orçamento gratuito, fabricação sob medida e instalação completa. Trabalhamos com cozinhas, quartos, closets, escritórios e muito mais."
  },
  {
    question: "Atendem Florianópolis e São José com móveis planejados?",
    answer: "Sim, atendemos Florianópolis, São José e toda a região metropolitana. Nossa equipe realiza visitas técnicas gratuitas para medição e elaboração de projetos 3D personalizados. Levamos móveis planejados de alta qualidade para sua casa ou empresa em toda a Grande Florianópolis."
  },
  {
    question: "Qual o prazo de atendimento para projetos em Santa Catarina?",
    answer: "O prazo varia conforme a complexidade do projeto. Geralmente, após a aprovação do projeto e confirmação do pedido, a fabricação dos móveis planejados leva de 20 a 40 dias úteis. A instalação é agendada conforme sua disponibilidade. Projetos urgentes podem ser negociados."
  },
  {
    question: "Que tipos de móveis planejados a Ricardo Móveis fabrica?",
    answer: "Fabricamos todos os tipos de móveis planejados sob medida: cozinhas completas, quartos de casal e infantil, closets, guarda-roupas, armários, estantes, racks para TV, home offices, escritórios, banheiros, lavanderias, áreas gourmet e móveis corporativos. Cada projeto é único e personalizado."
  },
  {
    question: "Fazem projetos de cozinha planejada sob medida?",
    answer: "Sim! Cozinha planejada é uma das nossas especialidades. Desenvolvemos projetos completos com armários superiores e inferiores, bancadas, nichos, ilhas, áreas de apoio, espaço para eletrodomésticos e soluções inteligentes de armazenamento. Tudo personalizado para o seu espaço e necessidades."
  },
  {
    question: "Trabalham com móveis planejados para quarto de casal e infantil?",
    answer: "Sim! Criamos projetos de quartos planejados completos, incluindo guarda-roupas, camas com cabeceira, criados-mudos, penteadeiras, escrivaninhas e nichos. Para quartos infantis, desenvolvemos soluções criativas com espaço otimizado, gavetas, prateleiras e designs modernos que crescem com a criança."
  },
  {
    question: "Fazem closets e guarda-roupas planejados?",
    answer: "Sim! Nossos closets e guarda-roupas planejados são projetados para otimizar cada centímetro do seu espaço. Incluem cabideiros, gavetas, sapateiras, prateleiras ajustáveis, espelhos, iluminação embutida e divisórias organizadoras. Tudo sob medida para suas roupas e acessórios."
  },
  {
    question: "Móveis planejados para escritório e home office em Palhoça?",
    answer: "Sim! Desenvolvemos projetos de home office e escritórios planejados com mesas, estantes, armários, gavetas e painéis. Criamos ambientes funcionais e ergonômicos, ideais para produtividade. Atendemos residências e empresas em Palhoça, Florianópolis e região."
  },
  {
    question: "Como funciona o projeto de móveis planejados da Ricardo Móveis?",
    answer: "O processo é simples: 1) Entre em contato e agende uma visita técnica gratuita; 2) Fazemos as medições e conversamos sobre suas necessidades; 3) Criamos um projeto 3D personalizado; 4) Você aprova o projeto e orçamento; 5) Fabricamos seus móveis sob medida; 6) Realizamos a instalação completa na sua casa."
  },
  {
    question: "Quanto custa um projeto de móveis planejados?",
    answer: "O valor varia conforme o tamanho do projeto, materiais escolhidos e acabamentos. Uma cozinha planejada pequena pode começar a partir de R$ 8.000, enquanto projetos completos podem variar bastante. Oferecemos orçamento gratuito e personalizamos conforme seu orçamento. Entre em contato para receber uma proposta sem compromisso."
  },
  {
    question: "O orçamento e o projeto 3D são gratuitos?",
    answer: "Sim! A visita técnica, medição, elaboração do projeto 3D e orçamento são totalmente gratuitos e sem compromisso. Você só paga se aprovar o projeto e decidir seguir com a fabricação dos seus móveis planejados."
  },
  {
    question: "Qual o prazo de entrega dos móveis planejados?",
    answer: "Após a aprovação do projeto e confirmação do pagamento da entrada, o prazo médio de fabricação é de 20 a 40 dias úteis, dependendo da complexidade. Projetos maiores podem levar um pouco mais. A instalação é agendada após a fabricação, de acordo com sua disponibilidade."
  },
  {
    question: "Quais materiais são usados nos móveis planejados?",
    answer: "Trabalhamos com MDF, MDP e marcenaria em madeira maciça, sempre com acabamentos de alta qualidade. Utilizamos ferragens importadas, dobradiças com amortecimento, corrediças telescópicas e puxadores modernos. Oferecemos diversas opções de cores, texturas e acabamentos para você escolher."
  },
  {
    question: "A Ricardo Móveis oferece garantia nos móveis planejados?",
    answer: "Sim! Todos os nossos móveis planejados possuem garantia de fabricação. A garantia cobre defeitos de fabricação, problemas com ferragens e acabamentos. Os prazos variam conforme o tipo de material e componente. Detalhes completos são informados no contrato."
  },
  {
    question: "Por que escolher a Ricardo Móveis para meu projeto?",
    answer: "Somos especialistas em móveis planejados em Palhoça e região, com anos de experiência, atendimento personalizado, projeto 3D gratuito, fabricação própria, materiais de qualidade, instalação profissional e compromisso com prazos. Transformamos ambientes com design funcional e preços justos."
  },
  {
    question: "Fazem a instalação dos móveis planejados?",
    answer: "Sim! Nossa equipe técnica realiza toda a instalação dos móveis planejados. O serviço de montagem está incluído no projeto. Nossos profissionais são treinados, cuidadosos e deixam tudo funcionando perfeitamente, com limpeza completa ao final da instalação."
  },
  {
    question: "Móveis planejados em Palhoça têm bom custo-benefício?",
    answer: "Sim! Por termos produção própria em Palhoça, conseguimos oferecer excelente custo-benefício em móveis planejados para toda a Grande Florianópolis. Eliminamos intermediários, reduzimos custos com logística e repassamos essa economia para você, sem perder qualidade. Solicite um orçamento gratuito!"
  }
];

export function FAQ() {
  useEffect(() => {
    // Adicionar Schema.org FAQPage para SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Perguntas Frequentes
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre móveis planejados em Palhoça, Florianópolis e região.
              Saiba mais sobre nossos projetos, prazos, materiais e atendimento em Santa Catarina.
            </p>
          </FadeIn>
        </div>

        {/* Accordion com perguntas */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Accordion items={faqItems} allowMultiple={false} />
          </div>
        </FadeIn>

        {/* CTA final */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <p className="text-slate-600 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#contato"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Entre em Contato
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
