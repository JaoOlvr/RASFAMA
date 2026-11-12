import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, UserPlus, HeartHandshake, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membros e Voluntários | RASFAMA',
  description: 'Participe ativamente da Rede de Apoio Social e Familiar do Maranhão como membro associado ou voluntário.',
};

export default function MembrosPage() {
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
          <Users className="w-4 h-4" aria-hidden="true" />
          <span>Comunidade & Solidariedade</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-body tracking-tight mb-4">
          Membros & Participantes
        </h1>

        <p className="text-muted text-base sm:text-lg mb-12 leading-relaxed">
          Nossa força vem da união de cidadãos, famílias, lideranças comunitárias e profissionais voluntários em todo o Maranhão.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Seção Seja Membro */}
          <div id="seja-membro" className="p-8 rounded-3xl bg-surface/50 border border-primary/20 flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                <UserPlus className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-body mb-3">
                Seja um Membro Associado
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Como membro, você participa das assembleias, opina nas diretrizes estratégicas da RASFAMA e fortalece a representatividade da nossa associação perante os órgãos públicos.
              </p>
              <ul className="space-y-2 text-xs text-body mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Voz ativa em projetos sociais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Acesso aos relatórios de transparência</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Rede de apoio mútuo familiar</span>
                </li>
              </ul>
            </div>

            <Link
              href="/#atendimento"
              className="btn-primary w-full text-sm justify-center"
            >
              Inscrever-se como Membro
            </Link>
          </div>

          {/* Seção Quero ser Voluntário */}
          <div id="voluntariado" className="p-8 rounded-3xl bg-surface/50 border border-primary/20 flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent text-[#0F2740] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-body mb-3">
                Quero ser Voluntário
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Doe seu talento! Precisamos constantemente de advogados, assistentes sociais, psicólogos, comunicadores, pedagogos e pessoas com vontade de ajudar na triagem e acolhimento comunitário.
              </p>
              <ul className="space-y-2 text-xs text-body mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Atuação presencial ou remota</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Certificado de horas de serviço voluntário</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>Impacto real e direto em comunidades</span>
                </li>
              </ul>
            </div>

            <Link
              href="/#atendimento"
              className="btn-accent w-full text-sm justify-center font-bold"
            >
              Cadastrar como Voluntário
            </Link>
          </div>
        </div>

        {/* Quadro Institucional Placeholder */}
        <section className="p-8 rounded-3xl bg-background border border-primary/10">
          <h2 className="font-heading text-xl font-bold text-body mb-4">
            Estrutura Organizacional e Diretoria
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-6">
            A RASFAMA é gerida por um colegiado de voluntários e profissionais dedicados à causa dos direitos sociais. Em breve, a lista completa dos membros fundadores e parceiros institucionais estará disponível nesta página com suas respectivas áreas de atuação.
          </p>
          <div className="flex items-center gap-2 text-xs text-primary font-medium">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Associação legalmente registrada e constituída em São Luís – Maranhão</span>
          </div>
        </section>
      </div>
    </main>
  );
}

