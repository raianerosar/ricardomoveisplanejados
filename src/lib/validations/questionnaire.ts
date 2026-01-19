import { z } from 'zod';

const ambienteDetalhesSchema = z.object({
  nome: z.string().min(1, 'Nome do ambiente é obrigatório'),
  estilo: z.string().min(1, 'Selecione um estilo'),
  dimensoes: z.object({
    largura: z.string().optional(),
    profundidade: z.string().optional(),
    altura: z.string().optional(),
    naoSeiMedidas: z.boolean(),
  }),
});

export const questionnaireSchema = z.object({
  ambientes: z.array(z.string()).min(1, 'Selecione pelo menos um ambiente'),
  detalhesAmbientes: z.array(ambienteDetalhesSchema),
  necessidades: z.array(z.string()),
  orcamento: z.string().min(1, 'Selecione uma faixa de orçamento'),
  contato: z.object({
    nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    telefone: z.string().min(10, 'Telefone inválido'),
    email: z.string().email('E-mail inválido').optional().or(z.literal('')),
    prazo: z.string().min(1, 'Selecione um prazo'),
    observacoes: z.string().optional(),
  }),
});

export type QuestionnaireFormData = z.infer<typeof questionnaireSchema>;
