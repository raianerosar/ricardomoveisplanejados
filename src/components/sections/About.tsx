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
            <div className="text-lg text-slate-600 space-y-4 text-left max-w-3xl mx-auto">
              <p>
                Com sede em <strong>Palhoça</strong> e atuação em toda <strong>Grande Florianópolis</strong>, a Ricardo Móveis é referência em <strong>móveis planejados</strong> e marcenaria sob medida há mais de 15 anos. Já transformamos mais de 1.200 ambientes em Florianópolis, São José, Palhoça, Biguaçu e região.
              </p>
              <p>
                Somos especialistas em <strong>cozinhas planejadas</strong>, <strong>quartos sob medida</strong>, <strong>banheiros planejados</strong>, <strong>salas de estar</strong> e <strong>home offices</strong> — sempre com projeto 3D, materiais premium e acabamentos de alta qualidade.
              </p>
              <p>
                Do projeto à instalação, nossa equipe de designers e marceneiros acompanha cada detalhe. Oferecemos garantia estendida, suporte pós-venda e <strong>visita técnica gratuita</strong> em toda a região.
              </p>
              <p>
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