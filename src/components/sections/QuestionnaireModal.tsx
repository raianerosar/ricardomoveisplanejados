"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/Button';
import { trackQuestionnaireComplete } from '@/lib/analytics';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AmbienteDetalhes {
  nome: string;
  estilo: string;
  dimensoes: {
    largura: string;
    profundidade: string;
    altura: string;
    naoSeiMedidas: boolean;
  };
}

interface FormData {
  ambientes: string[];
  detalhesAmbientes: AmbienteDetalhes[];
  necessidades: string[];
  orcamento: string;
  contato: {
    nome: string;
    telefone: string;
    email: string;
    prazo: string;
    observacoes: string;
  };
}

const initialFormData: FormData = {
  ambientes: [],
  detalhesAmbientes: [],
  necessidades: [],
  orcamento: '',
  contato: {
    nome: '',
    telefone: '',
    email: '',
    prazo: '',
    observacoes: '',
  },
};

type StepInfo =
  | { type: 'selection'; title: string }
  | { type: 'estilo'; title: string; ambienteIndex: number; ambienteNome: string }
  | { type: 'dimensoes'; title: string; ambienteIndex: number; ambienteNome: string }
  | { type: 'necessidades'; title: string }
  | { type: 'orcamento'; title: string }
  | { type: 'contato'; title: string };

