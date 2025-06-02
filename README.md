# Harmoniza Fácil Agendas

Sistema de agendamento para clínicas de harmonização facial, desenvolvido com Next.js e design moderno com tema dourado.

## Características

- **Interface Moderna**: Design escuro com acentos dourados elegantes
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Três Áreas Principais**:
  - Página inicial com informações da clínica
  - Portal do paciente para agendamentos
  - Painel administrativo para gestão

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [Lucide React](https://lucide.dev/) - Ícones
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - Tipografia

## Como Executar

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

- `/src/app/page.tsx` - Página inicial da clínica
- `/src/app/paciente/page.tsx` - Portal do paciente
- `/src/app/admin/page.tsx` - Painel administrativo
- `/src/app/globals.css` - Estilos globais e tema dourado

## Personalização

O projeto utiliza um sistema de cores customizado baseado em tons dourados. As variáveis CSS podem ser encontradas em `globals.css` para fácil personalização.

## Deploy

O projeto pode ser facilmente implantado na [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## Contribuição

Este projeto foi desenvolvido para clínicas de harmonização facial. Contribuições são bem-vindas!
