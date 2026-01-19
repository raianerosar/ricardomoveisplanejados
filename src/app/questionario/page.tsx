"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/fade-in'
import { trackPageView, trackButtonClick } from '@/lib/analytics'

interface Ambiente {
  id: string
  titulo: string
  descricao: string
  imagem: string
}

const ambientes: Ambiente[] = [
  {
    id: 'cozinha-planejada',
    titulo: 'Cozinha Planejada',
    descricao: 'Móveis planejados para sua cozinha',
    imagem: '/images/gallery/cozinha-1.jpg',
  },
  {
    id: 'quarto-planejado',
    titulo: 'Quarto Planejado',
    descricao: 'Guarda-roupas e móveis sob medida',
    imagem: '/images/gallery/quarto-1.jpg',
  },
  {
    id: 'banheiro-planejado',
    titulo: 'Banheiro Planejado',
    descricao: 'Otimização e sofisticação',
    imagem: '/images/gallery/banheiro-1.jpg',
  },
  {
    id: 'sala-planejada',
    titulo: 'Sala Planejada',
    descricao: 'Ambientes integrados e modernos',
    imagem: '/images/gallery/sala-1.jpeg',
  },
]

function getWhatsAppLink(ambiente: string): string {
  const numero = '5548984242423'
  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse em ${ambiente}. Gostaria de solicitar um orçamento.`
  )
  return `https://wa.me/${numero}?text=${mensagem}`
}

export default function QuestionarioPage() {
  useEffect(() => {
    trackPageView('questionario')
  }, [])

  const handleAmbienteClick = (ambiente: Ambiente) => {
    trackButtonClick(ambiente.titulo, 'questionario')
    window.location.href = getWhatsAppLink(ambiente.titulo)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header da página */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-800 text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar para Home
          </Link>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Qual ambiente você deseja planejar?
            </h1>
            <p className="text-lg text-slate-600">
              Escolha o ambiente e falaremos com você no WhatsApp
            </p>
          </div>
        </FadeIn>

        {/* Grid de cards */}
        <FadeIn delay={0.1}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ambientes.map((ambiente) => (
              <button
                key={ambiente.id}
                onClick={() => handleAmbienteClick(ambiente)}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all"
              >
                {/* Imagem de fundo */}
                <Image
                  src={ambiente.imagem}
                  alt={ambiente.titulo}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Conteúdo do texto */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {ambiente.titulo}
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    {ambiente.descricao}
                  </p>
                </div>

                {/* Indicador de hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-yellow-500 text-black rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Informação adicional */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-slate-600 text-sm">
              Ao clicar em um ambiente, você será direcionado para o WhatsApp
              para conversarmos sobre seu projeto personalizado.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
