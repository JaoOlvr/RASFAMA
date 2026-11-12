'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeartHandshake, MessageCircle } from 'lucide-react';

export default function BottomNav() {
  const [hidden, setHidden] = useState(false);
  const whatsappUrl = 'https://wa.me/5598984374350?text=Ol%C3%A1%2C+preciso+de+orienta%C3%A7%C3%A3o+da+RASFAMA';

  useEffect(() => {
    // Esconde o BottomNav quando o menu hambúrguer estiver aberto
    const handleMenuState = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setHidden(!!customEvent.detail);
    };

    window.addEventListener('mobile-menu-state', handleMenuState);
    return () => window.removeEventListener('mobile-menu-state', handleMenuState);
  }, []);

  if (hidden) return null;

  return (
    <nav
      aria-label="Ações rápidas no celular"
      className="md:hidden fixed bottom-3 left-3 right-3 max-w-md mx-auto z-40 bg-background/95 backdrop-blur-2xl border border-primary/20 p-2 sm:p-2.5 rounded-2xl shadow-float transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
    >
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 items-stretch">
        {/* Botão Pedir Atendimento */}
        <Link
          href="/#atendimento"
          className="tap-target min-h-[48px] px-2.5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all text-center hover:brightness-105"
        >
          <HeartHandshake className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
          <span className="truncate">Pedir Atendimento</span>
        </Link>

        {/* Botão WhatsApp 100% Responsivo e Destacado */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tap-target min-h-[48px] px-2.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all text-center"
          aria-label="Abrir conversa no WhatsApp oficial da RASFAMA"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-current text-white" aria-hidden="true" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
