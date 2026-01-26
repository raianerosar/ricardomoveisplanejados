"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/fade-in'
import { trackPageView, trackButtonClick } from '@/lib/analytics'

interface Ambiente {
  id: string
  titulo: string
  descricao: string
  imagem: string
  extensao: string
}

interface Estilo {
  id: string
  titulo: string
  descricao: string
}

interface Cor {
  id: string
  titulo: string
  cor: string
}

interface OpcaoLED {
  id: string
  titulo: string
  descricao: string
}

interface FaixaOrcamento {
  id: string
  titulo: string
}

const ambientes: Ambiente[] = [
  {
    id: 'cozinha',
    titulo: 'Cozinha Planejada',
    descricao: 'Móveis planejados para sua cozinha',
    imagem: '/images/gallery/cozinha-1.jpg',
    extensao: 'jpg',
  },
  {
    id: 'quarto',
    titulo: 'Quarto Planejado',
    descricao: 'Guarda-roupas e móveis sob medida',
    imagem: '/images/gallery/quarto-1.jpg',
    extensao: 'jpg',
  },
  {
    id: 'banheiro',
    titulo: 'Banheiro Planejado',
    descricao: 'Otimização e sofisticação',
    imagem: '/images/gallery/banheiro-1.jpg',
    extensao: 'jpg',
  },
  {
    id: 'sala',
    titulo: 'Sala Planejada',
    descricao: 'Ambientes integrados e modernos',
    imagem: '/images/gallery/sala-1.jpeg',
    extensao: 'jpeg',
  },
]

const estilos: Estilo[] = [
  {
    id: 'moderno',
    titulo: 'Moderno',
    descricao: 'Linhas retas, minimalismo e funcionalidade',
  },
  {
    id: 'classico',
    titulo: 'Clássico',
    descricao: 'Elegância atemporal e detalhes refinados',
  },
  {
    id: 'minimalista',
    titulo: 'Minimalista',
    descricao: 'Simplicidade, espaço e harmonia',
  },
]

const cores: Cor[] = [
  { id: 'branco-bege', titulo: 'Branco / Bege', cor: '#F5F5DC' },
  { id: 'madeira', titulo: 'Madeira Natural', cor: '#8B4513' },
  { id: 'cinza', titulo: 'Cinza / Chumbo', cor: '#708090' },
  { id: 'preto', titulo: 'Preto', cor: '#1a1a1a' },
  { id: 'colorido', titulo: 'Colorido', cor: 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1)' },
]

const opcoesLED: OpcaoLED[] = [
  { id: 'sim', titulo: 'Sim, quero iluminação LED', descricao: 'Iluminação moderna e funcional' },
  { id: 'nao', titulo: 'Não preciso de iluminação', descricao: 'Projeto sem LED' },
  { id: 'indeciso', titulo: 'Ainda não sei', descricao: 'Gostaria de mais informações' },
]

const faixasOrcamento: FaixaOrcamento[] = [
  { id: 'ate-5k', titulo: 'Até R$ 5.000' },
  { id: '5k-10k', titulo: 'R$ 5.000 - R$ 10.000' },
  { id: '10k-20k', titulo: 'R$ 10.000 - R$ 20.000' },
  { id: '20k-50k', titulo: 'R$ 20.000 - R$ 50.000' },
  { id: 'acima-50k', titulo: 'Acima de R$ 50.000' },
]

function getEstiloImagem(ambienteId: string, estiloIndex: number, extensao: string): string {
  const imageNumber = estiloIndex + 1
  return `/images/gallery/${ambienteId}-${imageNumber}.${extensao}`
}

function getWhatsAppLink(
  ambiente: string,
  estilo: string,
  coresSelecionadas: string[],
  led: string,
  orcamento: string
): string {
  const numero = '5548984242423'
  const mensagem = `Olá! Tenho interesse em ${ambiente} no estilo ${estilo}.

Cores/Acabamentos: ${coresSelecionadas.join(', ')}
Iluminação LED: ${led}
Orçamento: ${orcamento}

Gostaria de solicitar um orçamento.`
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
}

