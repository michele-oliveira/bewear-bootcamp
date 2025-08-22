# 🛍️ Bewear Bootcamp - E-commerce Moderno

Um e-commerce completo e moderno construído com as melhores tecnologias web, oferecendo uma experiência de compra robusta e escalável.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquitetura](#arquitetura)
- [Instalação e Configuração](#instalação-e-configuração)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Scripts Disponíveis](#scripts-disponíveis)

## 🎯 Sobre o Projeto

O **Bewear Bootcamp** é uma plataforma de e-commerce completa que demonstra as melhores práticas de desenvolvimento web moderno. O projeto implementa um sistema completo de vendas online com autenticação, gerenciamento de produtos, carrinho de compras, checkout e integração com Stripe para pagamentos.

### 🎨 Características Principais

- **Performance Otimizada**: Construído com Next.js 15 e React 19
- **Segurança**: Autenticação robusta com BetterAuth
- **Escalabilidade**: Arquitetura modular e bem estruturada
- **UX Moderna**: Interface intuitiva com shadcn/ui e Tailwind CSS

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação

- Registro e login de usuários
- Sessões seguras com BetterAuth
- Gerenciamento de perfis de usuário

### 🛍️ Catálogo de Produtos

- Exibição de produtos por categoria
- Variantes de produtos (cores, tamanhos)
- Sistema de busca e filtros
- Galeria de imagens responsiva

### 🛒 Carrinho de Compras

- Adição/remoção de produtos
- Controle de quantidades
- Cálculo automático de preços
- Persistência de dados

### 📍 Gerenciamento de Endereços

- Múltiplos endereços de entrega
- Validação de dados com Zod
- Seleção de endereço padrão

### 💳 Sistema de Pagamento

- Integração com Stripe
- Checkout seguro
- Webhooks para confirmação de pagamentos
- Histórico de pedidos

### 📱 Interface Responsiva

- Design mobile-first
- Componentes reutilizáveis
- Animações suaves
- Acessibilidade otimizada

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface do usuário
- **TypeScript 5** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes React
- **Radix UI** - Componentes primitivos acessíveis

### Backend & Banco de Dados

- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM moderno e type-safe
- **BetterAuth** - Sistema de autenticação
- **Stripe** - Processamento de pagamentos

### Formulários & Validação

- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **@hookform/resolvers** - Integração React Hook Form + Zod

### Estado & Cache

- **TanStack React Query** - Gerenciamento de estado do servidor
- **React Query DevTools** - Ferramentas de desenvolvimento

### Utilitários

- **Lucide React** - Ícones vetoriais
- **clsx** - Utilitário para classes CSS condicionais
- **class-variance-authority** - Sistema de variantes de componentes
- **tailwind-merge** - Mesclagem inteligente de classes Tailwind
- **sonner** - Notificações toast elegantes
- **swiper** - Carrossel de imagens
- **react-number-format** - Formatação de números e moedas

### Desenvolvimento

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Drizzle Kit** - Ferramentas para Drizzle ORM

## 🏗️ Estrutura do Projeto

```
bewear-bootcamp/
├── src/
│   ├── actions/           # Server Actions
│   │   ├── add-cart-product/
│   │   ├── create-checkout-session/
│   │   ├── create-shipping-address/
│   │   ├── decrease-cart-product-quantity/
│   │   ├── finish-order/
│   │   ├── get-cart/
│   │   ├── get-user-addresses/
│   │   ├── remove-cart-product/
│   │   └── update-cart-shipping-address/
│   ├── app/               # App Router (Next.js 15)
│   │   ├── api/           # API Routes
│   │   │   └── auth/      # Autenticação e webhooks Stripe
│   │   ├── authentication/ # Páginas de autenticação
│   │   ├── cart/          # Sistema de carrinho
│   │   ├── category/      # Páginas de categoria
│   │   ├── product-variant/ # Páginas de produto
│   │   └── globals.css    # Estilos globais
│   ├── components/        # Componentes React
│   │   ├── common/        # Componentes compartilhados
│   │   └── ui/            # Componentes base (shadcn/ui)
│   ├── db/                # Banco de dados
│   │   ├── index.ts       # Configuração do Drizzle
│   │   ├── schema.ts      # Esquemas das tabelas
│   │   └── seed.ts        # Dados iniciais
│   ├── hooks/             # Hooks customizados
│   │   ├── mutations/     # Hooks para mutations
│   │   └── queries/       # Hooks para queries
│   ├── lib/               # Utilitários e configurações
│   ├── providers/         # Providers React
│   └── helpers/           # Funções auxiliares
├── public/                # Arquivos estáticos
├── drizzle.config.ts      # Configuração do Drizzle
├── tailwind.config.js     # Configuração do Tailwind
└── package.json           # Dependências do projeto
```

## 🏛️ Arquitetura

### Padrões de Design

- **Server Components** - Renderização no servidor para melhor performance
- **Client Components** - Interatividade no cliente quando necessário
- **Server Actions** - Operações de dados seguras no servidor
- **React Query** - Gerenciamento de estado e cache
- **Type Safety** - TypeScript em todo o projeto

### Banco de Dados

O projeto utiliza um esquema relacional bem estruturado com as seguintes entidades principais:

- **Users** - Usuários e autenticação
- **Products** - Produtos e categorias
- **Product Variants** - Variantes de produtos (cores, preços)
- **Cart & Cart Items** - Carrinho de compras
- **Shipping Addresses** - Endereços de entrega
- **Orders & Order Items** - Pedidos e histórico

### Segurança

- **BetterAuth** para autenticação segura
- **Validação Zod** para todos os inputs
- **Server Actions** para operações sensíveis
- **Webhooks Stripe** para confirmação de pagamentos

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL 12+
- Conta Stripe (para pagamentos)

### Passos de Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/bewear-bootcamp.git
   cd bewear-bootcamp
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   cp .env.example .env.local
   ```

4. **Configure o banco de dados**

   ```bash
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
# Banco de Dados
DATABASE_URL=""

# Autenticação
AUTH_SECRET="sua-chave-secreta-aqui"
AUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-nextauth"
```

## 📜 Scripts Disponíveis

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "db:generate": "drizzle-kit generate",
  "db:migrate": "drizzle-kit migrate",
  "db:seed": "tsx src/db/seed.ts"
}
```

### Padrões de Código

- Use TypeScript para todo o código
- Siga as convenções de nomenclatura (kebab-case para arquivos)
- Mantenha componentes pequenos e focados
- Use React Query para gerenciamento de estado
- Implemente validação com Zod
- Use shadcn/ui para componentes de interface

## 🚀 Roadmap

- [ ] Sistema de avaliações e comentários
- [ ] Integração com sistemas de frete
- [ ] Dashboard administrativo
- [ ] Sistema de cupons e descontos
- [ ] Notificações push
- [ ] PWA (Progressive Web App)
- [ ] Integração com redes sociais
- [ ] Sistema de fidelidade

**Desenvolvido com ❤️ no Bewear Bootcamp FUll Stack Club**

_Este projeto demonstra as melhores práticas de desenvolvimento web moderno e serve como referência para aplicações e-commerce escaláveis._
