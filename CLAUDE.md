# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Ricardo Móveis - Documentação do Projeto

## Visão Geral

Landing page responsiva desenvolvida em Next.js 14+ com TypeScript para a empresa Ricardo Móveis, especializada em móveis planejados.

## Stack Tecnológica

- **Framework**: Next.js 14+ com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Validação**: Zod
- **Analytics**: Google Analytics + Facebook Pixel
- **Deployment**: Pronto para Vercel/Netlify

## Funcionalidades Implementadas

### ✅ Componentes Desenvolvidos

1. **Header Navigation**
   - Menu responsivo com hamburger mobile
   - Navegação suave entre seções
   - Logo da empresa

2. **Seções da Landing Page**
   - **Hero**: Título principal com CTAs
   - **Sobre**: Informações da empresa com estatísticas
   - **Serviços**: Grid com 6 tipos de móveis planejados
   - **Galeria**: Placeholder para projetos futuros
   - **Depoimentos**: Componente com iniciais dos clientes
   - **Contato**: Formulário completo com validação

3. **Formulário de Contato**
   - Validação frontend e backend
   - API Route configurada
   - Tracking de conversões
   - Estados de loading e sucesso

4. **Analytics Integrado**
   - Google Analytics 4 (GA4)
   - Facebook Pixel
   - Tracking de eventos customizados

### ✅ Configurações SEO

- Metadados otimizados
- Open Graph tags
- Twitter Cards
- Schema markup pronto

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento (com Turbopack)
npm run dev

# Build para produção (com Turbopack)
npm run build

# Executar build local
npm start

# Executar linting
npm run lint
```

## Próximos Passos Recomendados

### 📋 Conteúdo & Assets

1. **Substituir placeholder de imagens**
   - Adicionar fotos reais dos projetos em `/public/images/`
   - Otimizar imagens (WebP, tamanhos responsivos)
   - Atualizar componente Gallery

2. **Atualizar textos**
   - Revisar conteúdo das seções "Sobre" e "Serviços"
   - Adicionar depoimentos reais de clientes
   - Definir informações de contato específicas

3. **Logo e Identidade Visual**
   - Substituir logo placeholder no Header
   - Definir paleta de cores final
   - Adicionar favicon personalizado

### ⚙️ Configurações

1. **Analytics IDs**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
   ```

2. **Email Configuration**
   - Configurar serviço de email (SendGrid, Nodemailer, etc.)
   - Atualizar API route em `/src/app/api/contact/route.ts`

3. **Domínio e Deployment**
   - Configurar domínio personalizado
   - Deploy na Vercel/Netlify
   - Configurar SSL

### 🔧 Melhorias Técnicas

1. **Performance**
   - Implementar lazy loading para imagens
   - Otimizar bundles com análise webpack
   - Configurar cache strategies

2. **Funcionalidades Extra**
   - WhatsApp integration
   - Gallery com modal/lightbox
   - Blog ou seção de novidades
   - Calculadora de orçamentos

3. **Monitoramento**
   - Error tracking (Sentry)
   - Performance monitoring
   - Form analytics

## Arquitetura e Estrutura

### App Router Structure
- Usa Next.js 14+ App Router (`src/app/`)
- Single Page Application com componentes secionados
- Página principal em `src/app/page.tsx` renderiza todas as seções
- API routes em `src/app/api/contact/route.ts` para formulários

### TypeScript Configuration
- Path aliases configurados: `@/*` → `./src/*`
- Strict mode habilitado
- Target: ES2017 com DOM types

### Estrutura do Projeto

```
src/
├── app/
│   ├── api/contact/          # API routes para formulário
│   ├── globals.css           # Estilos globais Tailwind
│   ├── layout.tsx           # Layout raiz com analytics
│   └── page.tsx             # Página inicial com seções
├── components/
│   ├── analytics/           # GoogleAnalytics & FacebookPixel
│   ├── layout/              # Header & Footer
│   ├── sections/            # Hero, About, Services, etc.
│   └── ui/                  # Button e componentes reutilizáveis
└── lib/
    ├── analytics.ts         # Tracking utilities & config
    └── utils.ts            # cn() utility function
```

### Dependências Principais
- **Next.js 15.5.2** com Turbopack
- **React 19.1.0** 
- **Tailwind CSS v4** com PostCSS
- **TypeScript 5**
- **Zod 4.1.5** para validação
- **clsx & tailwind-merge** para className utilities

## Scripts Úteis

```bash
# Executar linting
npm run lint

# Note: npm run type-check and npm run analyze are not configured in package.json
# TypeScript checking happens automatically during build
```

## Comandos para Desenvolvimento

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção local
- `npm run lint` - Verificar código