export default function QuestionarioPage() {
  const [etapa, setEtapa] = useState<number>(1)
  const [ambienteSelecionado, setAmbienteSelecionado] = useState<Ambiente | null>(null)
  const [estiloSelecionado, setEstiloSelecionado] = useState<Estilo | null>(null)
  const [coresSelecionadas, setCoresSelecionadas] = useState<string[]>([])
  const [ledSelecionado, setLedSelecionado] = useState<string | null>(null)

  useEffect(() => {
    trackPageView('questionario')
  }, [])

  const handleAmbienteClick = (ambiente: Ambiente) => {
    trackButtonClick(ambiente.titulo, 'questionario_etapa1')
    setAmbienteSelecionado(ambiente)
    setEtapa(2)
  }

  const handleEstiloClick = (estilo: Estilo) => {
    if (!ambienteSelecionado) return
    trackButtonClick(`${ambienteSelecionado.titulo} - ${estilo.titulo}`, 'questionario_etapa2')
    setEstiloSelecionado(estilo)
    setEtapa(3)
  }

  const handleCorToggle = (corTitulo: string) => {
    setCoresSelecionadas(prev =>
      prev.includes(corTitulo)
        ? prev.filter(c => c !== corTitulo)
        : [...prev, corTitulo]
    )
  }

  const handleCoresContinuar = () => {
    if (coresSelecionadas.length === 0) return
    trackButtonClick(`Cores: ${coresSelecionadas.join(', ')}`, 'questionario_etapa3')
    setEtapa(4)
  }

  const handleLEDClick = (opcao: OpcaoLED) => {
    trackButtonClick(`LED: ${opcao.titulo}`, 'questionario_etapa4')
    setLedSelecionado(opcao.titulo)
    setEtapa(5)
  }

  const handleOrcamentoClick = (faixa: FaixaOrcamento) => {
    if (!ambienteSelecionado || !estiloSelecionado || !ledSelecionado) return
    trackButtonClick(`Orçamento: ${faixa.titulo}`, 'questionario_etapa5')
    window.location.href = getWhatsAppLink(
      ambienteSelecionado.titulo,
      estiloSelecionado.titulo,
      coresSelecionadas,
      ledSelecionado,
      faixa.titulo
    )
  }

  const handleVoltar = () => {
    if (etapa === 2) {
      setEtapa(1)
      setAmbienteSelecionado(null)
    } else if (etapa === 3) {
      setEtapa(2)
      setEstiloSelecionado(null)
    } else if (etapa === 4) {
      setEtapa(3)
      setCoresSelecionadas([])
    } else if (etapa === 5) {
      setEtapa(4)
      setLedSelecionado(null)
    }
  }

  const etapas = [
    { numero: 1, label: 'Ambiente' },
    { numero: 2, label: 'Estilo' },
    { numero: 3, label: 'Cores' },
    { numero: 4, label: 'LED' },
    { numero: 5, label: 'Orçamento' },
  ]

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

      {/* Indicador de progresso */}
      <div className="container mx-auto px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            {etapas.map((e, index) => (
              <div key={e.numero} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    etapa >= e.numero ? 'bg-yellow-500 text-black' : 'bg-slate-300 text-slate-600'
                  }`}>
                    {e.numero}
                  </div>
                  <span className={`text-xs mt-1 hidden md:block ${etapa >= e.numero ? 'text-slate-800' : 'text-slate-400'}`}>
                    {e.label}
                  </span>
                </div>
                {index < etapas.length - 1 && (
                  <div className={`w-8 md:w-12 h-1 mx-1 md:mx-2 rounded ${etapa > e.numero ? 'bg-yellow-500' : 'bg-slate-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* ETAPA 1: Seleção de Ambiente */}
        {etapa === 1 && (
          <>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Qual ambiente você deseja planejar?
                </h1>
                <p className="text-lg text-slate-600">
                  Selecione o ambiente para continuar
                </p>
              </div>
            </FadeIn>

            {/* Grid de cards de ambientes */}
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
                  Após selecionar o ambiente, você escolherá o estilo desejado.
                </p>
              </div>
            </FadeIn>
          </>
        )}

        {/* ETAPA 2: Seleção de Estilo */}
        {etapa === 2 && ambienteSelecionado && (
          <>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                {/* Botão Voltar */}
                <button
                  onClick={handleVoltar}
                  className="mb-6 text-slate-600 hover:text-slate-800 text-sm flex items-center gap-2 mx-auto"
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
                  Voltar e escolher outro ambiente
                </button>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Qual estilo você prefere?
                </h1>
                <p className="text-lg text-slate-600">
                  Ambiente selecionado: <span className="font-semibold text-yellow-600">{ambienteSelecionado.titulo}</span>
                </p>
              </div>
            </FadeIn>

            {/* Grid de cards de estilos */}
            <FadeIn delay={0.1}>
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {estilos.map((estilo, index) => (
                  <button
                    key={estilo.id}
                    onClick={() => handleEstiloClick(estilo)}
                    className="relative h-72 md:h-96 rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all"
                  >
                    {/* Imagem de fundo */}
                    <Image
                      src={getEstiloImagem(ambienteSelecionado.id, index, ambienteSelecionado.extensao)}
                      alt={estilo.titulo}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Conteúdo do texto */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {estilo.titulo}
                      </h3>
                      <p className="text-sm md:text-base opacity-90">
                        {estilo.descricao}
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
                  Selecione o estilo preferido para continuar.
                </p>
              </div>
            </FadeIn>
          </>
        )}

        {/* ETAPA 3: Seleção de Cores */}
        {etapa === 3 && (
          <>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                {/* Botão Voltar */}
                <button
                  onClick={handleVoltar}
                  className="mb-6 text-slate-600 hover:text-slate-800 text-sm flex items-center gap-2 mx-auto"
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
                  Voltar e escolher outro estilo
                </button>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Quais cores e acabamentos você prefere?
                </h1>
                <p className="text-lg text-slate-600">
                  Selecione uma ou mais opções
                </p>
              </div>
            </FadeIn>

            {/* Grid de cards de cores */}
            <FadeIn delay={0.1}>
              <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                {cores.map((cor) => {
                  const isSelected = coresSelecionadas.includes(cor.titulo)
                  return (
                    <button
                      key={cor.id}
                      onClick={() => handleCorToggle(cor.titulo)}
                      className={`relative p-6 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {/* Círculo de cor */}
                      <div
                        className="w-16 h-16 mx-auto rounded-full mb-4 border border-slate-200"
                        style={{
                          background: cor.cor,
                        }}
                      />
                      <p className="text-sm font-medium text-slate-800 text-center">
                        {cor.titulo}
                      </p>

                      {/* Indicador de seleção */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-yellow-500 text-black rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </FadeIn>

            {/* Botão Continuar */}
            <FadeIn delay={0.2}>
              <div className="max-w-md mx-auto mt-12 text-center">
                <button
                  onClick={handleCoresContinuar}
                  disabled={coresSelecionadas.length === 0}
                  className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all ${
                    coresSelecionadas.length > 0
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Continuar
                </button>
                {coresSelecionadas.length > 0 && (
                  <p className="text-slate-600 text-sm mt-3">
                    {coresSelecionadas.length} {coresSelecionadas.length === 1 ? 'cor selecionada' : 'cores selecionadas'}
                  </p>
                )}
              </div>
            </FadeIn>
          </>
        )}

        {/* ETAPA 4: Iluminação LED */}
        {etapa === 4 && (
          <>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                {/* Botão Voltar */}
                <button
                  onClick={handleVoltar}
                  className="mb-6 text-slate-600 hover:text-slate-800 text-sm flex items-center gap-2 mx-auto"
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
                  Voltar e escolher outras cores
                </button>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Deseja iluminação LED?
                </h1>
                <p className="text-lg text-slate-600">
                  A iluminação LED valoriza seu projeto
                </p>
              </div>
            </FadeIn>

            {/* Cards de opções LED */}
            <FadeIn delay={0.1}>
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {opcoesLED.map((opcao) => (
                  <button
                    key={opcao.id}
                    onClick={() => handleLEDClick(opcao)}
                    className="p-6 rounded-lg border-2 border-slate-200 bg-white hover:border-yellow-500 hover:bg-yellow-50 transition-all group"
                  >
                    {/* Ícone de LED */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-600 group-hover:text-black transition-colors"
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {opcao.titulo}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {opcao.descricao}
                    </p>
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Informação adicional */}
            <FadeIn delay={0.2}>
              <div className="max-w-2xl mx-auto mt-12 text-center">
                <p className="text-slate-600 text-sm">
                  Selecione uma opção para continuar.
                </p>
              </div>
            </FadeIn>
          </>
        )}

        {/* ETAPA 5: Orçamento */}
        {etapa === 5 && (
          <>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                {/* Botão Voltar */}
                <button
                  onClick={handleVoltar}
                  className="mb-6 text-slate-600 hover:text-slate-800 text-sm flex items-center gap-2 mx-auto"
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
                  Voltar e escolher outra opção de LED
                </button>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Qual sua faixa de orçamento?
                </h1>
                <p className="text-lg text-slate-600">
                  Selecione o valor aproximado do investimento
                </p>
              </div>
            </FadeIn>

            {/* Cards de faixas de orçamento */}
            <FadeIn delay={0.1}>
              <div className="max-w-md mx-auto space-y-4">
                {faixasOrcamento.map((faixa) => (
                  <button
                    key={faixa.id}
                    onClick={() => handleOrcamentoClick(faixa)}
                    className="w-full p-5 rounded-lg border-2 border-slate-200 bg-white hover:border-green-500 hover:bg-green-50 transition-all group flex items-center justify-between"
                  >
                    <span className="text-lg font-semibold text-slate-800 group-hover:text-green-700">
                      {faixa.titulo}
                    </span>
                    {/* Ícone WhatsApp */}
                    <div className="bg-green-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Informação adicional */}
            <FadeIn delay={0.2}>
              <div className="max-w-2xl mx-auto mt-12 text-center">
                <p className="text-slate-600 text-sm">
                  Ao selecionar seu orçamento, você será direcionado para o WhatsApp
                  para conversarmos sobre seu projeto personalizado.
                </p>
              </div>
            </FadeIn>
          </>
        )}
      </div>
    </div>
  )
}
