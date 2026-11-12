# RASFAMA — Rede de Apoio Social e Familiar do Maranhão

Portal institucional e de acolhimento social da **RASFAMA** (https://www.rasfama.com.br), associação sem fins lucrativos sediada em São Luís – MA que atua na defesa dos direitos humanos, orientação comunitária e encaminhamento de famílias em situação de vulnerabilidade.

---

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) com tokens de variáveis CSS
- **Ícones**: [Lucide React](https://lucide.dev/) (SVGs inline ultra leves)
- **Acessibilidade**: Conformidade com as diretrizes **WCAG 2.2 Nível AA**
- **SEO & PWA**: JSON-LD Schema.org `NGO`, Open Graph, Twitter Cards e Web App Manifest

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+ ou Bun 1.0+ instalado.

### Instalação e Execução
```bash
# Instalar dependências (via bun ou npm)
bun install
# ou: npm install

# Executar servidor de desenvolvimento
bun run dev
# ou: npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção
```bash
bun run build
# ou: npm run build

bun run start
# ou: npm run start
```

---

## 📝 Como Editar Textos, Notícias e Configurações

### 1. Como editar ou adicionar Notícias
Os artigos e novidades do portal ficam centralizados no arquivo:
📁 `src/data/news.ts`

Basta abrir o arquivo e editar o array `NEWS_ARTICLES`. Exemplo:
```ts
{
  id: '5',
  title: 'Título da Nova Ação Comunitária',
  slug: 'titulo-nova-acao-comunitaria',
  summary: 'Resumo curto explicativo em 2 a 3 linhas...',
  date: '15 de Dezembro de 2026',
  category: 'Acolhimento',
  readTime: '3 min de leitura',
  image: '/assets/hero.png'
}
```

### 2. Como editar as Áreas de Atuação e Direitos
Os tópicos, orientações jurídicas e órgãos institucionais para buscar ajuda ficam centralizados em:
📁 `src/data/areas.ts`

Para alterar ou adicionar um novo direito/órgão de suporte, edite o objeto da respectiva área (Saúde, Educação, Sistema Penitenciário, Assistência Social, etc.).

### 3. Como trocar o e-mail de destino do Formulário de Atendimento
As submissões do formulário são processadas em:
📁 `src/app/api/contact/route.ts`

Por padrão, as mensagens são configuradas para envio para `rasfama1@gmail.com`.

Para conectar a um serviço profissional de envio de e-mails:
- **Formspree**: Crie um formulário no [formspree.io](https://formspree.io) e defina no seu arquivo `.env.local`:
  ```env
  FORMSPREE_ENDPOINT=https://formspree.io/f/seu-id-aqui
  ```
- **Resend**: É possível descomentar a chamada da API do Resend adicionando sua chave `RESEND_API_KEY`.

---

## 🎨 Identidade Visual & Tokens de Cores

As cores são controladas por variáveis CSS em `src/app/globals.css` e mapeadas no `tailwind.config.ts`:

| Token | Tema Claro (Light) | Tema Escuro (Dark) | Finalidade |
|---|---|---|---|
| `--primary` | `#2E6199` | `#6FA0D6` | Botões, links, destaques |
| `--primary-deep` | `#1B4478` | `#9CC0E8` | Títulos e ênfases |
| `--navy` | `#0F2740` | `#0B1B2E` | Rodapé, hero, contraste escuro |
| `--accent` | `#6BAA3B` | `#8BCB57` | Selos, esperança, botões de denúncia |
| `--bg` | `#FFFFFF` | `#0B1B2E` | Fundo principal |
| `--surface` | `#EAF1F9` | `#12263D` | Cartões e seções alternadas |
| `--text` | `#14263A` | `#E8F0F9` | Cor base do texto |
| `--muted` | `#4B607A` | `#A9BBD0` | Textos secundários e apoios |
| `--danger` | `#C0392B` | `#FF7B6B` | Alertas e erros |

---

## ♿ Acessibilidade (WCAG 2.2 AA)

- Foco visível com alto contraste em todos os elementos (`:focus-visible`).
- Suporte total a `prefers-reduced-motion` para usuários sensíveis a movimento.
- Relação de contraste mínima de 4.5:1 em todos os textos.
- Alvos de toque com no mínimo 48×48 px no mobile.
- Página dedicada de transparência em `/acessibilidade`.

---

## 📄 Licença e Propriedade
© 2026 RASFAMA — Rede de Apoio Social e Familiar do Maranhão. Associação sem fins lucrativos.

# RASFAMA
