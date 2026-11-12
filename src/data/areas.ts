import { AreaOfWork } from '@/types';

export const AREAS_OF_WORK: AreaOfWork[] = [
  {
    id: 'saude',
    title: 'Saúde',
    shortDesc: 'Orientação contra negligência médica, falta de leitos, medicamentos e desrespeito no SUS.',
    fullDesc: 'O acesso à saúde digna e de qualidade é um direito constitucional fundamental. Atuamos no acolhimento de cidadãos que enfrentam negativas de tratamento, escassez de remédios de alto custo e desrespeito nas unidades hospitalares.',
    iconName: 'HeartPulse',
    topics: ['Negligência e omissão de socorro', 'Falta de consultas, exames e leitos', 'Falta de medicamentos essenciais', 'Violência obstétrica e desrespeito'],
    rights: {
      title: 'Direito à Saúde e Atendimento Digno',
      explanation: 'O SUS deve garantir atendimento universal, gratuito, igualitário e humanizado a qualquer pessoa. A recusa de atendimento médico de emergência ou a falta injustificada de medicamentos distribuídos pelo Estado configuram violação direta de direitos.',
      whereToSeekHelp: [
        { name: 'Ouvidoria do SUS / DISQUE 136', description: 'Canal federal gratuito para reclamações, denúncias e solicitações sobre serviços do SUS.' },
        { name: 'Defensoria Pública do Estado (DPE-MA)', description: 'Núcleo de Saúde para ações judiciais emergenciais de obtenção de leitos de UTI, cirurgias e remédios.' },
        { name: 'Ministério Público do Maranhão (MPMA)', description: 'Promotoria de Justiça de Defesa da Saúde para fiscalizar a infraestrutura dos hospitais e postos.' }
      ]
    }
  },
  {
    id: 'educacao',
    title: 'Educação',
    shortDesc: 'Garantia de vagas escolares, transporte seguro, merenda digna e combate à evasão.',
    fullDesc: 'A educação transforma vidas. Monitoramos e orientamos famílias sobre negativas de matrícula, falta de professores, carência de transporte escolar e condições precárias de escolas públicas.',
    iconName: 'GraduationCap',
    topics: ['Falta de vagas em creches e escolas', 'Precariedade no transporte escolar', 'Alunos com deficiência sem mediador', 'Cobranças indevidas e bullying institucional'],
    rights: {
      title: 'Direito à Educação Pública de Qualidade',
      explanation: 'Toda criança e jovem tem direito assegurado à vaga na rede pública próxima à sua residência, com alimentação adequada, transporte seguro e mediação especializada para estudantes com deficiência.',
      whereToSeekHelp: [
        { name: 'Conselho Tutelar', description: 'Órgão de ação rápida no município para assegurar vagas imediatas e combater violações aos direitos de crianças.' },
        { name: 'Promotoria de Justiça da Educação (MPMA)', description: 'Atua contra a precariedade estrutural de colégios, falta de merenda ou ausência de corpo docente.' },
        { name: 'Secretarias Municipal e Estadual de Educação', description: 'Canais formais para solicitações de transferência, lotação de profissionais e fiscalização de rotas de ônibus.' }
      ]
    }
  },
  {
    id: 'sistema-penitenciario',
    title: 'Sistema Penitenciário',
    shortDesc: 'Apoio humanizado a familiares, combate a tortura, superlotação e abusos no cárcere.',
    fullDesc: 'A pena privativa de liberdade não retira a dignidade humana do indivíduo. Prestamos escuta qualificada e encaminhamento a familiares sobre condições carcerárias, abusos e acesso à documentação.',
    iconName: 'ShieldAlert',
    topics: ['Denúncias de maus-tratos e tortura', 'Dificuldades e humilhações em dias de visita', 'Falta de assistência médica e jurídica interna', 'Atraso na concessão de benefícios penais'],
    rights: {
      title: 'Garantias Fundamentais no Sistema Prisional',
      explanation: 'A integridade física e moral da pessoa presa deve ser preservada pela Lei de Execução Penal. Familiares têm direito a visitas em condições respeitosas e a receber informações claras sobre o estado de saúde do custodiado.',
      whereToSeekHelp: [
        { name: 'Núcleo de Execução Penal da DPE-MA', description: 'Acompanhamento processual gratuito e pedidos de progressão de regime, indulto e liberdade condicional.' },
        { name: 'Mecanismo Estadual de Prevenção e Combate à Tortura (MEPCT-MA)', description: 'Inspeção independente das unidades prisionais e apuração de denúncias graves.' },
        { name: 'Comissão de Direitos Humanos da OAB-MA', description: 'Fiscalização de garantias civis e acolhimento de denúncias de arbitrariedades policiais e penitenciárias.' }
      ]
    }
  },
  {
    id: 'assistencia-social',
    title: 'Assistência Social',
    shortDesc: 'Orientação clara sobre CadÚnico, Bolsa Família, BPC/LOAS, CRAS e CREAS.',
    fullDesc: 'Muitas famílias perdem benefícios por falta de informação ou dificuldades com cadastros burocráticos. Ajudamos a destravar direitos socioassistenciais garantidos por lei.',
    iconName: 'Building2',
    topics: ['Bloqueio ou cancelamento indevido de benefícios', 'Dificuldades no agendamento do CRAS/CREAS', 'Acesso ao BPC para idosos e PCDs', 'Auxílio-gás, tarifa social e cesta básica'],
    rights: {
      title: 'Proteção e Seguridade Social',
      explanation: 'A assistência social é devida a quem dela necessitar, independentemente de contribuição previdenciária. O bloqueio injustificado de benefícios vitais como o BPC ou Bolsa Família pode ser contestado judicialmente.',
      whereToSeekHelp: [
        { name: 'CRAS e CREAS do seu bairro/cidade', description: 'Porta de entrada para atualização do Cadastro Único e acompanhamento sociofamiliar continuado.' },
        { name: 'Defensoria Pública da União (DPU)', description: 'Gratuita para recorrer de negativas e bloqueios de benefícios federais emitidos pelo INSS.' },
        { name: 'Central MDS 121', description: 'Atendimento telefônico gratuito do Ministério do Desenvolvimento e Assistência Social.' }
      ]
    }
  },
  {
    id: 'grupos-vulneraveis',
    title: 'Grupos Vulneráveis',
    shortDesc: 'Proteção integrada a crianças, adolescentes, idosos, mulheres e pessoas com deficiência.',
    fullDesc: 'Prioridade absoluta e proteção integral para quem mais necessita de voz e cuidado na sociedade maranhense, combatendo todo tipo de violência doméstica, abandono e discriminação.',
    iconName: 'Users',
    topics: ['Violência doméstica e familiar contra a mulher', 'Abandono material e violência financeira contra idosos', 'Acessibilidade urbana e inclusão de PCDs', 'Violações contra a infância e juventude'],
    rights: {
      title: 'Proteção Integral e Não Discriminação',
      explanation: 'O Estatuto da Criança e do Adolescente (ECA), o Estatuto da Pessoa Idosa, a Lei Maria da Penha e a Lei Brasileira de Inclusão (LBI) asseguram prioridade no atendimento e medidas protetivas de urgência imediatas.',
      whereToSeekHelp: [
        { name: 'Disque 100 (Direitos Humanos) e Ligue 180 (Mulher)', description: 'Centrais nacionais gratuitas disponíveis 24 horas todos os dias com encaminhamento policial.' },
        { name: 'Delegacias Especializadas (DEAM, DPCA e DPCID)', description: 'Atendimento direcionado à proteção da mulher, criança e idoso/PCD em São Luís e comarcas.' },
        { name: 'Centros de Referência de Atendimento à Mulher (CRAM)', description: 'Acolhimento psicológico, social e jurídico confidencial para mulheres sob ameaça.' }
      ]
    }
  },
  {
    id: 'direitos-trabalhistas',
    title: 'Direitos Trabalhistas',
    shortDesc: 'Defesa contra trabalho análogo à escravidão, informalidade abusiva e falta de pagamento.',
    fullDesc: 'Orientamos trabalhadores urbanos e rurais sobre demissões sem verbas rescisórias, condições degradantes, retenção de carteira e ausência de equipamentos de proteção individual (EPIs).',
    iconName: 'Briefcase',
    topics: ['Trabalho em condições degradantes ou análogas à escravidão', 'Falta de recolhimento de FGTS e INSS', 'Acidentes de trabalho sem amparo', 'Salários atrasados e rescisão sem quitação'],
    rights: {
      title: 'Dignidade no Trabalho e Verbas Rescisórias',
      explanation: 'Todo trabalhador tem direito a remuneração justa, descanso semanal remunerado, décimo terceiro, férias, jornada delimitada e ambiente de trabalho salubre e seguro.',
      whereToSeekHelp: [
        { name: 'Superintendência Regional do Trabalho (SRT/MTE-MA)', description: 'Órgão de fiscalização in loco para apuração de irregularidades na contratação e condições de labor.' },
        { name: 'Ministério Público do Trabalho (MPT-MA)', description: 'Canal prioritário para denúncias coletivas, assédio moral e resgate de trabalhadores explorados.' },
        { name: 'Varas do Trabalho / Justiça do Trabalho (TRT 16ª Região)', description: 'Ingresso com reclamações trabalhistas para cobrança de verbas de direito.' }
      ]
    }
  },
  {
    id: 'antirracismo',
    title: 'Luta contra o Racismo e Diversidade Religiosa',
    shortDesc: 'Combate à injúria racial, ao racismo estrutural e à intolerância contra matrizes africanas.',
    fullDesc: 'O Maranhão é rico em cultura, ancestralidade e diversidade. Não toleramos ataques a terreiros, discriminação religiosa ou preconceito racial institucional.',
    iconName: 'Scale',
    topics: ['Ataques e invasões a terreiros e templos religiosos', 'Injúria racial e racismo institucional', 'Discriminação em estabelecimentos comerciais e públicos', 'Desrespeito à cultura afro-brasileira e quilombola'],
    rights: {
      title: 'Liberdade Religiosa e Inviolabilidade Racial',
      explanation: 'A Lei nº 7.716/1989 e as recentes alterações equiparam a injúria racial ao crime de racismo, tornando-o inafiançável e imprescritível. O livre exercício dos cultos religiosos é protegido pela Constituição.',
      whereToSeekHelp: [
        { name: 'Delegacia de Crimes Raciais e Delitos de Intolerância (DECRADI)', description: 'Investigação especializada de crimes motivados por raça, cor, etnia ou crença religiosa.' },
        { name: 'Promotoria de Justiça de Direitos Humanos (MPMA)', description: 'Garantia das salvaguardas constitucionais e reparação de danos a comunidades tradicionais e de axé.' },
        { name: 'Secretaria de Estado de Igualdade Racial (SEIR-MA)', description: 'Políticas públicas afirmativas, orientação institucional e mediação de conflitos.' }
      ]
    }
  }
];

