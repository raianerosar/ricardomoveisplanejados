import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().optional()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = contactSchema.parse(body);
    
    // Aqui você pode implementar o envio de email
    // Por exemplo, usando Nodemailer, SendGrid, etc.
    
    // Por enquanto, vamos apenas simular o sucesso
    console.log('Formulário recebido:', validatedData);
    
    // TODO: Implementar envio de email real
    // await sendEmail({
    //   to: 'contato@ricardomoveis.com.br',
    //   subject: `Novo contato: ${validatedData.service}`,
    //   html: `
    //     <h2>Novo contato recebido</h2>
    //     <p><strong>Nome:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Telefone:</strong> ${validatedData.phone}</p>
    //     <p><strong>Serviço:</strong> ${validatedData.service}</p>
    //     <p><strong>Mensagem:</strong> ${validatedData.message || 'Nenhuma mensagem adicional'}</p>
    //   `
    // });
    
    return NextResponse.json(
      { message: 'Formulário enviado com sucesso!' },
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