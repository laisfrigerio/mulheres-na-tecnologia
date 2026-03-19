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

#### Passo 1: Localize o arquivo `content.json`

```
public/content.json
```

#### Passo 2: Identifique a seção apropriada

O arquivo `content.json` está organizado em 7 categorias principais:

1. **Artigos** (`artigos`) - Artigos sobre tecnologia, arquitetura, carreira
2. **Livros & E-books** (`livros`) - Livros e e-books educacionais
3. **Canais do YouTube** (`canais`) - Canais de criadores(as) que produzem conteúdo
4. **Vídeos** (`videos`) - Vídeos individuais com tutoriais e temas diversos
5. **Comunidades** (`comunidades`) - Comunidades e grupos de mulheres na tech
6. **Community Articles** (`community_articles`) - Artigos de comunidades específicas
7. **Instagram** (`instagram`) - Perfis inspiradores no Instagram

#### Passo 3: Adicione o novo item

Cada item segue este formato:

```json
{
  "id": "identificador-unico",
  "title": "Título do Conteúdo",
  "description": "Descrição breve (1-2 linhas) explicando o conteúdo",
  "author": "Nome da Autora",
  "link": "https://exemplo.com",
  "imageSrc": "/images/categoria/imagem.jpg",
  "imageAlt": "Descrição da imagem em português",
  "type": "artigo|video|livro|canal|comunidade|instagram",
  "tags": ["tag1", "tag2", "tag3"]
}
```

#### Passo 4: Informações sobre imagens

Se você está adicionando uma **nova imagem**:

1. Coloque a imagem em [`public/images/`](../public/images/) na categoria apropriada
2. Nomeie o arquivo de forma descritiva (ex: `sistema-design-entrevista.jpg`)
3. Certifique-se de que a imagem é acessível (alt text em português)

Se o recurso **não tem imagem disponível**, use uma imagem padrão existente da categoria.

#### Passo 5: Exemplo prático

Para adicionar um artigo sobre carreira:

```json
{
  "id": "carreira-mulheres-tech-2024",
  "title": "Carreira de Mulheres na Tecnologia 2024",
  "description": "Guia completo sobre oportunidades e desafios para mulheres que buscam crescer na carreira tech",
  "author": "Ana Silva",
  "link": "https://blog.exemplo.com/carreira-mulheres-tech",
  "imageSrc": "/images/articles/career/carreira-2024.jpg",
  "imageAlt": "Mulher sorrindo com notebook em ambiente de trabalho moderno",
  "type": "artigo",
  "tags": ["carreira", "crescimento profissional", "mulheres", "tecnologia"]
}
```

#### Verificação de qualidade para conteúdo

Antes de submeter seu PR, verifique:

- ✅ O link funciona e leva ao conteúdo correto
- ✅ A descrição é clara e concisa
- ✅ O autor/criadora está creditado(a) corretamente
- ✅ As tags são relevantes
- ✅ A imagem existe ou está em uma categoria válida
- ✅ Não há duplicação com itens existentes

---

## 💻 Contribuindo com Desenvolvimento

### Requisitos

- **Node.js 18+** - [Instale aqui](https://nodejs.org/)
- **npm** ou **yarn**
- Conhecimento básico de **React**, **TypeScript** e **CSS**
- Familiaridade com **Git** e **GitHub**

### Configuração do ambiente

```bash
# 1. Clone o projeto (seu fork)
git clone https://github.com/SEU_USUARIO/mulheres-na-tecnologia.git
cd mulheres-na-tecnologia

# 2. Instale dependências
npm install

# 3. Configure variáveis de ambiente (opcional)
cp .env.example .env.local
# Edite .env.local se necessário para GA_ID, GTM_ID, etc.

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra no navegador
# http://localhost:3000
```

### Estrutura do projeto

```
src/
├── app/                    # Rotas e layout (Next.js App Router)
│   ├── layout.tsx         # Layout raiz com metadata
│   └── page.tsx           # Página principal
├── components/            # Componentes React reutilizáveis
│   ├── Hero.tsx          # Seção hero
│   ├── DynamicContent.tsx # Carrega conteúdo de JSON
│   ├── ContentSection.tsx # Renderiza seções de cards
│   ├── ContentCard.tsx    # Card individual
│   ├── RoundCard.tsx      # Card redondo (avatares)
│   ├── ThemeToggle.tsx    # Botão de tema claro/escuro
│   ├── BackToTop.tsx      # Botão voltar ao topo
│   ├── Community.tsx      # Seção de comunidade
│   └── Footer.tsx         # Rodapé
├── types/                 # Tipos TypeScript
│   └── content.ts        # Interfaces de conteúdo
├── utils/                 # Funções auxiliares
│   ├── theme.ts          # Gerenciamento de tema
│   ├── scroll.ts         # Utilitários de scroll
│   └── filter.ts         # Lógica de filtros
└── styles/               # Estilos globais
    └── globals.css       # CSS com design tokens

public/
├── content.json          # Dados de conteúdo
└── images/               # Imagens organizadas por categoria
```

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

#### Código

- ✅ Use **TypeScript** em todas as novas funcionalidades
- ✅ Siga o **ESLint** (execute `npm run lint`)
- ✅ Prefira **componentes funcionais** com hooks
- ✅ Mantenha componentes **pequenos e focados**
- ✅ Use **tipos explícitos** ao invés de `any`
- ✅ Adicione **comentários** em lógica complexa

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

- Adicionado item em public/content.json
- Adicionada imagem em public/images/articles/
- Atualizado arquivo com alt text descritivo

## Relacionado

Fixes #123 (se aplicável)

## Checklist

- [x] Testei localmente
- [x] Arquivo JSON validado
- [x] Imagem otimizada
- [x] Sem erros de TypeScript
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

- Use **variáveis CSS** para cores e espaçamento (ver `globals.css`)
- Mantenha **design responsivo** - mobile first
- Siga a **paleta de cores** existente
- Teste em **modo claro e escuro**

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
