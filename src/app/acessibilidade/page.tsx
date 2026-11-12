import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Eye, HeartHandshake, Mail, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Declaração de Acessibilidade | RASFAMA',
  description: 'Compromisso da RASFAMA com a inclusão digital e diretrizes de acessibilidade WCAG 2.2 nível AA.',
};

export default function AcessibilidadePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-background text-body">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep mb-8 tap-target"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Voltar para a página inicial</span>
        </Link>

        <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest uppercase mb-3">
          <Eye className="w-4 h-4" aria-hidden="true" />
          <span>Inclusão Digital para Todos</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-body tracking-tight mb-6">
          Declaração de Acessibilidade
        </h1>

        <div className="p-4 bg-surface/60 rounded-2xl border border-primary/20 mb-8 text-sm text-muted">
          Última atualização: Novembro de 2026 · Meta de conformidade: <strong>WCAG 2.2 Nível AA</strong>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              1. Nosso Compromisso
            </h2>
            <p>
              A <strong>RASFAMA (Rede de Apoio Social e Familiar do Maranhão)</strong> tem como princípio inegociável a democratização do acesso à informação e aos direitos sociais. Reconhecemos que a tecnologia deve ser acolhedora e inclusiva para todas as pessoas, especialmente aquelas que utilizam leitores de tela, navegação por teclado ou aparelhos celulares simples com limitações de conectividade.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              2. Recursos Implementados neste Portal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-surface/40 rounded-xl border border-primary/10">
                <h3 className="font-bold text-body text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  Contraste e Cores
                </h3>
                <p className="text-xs text-muted">
                  Cores calibradas com relação de contraste superior a 4.5:1, atendendo ao critério WCAG AA, com temas Claro e Escuro independentes.
                </p>
              </div>

              <div className="p-4 bg-surface/40 rounded-xl border border-primary/10">
                <h3 className="font-bold text-body text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  Navegação por Teclado
                </h3>
                <p className="text-xs text-muted">
                  Ordem de foco lógica (Tab / Shift+Tab) com anel de foco destacado em todos os elementos interativos, botões e formulários.
                </p>
              </div>

              <div className="p-4 bg-surface/40 rounded-xl border border-primary/10">
                <h3 className="font-bold text-body text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  Alvos de Toque Confortáveis
                </h3>
                <p className="text-xs text-muted">
                  Botões e links projetados com área mínima de 48×48 pixels para facilitar o uso por pessoas com dificuldades motoras ou telas pequenas.
                </p>
              </div>

              <div className="p-4 bg-surface/40 rounded-xl border border-primary/10">
                <h3 className="font-bold text-body text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  Redução de Movimento
                </h3>
                <p className="text-xs text-muted">
                  Respeitamos a preferência do sistema operacional (`prefers-reduced-motion`), desativando transições bruscas e animações automáticas.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              3. Tecnologias de Apoio e Semântica
            </h2>
            <p>
              O site foi construído com HTML5 semântico, utilizando atributos ARIA apropriados (`aria-expanded`, `aria-label`, `aria-controls`, `role="region"`), garantindo que softwares como NVDA, JAWS, TalkBack e VoiceOver interpretem a estrutura da página com clareza.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              4. Canal de Feedback e Suporte
            </h2>
            <p>
              Se você encontrar qualquer barreira de acesso neste site ou precisar de assistência especializada para acessar algum conteúdo ou serviço da RASFAMA, por favor nos avise imediatamente:
            </p>
            <div className="p-4 bg-surface rounded-2xl border border-primary/20 space-y-2 text-sm mt-3">
              <p className="flex items-center gap-2 text-body">
                <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>E-mail: <strong>rasfama1@gmail.com</strong> (Assunto: "Acessibilidade do Site")</span>
              </p>
              <p className="flex items-center gap-2 text-body">
                <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                <span>Telefone / WhatsApp: <strong>(98) 98437-4350</strong></span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

