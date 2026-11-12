import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cookie, ShieldCheck, Settings } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | RASFAMA',
  description: 'Saiba como a RASFAMA utiliza cookies e tecnologias semelhantes para garantir navegação segura e eficiente.',
};

export default function CookiesPage() {
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
          <Cookie className="w-4 h-4" aria-hidden="true" />
          <span>Transparência Digital</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-body tracking-tight mb-6">
          Política de Cookies
        </h1>

        <div className="p-4 bg-surface/60 rounded-2xl border border-primary/20 mb-8 text-sm text-muted">
          Informações claras sobre o armazenamento local no seu navegador · RASFAMA
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              1. O que são Cookies?
            </h2>
            <p>
              Cookies são pequenos arquivos de texto salvos no seu computador ou celular quando você acessa um site. Eles servem para lembrar suas preferências (como o tema escuro ou claro escolhido) e garantir que o portal funcione com estabilidade e rapidez.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              2. Quais Cookies Utilizamos?
            </h2>
            <div className="space-y-4 mt-4">
              <div className="p-4 bg-surface/50 rounded-xl border border-primary/10">
                <h3 className="font-bold text-body text-base mb-1">
                  Cookies Estritamente Necessários
                </h3>
                <p className="text-xs text-muted">
                  Essenciais para a segurança, carregamento rápido e armazenamento da sua escolha de acessibilidade (como o tema claro/escuro via `localStorage`). Sem eles, algumas funções essenciais não operam corretamente.
                </p>
              </div>

              <div className="p-4 bg-surface/50 rounded-xl border border-primary/10">
                <h3 className="font-bold text-body text-base mb-1">
                  Cookies de Preferência e Consentimento
                </h3>
                <p className="text-xs text-muted">
                  Guardam seu consentimento de cookies para que o aviso não seja exibido repetidamente a cada página visitada.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              3. Como Gerenciar ou Desativar
            </h2>
            <p>
              Você pode alterar ou apagar os cookies e dados locais diretamente nas configurações do seu navegador (Chrome, Firefox, Safari ou Edge). Caso opte por bloqueá-los por completo, suas preferências de cores e temas poderão ser restauradas ao padrão do sistema a cada nova visita.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

