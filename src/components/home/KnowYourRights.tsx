'use client';

import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Scale,
  Building,
  Search,
  Check,
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AREAS_OF_WORK } from '@/data/areas';

export default function KnowYourRights() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleExpandAll = () => {
    setOpenIndexes(AREAS_OF_WORK.map((_, i) => i));
  };

  const handleCollapseAll = () => {
    setOpenIndexes([]);
  };

  const filteredRights = useMemo(() => {
    if (!searchQuery.trim()) return AREAS_OF_WORK;
    const q = searchQuery.toLowerCase().trim();
    return AREAS_OF_WORK.filter((a) => {
      const matchTitle = a.rights.title.toLowerCase().includes(q) || a.title.toLowerCase().includes(q);
      const matchExpl = a.rights.explanation.toLowerCase().includes(q);
      const matchHelp = a.rights.whereToSeekHelp.some(
        (h) => h.name.toLowerCase().includes(q) || h.description.toLowerCase().includes(q)
      );
      const matchTopics = a.topics.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchExpl || matchHelp || matchTopics;
    });
  }, [searchQuery]);

  return (
    <section id="direitos" className="py-24 bg-surface/50 border-t border-primary/15 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-background border border-primary/20 shadow-sm">
            <Scale className="w-4 h-4" aria-hidden="true" />
            <span>Educação Cidadã & Direitos Humanos</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-4">
            Conheça Seus Direitos
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            Saber os seus direitos é o primeiro passo para exigir dignidade. Busque por temas ou consulte as orientações abaixo:
          </p>
        </div>

        {/* Barra de Pesquisa Interativa em Tempo Real */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquise um direito (ex: remédio, vaga de creche, racismo, BPC, visita...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 rounded-2xl bg-background border border-primary/25 text-body text-base placeholder:text-muted/70 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <Search className="w-5 h-5 text-primary absolute left-4 top-4.5 pointer-events-none" aria-hidden="true" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-4 text-xs font-semibold px-2 py-1 rounded bg-surface text-muted hover:text-body"
              >
                Limpar
              </button>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted mt-3 px-1">
            <span>
              Exibindo <strong>{filteredRights.length}</strong> de {AREAS_OF_WORK.length} orientações
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleExpandAll}
                className="text-primary hover:underline font-semibold"
              >
                Abrir todos
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="text-primary hover:underline font-semibold"
              >
                Fechar todos
              </button>
            </div>
          </div>
        </div>

        {/* Lista de Acordeões WAI-ARIA Interativos */}
        <div className="space-y-4">
          {filteredRights.length === 0 ? (
            <div className="p-8 text-center bg-background rounded-3xl border border-primary/20">
              <HelpCircle className="w-8 h-8 text-muted mx-auto mb-2" aria-hidden="true" />
              <p className="text-body font-semibold">Nenhuma orientação encontrada para "{searchQuery}"</p>
              <p className="text-xs text-muted mt-1">Tente buscar por termos mais simples como saúde, escola, trabalho ou auxílio.</p>
            </div>
          ) : (
            filteredRights.map((area, idx) => {
              const isOpen = openIndexes.includes(idx);
              const buttonId = `accordion-btn-${area.id}`;
              const contentId = `accordion-content-${area.id}`;

              return (
                <div
                  key={area.id}
                  className="interactive-card rounded-2xl overflow-hidden transition-all"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="w-full tap-target px-6 py-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-body hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{area.rights.title} <span className="text-xs font-normal text-muted">({area.title})</span></span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-muted transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-6 pt-2 text-body border-t border-primary/10 animate-in fade-in duration-200"
                    >
                      <div className="p-4 sm:p-5 bg-surface/70 rounded-2xl mb-6 border border-primary/10">
                        <p className="text-sm sm:text-base leading-relaxed text-body">
                          {area.rights.explanation}
                        </p>
                      </div>

                      <h4 className="text-xs uppercase font-bold text-muted tracking-wider mb-3 flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" aria-hidden="true" />
                        Onde buscar ajuda institucional imediata:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {area.rights.whereToSeekHelp.map((org, orgIdx) => (
                          <div
                            key={orgIdx}
                            className="p-4 rounded-xl border border-primary/15 bg-background shadow-sm hover:border-primary/35 transition-all text-xs"
                          >
                            <div className="font-bold text-primary mb-1 text-sm">
                              {org.name}
                            </div>
                            <div className="text-muted leading-relaxed">
                              {org.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-primary/10 flex items-center justify-between flex-wrap gap-3">
                        <span className="text-xs text-muted font-medium">
                          Precisa de apoio para acionar esses órgãos? Nós te acompanhamos.
                        </span>
                        <a
                          href="#atendimento"
                          className="btn-primary text-xs py-2 px-4 rounded-lg font-bold"
                        >
                          <span>Pedir Apoio da RASFAMA</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
