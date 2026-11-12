'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Map,
  ExternalLink,
  Copy,
  Check,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ContactMapSection() {
  const [loadMap, setLoadMap] = useState(false);
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  const address = 'Rua do Sol, s/n – Centro, São Luís/MA, CEP 65020-590';
  const email = 'rasfama1@gmail.com';
  const phone = '(98) 98437-4350';
  const phoneRaw = '+5598984374350';
  const whatsappUrl = 'https://wa.me/5598984374350?text=Ol%C3%A1%2C+estou+entrando+em+contato+pelo+site+da+RASFAMA';
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua do Sol, Centro, São Luís - MA, 65020-590')}`;

  const handleCopy = (type: 'phone' | 'email', value: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setCopiedField(type);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <section id="contato" className="py-24 bg-surface/50 border-t border-primary/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações de Contato */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-background border border-primary/20 shadow-sm">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Nossa Sede & Atendimento Humanizado</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-4">
              Vamos trabalhar juntos
            </h2>
            <p className="text-muted text-base sm:text-lg mb-8 leading-relaxed">
              Estamos de portas abertas para ouvir, acolher e agir. Entre em contato pelos nossos canais diretos ou venha tomar um café conosco no Centro Histórico de São Luís.
            </p>

            <div className="space-y-4">
              {/* Endereço */}
              <div className="interactive-card p-5 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-base text-body mb-1">
                    Endereço Oficial
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {address}
                  </p>
                  <a
                    href={mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-bold hover:underline mt-2"
                  >
                    <span>Abrir rotas no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Telefone e WhatsApp com botão de copiar */}
              <div className="interactive-card p-5 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-base text-body mb-1">
                      Telefone & WhatsApp de Plantão
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopy('phone', phone)}
                      className="text-xs text-muted hover:text-primary flex items-center gap-1 font-semibold p-1"
                      aria-label="Copiar número de telefone"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-accent" />
                          <span className="text-accent">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-muted mb-3">
                    Atendimento de segunda a sexta-feira, das 08h às 18h:
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${phoneRaw}`}
                      className="tap-target px-4 py-2 rounded-xl bg-surface text-body font-bold text-sm hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm"
                    >
                      Ligar: {phone}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap-target btn-accent text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Chamar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* E-mail Oficial com botão de copiar */}
              <div className="interactive-card p-5 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-base text-body mb-1">
                      E-mail Institucional
                    </h3>
                    <button
                      type="button"
                      onClick={() => handleCopy('email', email)}
                      className="text-xs text-muted hover:text-primary flex items-center gap-1 font-semibold p-1"
                      aria-label="Copiar endereço de e-mail"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-accent" />
                          <span className="text-accent">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-muted">
                    Para ofícios, termos de parceria, convênios e comunicados:
                  </p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-primary font-bold hover:underline block mt-1"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa Incorporado Leve com Alto Impacto Visual */}
          <div className="h-full min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border border-primary/20 bg-background relative flex items-center justify-center shadow-card">
            {loadMap ? (
              <iframe
                title="Localização da RASFAMA no Centro de São Luís"
                src="https://maps.google.com/maps?q=Rua+do+Sol,+Centro,+S%C3%A3o+Lu%C3%ADs+-+MA,+65020-590&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '460px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center max-w-sm">
                <div className="w-16 h-16 rounded-2xl bg-surface text-primary flex items-center justify-center mb-4 shadow-sm">
                  <Map className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-xl text-body mb-2">
                  Mapa do Centro Histórico
                </h3>
                <p className="text-xs text-muted mb-6 leading-relaxed">
                  Para economizar dados móveis de conexão 3G/4G e carregar mais rápido, o mapa é renderizado somente após a sua solicitação.
                </p>
                <button
                  type="button"
                  onClick={() => setLoadMap(true)}
                  className="btn-primary text-sm shadow-card"
                >
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Carregar mapa interativo</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
