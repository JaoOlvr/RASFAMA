import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      city,
      profession,
      subject,
      message,
      isVolunteer,
      isSocialActions,
      lgpdAccepted,
      _website_catch,
    } = data;

    // 1. Verificação Honeypot anti-spam
    if (_website_catch) {
      return NextResponse.json({ success: true, message: 'Recebido' });
    }

    // 2. Validações básicas de campos obrigatórios
    if (!name || !email || !phone || !city || !profession || !lgpdAccepted) {
      return NextResponse.json(
        { message: 'Por favor, preencha todos os campos obrigatórios e aceite os termos da LGPD.' },
        { status: 400 }
      );
    }

    // 3. Monta o corpo da mensagem
    const emailPayload = {
      to: 'rasfama1@gmail.com',
      subject: `[Contato RASFAMA] Nova solicitação de atendimento: ${name} (${subject})`,
      content: `
Nova solicitação recebida através do site da RASFAMA:

- Nome: ${name}
- E-mail: ${email}
- Telefone: ${phone}
- Cidade: ${city}
- Profissão: ${profession}
- Assunto: ${subject}
- Deseja ser voluntário: ${isVolunteer ? 'Sim' : 'Não'}
- Deseja participar de ações sociais: ${isSocialActions ? 'Sim' : 'Não'}
- Aceite LGPD: Confirmado em conformidade com a Lei 13.709/2018

Relato / Mensagem:
${message || '(Sem relato adicional)'}
      `.trim(),
    };

    // 4. Integração externa se variável de ambiente estiver configurada (Formspree ou Resend)
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      try {
        const formspreeRes = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!formspreeRes.ok) {
          console.warn('Formspree retornou status de alerta:', formspreeRes.status);
        }
      } catch (err) {
        console.error('Erro ao contatar Formspree:', err);
      }
    }

    // Registra nos logs do servidor
    console.log('Solicitação registrada para rasfama1@gmail.com:', emailPayload);

    return NextResponse.json({
      success: true,
      message: 'Solicitação registrada com sucesso! Entraremos em contato em breve.',
    });
  } catch (error: any) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json(
      { message: 'Erro interno ao processar sua mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}

