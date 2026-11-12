import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | RASFAMA',
  description: 'Política de Privacidade e Proteção de Dados Pessoais da RASFAMA em conformidade com a LGPD (Lei nº 13.709/2018).',
};

export default function PrivacidadePage() {
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
          <ShieldCheck className="w-4 h-4" aria-hidden="true" />
          <span>Conformidade com a Lei nº 13.709/2018 (LGPD)</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-body tracking-tight mb-6">
          Política de Privacidade
        </h1>

        <div className="p-4 bg-surface/60 rounded-2xl border border-primary/20 mb-8 text-sm text-muted">
          Vigência a partir de Novembro de 2026 · Rede de Apoio Social e Familiar do Maranhão (RASFAMA)
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              1. Apresentação e Finalidade
            </h2>
            <p>
              A <strong>RASFAMA</strong> reconhece a importância da privacidade, da segurança e da transparência no tratamento dos dados pessoais de cidadãos, voluntários, membros e parceiros. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos suas informações ao utilizar nosso site institucional e nossos canais de atendimento.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              2. Dados Coletados e Finalidade do Tratamento
            </h2>
            <p>
              Coletamos exclusivamente os dados estritamente necessários para prestar o serviço de acolhimento e orientação social:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Nome completo:</strong> para identificar o solicitante e conferir atendimento humanizado.</li>
              <li><strong>E-mail e Telefone (WhatsApp):</strong> para retornar o contato com orientações e atualizações do caso.</li>
              <li><strong>Cidade / Município:</strong> para direcionamento geográfico aos órgãos competentes da comarca ou região correspondente no Maranhão.</li>
              <li><strong>Profissão / Ocupação:</strong> para fins estatísticos de vulnerabilidade e planejamento de apoio social.</li>
              <li><strong>Relato do Caso:</strong> informações fornecidas espontaneamente pelo cidadão para fundamentar a triagem e orientação inicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              3. Princípios e Sigilo
            </h2>
            <p>
              Em nenhuma hipótese a RASFAMA comercializa, aluga ou cede dados pessoais a empresas privadas, anunciantes ou terceiros com fins lucrativos. Seus dados são tratados sob rigoroso dever de sigilo e confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              4. Direitos do Titular de Dados
            </h2>
            <p>
              Você, como titular de dados pessoais, tem o direito garantido pelo artigo 18 da LGPD de solicitar a qualquer momento:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2 text-sm">
              <li>Confirmação da existência de tratamento dos seus dados;</li>
              <li>Acesso aos dados pessoais armazenados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Eliminação definitiva dos dados tratados com base no seu consentimento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-body mb-3">
              5. Contato do Encarregado de Dados (DPO)
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer qualquer dúvida sobre como seus dados são tratados pela RASFAMA, entre em contato diretamente pelo e-mail:
            </p>
            <p className="font-bold text-primary mt-2">
              rasfama1@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

