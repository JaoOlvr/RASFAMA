'use client';

import React, { useState } from 'react';
import {
  HeartPulse,
  GraduationCap,
  Building2,
  Users,
  ShieldAlert,
  Briefcase,
  Scale,
  AlertCircle,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { AREAS_OF_WORK } from '@/data/areas';

export default function AreasOfWork() {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'saude-social' | 'educacao-trabalho' | 'justica'>('todos');

  const iconMap = {
    HeartPulse,
    GraduationCap,
    ShieldAlert,
    Building2,
    Users,
    Briefcase,
    Scale,
  };

  const handleSelectArea = (areaId: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('prefill-area', { detail: areaId }));
      const formEl = document.getElementById('atendimento');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const filterCategories = [
    { id: 'todos', label: 'Todas as 7 Áreas' },
    { id: 'saude-social', label: 'Saúde & Assistência' },
    { id: 'educacao-trabalho', label: 'Educação & Trabalho' },
    { id: 'justica', label: 'Garantias & Direitos' },
  ];

  const filteredAreas = AREAS_OF_WORK.filter((area) => {
    if (selectedFilter === 'todos') return true;
    if (selectedFilter === 'saude-social') {
      return ['saude', 'assistencia-social', 'grupos-vulneraveis'].includes(area.id);
    }
    if (selectedFilter === 'educacao-trabalho') {
      return ['educacao', 'direitos-trabalhistas'].includes(area.id);
    }
    if (selectedFilter === 'justica') {
      return ['sistema-penitenciario', 'antirracismo'].includes(area.id);
    }
    return true;
  });

  return (
    <section id="areas" className="py-24 bg-background relative overflow-hidden">
      {/* Elementos visuais de fundo */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-surface border border-primary/20">
            <AlertCircle className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Frentes de Proteção Social</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Atuamos de forma estratégica para acolher denúncias, prestar orientação jurídica/social e acionar os canais institucionais competentes.
          </p>
        </div>

        {/* Barra de Filtros Interativos (Dinamismo Total) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted font-semibold uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            <span>Filtrar por:</span>
          </div>
          {filterCategories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id as any)}
                className={`tap-target px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-surface hover:bg-primary/10 text-body border border-primary/15'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grade de Cartões com Animação e Hover Dinâmico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area) => {
            const Icon = iconMap[area.iconName] || ShieldAlert;
            return (
              <article
                key={area.id}
                className="interactive-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-surface group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface text-primary border border-primary/20">
                      Orientação Ativa
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-body mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>

                  <div className="mb-6 p-4 rounded-2xl bg-surface/50 border border-primary/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2.5">
                      Situações atendidas:
                    </h4>
                    <ul className="space-y-2 text-xs text-body">
                      {area.topics.map((t, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/15 mt-auto">
                  <button
                    type="button"
                    onClick={() => handleSelectArea(area.id)}
                    className="btn-accent w-full text-xs font-bold py-3.5 rounded-xl justify-center shadow-sm"
                  >
                    <span>Faça sua denúncia nesta área</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
