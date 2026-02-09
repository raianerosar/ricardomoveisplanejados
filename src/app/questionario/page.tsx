"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/fade-in'
import { trackPageView, trackButtonClick, trackQuestionnaireComplete } from '@/lib/analytics'

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

export default function QuestionarioPage() {
  const [etapa, setEtapa] = useState<number>(1)
  const [ambientesSelecionados, setAmbientesSelecionados] = useState<Ambiente[]>([])
  const [estilosSelecionados, setEstilosSelecionados] = useState<Estilo[]>([])
  const [coresSelecionadas, setCoresSelecionadas] = useState<string[]>([])
  const [ledsSelecionados, setLedsSelecionados] = useState<OpcaoLED[]>([])
  const [orcamentoSelecionado, setOrcamentoSelecionado] = useState<string | null>(null)
  const [nome, setNome] = useState<string>('')
  const [whatsapp, setWhatsapp] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const formatWhatsapp = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    trackPageView('questionario')
  }, [])

  const handleAmbienteToggle = (ambiente: Ambiente) => {
    trackButtonClick(ambiente.titulo, 'questionario_etapa1')
    setAmbientesSelecionados(prev =>
      prev.some(a => a.id === ambiente.id)
        ? prev.filter(a => a.id !== ambiente.id)
        : [...prev, ambiente]
    )
  }

  const handleAmbientesContinuar = () => {
    if (ambientesSelecionados.length === 0) return
    setEtapa(2)
  }

  const handleEstiloToggle = (estilo: Estilo) => {
    trackButtonClick(estilo.titulo, 'questionario_etapa2')
    setEstilosSelecionados(prev =>
      prev.some(e => e.id === estilo.id)
        ? prev.filter(e => e.id !== estilo.id)
        : [...prev, estilo]
    )
  }

  const handleEstilosContinuar = () => {
    if (estilosSelecionados.length === 0) return
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

  const handleLEDToggle = (opcao: OpcaoLED) => {
    trackButtonClick(`LED: ${opcao.titulo}`, 'questionario_etapa4')
    setLedsSelecionados(prev =>
      prev.some(l => l.id === opcao.id)
        ? prev.filter(l => l.id !== opcao.id)
        : [...prev, opcao]
    )
  }

  const handleLEDContinuar = () => {
    if (ledsSelecionados.length === 0) return
    setEtapa(5)
  }

  const handleOrcamentoClick = (faixa: FaixaOrcamento) => {
    if (ambientesSelecionados.length === 0 || estilosSelecionados.length === 0 || ledsSelecionados.length === 0) return
    trackButtonClick(`Orçamento: ${faixa.titulo}`, 'questionario_etapa5')
    setOrcamentoSelecionado(faixa.titulo)
    setEtapa(6)
  }

  const handleContatoSubmit = async () => {
    // Validação
    if (nome.trim().length < 2) {
      setSubmitError('Nome deve ter pelo menos 2 caracteres')
      return
    }
    if (whatsapp.replace(/\D/g, '').length < 10) {
      setSubmitError('WhatsApp deve ter pelo menos 10 dígitos')
      return
    }
    if (ambientesSelecionados.length === 0 || estilosSelecionados.length === 0 || ledsSelecionados.length === 0 || !orcamentoSelecionado) {
      setSubmitError('Dados incompletos. Por favor, volte e preencha todas as etapas.')
      return
    }

    setSubmitError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/questionario-simples', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ambientes: ambientesSelecionados.map(a => a.titulo),
          estilos: estilosSelecionados.map(e => e.titulo),
          cores: coresSelecionadas,
          leds: ledsSelecionados.map(l => l.titulo),
          orcamento: orcamentoSelecionado,
          nome: nome.trim(),
          whatsapp: whatsapp.trim(),
        }),
      })

      // Verificar se a resposta é JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Erro no servidor. Tente novamente mais tarde.')
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar solicitação')
      }

      trackQuestionnaireComplete()
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVoltar = () => {
    if (etapa === 2) {
      setEtapa(1)
      setAmbientesSelecionados([])
    } else if (etapa === 3) {
      setEtapa(2)
      setEstilosSelecionados([])
    } else if (etapa === 4) {
      setEtapa(3)
      setCoresSelecionadas([])
    } else if (etapa === 5) {
      setEtapa(4)
      setLedsSelecionados([])
    } else if (etapa === 6) {
      setEtapa(5)
      setOrcamentoSelecionado(null)
    }
  }

  const etapas = [
    { numero: 1, label: 'Ambiente' },
    { numero: 2, label: 'Estilo' },
    { numero: 3, label: 'Cores' },
    { numero: 4, label: 'LED' },
    { numero: 5, label: 'Orçamento' },
    { numero: 6, label: 'Contato' },
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
                {ambientes.map((ambiente) => {
                  const isSelected = ambientesSelecionados.some(a => a.id === ambiente.id)
                  return (
                    <button
                      key={ambiente.id}
                      onClick={() => handleAmbienteToggle(ambiente)}
                      className={`relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all ${
                        isSelected ? 'ring-4 ring-yellow-500' : ''
                      }`}
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
                      <div className={`absolute inset-0 bg-gradient-to-t ${isSelected ? 'from-yellow-900/80 via-black/30' : 'from-black/80 via-black/30'} to-transparent`} />

                      {/* Conteúdo do texto */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          {ambiente.titulo}
                        </h3>
                        <p className="text-sm md:text-base opacity-90">
                          {ambiente.descricao}
                        </p>
                      </div>

                      {/* Indicador de seleção */}
                      {isSelected && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-yellow-500 text-black rounded-full p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
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
                  onClick={handleAmbientesContinuar}
                  disabled={ambientesSelecionados.length === 0}
                  className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all ${
                    ambientesSelecionados.length > 0
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Continuar
                </button>
                {ambientesSelecionados.length > 0 && (
                  <p className="text-slate-600 text-sm mt-3">
                    {ambientesSelecionados.length} {ambientesSelecionados.length === 1 ? 'ambiente selecionado' : 'ambientes selecionados'}
                  </p>
                )}
              </div>
            </FadeIn>
          </>
        )}

        {/* ETAPA 2: Seleção de Estilo */}
        {etapa === 2 && ambientesSelecionados.length > 0 && (
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
                  Voltar e escolher outros ambientes
                </button>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Quais estilos você prefere?
                </h1>
                <p className="text-lg text-slate-600">
                  Ambientes selecionados: <span className="font-semibold text-yellow-600">{ambientesSelecionados.map(a => a.titulo).join(', ')}</span>
                </p>
              </div>
            </FadeIn>

            {/* Grid de cards de estilos */}
            <FadeIn delay={0.1}>
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {estilos.map((estilo, index) => {
                  const isSelected = estilosSelecionados.some(e => e.id === estilo.id)
                  return (
                    <button
                      key={estilo.id}
                      onClick={() => handleEstiloToggle(estilo)}
                      className={`relative h-72 md:h-96 rounded-lg overflow-hidden cursor-pointer group focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all ${
                        isSelected ? 'ring-4 ring-yellow-500' : ''
                      }`}
                    >
                      {/* Imagem de fundo */}
                      <Image
                        src={getEstiloImagem(ambientesSelecionados[0].id, index, ambientesSelecionados[0].extensao)}
                        alt={estilo.titulo}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      {/* Overlay gradiente */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${isSelected ? 'from-yellow-900/80 via-black/30' : 'from-black/80 via-black/30'} to-transparent`} />

                      {/* Conteúdo do texto */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          {estilo.titulo}
                        </h3>
                        <p className="text-sm md:text-base opacity-90">
                          {estilo.descricao}
                        </p>
                      </div>

                      {/* Indicador de seleção */}
                      {isSelected && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-yellow-500 text-black rounded-full p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
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
                  onClick={handleEstilosContinuar}
                  disabled={estilosSelecionados.length === 0}
                  className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all ${
                    estilosSelecionados.length > 0
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Continuar
                </button>
                {estilosSelecionados.length > 0 && (
                  <p className="text-slate-600 text-sm mt-3">
                    {estilosSelecionados.length} {estilosSelecionados.length === 1 ? 'estilo selecionado' : 'estilos selecionados'}
                  </p>
                )}
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
                  Selecione uma ou mais opções
                </p>
              </div>
            </FadeIn>

            {/* Cards de opções LED */}
            <FadeIn delay={0.1}>
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {opcoesLED.map((opcao) => {
                  const isSelected = ledsSelecionados.some(l => l.id === opcao.id)
                  return (
                    <button
                      key={opcao.id}
                      onClick={() => handleLEDToggle(opcao)}
                      className={`relative p-6 rounded-lg border-2 transition-all group ${
                        isSelected
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-slate-200 bg-white hover:border-yellow-500 hover:bg-yellow-50'
                      }`}
                    >
                      {/* Ícone de LED */}
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-yellow-500' : 'bg-slate-100 group-hover:bg-yellow-500'
                      }`}>
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
                          className={`transition-colors ${isSelected ? 'text-black' : 'text-slate-600 group-hover:text-black'}`}
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
                  onClick={handleLEDContinuar}
                  disabled={ledsSelecionados.length === 0}
                  className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all ${
                    ledsSelecionados.length > 0
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Continuar
                </button>
                {ledsSelecionados.length > 0 && (
                  <p className="text-slate-600 text-sm mt-3">
                    {ledsSelecionados.length} {ledsSelecionados.length === 1 ? 'opção selecionada' : 'opções selecionadas'}
                  </p>
                )}
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
                    className="w-full p-5 rounded-lg border-2 border-slate-200 bg-white hover:border-yellow-500 hover:bg-yellow-50 transition-all group flex items-center justify-between"
                  >
                    <span className="text-lg font-semibold text-slate-800 group-hover:text-yellow-700">
                      {faixa.titulo}
                    </span>
                    {/* Ícone de seta */}
                    <div className="bg-yellow-500 text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Informação adicional */}
            <FadeIn delay={0.2}>
              <div className="max-w-2xl mx-auto mt-12 text-center">
                <p className="text-slate-600 text-sm">
                  Ao selecionar seu orçamento, você irá para a última etapa
                  para informar seus dados de contato.
                </p>
              </div>
            </FadeIn>
          </>
        )}

        {/* ETAPA 6: Contato */}
        {etapa === 6 && !isSubmitted && (
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
                  Voltar e escolher outra faixa de orçamento
                </button>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Quase lá! Informe seus dados
                </h1>
                <p className="text-lg text-slate-600">
                  Preencha seus dados para receber seu orçamento personalizado
                </p>
              </div>
            </FadeIn>

            {/* Resumo das seleções */}
            <FadeIn delay={0.1}>
              <div className="max-w-md mx-auto mb-8 p-4 bg-slate-100 rounded-lg">
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Resumo do seu projeto:</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium">Ambientes:</span> {ambientesSelecionados.map(a => a.titulo).join(', ')}</p>
                  <p><span className="font-medium">Estilos:</span> {estilosSelecionados.map(e => e.titulo).join(', ')}</p>
                  <p><span className="font-medium">Cores:</span> {coresSelecionadas.join(', ')}</p>
                  <p><span className="font-medium">LED:</span> {ledsSelecionados.map(l => l.titulo).join(', ')}</p>
                  <p><span className="font-medium">Orçamento:</span> {orcamentoSelecionado}</p>
                </div>
              </div>
            </FadeIn>

            {/* Formulário de contato */}
            <FadeIn delay={0.2}>
              <div className="max-w-md mx-auto space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))}
                    placeholder="(00) 00000-0000"
                    className="w-full p-4 border-2 border-slate-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>

                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}

                <button
                  onClick={handleContatoSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                      : 'bg-yellow-500 text-black hover:bg-yellow-400'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              </div>
            </FadeIn>

            {/* Informação adicional */}
            <FadeIn delay={0.3}>
              <div className="max-w-2xl mx-auto mt-12 text-center">
                <p className="text-slate-600 text-sm">
                  Entraremos em contato pelo WhatsApp para discutir seu projeto personalizado.
                </p>
              </div>
            </FadeIn>
          </>
        )}

        {/* Tela de sucesso */}
        {isSubmitted && (
          <>
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center">
                {/* Ícone de sucesso */}
                <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
                  Solicitação Enviada!
                </h1>
                <p className="text-lg text-slate-600 mb-8">
                  Obrigado, <span className="font-semibold">{nome}</span>! Recebemos sua solicitação
                  e entraremos em contato pelo WhatsApp em breve.
                </p>

                {/* Resumo do projeto */}
                <div className="bg-slate-100 rounded-lg p-6 mb-8 text-left">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Resumo do seu projeto:</h3>
                  <div className="space-y-3 text-slate-600">
                    <p><span className="font-medium">Ambientes:</span> {ambientesSelecionados.map(a => a.titulo).join(', ')}</p>
                    <p><span className="font-medium">Estilos:</span> {estilosSelecionados.map(e => e.titulo).join(', ')}</p>
                    <p><span className="font-medium">Cores:</span> {coresSelecionadas.join(', ')}</p>
                    <p><span className="font-medium">LED:</span> {ledsSelecionados.map(l => l.titulo).join(', ')}</p>
                    <p><span className="font-medium">Orçamento:</span> {orcamentoSelecionado}</p>
                  </div>
                </div>

                {/* Botão voltar para home */}
                <Link
                  href="/"
                  className="inline-block py-4 px-8 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Voltar para a Home
                </Link>
              </div>
            </FadeIn>
          </>
        )}
      </div>
    </div>
  )
}
