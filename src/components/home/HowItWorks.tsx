'use client';

import React, { useState } from 'react';
import { MessageSquareText, Compass, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Você conta o que aconteceu',
      desc: 'Preencha o formulário online ou chame no WhatsApp com total sigilo. Descreva sua situação com calma e no seu próprio ritmo.',
      icon: MessageSquareText,
      badge: 'Escuta Qualificada',
      detail: 'Sem burocracia ou termos difíceis. Uma conversa humana para entender exatamente o que violou o seu direito ou o da sua família.',
    },
    {
      number: '02',
      title: 'Nós orientamos e encaminhamos',
      desc: 'Nossa equipe analisa o caso e indica os órgãos competentes (Defensoria, MP, CRAS, Delegacias), preparando as orientações necessárias.',
      icon: Compass,
      badge: 'Encaminhamento Seguro',
      detail: 'Você saberá exatamente a qual sala se dirigir, quais documentos levar e o que exigir perante a lei.',
    },
    {
      number: '03',
      title: 'Acompanhamos o seu caso',
      desc: 'Você não fica sozinho(a). Mantemos contato contínuo para verificar se o atendimento institucional foi prestado com respeito e eficácia.',
      icon: HeartHandshake,
      badge: 'Cuidado Contínuo',
      detail: 'Nossa rede de apoio comunitário permanece ao seu lado até que sua demanda receba a devida atenção pública.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background border-t border-primary/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-surface border border-primary/20">
            <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Processo Humanizado e Simples</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-4">
            Como Funciona o Atendimento
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Um caminho acolhedor e transparente para você e sua família receberem amparo sem complicação.
          </p>
        </div>

        {/* 3 Passos Interativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`interactive-card rounded-3xl p-8 cursor-pointer relative flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? 'ring-2 ring-primary border-transparent shadow-card scale-[1.02]'
                    : 'opacity-95 hover:opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-extrabold text-4xl text-primary/30">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-surface rounded-full text-accent border border-primary/15 shadow-sm">
                      {step.badge}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all ${
                    isSelected ? 'bg-primary text-white scale-110' : 'bg-surface text-primary'
                  }`}>
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-body mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-surface/60 border border-primary/10 text-xs text-body leading-relaxed">
                    <strong className="text-primary block mb-0.5">Como atuamos:</strong>
                    <span>{step.detail}</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-primary/15 text-xs text-muted flex items-center justify-between font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                    <span>100% Gratuito</span>
                  </span>
                  <span className="text-primary font-bold">Passo {idx + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
