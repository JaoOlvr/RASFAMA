import React from 'react';
import { Eye, Shield, Users, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';

export default function MissionVisionValues() {
  const values = [
    {
      title: 'Transparência',
      desc: 'Prestação de contas aberta, compromisso ético e clareza em cada orientação, processo e recurso gerido.',
      icon: Shield,
      highlight: 'Ética Pública',
    },
    {
      title: 'Solidariedade',
      desc: 'Acolhimento empático que coloca a dignidade humana no centro de todas as ações de suporte comunitário.',
      icon: HeartHandshake,
      highlight: 'Acolhimento Real',
    },
    {
      title: 'Respeito à Diversidade',
      desc: 'Valorização de todas as identidades, crenças de matrizes africanas, etnias e realidades sociais maranhenses.',
      icon: Users,
      highlight: 'Pluralidade',
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-surface/50 border-y border-primary/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-background border border-primary/20 shadow-sm">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Nossa Essência & Compromisso</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Existimos para ser uma ponte sólida entre as necessidades do povo maranhense e a efetivação das garantias constitucionais.
          </p>
        </div>

        {/* Missão e Visão em destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Missão */}
          <div className="interactive-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-primary px-3 py-1.5 bg-primary/10 rounded-full inline-block">
                Nossa Missão
              </span>
              <p className="mt-5 text-xl sm:text-2xl font-bold font-heading text-body leading-snug group-hover:text-primary transition-colors">
                “Defender direitos, fortalecer famílias e transformar realidades no Maranhão.”
              </p>
            </div>
            <p className="mt-5 text-muted text-sm sm:text-base leading-relaxed">
              Atuamos na linha de frente orientando e encaminhando pessoas em situações de vulnerabilidade aos órgãos competentes com total zelo, sigilo e acompanhamento continuado.
            </p>
          </div>

          {/* Visão */}
          <div className="interactive-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-accent px-3 py-1.5 bg-accent/15 rounded-full inline-flex items-center gap-1.5 w-fit">
                <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                Nossa Visão
              </span>
              <p className="mt-5 text-xl sm:text-2xl font-bold font-heading text-body leading-snug group-hover:text-primary transition-colors">
                Ser referência em acolhimento comunitário e justiça social em todo o estado do Maranhão.
              </p>
            </div>
            <p className="mt-5 text-muted text-sm sm:text-base leading-relaxed">
              Construir uma rede integrada onde nenhum maranhense tenha que enfrentar violações de direitos de forma isolada, desinformada ou desamparada.
            </p>
          </div>
        </div>

        {/* 3 Valores */}
        <div>
          <h3 className="text-center font-heading text-xl sm:text-2xl font-bold text-body mb-8">
            Nossos Valores Fundamentais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="interactive-card p-6 sm:p-8 rounded-3xl group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface text-muted">
                      {v.highlight}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-body mb-2 group-hover:text-primary transition-colors">
                    {v.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