export function QuestionnaireModal({ isOpen, onClose }: QuestionnaireModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Calcular total de etapas dinamicamente baseado nos ambientes selecionados
  // 1 (seleção) + 2*ambientes (estilo+dimensões) + 1 (necessidades) + 1 (orçamento) + 1 (contato)
  const totalSteps = formData.ambientes.length === 0
    ? 4  // Mínimo de etapas quando nenhum ambiente selecionado
    : 1 + (formData.ambientes.length * 2) + 3;

  const getCurrentStepInfo = (): StepInfo | undefined => {
    if (currentStep === 0) {
      return { type: 'selection', title: 'Seleção de Ambientes' };
    }

    const ambientesCount = formData.ambientes.length;
    const dynamicStepsEnd = 1 + (ambientesCount * 2);

    if (currentStep < dynamicStepsEnd) {
      // Etapas dinâmicas de estilo/dimensões
      const dynamicIndex = currentStep - 1;
      const ambienteIndex = Math.floor(dynamicIndex / 2);
      const isEstilo = dynamicIndex % 2 === 0;
      const ambienteNome = formData.ambientes[ambienteIndex];

      if (isEstilo) {
        return {
          type: 'estilo',
          ambienteIndex,
          ambienteNome,
          title: `Estilo: ${ambienteNome}`
        };
      } else {
        return {
          type: 'dimensoes',
          ambienteIndex,
          ambienteNome,
          title: `Dimensões: ${ambienteNome}`
        };
      }
    }

    // Etapas fixas finais
    const fixedStep = currentStep - dynamicStepsEnd;
    if (fixedStep === 0) return { type: 'necessidades', title: 'Necessidades' };
    if (fixedStep === 1) return { type: 'orcamento', title: 'Orçamento' };
    if (fixedStep === 2) return { type: 'contato', title: 'Contato' };
  };

  const isStepComplete = (): boolean => {
    const stepInfo = getCurrentStepInfo();
    if (!stepInfo) return false;

    switch (stepInfo.type) {
      case 'selection':
        return formData.ambientes.length > 0;
      case 'estilo':
        return !!formData.detalhesAmbientes[stepInfo.ambienteIndex]?.estilo;
      case 'dimensoes':
        // Dimensões são opcionais
        return true;
      case 'necessidades':
        // Necessidades são opcionais
        return true;
      case 'orcamento':
        return !!formData.orcamento;
      case 'contato':
        return !!(
          formData.contato.nome &&
          formData.contato.telefone &&
          formData.contato.prazo
        );
      default:
        return false;
    }
  };

  const validateCurrentStep = (): boolean => {
    const stepInfo = getCurrentStepInfo();
    console.log('[QuestionnaireModal] Validando step:', stepInfo);

    const newErrors: Record<string, string> = {};

    if (!stepInfo) return true;

    switch (stepInfo.type) {
      case 'selection':
        if (formData.ambientes.length === 0) {
          newErrors.ambientes = 'Selecione pelo menos um ambiente';
        }
        break;
      case 'estilo':
        const estiloAtual = formData.detalhesAmbientes[stepInfo.ambienteIndex]?.estilo;
        if (!estiloAtual) {
          newErrors[`estilo-${stepInfo.ambienteIndex}`] = 'Selecione um estilo';
        }
        break;
      case 'dimensoes':
        // Dimensões são opcionais
        break;
      case 'necessidades':
        // Necessidades são opcionais
        break;
      case 'orcamento':
        if (!formData.orcamento) {
          newErrors.orcamento = 'Selecione uma faixa de orçamento';
        }
        break;
      case 'contato':
        if (!formData.contato.nome || formData.contato.nome.length < 2) {
          newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
        }
        if (!formData.contato.telefone || formData.contato.telefone.length < 10) {
          newErrors.telefone = 'Telefone inválido';
        }
        if (formData.contato.email && !formData.contato.email.includes('@')) {
          newErrors.email = 'E-mail inválido';
        }
        if (!formData.contato.prazo) {
          newErrors.prazo = 'Selecione quando deseja iniciar';
        }
        break;
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    console.log('[QuestionnaireModal] Validação completa:', {
      isValid,
      errorCount: Object.keys(newErrors).length,
      errors: newErrors
    });
    return isValid;
  };

  const handleNext = async () => {
    try {
      setIsValidating(true);

      // Delay mínimo para mostrar feedback visual
      await new Promise(resolve => setTimeout(resolve, 150));

      console.log('[QuestionnaireModal] handleNext chamado', {
        currentStep,
        totalSteps,
        formData
      });

      const isValid = validateCurrentStep();
      console.log('[QuestionnaireModal] Resultado da validação:', isValid);

      if (isValid) {
        const newStep = Math.min(currentStep + 1, totalSteps - 1);
        console.log('[QuestionnaireModal] Avançando do step', currentStep, 'para', newStep);
        setCurrentStep(newStep);
        setErrors({});
      } else {
        console.warn('[QuestionnaireModal] Validação falhou, não avançando. Erros:', errors);
        // Scroll para o topo para mostrar o banner de erro
        const dialogContent = document.querySelector('[data-slot="dialog-content"]');
        if (dialogContent) {
          dialogContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } catch (error) {
      console.error('[QuestionnaireModal] Erro em handleNext:', error);
      setErrors({
        system: 'Ocorreu um erro inesperado. Por favor, tente novamente.'
      });
    } finally {
      setIsValidating(false);
    }
  };

  const handlePrevious = () => {
    try {
      console.log('[QuestionnaireModal] handlePrevious chamado, currentStep atual:', currentStep);
      const newStep = Math.max(currentStep - 1, 0);
      console.log('[QuestionnaireModal] Voltando do step', currentStep, 'para', newStep);
      setCurrentStep(newStep);
      setErrors({});
    } catch (error) {
      console.error('[QuestionnaireModal] Erro em handlePrevious:', error);
      setErrors({
        system: 'Ocorreu um erro inesperado. Por favor, tente novamente.'
      });
    }
  };

  const handleSubmit = async () => {
    try {
      if (!validateCurrentStep()) {
        return;
      }

      setIsSubmitting(true);

      console.log('[QuestionnaireModal] Enviando formulário:', formData);

      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('[QuestionnaireModal] Erro na resposta da API:', errorData);
        throw new Error(errorData.message || 'Erro ao enviar');
      }

      console.log('[QuestionnaireModal] Formulário enviado com sucesso');
      setIsSuccess(true);
      trackQuestionnaireComplete();
    } catch (error) {
      console.error('[QuestionnaireModal] Erro em handleSubmit:', error);
      setErrors({
        submit: error instanceof Error ? error.message : 'Erro ao enviar. Tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    console.log('[QuestionnaireModal] Fechando modal, resetando estado');
    setCurrentStep(0);
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
    setIsValidating(false);
    onClose();
  };

  const renderStep = () => {
    const stepInfo = getCurrentStepInfo();

    if (!stepInfo) return null;

    switch (stepInfo.type) {
      case 'selection':
        return renderStep1();
      case 'estilo':
        return renderEstiloStep(stepInfo.ambienteIndex, stepInfo.ambienteNome);
      case 'dimensoes':
        return renderDimensoesStep(stepInfo.ambienteIndex, stepInfo.ambienteNome);
      case 'necessidades':
        return renderNecessidadesStep();
      case 'orcamento':
        return renderOrcamentoStep();
      case 'contato':
        return renderContatoStep();
      default:
        return null;
    }
  };

  // Etapa 1: Seleção de Ambientes (multi-select)
  const renderStep1 = () => {
    const ambientesOpcoes = [
      'Cozinha',
      'Quarto',
      'Banheiro',
      'Sala de Estar',
      'Home Office',
      'Closet',
      'Outro',
    ];

    const toggleAmbiente = (ambiente: string) => {
      const newAmbientes = formData.ambientes.includes(ambiente)
        ? formData.ambientes.filter(a => a !== ambiente)
        : [...formData.ambientes, ambiente];

      setFormData({
        ...formData,
        ambientes: newAmbientes,
        // Inicializar detalhesAmbientes para novos ambientes
        detalhesAmbientes: newAmbientes.map(nome => {
          const existing = formData.detalhesAmbientes.find(d => d.nome === nome);
          return existing || {
            nome,
            estilo: '',
            dimensoes: { largura: '', profundidade: '', altura: '', naoSeiMedidas: false }
          };
        })
      });
    };

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Quais ambientes você quer planejar? <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Selecione todos que se aplicam <span className="text-slate-500">(obrigatório)</span>
        </p>
        <div className="grid grid-cols-1 gap-3">
          {ambientesOpcoes.map((ambiente) => (
            <label
              key={ambiente}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.ambientes.includes(ambiente)
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-slate-200 hover:border-yellow-500 hover:bg-yellow-50'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.ambientes.includes(ambiente)}
                onChange={() => toggleAmbiente(ambiente)}
                className="w-4 h-4 text-yellow-500"
              />
              <span className="ml-3 text-slate-700">{ambiente}</span>
            </label>
          ))}
        </div>
        {errors.ambientes && (
          <p className="text-red-600 text-sm mt-2">{errors.ambientes}</p>
        )}
      </div>
    );
  };

  // Etapa Dinâmica: Estilo por Ambiente
  const renderEstiloStep = (ambienteIndex: number, ambienteNome: string) => {
    const estilos = ['Moderno', 'Clássico', 'Minimalista', 'Rústico', 'Industrial', 'Não tenho certeza'];

    const currentEstilo = formData.detalhesAmbientes[ambienteIndex]?.estilo || '';

    const handleEstiloChange = (estilo: string) => {
      const newDetalhes = [...formData.detalhesAmbientes];
      newDetalhes[ambienteIndex] = {
        ...newDetalhes[ambienteIndex],
        estilo
      };
      setFormData({ ...formData, detalhesAmbientes: newDetalhes });
    };

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Estilo: {ambienteNome} <span className="text-red-500">*</span>
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Qual estilo você prefere para {ambienteNome.toLowerCase()}? <span className="text-slate-500">(obrigatório)</span>
        </p>
        <div className="grid grid-cols-1 gap-3">
          {estilos.map((estilo) => (
            <label
              key={estilo}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                currentEstilo === estilo
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-slate-200 hover:border-yellow-500 hover:bg-yellow-50'
              }`}
            >
              <input
                type="radio"
                name={`estilo-${ambienteIndex}`}
                value={estilo}
                checked={currentEstilo === estilo}
                onChange={() => handleEstiloChange(estilo)}
                className="w-4 h-4 text-yellow-500"
              />
              <span className="ml-3 text-slate-700">{estilo}</span>
            </label>
          ))}
        </div>
        {errors[`estilo-${ambienteIndex}`] && (
          <p className="text-red-600 text-sm mt-2">{errors[`estilo-${ambienteIndex}`]}</p>
        )}
      </div>
    );
  };

  // Etapa Dinâmica: Dimensões por Ambiente
  const renderDimensoesStep = (ambienteIndex: number, ambienteNome: string) => {
    const currentDimensoes = formData.detalhesAmbientes[ambienteIndex]?.dimensoes || {
      largura: '', profundidade: '', altura: '', naoSeiMedidas: false
    };

    const handleDimensaoChange = (field: string, value: string | boolean) => {
      const newDetalhes = [...formData.detalhesAmbientes];
      newDetalhes[ambienteIndex] = {
        ...newDetalhes[ambienteIndex],
        dimensoes: {
          ...newDetalhes[ambienteIndex].dimensoes,
          [field]: value
        }
      };
      setFormData({ ...formData, detalhesAmbientes: newDetalhes });
    };

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Dimensões: {ambienteNome}
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          Você sabe as dimensões aproximadas do(a) {ambienteNome.toLowerCase()}?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Largura (metros)
            </label>
            <input
              type="number"
              step="0.1"
              disabled={currentDimensoes.naoSeiMedidas}
              value={currentDimensoes.largura}
              onChange={(e) => handleDimensaoChange('largura', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-slate-100"
              placeholder="Ex: 3.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Profundidade (metros)
            </label>
            <input
              type="number"
              step="0.1"
              disabled={currentDimensoes.naoSeiMedidas}
              value={currentDimensoes.profundidade}
              onChange={(e) => handleDimensaoChange('profundidade', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-slate-100"
              placeholder="Ex: 2.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Altura (metros)
            </label>
            <input
              type="number"
              step="0.1"
              disabled={currentDimensoes.naoSeiMedidas}
              value={currentDimensoes.altura}
              onChange={(e) => handleDimensaoChange('altura', e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-slate-100"
              placeholder="Ex: 2.7"
            />
          </div>
        </div>
        <label className="flex items-center p-4 bg-slate-50 rounded-lg cursor-pointer">
          <input
            type="checkbox"
            checked={currentDimensoes.naoSeiMedidas}
            onChange={(e) => {
              handleDimensaoChange('naoSeiMedidas', e.target.checked);
              if (e.target.checked) {
                handleDimensaoChange('largura', '');
                handleDimensaoChange('profundidade', '');
                handleDimensaoChange('altura', '');
              }
            }}
            className="w-4 h-4 text-yellow-500"
          />
          <span className="ml-3 text-slate-700">Não sei as medidas exatas</span>
        </label>
      </div>
    );
  };

  // Etapa: Necessidades Específicas
  const renderNecessidadesStep = () => {
    const necessidadesOpcoes = [
      'Maximizar espaço de armazenamento',
      'Design moderno e elegante',
      'Materiais de alta qualidade',
      'Praticidade no dia a dia',
      'Acabamentos diferenciados',
      'Soluções criativas e inovadoras',
    ];

    const toggleNecessidade = (necessidade: string) => {
      const newNecessidades = formData.necessidades.includes(necessidade)
        ? formData.necessidades.filter((n) => n !== necessidade)
        : [...formData.necessidades, necessidade];
      setFormData({ ...formData, necessidades: newNecessidades });
    };

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          O que é importante para você?
        </h3>
        <p className="text-sm text-slate-600 mb-4">Selecione todas que se aplicam</p>
        <div className="grid grid-cols-1 gap-3">
          {necessidadesOpcoes.map((necessidade) => (
            <label
              key={necessidade}
              className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.necessidades.includes(necessidade)
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-slate-200 hover:border-yellow-500 hover:bg-yellow-50'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.necessidades.includes(necessidade)}
                onChange={() => toggleNecessidade(necessidade)}
                className="w-4 h-4 text-yellow-500 mt-0.5"
              />
              <span className="ml-3 text-slate-700">{necessidade}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  // Etapa: Orçamento
  const renderOrcamentoStep = () => {
    const faixasOrcamento = [
      'Até R$ 5.000',
      'R$ 5.000 - R$ 10.000',
      'R$ 10.000 - R$ 20.000',
      'R$ 20.000 - R$ 30.000',
      'Acima de R$ 30.000',
      'Prefiro não informar',
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Qual a faixa de investimento que você está considerando? <span className="text-red-500">*</span>
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {faixasOrcamento.map((faixa) => (
            <label
              key={faixa}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                formData.orcamento === faixa
                  ? 'border-yellow-500 bg-yellow-50'
                  : 'border-slate-200 hover:border-yellow-500 hover:bg-yellow-50'
              }`}
            >
              <input
                type="radio"
                name="orcamento"
                value={faixa}
                checked={formData.orcamento === faixa}
                onChange={(e) => setFormData({ ...formData, orcamento: e.target.value })}
                className="w-4 h-4 text-yellow-500"
              />
              <span className="ml-3 text-slate-700">{faixa}</span>
            </label>
          ))}
        </div>
        {errors.orcamento && (
          <p className="text-red-600 text-sm mt-2">{errors.orcamento}</p>
        )}
      </div>
    );
  };

  // Etapa: Contato
  const renderContatoStep = () => {
    const prazos = [
      'Imediatamente',
      '1-3 meses',
      '3-6 meses',
      'Apenas pesquisando',
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          Como podemos entrar em contato?
        </h3>
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-2">
            Nome Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nome"
            required
            value={formData.contato.nome}
            onChange={(e) =>
              setFormData({
                ...formData,
                contato: { ...formData.contato, nome: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Seu nome completo"
          />
          {errors.nome && <p className="text-red-600 text-sm mt-2">{errors.nome}</p>}
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-slate-700 mb-2">
            Telefone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefone"
            required
            value={formData.contato.telefone}
            onChange={(e) =>
              setFormData({
                ...formData,
                contato: { ...formData.contato, telefone: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="(11) 99999-9999"
          />
          {errors.telefone && <p className="text-red-600 text-sm mt-2">{errors.telefone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={formData.contato.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                contato: { ...formData.contato, email: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="prazo" className="block text-sm font-medium text-slate-700 mb-2">
            Quando deseja iniciar? <span className="text-red-500">*</span>
          </label>
          <select
            id="prazo"
            required
            value={formData.contato.prazo}
            onChange={(e) =>
              setFormData({
                ...formData,
                contato: { ...formData.contato, prazo: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">Selecione uma opção</option>
            {prazos.map((prazo) => (
              <option key={prazo} value={prazo}>
                {prazo}
              </option>
            ))}
          </select>
          {errors.prazo && <p className="text-red-600 text-sm mt-2">{errors.prazo}</p>}
        </div>

        <div>
          <label htmlFor="observacoes" className="block text-sm font-medium text-slate-700 mb-2">
            Observações Adicionais
          </label>
          <textarea
            id="observacoes"
            rows={4}
            value={formData.contato.observacoes}
            onChange={(e) =>
              setFormData({
                ...formData,
                contato: { ...formData.contato, observacoes: e.target.value },
              })
            }
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Algum detalhe adicional que gostaria de compartilhar..."
          />
        </div>

        {errors.submit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{errors.submit}</p>
          </div>
        )}
      </div>
    );
  };

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Recebido com Sucesso!
            </h3>
            <p className="text-slate-600 mb-6">
              Em breve entraremos em contato para dar vida ao seu projeto.
            </p>
            <Button
              onClick={handleClose}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Monte seu Projeto Ideal</DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 mx-1 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-yellow-500' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-slate-600 text-center">
            Etapa {currentStep + 1} de {totalSteps}
            {!isStepComplete() && (
              <span className="block text-amber-600 font-medium mt-1">
                • Complete os campos obrigatórios para continuar
              </span>
            )}
          </p>
        </div>

        {/* Global Error Banner */}
        {Object.keys(errors).length > 0 && (
          <div className="mb-4 p-4 bg-red-50 border-2 border-red-500 rounded-lg animate-shake">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex-1">
                <h4 className="font-semibold text-red-800 mb-1">
                  Por favor, corrija os seguintes campos:
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  {Object.entries(errors).map(([key, message]) => (
                    <li key={key}>• {message}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="py-4">{renderStep()}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Voltar
          </Button>

          {currentStep < totalSteps - 1 ? (
            <Button
              onClick={handleNext}
              disabled={isValidating}
              className={`${
                isStepComplete()
                  ? 'bg-yellow-500 hover:bg-yellow-600'
                  : 'bg-slate-400 hover:bg-slate-500'
              } text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
            >
              {isValidating ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processando...
                </span>
              ) : (
                'Próximo'
              )}
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Finalizar'
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
