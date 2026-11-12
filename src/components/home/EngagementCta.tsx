import React from 'react';
import Link from 'next/link';
import { HeartHandshake, UserPlus, Sparkles } from 'lucide-react';

export default function EngagementCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-deep via-primary to-navy text-white relative overflow-hidden">
      {/* Detalhes gráficos translúcidos */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>Junte-se à Nossa Causa</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white">
          “Quando um direito é violado, ninguém deve ficar sozinho.”
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nossa rede só tem força porque conta com pessoas comprometidas em transformar realidades. Como membro ou voluntário, você ajuda a construir um Maranhão mais justo e solidário.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/membros#seja-membro"
            className="tap-target w-full sm:w-auto px-8 py-4 rounded-full bg-white text-navy font-bold hover:bg-surface transition-all shadow-float flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5 text-primary" aria-hidden="true" />
            <span>Seja Membro</span>
          </Link>

          <Link
            href="/membros#voluntariado"
            className="tap-target w-full sm:w-auto px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <HeartHandshake className="w-5 h-5 text-accent" aria-hidden="true" />
            <span>Quero ser Voluntário</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

