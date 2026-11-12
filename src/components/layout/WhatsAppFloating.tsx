'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloating() {
  const whatsappUrl = 'https://wa.me/5598984374350?text=Ol%C3%A1%2C+preciso+de+orienta%C3%A7%C3%A3o+da+RASFAMA';

  return (
    <aside aria-label="Canal rápido do WhatsApp" className="hidden md:block">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tap-target fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-float flex items-center gap-3 transition-all hover:scale-105 focus-visible:ring-4 focus-visible:ring-accent group"
        aria-label="Fale conosco pelo WhatsApp (abre em nova janela)"
      >
        <MessageCircle className="w-6 h-6 shrink-0 fill-current" aria-hidden="true" />
        <span className="font-semibold text-sm max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Chamar no WhatsApp
        </span>
      </a>
    </aside>
  );
}

