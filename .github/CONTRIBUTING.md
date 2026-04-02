# Guia de Contribuição - Mulheres na Tecnologia

Obrigada pelo interesse em contribuir com o projeto **Mulheres na Tecnologia**! 💜

Este documento fornece diretrizes para contribuir de duas formas principais:

1. **Adicionando conteúdo** - Sugerir artigos, vídeos, canais, comunidades, etc.
2. **Desenvolvendo a plataforma** - Melhorar código, design e funcionalidades

---

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Começando](#começando)
- [Contribuindo com Conteúdo](#contribuindo-com-conteúdo)
- [Contribuindo com Desenvolvimento](#contribuindo-com-desenvolvimento)
- [Processo de Pull Request](#processo-de-pull-request)
- [Guias de Estilo](#guias-de-estilo)
- [Dúvidas?](#dúvidas)

---

## 🤝 Código de Conduta

Esperamos que todos os contribuidores sigam nosso compromisso com:

- **Respeito** - Trate todos com dignidade e respeito
- **Inclusão** - Bem-vindo(a) independentemente de gênero, identidade, origens ou experiência
- **Colaboração** - Trabalhe juntos de forma construtiva
- **Profissionalismo** - Mantenha comunicações profissionais e acolhedoras

Comportamentos discriminatórios, assediadoras ou desrespeitosos **não serão tolerados**.

---

## 🚀 Começando

### 1. Fork o repositório

Clique no botão "Fork" no GitHub para criar sua cópia do projeto.

### 2. Clone seu fork

```bash
git clone https://github.com/SEU_USUARIO/mulheres-na-tecnologia.git
cd mulheres-na-tecnologia
```

### 3. Configure o upstream (repositório original)

```bash
git remote add upstream https://github.com/laisfrigerio/mulheres-na-tecnologia.git
```

### 4. Crie uma branch para sua contribuição

```bash
git checkout -b feature/sua-contribuicao
# ou
git checkout -b content/adicionar-novo-artigo
```

### 5. Mantenha seu fork atualizado

```bash
git fetch upstream
git rebase upstream/main
```

---

## 📚 Contribuindo com Conteúdo

### O que é uma contribuição de conteúdo?

Você quer sugerir artigos, vídeos, canais do YouTube, livros, comunidades ou perfis no Instagram criados por mulheres na tecnologia?

### Como adicionar conteúdo

#### Passo 1: Identifique a categoria correta

Os dados estão organizados em arquivos TypeScript em `src/data/`:

| Arquivo                 | Categoria            | Descrição                                 |
| ----------------------- | -------------------- | ----------------------------------------- |
| `articles.ts`           | Artigos              | Artigos sobre tecnologia, carreira, etc.  |
| `books.ts`              | Livros & E-books     | Livros e e-books educacionais             |
| `youtube-channels.ts`   | Canais YouTube       | Canais de criadores que produzem conteúdo |
| `videos.ts`             | Vídeos               | Vídeos individuais com tutoriais          |
| `communities.ts`        | Comunidades          | Comunidades e grupos de mulheres na tech  |
| `community-articles.ts` | Artigos Comunitários | Artigos publicados por comunidades        |
| `instagram.ts`          | Instagram            | Perfis inspiradores no Instagram          |

#### Passo 2: Adicione o novo item

Abra o arquivo TypeScript correspondente (ex: `src/data/articles.ts`) e adicione um novo objeto seguindo a estrutura `CardItem`:

```typescript
// src/data/articles.ts
export const articles: CardItem[] = [
  // ... items existentes
  {
    dataCategory: "artigo carreira",
    cardLink: "https://exemplo.com/artigo",
    cardImage: {
      imageSrc: "/images/artigos/novo-artigo.jpg",
      imageAlt: "Descrição da imagem em português",
    },
    cardTag: "Artigo",
    cardTitle: "Título do seu artigo",
    cardDescription: "Descrição breve em 1-2 linhas explicando o conteúdo",
    cardMetaData: "Autora Nome • 5 min", // tempo estimado de leitura
  },
];
```

#### Passo 3: Campos obrigatórios

- **cardLink**: URL do artigo/vídeo/comunidade (obrigatório)
- **cardTitle**: Título do conteúdo (obrigatório)
- **cardImage**: Objeto com `imageSrc` (URL da imagem) e `imageAlt` (descrição em português)
- **cardTag**: Categoria do conteúdo (ex: "Artigo", "Vídeo", "Canal")
- **cardDescription**: Descrição breve do conteúdo
- **cardMetaData**: Autora e tempo estimado (ex: "Ana Silva • 5 min")
- **dataCategory**: Categoria interna para filtros/organização (ex: "artigo system-design")

#### Passo 4: Informações sobre imagens

**Se você está adicionando uma nova imagem:**

1. Adicione a imagem em `public/images/categoria/` (ex: `public/images/artigos/`)
2. Nomeie de forma descritiva (ex: `sistema-design-entrevista.jpg`)
3. Preferencialmente use formatos otimizados (JPEG, PNG, WebP)
4. Certifique-se que o `imageAlt` está em português e é descritivo

**Se não tiver imagem:**

- Use uma imagem existente da mesma categoria, ou
- Omita o campo `cardImage`

#### Passo 5: Exemplo prático

Para adicionar um artigo sobre carreira:

```typescript
{
  dataCategory: "artigo carreira",
  cardLink: "https://blog.exemplo.com/carreira-mulheres-tech",
  cardImage: {
    imageSrc: "/images/artigos/carreira-2024.jpg",
    imageAlt: "Mulher sorrindo com notebook em ambiente de trabalho moderno"
  },
  cardTag: "Artigo",
  cardTitle: "Carreira de Mulheres na Tecnologia 2024",
  cardDescription: "Guia completo sobre oportunidades e desafios para mulheres que buscam crescer na carreira tech",
  cardMetaData: "Ana Silva • 8 min"
}
```

#### Verificação de qualidade para conteúdo

Antes de submeter seu PR, verifique:

- ✅ O link funciona e leva ao conteúdo correto
- ✅ O título está claro e atrativo
- ✅ A descrição é concisa (1-2 linhas)
- ✅ A autora/criadora está creditada corretamente no `cardMetaData`
- ✅ A imagem existe ou será adicionada
- ✅ O `imageAlt` está em português e é descritivo
- ✅ Não há duplicação com itens existentes
- ✅ O arquivo TypeScript está com sintaxe válida (sem erros de vírgulas, aspas, etc.)

**Dica:** Se você não tem certeza sobre a formatação, copie um item existente e adapte!

---

## 💻 Contribuindo com Desenvolvimento

### Requisitos

- **Node.js 18+** - [Instale aqui](https://nodejs.org/)
- **npm** (gerenciador de pacotes)
- Conhecimento básico de **React**, **TypeScript** e **CSS**
- Familiaridade com **Git** e **GitHub**

### Configuração do ambiente

```bash
# 1. Clone o projeto (seu fork)
git clone https://github.com/SEU_USUARIO/mulheres-na-tecnologia.git
cd mulheres-na-tecnologia

# 2. Instale dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:8080
```

### Construindo e testando

```bash
# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Validar código com ESLint
npm run lint

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch
```

### Estrutura do projeto

```
mulheres-na-tecnologia/
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes ShadCN/UI (Radix UI base)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...          # Outros componentes UI
│   │   ├── App.tsx          # Componente raiz com roteamento
│   │   ├── BlogCard.tsx     # Card para artigos/blogs
│   │   ├── CommunitySection.tsx  # Seção de comunidades
│   │   ├── ContentSection.tsx    # Renderiza seções de cards
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── Hero.tsx         # Seção hero principal
│   │   ├── NavLink.tsx      # Link de navegação
│   │   ├── RoundCard.tsx    # Card redondo (avatares, perfis)
│   │   ├── ThemeToggle.tsx  # Alternador tema claro/escuro
│   │   ├── BackToTop.tsx    # Botão voltar ao topo
│   │   └── ...
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── Index.tsx        # Página principal
│   │   └── NotFound.tsx     # Página 404
│   │
│   ├── data/                # Dados e configurações (TypeScript)
│   │   ├── articles.ts      # Dados de artigos
│   │   ├── books.ts         # Dados de livros e e-books
│   │   ├── communities.ts   # Dados de comunidades
│   │   ├── community-articles.ts  # Dados de artigos de comunidades
│   │   ├── instagram.ts     # Dados de perfis Instagram
│   │   ├── videos.ts        # Dados de vídeos individuais
│   │   └── youtube-channels.ts   # Dados de canais YouTube
│   │
│   ├── types/               # Tipos TypeScript
│   │   └── content.ts       # Interfaces: CardItem, ContentSection, etc.
│   │
│   ├── hooks/               # React Hooks customizados
│   │   ├── use-mobile.tsx   # Detectar viewport mobile
│   │   └── use-toast.ts     # Hook para notificações
│   │
│   ├── lib/                 # Funções utilitárias
│   │   └── utils.ts         # Utilitários gerais
│   │
│   ├── test/                # Arquivos de teste
│   │   ├── example.test.ts  # Exemplo de teste
│   │   └── setup.ts         # Setup de testes
│   │
│   ├── App.tsx              # Componente raiz e roteamento
│   ├── App.css              # Estilos da aplicação
│   ├── index.css            # Estilos globais
│   ├── main.tsx             # Ponto de entrada React
│   └── vite-env.d.ts        # Tipagem Vite
│
├── public/                  # Arquivos estáticos
│   ├── images/              # Imagens organizadas por categoria
│   │   ├── artigos/
│   │   ├── comunidades/
│   │   ├── ebooks/
│   │   ├── redes-sociais/
│   │   ├── youtube-channels/
│   │   └── youtube-thumbnails/
│   └── robots.txt
│
├── Configuration Files
│   ├── vite.config.ts       # Configuração Vite
│   ├── tsconfig.json        # Configuração TypeScript
│   ├── tailwind.config.ts   # Configuração Tailwind CSS
│   ├── postcss.config.js    # Configuração PostCSS
│   ├── eslint.config.js     # Configuração ESLint
│   ├── vitest.config.ts     # Configuração Vitest
│   ├── playwright.config.ts # Configuração Playwright
│   ├── playwright-fixture.ts# Fixtures Playwright
│   └── package.json         # Dependências e scripts npm
│
├── index.html               # HTML principal
├── README.md                # Documentação do projeto
└── LICENSE                  # Licença MIT
```

#### Padrão de Arquitetura

O projeto usa **React Router** para navegação client-side e **dados centralizados em TypeScript** para melhor type-safety:

**Fluxo de dados:**

1. **Dados armazenados em TypeScript** (`src/data/articles.ts`, etc.)
   - Arrays de objetos `CardItem` ou estruturas similares
   - Type-safe com interfaces definidas em `src/types/content.ts`

2. **Componentes apresentam dados**
   - Importam dados de `src/data/`
   - Renderizam com componentes como `BlogCard`, `RoundCard`, `ContentSection`

3. **Roteamento com React Router** (`src/App.tsx`)
   - Define rotas para diferentes páginas
   - Page components em `src/pages/` importam e mostram dados

**Exemplo prático:**

```tsx
// src/pages/Index.tsx - Página principal
import { Hero } from "@/components/Hero";
import { articles } from "@/data/articles";
import { BlogCard } from "@/components/BlogCard";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section>
        <h2>Artigos em Destaque</h2>
        <div className="grid gap-4">
          {articles.slice(0, 6).map((article) => (
            <BlogCard key={article.cardLink} {...article} />
          ))}
        </div>
      </section>
    </main>
  );
}
```

**Estrutura de dados:**

```typescript
// src/types/content.ts
export interface CardItem {
  dataCategory?: string;
  cardLink: string;
  cardImage?: {
    imageSrc: string;
    imageAlt: string;
  };
  cardTag?: string;
  cardTitle: string;
  cardDescription?: string;
  cardMetaData?: string;
}

// src/data/articles.ts
export const articles: CardItem[] = [
  {
    dataCategory: "artigo system-design",
    cardLink: "https://...",
    cardImage: {
      imageSrc: "/images/artigos/...",
      imageAlt: "Descrição em português",
    },
    cardTag: "Artigo",
    cardTitle: "Título do artigo",
    cardDescription: "Descrição breve...",
    cardMetaData: "Autora • 5 min",
  },
  // ... mais items
];
```

**Benefícios:**

- ✅ Type-safe: TypeScript valida estruturas
- ✅ Simples: dados centralizados em arquivos
- ✅ Rápido: sem requisições HTTP, dados compactados
- ✅ Fácil manter: novo artigo = adicionar objeto ao array

### Tipos de contribuição de desenvolvimento

#### 🐛 Correção de bugs

1. Identifique o issue ou crie um novo issue descrevendo o bug
2. Faça o fix na sua branch
3. Teste a correção localmente
4. Submeta um PR com explicação clara

#### ✨ Novas features

1. Abra uma issue descrevendo a funcionalidade proposta (discuta antes!)
2. Aguarde aprovação do time
3. Implemente a feature com testes
4. Envie o PR com documentação

#### 🎨 Melhorias de design/UX

1. Demonstre a mudança com screenshots antes/depois
2. Explique o benefício para usuários
3. Teste em diferentes resoluções (mobile, tablet, desktop)
4. Certifique-se de acessibilidade

#### 📖 Documentação

1. Melhore READMEs, comentários no código ou guias
2. Corrija erros de digitação e clareza
3. Atualize documentação desatualizada

### Boas práticas de desenvolvimento

#### Como adicionar uma nova seção de conteúdo

Se você quer adicionar uma nova categoria de conteúdo (ex: "Podcasts"), siga este padrão:

**1. Crie um arquivo de dados** em `src/data/podcasts.ts`

```typescript
// src/data/podcasts.ts
import type { CardItem } from "@/types/content";

export const podcasts: CardItem[] = [
  {
    dataCategory: "podcast carreira",
    cardLink: "https://exemplo.com/podcast",
    cardImage: {
      imageSrc: "/images/youtube-thumbnails/podcast-mulheres-tech.jpg",
      imageAlt: "Logo do Podcast Mulheres na Tech",
    },
    cardTag: "Podcast",
    cardTitle: "Mulheres na Tech",
    cardDescription:
      "Podcast sobre histórias e experiências de mulheres na tecnologia",
    cardMetaData: "Ana e Maria • 45 min por episódio",
  },
  // ... mais podcasts
];
```

**2. Adicione uma página para a nova seção** em `src/pages/Podcasts.tsx`

```typescript
// src/pages/Podcasts.tsx
import { podcasts } from "@/data/podcasts";
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";

export default function PodcastsPage() {
  return (
    <main>
      <Hero />
      <section className="container py-12">
        <h1 className="text-3xl font-bold mb-6">Podcasts</h1>
        <p className="text-gray-600 mb-8">
          Ouça histórias inspiradoras de mulheres na tecnologia
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {podcasts.map(podcast => (
            <BlogCard key={podcast.cardLink} {...podcast} />
          ))}
        </div>
      </section>
    </main>
  );
}
```

**3. Configure a rota em `src/App.tsx`**

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Index";
import PodcastsPage from "@/pages/Podcasts";
import NotFoundPage from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**4. (Opcional) Adicione um link na navegação** ou homepage

Você pode adicionar um link para a nova seção na página principal (`src/pages/Index.tsx`) ou em um menu de navegação.

**Padrão em resumo:**

1. Dados em `src/data/[categoria].ts` com tipo `CardItem[]`
2. Página em `src/pages/[Categoria].tsx` que importa os dados
3. Rota em `src/App.tsx` mapeando URL para página
4. Componentes renderizam dados com `BlogCard`, `RoundCard`, etc.

#### Código

- ✅ Use **TypeScript** em todas as novas funcionalidades
- ✅ Siga o **ESLint** (execute `npm run lint`)
- ✅ Prefira **componentes funcionais** com hooks
- ✅ Mantenha componentes **pequenos e focados**
- ✅ Use **tipos explícitos** ao invés de `any`
- ✅ Adicione **comentários** em lógica complexa
- ✅ **Imports de dados**: importe de `src/data/` em páginas/componentes
- ✅ **Páginas** devem ser simples: apenas importar dados e renderizar componentes

**Padrão correto para páginas:**

```typescript
// ✅ BOM - página simples e focada
import { articles } from "@/data/articles";
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";

export default function ArtigosPage() {
  return (
    <main>
      <Hero />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Artigos</h1>
        <div className="grid gap-4 md:grid-cols-3">
          {articles.map(article => (
            <BlogCard key={article.cardLink} {...article} />
          ))}
        </div>
      </section>
    </main>
  );
}
```

```typescript
// ❌ EVITE - lógica complexa nas páginas
export default function ArtigosPage() {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // fetch ou processamento complexo
  }, []);

  return ...
}
```

**Por que?** Mantém páginas simples e legíveis. Lógica complexa vai em hooks customizados (`src/hooks/`) se necessário.

#### Commits

- ✅ Commits **pequenos e lógicos** - uma funcionalidade por commit
- ✅ Mensagens **descritivas** em português ou inglês
  ```bash
  git commit -m "feat: adicionar modo dark theme"
  git commit -m "fix: corrigir carregamento de imagens em mobile"
  git commit -m "docs: atualizar guia de contribuição"
  ```

#### Testing

- ✅ Teste **localmente** antes de submeter (`npm run dev`)
- ✅ Verifique em **diferentes navegadores** (Chrome, Firefox, Safari, Edge)
- ✅ Teste em **resoluções diferentes** (desktop, tablet, mobile)
- ✅ Valide **TypeScript** sem erros (`npm run lint`)

---

## 🔄 Processo de Pull Request

### 1. Antes de submeter

```bash
# Atualize sua branch com main
git fetch upstream
git rebase upstream/main

# Teste tudo localmente
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run lint     # Verificar TypeScript e ESLint
```

### 2. Submeta seu PR no GitHub

Clique em "New Pull Request" e preencha:

**Título:** Descreva sua mudança

```
feat: adicionar artigo sobre web performance
fix: corrigir layout em mobile
docs: atualizar instruções de instalação
```

**Descrição:** Explique o que foi feito

```markdown
## Descrição

Adicionei um novo artigo sobre web performance às seções de conteúdo.

## Mudanças

- Adicionado item em `src/data/articles.ts`
- Adicionada imagem em `public/images/artigos/`
- Atualizado a interface TypeScript com alt text descritivo

## Tipos de mudança

- [ ] Novo conteúdo (artigos, vídeos, comunidades, etc.)
- [ ] Bug fix
- [ ] Feature nova
- [ ] Melhoria de design/UX
- [ ] Documentação

## Relacionado

Closes #123 (se aplicável)

## Checklist

- [x] Testei localmente (`npm run dev`)
- [x] Arquivo TypeScript com sintaxe válida
- [x] Imagem otimizada e adicionada ao `public/images/`
- [x] Sem erros de TypeScript (`npm run lint`)
- [x] Alt text em português e descritivo
- [x] Link do conteúdo funciona
```

### 3. Revisão

- Um mantenedor(a) revisará seu PR
- Podem solicitar mudanças ou melhorias
- Responda aos comentários construtivamente
- Atualize seu PR conforme necessário

### 4. Merge

Após aprovação, seu PR será merged ao main! 🎉

---

## 🎨 Guias de Estilo

### CSS/Design

- Use **Tailwind CSS** para estilização (classes utilitárias)
- Importe componentes **ShadCN/UI** quando possível (`src/components/ui/`)
- Mantenha **design responsivo** - mobile first com breakpoints `sm:`, `md:`, `lg:`
- Siga a **paleta de cores** definida em `tailwind.config.ts`
- Teste em **modo claro e escuro** usando `ThemeToggle`
- Use **variáveis CSS customizadas** para cores semânticas (dark mode)

**Exemplo com Tailwind + ShadCN:**

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card className="p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-4">Título</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Descrição com suporte a tema claro/escuro
      </p>
      <Button className="w-full md:w-auto">Ação</Button>
    </Card>
  );
}
```

### TypeScript

```typescript
// ✅ BOM
interface ContentItem {
  id: string;
  title: string;
  description: string;
}

function renderCards(items: ContentItem[]): JSX.Element {
  return items.map(item => <Card key={item.id} item={item} />);
}

// ❌ EVITE
function renderCards(items: any): any {
  return items.map((item) => <Card key={item.id} item={item} />);
}
```

### Nomes

- Componentes React: **PascalCase** (`DynamicContent.tsx`)
- Funções/variáveis: **camelCase** (`handleButtonClick`)
- Constantes: **UPPER_SNAKE_CASE** (`MAX_ITEMS = 10`)
- IDs de conteúdo: **kebab-case** (`novo-artigo-2024`)

### Commits (Conventional Commits)

```
feat:  nova funcionalidade
fix:   correção de bug
docs:  mudanças em documentação
style: formatação sem mudanças lógicas
refactor: refatoração de código
test:  adição de testes
chore: atualizações de dependências
```

---

## ❓ Dúvidas?

- 📖 Leia o [README.md](../README.md) para visão geral
- 💬 Abra uma [Issue](https://github.com/laisfrigerio/mulheres-na-tecnologia/issues) para dúvidas
- 👩‍💻 Veja exemplos em PRs anteriores
- 📧 Entre em contato com mantenedores

---

## 🙏 Obrigada!

Toda contribuição — grande ou pequena — ajuda a amplificar vozes femininas na tecnologia.

Seu tempo e conhecimento são valiosos. Obrigada por estar aqui! 💜

**Bem-vinda(o) à comunidade!**
