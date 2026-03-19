# Mulheres na Tecnologia

Uma curadoria contínua de conteúdos produzidos por mulheres — organizada por categorias e temas relevantes da tecnologia: artigos, livros, e-books, vídeos, canais do youtube, etc.

## ✨ Sobre o projeto

Mulheres na Tecnologia é uma iniciativa open source criada para amplificar vozes femininas na tecnologia, conectar comunidades e facilitar o acesso a conteúdos de qualidade criados por mulheres no Brasil.

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

- **Node.js** 18+ instalado
- **npm** ou **yarn** (gerenciador de pacotes)

### Instalação e Execução

#### 1. Clone o repositório

```bash
git clone https://github.com/laisfrigerio/mulheres-na-tecnologia.git
cd mulheres-na-tecnologia
```

#### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

#### 3. Execute em modo desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O projeto será executado em [http://localhost:3000](http://localhost:3000)

#### 4. Construa para produção (opcional)

```bash
npm run build
npm start
```

### 📋 Scripts Disponíveis

| Comando         | Descrição                              |
| --------------- | -------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento   |
| `npm run build` | Cria uma build otimizada para produção |
| `npm start`     | Executa a build de produção            |
| `npm run lint`  | Verifica o código com ESLint           |

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **CSS3** - Estilos com design tokens e suporte a tema claro/escuro
- **Turbopack** - Compilador rápido

## 📂 Estrutura do Projeto

```
src/
├── app/                # Rotas e layout raiz (Next.js App Router)
├── components/         # Componentes React reutilizáveis
├── types/              # Definições TypeScript
├── utils/              # Funções auxiliares
└── styles/             # Estilos globais

public/
├── content.json        # Dados de conteúdo (artigos, vídeos, etc)
└── images/             # Imagens estáticas organizadas por categoria
```

## Como Contribuir?

Este projeto é Open Source e feito para amplificar vozes femininas na tecnologia.

Conhece um conteúdo incrível criado por uma mulher?

1. Faça um fork deste repositório
2. Adicione suas sugestões ao `public/content.json`
3. Envie seu Pull Request.

## 👩 Autora

| [<img src="https://avatars.githubusercontent.com/u/20709086?v=4" width="100px;" alt="Lais Frigério"/><br /><sub><b>@laisfrigerio</b></sub>](https://github.com/laisfrigerio)<br /> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details
