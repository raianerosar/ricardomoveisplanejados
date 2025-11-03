"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Polaroid } from "@/components/ui/Polaroid";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-600 to-slate-800 text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/imagens/hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/imagens/hero2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Informações */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ricardo Móveis
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-xl md:text-2xl mb-8 text-slate-200">
                Móveis Planejados que Transformam Ambientes
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg mb-8 max-w-2xl lg:max-w-none text-slate-100">
                Especialistas em móveis planejados para cozinha, quarto e banheiro.
                Transforme sua casa com soluções personalizadas e de alta qualidade.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex lg:justify-start justify-center">
                <a
                  href="https://wa.me/5548984242423?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20móveis%20planejados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-8 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Solicite seu Orçamento
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-800"
                >
                  Ver Nossos Projetos
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Coluna Direita - Mini Polaroides */}
          <div className="relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
            <FadeIn delay={0.5}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Polaroid 1 - Rotação leve à esquerda */}
                <div className="absolute top-0 left-0 w-48 md:w-80 z-10">
                  <Polaroid
                    src="/imagens/p1.png"
                    alt="Cozinha planejada"
                    rotation={-6}
                    animationDelay={0}
                  />
                </div>

                {/* Polaroid 2 - Centro, rotação leve à direita */}
                <div className="absolute top-12 right-0 w-48 md:w-80 z-20">
                  <Polaroid
                    src="/imagens/p2.png"
                    alt="Quarto planejado"
                    rotation={4}
                    animationDelay={0.7}
                  />
                </div>

                {/* Polaroid 3 - Inferior, leve rotação */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-80 z-30">
                  <Polaroid
                    src="/imagens/p3.png"
                    alt="Móveis sob medida"
                    rotation={-3}
                    animationDelay={1.4}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
