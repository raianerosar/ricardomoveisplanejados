import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const questionarioSimplesSchema = z.object({
  ambientes: z.array(z.string()).min(1, 'Selecione pelo menos um ambiente'),
  estilos: z.array(z.string()).min(1, 'Selecione pelo menos um estilo'),
  cores: z.array(z.string()).min(1, 'Selecione pelo menos uma cor'),
  leds: z.array(z.string()).min(1, 'Selecione pelo menos uma opção de LED'),
  orcamento: z.string().min(1, 'Faixa de orçamento é obrigatória'),
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = questionarioSimplesSchema.parse(body);

    // Verificar se a API key está configurada
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY não configurada');
      return NextResponse.json(
        { error: 'Configuração de email não encontrada. Entre em contato por telefone.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `🏠 Novo Orçamento Rápido: ${validatedData.ambientes.join(', ')} - ${validatedData.nome}`,
      html: generateEmailHTML(validatedData),
    });

    if (error) {
      console.error('Erro ao enviar email via Resend:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    console.log('Email enviado com sucesso:', data);

    return NextResponse.json(
      { message: 'Solicitação enviada com sucesso!', emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Erro no questionário simples:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

function generateEmailHTML(data: z.infer<typeof questionarioSimplesSchema>): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #fbbf24; padding: 25px; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; color: #000; font-size: 24px; }
          .header p { margin: 10px 0 0 0; color: #000; }
          .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 25px; padding: 20px; background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          .section-title { font-size: 18px; font-weight: bold; color: #1e293b; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #fbbf24; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #334155; margin-bottom: 5px; }
          .value { margin-top: 5px; padding: 12px; background-color: #f8fafc; border-left: 3px solid #fbbf24; border-radius: 4px; }
          .highlight { background-color: #fef3c7; padding: 2px 6px; border-radius: 3px; }
          .footer { margin-top: 25px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏠 Orçamento Rápido - Ricardo Móveis</h1>
            <p>Solicitação via Questionário Simplificado</p>
          </div>
          <div class="content">

            <div class="section">
              <div class="section-title">📞 Informações de Contato</div>

              <div class="field">
                <div class="label">👤 Nome:</div>
                <div class="value">${data.nome}</div>
              </div>

              <div class="field">
                <div class="label">📱 WhatsApp:</div>
                <div class="value"><strong>${data.whatsapp}</strong></div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">📋 Detalhes do Projeto</div>

              <div class="field">
                <div class="label">🏠 Ambientes:</div>
                <div class="value"><span class="highlight">${data.ambientes.join(', ')}</span></div>
              </div>

              <div class="field">
                <div class="label">🎨 Estilos:</div>
                <div class="value">${data.estilos.join(', ')}</div>
              </div>

              <div class="field">
                <div class="label">🎨 Cores/Acabamentos:</div>
                <div class="value">${data.cores.join(', ')}</div>
              </div>

              <div class="field">
                <div class="label">💡 Iluminação LED:</div>
                <div class="value">${data.leds.join(', ')}</div>
              </div>

              <div class="field">
                <div class="label">💰 Faixa de Orçamento:</div>
                <div class="value"><span class="highlight">${data.orcamento}</span></div>
              </div>
            </div>

            <div class="footer">
              <p><strong>Solicitação recebida através do site Ricardo Móveis</strong></p>
              <p>Data e Hora: ${new Date().toLocaleString('pt-BR', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}</p>
              <p style="margin-top: 15px; color: #94a3b8; font-size: 13px;">
                Este é um lead qualificado através do questionário simplificado do site.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
