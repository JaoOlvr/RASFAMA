'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check, Settings2 } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem('rasfama-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('rasfama-cookie-consent', JSON.stringify({ essential: true, analytics: true }));
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('rasfama-cookie-consent', JSON.stringify(preferences));
    setVisible(false);
    setShowConfig(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Consentimento de cookies e privacidade"
      role="region"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-background/95 backdrop-blur-md border border-primary/20 p-5 rounded-2xl shadow-float transition-all animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="flex-1 text-sm text-body">
          <h2 className="font-heading font-semibold text-base mb-1">
            Privacidade & Cookies
          </h2>
          <p className="text-muted leading-relaxed text-xs">
            Utilizamos cookies essenciais para navegação e melhoria contínua da sua experiência, em conformidade com a LGPD. Saiba mais em nossa{' '}
            <Link href="/cookies" className="text-primary underline font-medium hover:text-primary-deep">
              Política de Cookies
            </Link>.
          </p>

          {showConfig && (
            <div className="mt-3 p-3 bg-surface rounded-xl space-y-2 text-xs border border-primary/10">
              <label className="flex items-center justify-between font-medium cursor-not-allowed opacity-80">
                <span>Cookies Necessários (Sessão & Segurança)</span>
                <input type="checkbox" checked disabled className="rounded text-primary" />
              </label>
              <label className="flex items-center justify-between font-medium cursor-pointer">
                <span>Estatísticas de Acesso Anônimas</span>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="rounded text-primary focus:ring-accent"
                />
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {showConfig ? (
              <button
                type="button"
                onClick={handleSavePreferences}
                className="btn-primary text-xs py-2 px-3 rounded-lg flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>Salvar Escolhas</span>
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="btn-primary text-xs py-2 px-4 rounded-lg"
                >
                  Aceitar Todos
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfig(true)}
                  className="btn-secondary text-xs py-2 px-3 rounded-lg flex items-center gap-1"
                >
                  <Settings2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Configurar</span>
                </button>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setVisible(false)}
          className="text-muted hover:text-body p-1 tap-target"
          aria-label="Fechar aviso de cookies"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}

