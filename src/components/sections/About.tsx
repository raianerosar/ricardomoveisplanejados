"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Sobre a Ricardo Móveis
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-lg text-slate-600 space-y-6">
              <p>
                Com sede em Palhoça e atuação em toda Grande Florianópolis, a Ricardo Móveis é referência em móveis planejados e marcenaria sob medida há mais de 15 anos. Nossa expertise em design de interiores já transformou mais de 1.200 ambientes residenciais e comerciais em Florianópolis, São José, Palhoça, Biguaçu e região.
              </p>
              <p>
                Especializados em móveis planejados para todos os ambientes: <strong>cozinhas planejadas</strong> com projeto 3D e materiais premium (MDF, MDP), <strong>quartos completos</strong> com guarda-roupas sob medida e closets funcionais, <strong>banheiros planejados</strong> com armários e nichos personalizados, <strong>salas de estar e jantar</strong> com estantes, painéis para TV e racks modernos, e <strong>home offices produtivos</strong> com móveis ergonômicos.
              </p>
              <p>
                Nossa equipe conta com designers especializados, marceneiros experientes e instaladores qualificados. Trabalhamos com as melhores marcas de acabamentos e ferragens, garantindo durabilidade e sofisticação aos seus móveis.
              </p>
              <p>
                Do projeto 3D à instalação final, acompanhamos cada etapa com atenção aos detalhes. Oferecemos garantia estendida e suporte pós-venda, porque acreditamos que móveis planejados são investimento para toda a vida. Atendemos toda Grande Florianópolis com visita técnica e orçamento gratuitos.
              </p>
              <p className="mt-6">
                Confira nossos projetos de{' '}
                <Link href="/ambientes/cozinha-planejada" className="text-yellow-600 font-semibold hover:text-yellow-700 hover:underline">
                  cozinha planejada
                </Link>,{' '}
                <Link href="/ambientes/quarto-planejado" className="text-yellow-600 font-semibold hover:text-yellow-700 hover:underline">
                  quarto planejado
                </Link>,{' '}
                <Link href="/ambientes/banheiro-planejado" className="text-yellow-600 font-semibold hover:text-yellow-700 hover:underline">
                  banheiro planejado
                </Link>{' '}
                e{' '}
                <Link href="/ambientes/sala-planejada" className="text-yellow-600 font-semibold hover:text-yellow-700 hover:underline">
                  sala planejada
                </Link>.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">5+</div>
                <p className="text-sm md:text-base text-slate-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">100+</div>
                <p className="text-sm md:text-base text-slate-600">Projetos Realizados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">100%</div>
                <p className="text-sm md:text-base text-slate-600">Satisfação do Cliente</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}