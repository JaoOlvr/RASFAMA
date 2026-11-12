'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  Users,
  CheckCircle,
  MapPin,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '+1.500', label: 'Famílias Orientadas', sub: 'em todo o Maranhão' },
    { value: '7', label: 'Áreas de Atuação', sub: 'saúde, assistência, etc.' },
    { value: '100%', label: 'Gratuito e Sigiloso', sub: 'acolhimento sem custo' },
    { value: 'Plantão', label: 'Canal Direto', sub: '(98) 98437-4350' },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      {/* Luzes e Atmosfera de Fundo (Modo Claro & Escuro) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Orbes de luz colorida */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-[30rem] h-[30rem] rounded-full bg-primary-deep/10 blur-3xl" />

        {/* Imagem do Hero com mistura harmoniosa */}
        <Image
          src="/assets/hero.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center dark:opacity-25 opacity-35 filter contrast-110"
          aria-hidden="true"
        />

        {/* Degradê sutil para legibilidade impecável */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      </div>

      {/* Conteúdo Principal do Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center my-auto">
        {/* Selo Interativo de Associação Sem Fins Lucrativos */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/90 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-6 animate-pulse-subtle">
          <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-accent-glow" aria-hidden="true" />
          <span>Associação sem fins lucrativos · São Luís / MA</span>
        </div>

        {/* Título Principal com Destaque Fluido */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-body tracking-tight leading-[1.12] max-w-4xl mb-6">
          Rede de Apoio Social e Familiar do Maranhão
        </h1>

        {/* Subtítulo Humanizado */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted font-normal max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Defendemos direitos, fortalecemos famílias e transformamos realidades. Escuta atenta, orientação jurídica e encaminhamento humanizado para quem mais precisa.
        </p>

        {/* Botões de Ação com Alto Contraste e Vida */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <Link
            href="/#atendimento"
            className="btn-primary text-base sm:text-lg py-4 px-8 shadow-card group"
          >
            <HeartHandshake className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
            <span>SOLICITAR ATENDIMENTO</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            href="/#direitos"
            className="btn-secondary text-base sm:text-lg py-4 px-8 backdrop-blur-sm"
          >
            <BookOpen className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
            <span>Conheça seus direitos</span>
          </Link>
        </div>

        {/* Badges Flutuantes Informativos */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-body">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background/80 border border-primary/20 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span className="font-medium">Atendimento 100% Sigiloso</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background/80 border border-primary/20 backdrop-blur-md shadow-sm">
            <CheckCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="font-medium">Sem Custos para Famílias</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-background/80 border border-primary/20 backdrop-blur-md shadow-sm">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <span className="font-medium">São Luís e Todo o Maranhão</span>
          </div>
        </div>
      </div>

      {/* Faixa Dinâmica de Números e Impacto (Traz enorme dinamismo ao modo claro) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-surface/80 border border-primary/15 backdrop-blur-xl shadow-card">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-background/90 border border-primary/10 text-center hover:border-primary/30 transition-all hover:shadow-sm"
            >
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-primary leading-tight">
                {s.value}
              </span>
              <span className="block font-bold text-xs sm:text-sm text-body mt-0.5">
                {s.label}
              </span>
              <span className="block text-[11px] text-muted">
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
