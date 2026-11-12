'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
  Home,
  Grid,
  Scale,
  Users,
  Newspaper,
  Phone
} from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setScrolled(totalScroll > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Notifica componentes externos (como BottomNav) e bloqueia scroll ao abrir menu mobile
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mobile-menu-state', { detail: mobileMenuOpen }));
    }
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Fecha no Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Início', href: '/#inicio', icon: Home, desc: 'Apresentação inicial' },
    { label: 'Áreas de Atuação', href: '/#areas', icon: Grid, desc: 'Saúde, assistência, trabalho e mais' },
    { label: 'Seus Direitos', href: '/#direitos', icon: Scale, desc: 'Orientações e onde buscar ajuda' },
    { label: 'Sobre a RASFAMA', href: '/#sobre', icon: Users, desc: 'Missão, visão e valores' },
    { label: 'Notícias & Ações', href: '/#noticias', icon: Newspaper, desc: 'Últimos acontecimentos locais' },
    { label: 'Contato & Sede', href: '/#contato', icon: Phone, desc: 'Endereço e canais diretos' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Barra de progresso de leitura no topo */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md shadow-soft border-b border-primary/15 py-3'
            : 'bg-background/70 backdrop-blur-sm py-4 border-b border-primary/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/#inicio"
              className="flex items-center gap-2 tap-target focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label="RASFAMA - Página inicial"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative h-10 w-36 sm:w-44 md:w-48">
                <Image
                  src="/assets/logo-light.svg"
                  alt="RASFAMA - Rede de Apoio Social e Familiar do Maranhão"
                  fill
                  sizes="(max-width: 768px) 150px, 192px"
                  className="object-contain object-left dark:hidden"
                  priority
                />
                <Image
                  src="/assets/logo-dark.svg"
                  alt="RASFAMA - Rede de Apoio Social e Familiar do Maranhão"
                  fill
                  sizes="(max-width: 768px) 150px, 192px"
                  className="object-contain object-left hidden dark:block"
                  priority
                />
              </div>
            </Link>

            {/* Navegação Desktop */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body font-medium hover:text-primary transition-colors py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Ações Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/#atendimento"
                className="btn-primary text-sm shadow-sm"
              >
                <span>Solicitar atendimento</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Controles Mobile & Tablet */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="tap-target w-12 h-12 rounded-2xl bg-surface/80 border border-primary/20 text-body flex items-center justify-center hover:bg-surface hover:text-primary transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-drawer"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile / Drawer Totalmente Centralizado e Responsivo */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal de navegação móvel"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-background/98 backdrop-blur-2xl overflow-y-auto lg:hidden animate-in fade-in duration-200"
        >
          {/* Topo do Drawer */}
          <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-primary/15 px-4 sm:px-6 py-3.5 flex items-center justify-between z-10 shadow-sm shrink-0">
            <div className="relative h-9 w-36 sm:w-44">
              <Image
                src="/assets/logo-light.svg"
                alt="RASFAMA"
                fill
                sizes="160px"
                className="object-contain object-left dark:hidden"
              />
              <Image
                src="/assets/logo-dark.svg"
                alt="RASFAMA"
                fill
                sizes="160px"
                className="object-contain object-left hidden dark:block"
              />
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="tap-target w-11 h-11 rounded-2xl bg-surface border border-primary/20 text-body flex items-center justify-center hover:bg-danger/10 hover:text-danger transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Fechar menu de navegação"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Opções do Menu 100% Centralizadas */}
          <div className="px-4 py-4 flex-1 flex flex-col items-center justify-center text-center my-auto">
            <nav
              aria-label="Links do menu móvel"
              className="flex flex-col items-center justify-center gap-1.5 w-full max-w-sm mx-auto"
            >
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="tap-target w-full py-2.5 px-4 rounded-2xl hover:bg-surface active:bg-surface/80 border border-transparent hover:border-primary/15 transition-all flex flex-col items-center justify-center text-center group"
                  >
                    <div className="flex items-center justify-center gap-2 text-center">
                      <div className="w-7 h-7 rounded-lg bg-surface group-hover:bg-primary/15 text-primary flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="font-heading font-bold text-lg text-body group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <span className="text-xs text-muted text-center mt-0.5">
                      {link.desc}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Botões de Ação Inferiores (100% Visíveis e Responsivos, Nunca Cortados) */}
          <div className="px-4 sm:px-6 pt-2 pb-6 sm:pb-8 border-t border-primary/15 bg-background/95 backdrop-blur-md shrink-0 w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-2.5">
              {/* Botão Pedir Atendimento */}
              <button
                type="button"
                onClick={() => handleNavClick('/#atendimento')}
                className="tap-target min-h-[48px] btn-primary w-full text-sm sm:text-base py-3 rounded-xl justify-center font-bold shadow-soft"
              >
                <HeartHandshake className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Pedir Atendimento Agora</span>
              </button>

              {/* Botão WhatsApp 100% Responsivo */}
              <a
                href="https://wa.me/5598984374350?text=Ol%C3%A1%2C+estou+no+site+e+gostaria+de+orienta%C3%A7%C3%A3o"
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target min-h-[48px] w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 shrink-0 fill-current text-white" aria-hidden="true" />
                <span>Falar no WhatsApp Oficial</span>
              </a>
            </div>

            {/* Linha discreta de plantão */}
            <p className="text-[11px] text-muted text-center flex items-center justify-center gap-1.5 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
              <span>Plantão: (98) 98437-4350 · São Luís – MA</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
