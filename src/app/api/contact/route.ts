import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().optional()
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    // Enviar email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `Novo Orçamento: ${validatedData.service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #fbbf24; padding: 20px; border-radius: 8px 8px 0 0; }
              .header h1 { margin: 0; color: #000; font-size: 24px; }
              .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e293b; }
              .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center; color: #64748b; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🪑 Novo Orçamento - Ricardo Móveis</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nome Completo:</div>
                  <div class="value">${validatedData.name}</div>
                </div>

                <div class="field">
                  <div class="label">📞 Telefone:</div>
                  <div class="value">${validatedData.phone}</div>
                </div>

                <div class="field">
                  <div class="label">🛠️ Serviço de Interesse:</div>
                  <div class="value">${validatedData.service}</div>
                </div>

                <div class="field">
                  <div class="label">💬 Mensagem:</div>
                  <div class="value">${validatedData.message || 'Nenhuma mensagem adicional'}</div>
                </div>

                <div class="footer">
                  <p>Orçamento recebido através do site Ricardo Móveis</p>
                  <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
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
      { message: 'Formulário enviado com sucesso!', emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Erro no formulário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}