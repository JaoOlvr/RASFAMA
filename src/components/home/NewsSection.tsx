'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowUpRight,
  X,
  Share2,
  HeartHandshake,
  Check
} from 'lucide-react';
import { NEWS_ARTICLES } from '@/data/news';
import { NewsArticle } from '@/types';

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [copied, setCopied] = useState(false);

  // Fecha no Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="noticias" className="py-24 bg-surface/40 border-t border-primary/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-background border border-primary/20 shadow-sm">
              <Newspaper className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>Transparência & Ações Comunitárias</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-2">
              Últimos Acontecimentos
            </h2>
            <p className="text-muted text-base sm:text-lg">
              Acompanhe as iniciativas, mutirões de cidadania e conquistas da RASFAMA no Maranhão.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-xs text-primary font-bold bg-background px-4 py-2 rounded-full border border-primary/20 shadow-sm inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Notícias locais atualizadas
            </span>
          </div>
        </div>

        {/* Grade de Cartões com Hover Vivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="interactive-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full bg-primary/10 overflow-hidden">
                  <Image
                    src={article.image || '/assets/hero.png'}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent text-[#0F2740] shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-body group-hover:text-primary transition-colors line-clamp-2 mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="tap-target w-full text-xs font-bold text-primary hover:text-primary-deep flex items-center justify-between py-2 border-t border-primary/15 group-hover:border-primary/40 transition-colors"
                  aria-label={`Ler notícia completa: ${article.title}`}
                >
                  <span>Ler relato completo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Acessível de Leitura Completa da Notícia */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-background border border-primary/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-float relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b border-primary/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/20 text-accent">
                {selectedArticle.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="tap-target w-10 h-10 rounded-full bg-surface text-body flex items-center justify-center hover:bg-surface/80 hover:text-danger transition-colors"
                aria-label="Fechar notícia"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                {selectedArticle.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                {selectedArticle.readTime}
              </span>
            </div>

            <h3 id="modal-article-title" className="font-heading text-2xl sm:text-3xl font-bold text-body mb-4 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-surface">
              <Image
                src={selectedArticle.image || '/assets/hero.png'}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-body text-sm sm:text-base leading-relaxed space-y-4 mb-8">
              <p className="font-medium text-lg text-primary">
                {selectedArticle.summary}
              </p>
              <p className="text-muted">
                As equipes e voluntários da RASFAMA atuam diretamente nas comunidades de São Luís e municípios adjacentes, oferecendo orientação jurídica continuada, assistência às famílias e fortalecendo as redes locais de garantia de direitos humanos.
              </p>
              <p className="text-muted">
                Caso você ou alguém da sua comunidade precise de apoio em situações correlatas a este assunto, nosso canal de acolhimento gratuito está à disposição.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-primary/10">
              <button
                type="button"
                onClick={handleShare}
                className="btn-secondary text-xs py-2 px-4 rounded-xl flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span>Link Copiado!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" aria-hidden="true" />
                    <span>Compartilhar</span>
                  </>
                )}
              </button>

              <a
                href="#atendimento"
                onClick={() => setSelectedArticle(null)}
                className="btn-primary text-xs py-2 px-4 rounded-xl flex items-center gap-2 font-bold"
              >
                <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                <span>Solicitar Orientação</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
