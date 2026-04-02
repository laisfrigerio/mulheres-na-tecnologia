# Mulheres na Tecnologia

Uma curadoria contínua de conteúdos produzidos por mulheres — organizada por categorias e temas relevantes da tecnologia: artigos, livros, e-books, vídeos, canais do youtube, comunidades, e muito mais.

## ✨ Sobre o projeto

**Mulheres na Tecnologia** é uma iniciativa open source criada para amplificar vozes femininas na tecnologia, conectar comunidades e facilitar o acesso a conteúdos de qualidade criados por mulheres no Brasil.

O projeto é um **SPA (Single Page Application)** moderno construído com React, TypeScript e Tailwind CSS, oferecendo uma experiência de navegação fluida e responsiva.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

- **Node.js** 18+ instalado - [Instale aqui](https://nodejs.org/)
- **npm** ou **yarn** (gerenciador de pacotes)
- Git para clonar o repositório

### Instalação e Execução

#### 1. Clone o repositório

```bash
git clone https://github.com/laisfrigerio/mulheres-na-tecnologia.git
cd mulheres-na-tecnologia
```

#### 2. Instale as dependências

```bash
npm install
```

#### 3. Execute em modo desenvolvimento

```bash
npm run dev
```

O projeto será executado em [http://localhost:8080](http://localhost:8080)

### 📋 Scripts Disponíveis

| Script               | Descrição                                           |
| -------------------- | --------------------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build`      | Constrói a aplicação para produção                  |
| `npm run build:dev`  | Constrói a aplicação em modo desenvolvimento        |
| `npm run preview`    | Visualiza o build de produção localmente            |
| `npm run lint`       | Valida o código com ESLint                          |
| `npm test`           | Executa testes com Vitest                           |
| `npm run test:watch` | Executa testes em modo watch                        |

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[React](https://react.dev)** 18.3 - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** 5.8 - Tipagem estática para JavaScript
- **[Vite](https://vitejs.dev/)** 5.4 - Build tool rápido e moderno
- **[React Router](https://reactrouter.com/)** 6.30 - Roteamento cliente-side
- **[TailwindCSS](https://tailwindcss.com/)** 3.4 - Utilitários CSS para estilização
- **[ShadCN/UI](https://ui.shadcn.com/)** - Componentes acessíveis e reutilizáveis (Radix UI)

### Gerenciamento de Estado & Formulários

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários eficiente
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first
- **[TanStack React Query](https://tanstack.com/query/latest)** - Gerenciamento de dados assíncronos

### UI & Componentes

- **[Lucide React](https://lucide.dev/)** - Ícones SVG reutilizáveis
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Recharts](https://recharts.org/)** - Componentes de gráficos
- **[Next Themes](https://github.com/pacocoursey/next-themes/)** - Gerenciamento de temas (light/dark)
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel/slide responsivo

### Testes & Qualidade

- **[Vitest](https://vitest.dev/)** - Framework de testes rápido (Vite-native)
- **[Playwright](https://playwright.dev/)** - Testes e2e
- **[Testing Library](https://testing-library.com/)** - Utilitários para testar componentes React
- **[ESLint](https://eslint.org/)** - Linter para código TypeScript/JavaScript

### Utilities

- **[PostCSS](https://postcss.org/)** - Processador CSS
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes CSS condicionais
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind
- **[date-fns](https://date-fns.org/)** - Utilitários para datas

## 📂 Estrutura do Projeto

```
mulheres-na-tecnologia/
├── src/
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes ShadCN/UI (Radix UI)
│   │   └── ...
│   ├── data/                 # Dados e configurações (TypeScript)
│   ├── types/                # Tipos TypeScript
│   │   └── content.ts        # Interfaces e tipos de conteúdo
│   ├── hooks/                # React Hooks customizados
│   │   ├── use-mobile.tsx    # Detectar viewport mobile
│   │   └── use-toast.ts      # Hook para notificações
│   ├── lib/                  # Funções utilitárias
│   │   └── utils.ts
│   ├── pages/                # Páginas da aplicação
│   │   ├── Index.tsx         # Página principal
│   │   └── NotFound.tsx      # Página 404
│   ├── test/                 # Testes automatizados
│   ├── App.tsx               # Componente raiz da aplicação
│   ├── App.css               # Estilos da aplicação
│   ├── index.css             # Estilos globais
│   ├── main.tsx              # Ponto de entrada
│   └── vite-env.d.ts         # Tipagem Vite
├── public/                   # Arquivos estáticos
│   ├── images/               # Imagens organizadas por categoria
│   └── ...
├── index.html                # HTML principal
├── README.md                 # Este arquivo
├── LICENSE                   # Licença MIT
└── ...
```

## Como Contribuir?

Este projeto é **Open Source** e feito para amplificar vozes femininas na tecnologia. Temos duas formas principais de contribuição:

### 1️⃣ **Adicionando Conteúdo**

Conhece um artigo, livro, vídeo ou comunidade incrível criado por uma mulher?

1. Faça um fork deste repositório
2. Adicione o novo conteúdo ao arquivo correspondente em `src/data/` (ex: `src/data/articles.ts`)
3. Envie um Pull Request com descrição clara do conteúdo

👉 **Leia nosso [Guia de Contribuição](/.github/CONTRIBUTING.md)** para detalhes sobre formatos e padrões.

### 2️⃣ **Desenvolvendo a Plataforma**

Quer melhorar o código, design ou funcionalidades?

- Abra uma [Issue](https://github.com/laisfrigerio/mulheres-na-tecnologia/issues) descrevendo a melhoria
- Faça um fork e implemente a mudança
- Submeta um Pull Request

## 👩 Autora

| [<img src="https://avatars.githubusercontent.com/u/20709086?v=4" width="100px;" alt="Lais Frigério"/><br /><sub><b>@laisfrigerio</b></sub>](https://github.com/laisfrigerio) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.
