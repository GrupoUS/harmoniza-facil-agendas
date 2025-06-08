# 📅 Harmoniza Fácil Agendas - GRUPO US

Sistema de agendamento para harmonização facial desenvolvido com **GRUPO US VIBECODE SYSTEM V2.0**.

## 🚀 Tecnologias

- **Next.js 15.3.3** com App Router
- **React 19** com TypeScript
- **Tailwind CSS 4** + Design System GRUPO US
- **Supabase** para backend e autenticação
- **React Big Calendar** para sistema de agendamento
- **React Hook Form** + **Zod** para validação
- **next-themes** para dark/light mode

## 🎨 Design System

### **Cores PANTONE**
- **Primary Dark**: #112031 (PANTONE 5395 C)
- **Primary Blue**: #294359 (PANTONE 2168 C)
- **Accent Gold**: #AC9469 (PANTONE 4007 C)
- **Neutral Light**: #B4AC9C (PANTONE 7535 C)
- **Neutral Extra Light**: #D2D0C8 (PANTONE 400 C)

### **Tipografia**
- **Headings**: Optima
- **Body**: Inter

### **Temas**
- **Padrão**: Dark mode
- **Toggle**: Top-left corner
- **Transições**: Suaves (300ms)

## 🏗️ Estrutura do Projeto

```
harmoniza-facil-agendas/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes base
│   │   ├── features/       # Componentes específicos
│   │   └── providers.tsx   # Theme provider
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilitários
│   ├── stores/             # Estado global
│   ├── types/              # Definições TypeScript
│   └── utils/              # Funções auxiliares
├── Rules/                  # Regras centralizadas
├── docs/                   # Documentação
├── tests/                  # Testes
└── scripts/                # Scripts do projeto
```

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 🎯 Funcionalidades

### **Implementadas**
- ✅ Design System GRUPO US
- ✅ Dark/Light mode
- ✅ Componentes UI otimizados
- ✅ Sistema de temas
- ✅ Acessibilidade WCAG AA

### **Em Desenvolvimento**
- 🔄 Sistema de calendário
- 🔄 Autenticação Supabase
- 🔄 Gestão de agendamentos
- 🔄 Dashboard administrativo

## 📱 Responsividade

- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Touch Friendly**: Interações otimizadas para touch

## ♿ Acessibilidade

- **WCAG AA**: Conformidade completa
- **Contraste**: 4.5:1 para texto normal, 3:1 para texto grande
- **Navegação**: Suporte completo a teclado
- **Screen Readers**: Compatibilidade total

## 🔧 Configuração

### **Variáveis de Ambiente**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### **Scripts Disponíveis**
- `npm run dev` - Desenvolvimento
- `npm run build` - Build produção
- `npm run start` - Iniciar produção
- `npm run lint` - Verificar código

## 📊 Performance

- **Lighthouse Score**: Target >90
- **Core Web Vitals**: Otimizado
- **Bundle Size**: Minimizado
- **Loading**: <3s primeira carga

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📚 Documentação

- **API**: `/docs/API.md`
- **Deployment**: `/docs/DEPLOYMENT.md`
- **Design System**: `/Rules/project-specific/harmoniza-design-system.md`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade do **GRUPO US** e está sob licença proprietária.

---

**Desenvolvido com ❤️ pelo GRUPO US VIBECODE SYSTEM V2.0**
