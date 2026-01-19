import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { questionnaireSchema } from '@/lib/validations/questionnaire';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = questionnaireSchema.parse(body);

    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `📋 Novo Questionário: ${validatedData.ambientes.join(', ')} - ${validatedData.contato.nome}`,
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
      { message: 'Questionário enviado com sucesso!', emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Erro no questionário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

function generateEmailHTML(data: z.infer<typeof questionnaireSchema>): string {
  // Gerar seções HTML para cada ambiente
  const ambientesHTML = data.detalhesAmbientes.map(ambiente => {
    const dimensoesInfo = ambiente.dimensoes.naoSeiMedidas
      ? '<span style="color: #64748b;">Não informado (cliente não sabe as medidas)</span>'
      : `Largura: ${ambiente.dimensoes.largura || 'N/A'}m, Profundidade: ${ambiente.dimensoes.profundidade || 'N/A'}m, Altura: ${ambiente.dimensoes.altura || 'N/A'}m`;

    return `
      <div class="ambiente-box">
        <h3 style="color: #1e293b; margin-bottom: 15px;">
          📐 ${ambiente.nome}
        </h3>
        <div class="field">
          <div class="label">Estilo:</div>
          <div class="value">${ambiente.estilo}</div>
        </div>
        <div class="field">
          <div class="label">Dimensões:</div>
          <div class="value">${dimensoesInfo}</div>
        </div>
      </div>
    `;
  }).join('');

  const necessidadesInfo = data.necessidades.length > 0
    ? data.necessidades.map(n => `<li style="margin-bottom: 5px;">${n}</li>`).join('')
    : '<li style="color: #64748b;">Nenhuma necessidade específica selecionada</li>';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 700px; margin: 0 auto; padding: 20px; }
          .header { background-color: #fbbf24; padding: 25px; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; color: #000; font-size: 26px; }
          .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 25px; padding: 20px; background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          .section-title { font-size: 18px; font-weight: bold; color: #1e293b; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #fbbf24; }
          .ambiente-box { margin-bottom: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #fbbf24; border-radius: 4px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #334155; margin-bottom: 5px; }
          .value { margin-top: 5px; padding: 12px; background-color: #f8fafc; border-left: 3px solid #fbbf24; border-radius: 4px; }
          .footer { margin-top: 25px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px; }
          ul { margin: 10px 0; padding-left: 20px; }
          li { color: #334155; }
          .highlight { background-color: #fef3c7; padding: 2px 6px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 Novo Questionário - Ricardo Móveis</h1>
            <p style="margin: 10px 0 0 0; color: #000;">
              ${data.ambientes.length} Ambiente${data.ambientes.length > 1 ? 's' : ''} Selecionado${data.ambientes.length > 1 ? 's' : ''}
            </p>
          </div>
          <div class="content">

            <div class="section">
              <div class="section-title">🏠 Ambientes e Detalhes</div>
              ${ambientesHTML}
            </div>

            <div class="section">
              <div class="section-title">✨ Preferências Gerais</div>

              <div class="field">
                <div class="label">O que é importante para o cliente:</div>
                <div class="value">
                  <ul>
                    ${necessidadesInfo}
                  </ul>
                </div>
              </div>

              <div class="field">
                <div class="label">💰 Investimento Total do Projeto:</div>
                <div class="value"><span class="highlight">${data.orcamento}</span></div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">📞 Informações de Contato</div>

              <div class="field">
                <div class="label">👤 Nome Completo:</div>
                <div class="value">${data.contato.nome}</div>
              </div>

              <div class="field">
                <div class="label">📱 Telefone:</div>
                <div class="value"><strong>${data.contato.telefone}</strong></div>
              </div>

              <div class="field">
                <div class="label">📧 E-mail:</div>
                <div class="value">${data.contato.email || '<span style="color: #64748b;">Não informado</span>'}</div>
              </div>

              <div class="field">
                <div class="label">⏱️ Quando deseja iniciar:</div>
                <div class="value">${data.contato.prazo}</div>
              </div>

              ${data.contato.observacoes ? `
                <div class="field">
                  <div class="label">💬 Observações Adicionais:</div>
                  <div class="value">${data.contato.observacoes}</div>
                </div>
              ` : ''}
            </div>

            <div class="footer">
              <p><strong>Questionário recebido através do site Ricardo Móveis</strong></p>
              <p>Data e Hora: ${new Date().toLocaleString('pt-BR', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}</p>
              <p style="margin-top: 15px; color: #94a3b8; font-size: 13px;">
                Este é um lead qualificado através da experiência interativa do site.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
