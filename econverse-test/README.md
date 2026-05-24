# Econverse - Teste Desenvolvedor Front-End

![React](https://img.shields.io/badge/React-19.2.6-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue)
![Vite](https://img.shields.io/badge/Vite-8.0-purple)
![SASS](https://img.shields.io/badge/SASS-1.99-pink)

Uma vitrine de produtos responsiva desenvolvida em **React** com **TypeScript**, utilizando as melhores práticas de desenvolvimento web, HTML semântico e padrões de componentes reutilizáveis.

## 📋 Descrição do Projeto

Este projeto implementa uma página de e-commerce com:
- 🛍️ Vitrine de produtos dinâmica consumindo dados em JSON
- 🎯 Modal interativo para visualização de detalhes do produto
- 📱 pixel-perfect conforme layout
- ♿ HTML semântico para melhor acessibilidade e SEO
- 🎨 Pré-processador SASS para estilização avançada
- 🚀 Build otimizado com Vite

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** versão 16+ instalado
- **npm** ou **yarn** como gerenciador de pacotes

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/econverse-test.git
cd econverse-test
```

2. Instale as dependências:
```bash
npm install
```

### Executar em Desenvolvimento

Inicie o servidor de desenvolvimento com HMR (Hot Module Replacement):

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Compile a aplicação para produção:

```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

### Preview da Build de Produção

Para visualizar a build de produção localmente:

```bash
npm run preview
```

### Verificação de Qualidade do Código

Execute o linter para verificar a qualidade do código:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
econverse-test/
├── src/
│   ├── assets/              # Imagens e recursos estáticos
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header/          # Cabeçalho com navegação e busca
│   │   ├── Footer/          # Rodapé com links e redes sociais
│   │   ├── MainBanner/      # Banner principal de promoção
│   │   ├── ProductCard/     # Card individual de produto
│   │   ├── ProductCollectionFilters/  # Filtros de categorias
│   │   ├── RelatedProducts/ # Seção de produtos relacionados
│   │   ├── NewsLetter/      # Formulário de inscrição
│   │   ├── BrandingProducts/# Seção de marcas
│   │   ├── PartnersStore/   # Seção de parceiros
│   │   └── PopUpProduct/    # Modal de detalhes do produto
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/            # Página inicial
│   │   ├── Cart/            # Página de carrinho
│   │   ├── FavoriteProducts/# Produtos favoritos
│   │   ├── OrdersProducts/  # Pedidos do usuário
│   │   ├── ProductCollections/ # Coleção de produtos
│   │   └── UserProfile/     # Perfil do usuário
│   ├── store/               # Gerenciamento de estado (Zustand)
│   │   └── productModalStore.ts # Store do modal de produtos
│   ├── types/               # Tipos TypeScript
│   │   ├── productType.ts
│   │   └── relatedProductsType.ts
│   ├── style/               # Estilos globais
│   │   └── variables.scss   # Variáveis SASS
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Ponto de entrada
│   └── index.scss           # Estilos globais
├── public/                  # Arquivos públicos estáticos
├── vite.config.ts          # Configuração do Vite
├── tsconfig.json           # Configuração do TypeScript
├── eslint.config.js        # Configuração do ESLint
└── package.json            # Dependências do projeto
```

## 📦 Bibliotecas Utilizadas

### Dependências Principais

| Biblioteca | Versão | Descrição |
|-----------|--------|-----------|
| **React** | ^19.2.6 | Biblioteca para construir interfaces com componentes |
| **React DOM** | ^19.2.6 | Renderização de componentes React no DOM |
| **React Router DOM** | ^7.15.1 | Roteamento de páginas e navegação |
| **TypeScript** | ~6.0.2 | Superset de JavaScript com tipagem estática |
| **Vite** | ^8.0.12 | Build tool e dev server ultra-rápido |
| **SASS** | ^1.99.0 | Pré-processador CSS avançado |
| **Swiper** | ^12.1.4 | Carousel/slider responsivo para produtos |
| **React Icons** | ^5.6.0 | Ícones SVG populares para React |
| **Zustand** | ^5.0.13 | Gerenciador de estado leve e simples |

### Dependências de Desenvolvimento

| Biblioteca | Descrição |
|-----------|-----------|
| **@vitejs/plugin-react** | Plugin React para Vite com Oxc |
| **@types/react** | Tipos TypeScript para React |
| **@types/react-dom** | Tipos TypeScript para React DOM |
| **ESLint** | Ferramenta de linting para JavaScript/TypeScript |
| **typescript-eslint** | Suporte TypeScript para ESLint |

## ✨ Funcionalidades Implementadas

### ✅ Obrigatórias
- [x] Desenvolvimento em React com TypeScript
- [x] Vitrine de produtos consumindo dados em JSON
- [x] Modal interativo para visualização de detalhes do produto
- [x] Pré-processador SASS para estilização
- [x] Layout pixel-perfect conforme especificado
- [x] Sem uso de bibliotecas UI (Bootstrap, Foundation, etc)
- [x] Roteamento entre páginas
- [x] **HTML Semântico** - Uso de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

### ✨ Extras Implementados
- [x] **Boas Práticas SEO** - Estrutura semântica, alt text em imagens, URLs amigáveis
- [x] **Componentização** - Componentes reutilizáveis e bem separados
- [x] **State Management** - Zustand para gerenciar estado do modal
- [x] **TypeScript** - Tipagem estrita em todo o projeto
- [x] **Code Quality** - ESLint configurado e funcionando

## 🎯 Componentes Principais

### Header
Cabeçalho com navegação principal, barra de busca, ícones de usuário/favoritos/pedidos e carrinho.

### ProductCard
Card individual exibindo imagem, nome, preço, parcelamento e opção de compra.

### PopUpProduct
Modal interativo que exibe detalhes completos do produto ao clicar em um card, com seletor de quantidade.

### RelatedProducts
Seção com carousel de produtos relacionados, navegável com setas e filtros por categoria.

### ProductCollectionFilters
Barra de filtros para navegação por categorias de produtos.

## 🎨 Estilos e Variáveis

As variáveis SASS estão centralizadas em `src/style/variables.scss`, incluindo:
- Cores da marca
- Tipografia
- Espaçamentos
- Breakpoints responsivos

## ♿ Acessibilidade

- HTML semântico para melhor interpretação por leitores de tela
- Alt text descritivo em todas as imagens
- Labels associados a inputs de formulário
- Contraste adequado entre textos e fundos
- Navegação por teclado suportada

## 📝 Padrões de Código

- **Nomenclatura**: PascalCase para componentes, camelCase para funções/variáveis
- **Componentes**: Functional Components com Hooks
- **Estilos**: SCSS com estrutura modular
- **Tipos**: TypeScript para tipagem estrita
- **Imports**: Organização clara de imports (React, bibliotecas, componentes, styles)

## 🚀 Performance

- Build otimizado com Vite
- Code splitting automático
- Lazy loading de imagens
- CSS modular para evitar conflitos
