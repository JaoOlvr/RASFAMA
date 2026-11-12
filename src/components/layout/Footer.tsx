import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Mail, Phone, MapPin, Shield } from 'lucide-react';

// SVGs inline para redes sociais (WCAG acessível)
function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-[#E8F0F9] pt-14 pb-24 md:pb-14 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1: Sobre & Missão */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/assets/logo-dark.svg"
                alt="RASFAMA - Rede de Apoio Social e Familiar do Maranhão"
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-[#A9BBD0] leading-relaxed">
              Defendemos direitos, fortalecemos famílias e transformamos realidades no Maranhão. Associação sem fins lucrativos comprometida com a justiça social e acolhimento humanizado.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8BCB57] font-medium pt-2">
              <Shield className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Atendimento com sigilo, respeito e responsabilidade</span>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide uppercase font-heading text-sm">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A9BBD0]">
              <li>
                <Link href="/#inicio" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#areas" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="/#direitos" className="hover:text-white transition-colors">
                  Conheça Seus Direitos
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona o Atendimento
                </Link>
              </li>
              <li>
                <Link href="/#noticias" className="hover:text-white transition-colors">
                  Últimos Acontecimentos
                </Link>
              </li>
              <li>
                <Link href="/#atendimento" className="hover:text-white transition-colors">
                  Solicitar Atendimento
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Transparência */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 tracking-wide uppercase font-heading text-sm">
              Transparência & Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A9BBD0]">
              <li>
                <Link href="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/acessibilidade" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Declaração de Acessibilidade</span>
                  <span className="text-[10px] bg-[#2E6199] text-white px-1.5 py-0.5 rounded font-mono">WCAG 2.2</span>
                </Link>
              </li>
              <li>
                <Link href="/membros" className="hover:text-white transition-colors">
                  Membros & Participantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white mb-4 tracking-wide uppercase font-heading text-sm">
              Sede e Canais
            </h3>
            <p className="text-sm text-[#A9BBD0] flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-[#6FA0D6] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Rua do Sol, s/n – Centro, São Luís/MA, CEP 65020-590</span>
            </p>
            <p className="text-sm text-[#A9BBD0] flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-[#6FA0D6] shrink-0" aria-hidden="true" />
              <a href="mailto:rasfama1@gmail.com" className="hover:text-white transition-colors">
                rasfama1@gmail.com
              </a>
            </p>
            <p className="text-sm text-[#A9BBD0] flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-[#6FA0D6] shrink-0" aria-hidden="true" />
              <a href="tel:+5598984374350" className="hover:text-white transition-colors">
                (98) 98437-4350
              </a>
            </p>
            <div className="pt-2">
              <span className="text-xs text-[#A9BBD0] block mb-2 font-medium">Siga nossas ações:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target w-10 h-10 rounded-full bg-white/10 hover:bg-[#6BAA3B] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram da RASFAMA (link externo)"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target w-10 h-10 rounded-full bg-white/10 hover:bg-[#2E6199] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook da RASFAMA (link externo)"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target w-10 h-10 rounded-full bg-white/10 hover:bg-[#C0392B] text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube da RASFAMA (link externo)"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Direitos */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A9BBD0] gap-4">
          <p>© {currentYear} RASFAMA — Rede de Apoio Social e Familiar do Maranhão. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-[#FF7B6B] fill-current" aria-hidden="true" />
            <span>para a comunidade do Maranhão</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
