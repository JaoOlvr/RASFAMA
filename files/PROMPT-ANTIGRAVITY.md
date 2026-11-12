# PROMPT — Novo site da RASFAMA (Rede de Apoio Social e Familiar do Maranhão)

## Papel
Atue como designer de produto e desenvolvedor front-end sênior. Recrie por completo o site da **RASFAMA** (https://www.rasfama.com.br), uma associação sem fins lucrativos de São Luís – MA que defende direitos humanos e oferece acolhimento, orientação e encaminhamento a pessoas e famílias em vulnerabilidade. O site deve transmitir **confiança, acolhimento, seriedade e esperança**, e ser extremamente fácil de usar por pessoas com pouca familiaridade com tecnologia, em celulares simples e internet lenta.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS. Se preferir algo mais simples, HTML/CSS/JS puro também serve, mas mantenha tudo componentizado.
- Sem dependências pesadas. Ícones em SVG inline (lucide) e fonte via `next/font` (sugestão: **Poppins** nos títulos e **Inter** no texto).
- Exportável como site estático e hospedável de forma barata.

## Princípios
1. **Mobile first de verdade**: projete primeiro para 360–390 px e só depois expanda para tablet (768) e desktop (1280). Alvos de toque com no mínimo 48×48 px, texto base de 16–18 px, navegação com menu hambúrguer em tela cheia e barra fixa inferior no celular com 2 ações: **Pedir atendimento** e **WhatsApp**.
2. **Dark mode e Light mode**: respeitar `prefers-color-scheme`, com botão de alternância (sol/lua) no cabeçalho e preferência salva em localStorage. Usar variáveis CSS/tokens, nunca cores fixas nos componentes.
3. **Acessibilidade (WCAG 2.2 AA)**: contraste mínimo 4.5:1, foco visível, HTML semântico, `alt` em imagens, `aria-label` nos botões de ícone, respeitar `prefers-reduced-motion`, formulários com rótulos reais e mensagens de erro claras. Incluir página "Declaração de Acessibilidade".
4. **Desempenho**: LCP < 2,5 s em 4G, imagens otimizadas (WebP/AVIF, `loading="lazy"`), CSS crítico enxuto, nota Lighthouse ≥ 95 nas quatro categorias.
5. **Tom de voz**: linguagem simples, direta, humana e sem juridiquês. Frases curtas.

## Identidade visual (extraída da logo)
| Token | Light | Dark | Uso |
|---|---|---|---|
| `--primary` | `#2E6199` | `#6FA0D6` | botões, links, destaques |
| `--primary-deep` | `#1B4478` | `#9CC0E8` | títulos, cabeçalhos |
| `--navy` | `#0F2740` | `#0B1B2E` | rodapé, hero, fundo dark |
| `--accent` (folha) | `#6BAA3B` | `#8BCB57` | selos, ícones de esperança, detalhes |
| `--bg` | `#FFFFFF` | `#0B1B2E` | fundo da página |
| `--surface` | `#EAF1F9` | `#12263D` | cartões e seções alternadas |
| `--text` | `#14263A` | `#E8F0F9` | texto |
| `--muted` | `#4B607A` | `#A9BBD0` | texto secundário |
| `--danger` (denúncia) | `#C0392B` | `#FF7B6B` | uso mínimo, só em alertas |

- Cantos arredondados (16–24 px), sombras suaves, muito espaço em branco.
- Elementos gráficos: formas orgânicas de mãos e círculos translúcidos, como no hero.
- Botão primário em azul `--primary` com texto branco; botão secundário em contorno; botão de destaque "Faça sua denúncia" em verde `--accent` com texto escuro de bom contraste.

## Assets (já prontos, na pasta `public/assets/`)
- `logo-light.svg` → usar no tema claro; `logo-dark.svg` → usar no tema escuro. Trocar automaticamente conforme o tema (via `<picture>` ou classes `dark:hidden` / `hidden dark:block`).
- `favicon.svg`, `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `favicon-180.png` (apple-touch-icon), `favicon-192.png`, `favicon-512.png` → configurar no `<head>` e em um `manifest.webmanifest` (theme_color `#2E6199`).
- `hero.svg` / `hero.png` → fundo do hero (retrato, mobile first). No desktop, usar `object-fit: cover` com `object-position: center`. Não alterar as cores.

## Estrutura da página inicial (nesta ordem)
1. **Header fixo**: logo (versão do tema), links (Início, Áreas de Atuação, Sobre, Notícias, Contato), botão de tema e botão "Solicitar atendimento". No celular, vira hambúrguer.
2. **Hero** (usa `hero.svg`): selo "Associação sem fins lucrativos"; título **"Rede de Apoio Social e Familiar do Maranhão"**; subtítulo *"Defendemos direitos, fortalecemos famílias e transformamos realidades no Maranhão."*; botões **SOLICITAR ATENDIMENTO** e **Conheça seus direitos**; linha de confiança "🔒 Atendimento com sigilo, respeito e responsabilidade".
3. **Missão, Visão e Valores**: missão "Defender direitos, fortalecer famílias e transformar realidades no Maranhão." Valores: Transparência, Solidariedade e Respeito à Diversidade (3 cartões com ícone).
4. **Áreas de Atuação** (cartões em grade; no celular, carrossel/lista vertical, com botão "Faça sua denúncia" levando ao formulário com a área já selecionada):
   - Saúde – negligência, falta de atendimento, desrespeito
   - Educação – violações de direitos de alunos e responsáveis
   - Sistema Penitenciário – apoio a familiares e denúncias de abusos
   - Assistência Social – benefícios, CRAS, CREAS e programas sociais
   - Grupos Vulneráveis – crianças, idosos, mulheres e PCDs
   - Direitos Trabalhistas
   - Luta contra o Racismo e respeito às religiões de matrizes africanas
5. **Conheça seus direitos**: acordeões (um por área) com texto curto e claro explicando o direito e onde buscar ajuda (Ministério Público, Defensoria Pública, Conselho Tutelar, órgãos de defesa do consumidor, CRAS/CREAS, Justiça). Reaproveitar o conteúdo atual do site, resumido e em linguagem simples.
6. **Como funciona o atendimento** em 3 passos: 1) Você conta o que aconteceu · 2) Nós orientamos e encaminhamos · 3) Acompanhamos o seu caso.
7. **Chamada para engajamento**: *"Quando um direito é violado, ninguém deve ficar sozinho."* com botões **Seja membro** e **Quero ser voluntário**.
8. **Formulário de cadastro/atendimento** (abas ou seções): Nome*, E-mail*, Telefone* (máscara BR), Cidade*, Profissão*, Assunto (select com as áreas), Mensagem, checkboxes "Deseja ser voluntário?" e "Deseja participar de ações sociais?", e o aceite LGPD* (texto: *"Em conformidade com a LGPD – Lei nº 13.709/2018, tratamos seus dados com responsabilidade, transparência e segurança, usando-os apenas para atendimento, comunicação e melhoria dos serviços."*). Validação em tempo real, estados de carregando/sucesso/erro, proteção anti-spam (honeypot) e envio por serviço configurável (Formspree/Resend/API route) para `rasfama1@gmail.com`.
9. **Notícias / Últimos acontecimentos**: carrossel de cartões com imagem, data e título; dados em JSON/MDX local fácil de editar.
10. **Contato**: "Vamos trabalhar juntos". Endereço: Rua do Sol, s/n – São Luís/MA, CEP 65020-590 · E-mail: rasfama1@gmail.com · Tel.: (98) 98437-4350 (botão "Chamar no WhatsApp" e link `tel:`) + mapa incorporado leve (carregar só ao clicar).
11. **Rodapé** (fundo `--navy`): logo dark, resumo da missão, links rápidos, redes sociais (placeholders), Política de Privacidade, Política de Cookies, Declaração de Acessibilidade, © ano atual RASFAMA.

## Extras
- Botão flutuante de WhatsApp (ocultar quando a barra inferior mobile estiver visível, para não duplicar).
- Banner de cookies simples e acessível (LGPD), com "Aceitar" e "Configurar".
- Microinterações discretas (fade/slide no scroll, hover em cartões), todas desativadas com `prefers-reduced-motion`.
- SEO completo: `title`, `meta description`, Open Graph/Twitter card, `sitemap.xml`, `robots.txt`, JSON-LD `NGO`/`Organization` com endereço e telefone, `lang="pt-BR"`.
- Páginas internas: Política de Privacidade, Política de Cookies, Declaração de Acessibilidade, Membros/Participantes (placeholder).

## Entregáveis
1. Projeto completo rodando com `npm run dev`.
2. Tokens de cor configurados no Tailwind (`tailwind.config`) e variáveis CSS para os temas.
3. README curto explicando como editar textos, notícias e trocar o e-mail de destino do formulário.
4. Relatório final com as notas do Lighthouse e o que ainda precisa de conteúdo real (fotos, depoimentos, redes sociais).

Antes de codar, apresente um plano curto (estrutura de pastas e componentes). Depois, implemente e teste no viewport de 390 px, 768 px e 1280 px, nos dois temas.
