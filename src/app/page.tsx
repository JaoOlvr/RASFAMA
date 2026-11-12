import React from 'react';
import Hero from '@/components/home/Hero';
import MissionVisionValues from '@/components/home/MissionVisionValues';
import AreasOfWork from '@/components/home/AreasOfWork';
import KnowYourRights from '@/components/home/KnowYourRights';
import HowItWorks from '@/components/home/HowItWorks';
import EngagementCta from '@/components/home/EngagementCta';
import ContactForm from '@/components/home/ContactForm';
import NewsSection from '@/components/home/NewsSection';
import ContactMapSection from '@/components/home/ContactMapSection';

export default function Home() {
  return (
    <main id="conteudo-principal" className="flex flex-col">
      {/* 2. Hero */}
      <Hero />

      {/* 3. Missão, Visão e Valores */}
      <MissionVisionValues />

      {/* 4. Áreas de Atuação */}
      <AreasOfWork />

      {/* 5. Conheça Seus Direitos (Acordeões com onde buscar ajuda) */}
      <KnowYourRights />

      {/* 6. Como Funciona o Atendimento (3 Passos) */}
      <HowItWorks />

      {/* 7. Chamada para Engajamento ("Quando um direito é violado...") */}
      <EngagementCta />

      {/* 8. Formulário de Cadastro / Atendimento (Validação, Máscara BR, Honeypot, LGPD) */}
      <ContactForm />

      {/* 9. Notícias / Últimos Acontecimentos */}
      <NewsSection />

      {/* 10. Contato & Mapa sob demanda */}
      <ContactMapSection />
    </main>
  );
}

