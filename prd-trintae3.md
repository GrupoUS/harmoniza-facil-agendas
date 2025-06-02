# PRD - Prática TRINTAE3

## I. Visão Geral da Aplicação

**Nome da Aplicação:** "Prática TRINTAE3"

**Objetivo:** Desenvolver uma aplicação web para o GRUPO US gerenciar pacientes modelo para cursos de harmonização facial. A aplicação deve ser leve, visualmente atraente, altamente intuitiva e otimizada para performance fluida e dinâmica.

**Características Principais:**
- Painel administrativo para equipe
- Portal do cliente para pacientes modelo auto-agendarem
- Integração obrigatória com Supabase
- Interface completamente em português-Brasil (pt-BR)
- Tema escuro com dourado neon como cor de destaque

## II. Papéis de Usuário e Necessidades

### Admin (Equipe GRUPO US)
- Gerenciar cronogramas de cursos e disponibilidade para agendamentos
- Gerenciar lista de pacientes modelo (contatos, procedimentos, status de pagamento)
- Agendar, visualizar e reagendar consultas manualmente
- Gerenciar lista de procedimentos de harmonização facial disponíveis

### Cliente (Paciente Modelo)
- Registrar-se e fazer login na plataforma
- Visualizar datas e horários disponíveis
- Selecionar procedimentos desejados
- Auto-agendar consultas

## III. Funcionalidades do Painel Administrativo

### Dashboard Principal
- **Visualização:** Calendário visual com slots de 30 minutos (9:00, 9:30, 10:00, etc.)
- **Navegação:** Fácil navegação entre dias
- **Exibição de Agendamentos:** Diferenciação visual entre agendamentos feitos por admin vs auto-agendados
- **Disponibilidade:** Mostrar slots ainda disponíveis
- **Resumo Rápido:** Contagem de pacientes agendados para o dia selecionado

### Gerenciamento de Agendamentos
- **Agendamento Manual:** Criar novos agendamentos selecionando data, horário, paciente e procedimentos
- **Reagendamento:** Funcionalidade drag-and-drop para mover agendamentos
- **Visualizar/Editar:** Clicar em agendamento para ver/editar detalhes (status pagamento, notas, procedimentos)

### Gerenciamento de Pacientes
- **Banco de Dados:** Armazenar informações dos pacientes modelo
- **Campos:** Nome, Telefone, Email, Procedimentos Agendados, Status de Pagamento ("Pago", "Pendente", "Isento")
- **Ações:** Adicionar, visualizar lista, editar pacientes

### Gerenciamento de Cursos/Disponibilidade
- **Definir Cronogramas:** Seção para definir datas e janelas de tempo quando cursos acontecem
- **Geração de Slots:** Sistema gera slots de 30 minutos dentro das janelas definidas

### Gerenciamento de Procedimentos
- **Lista de Procedimentos:** Criar e gerenciar procedimentos de harmonização facial
- **Campos:** Nome do Procedimento, Descrição Breve (opcional)

## IV. Funcionalidades do Portal do Cliente

### Autenticação
- **Registro:** Criar conta com Email e Senha
- **Login:** Página de login segura
- **Recuperação de Senha:** (Opcional para MVP)

### Interface de Agendamento
- **Visualizar Disponibilidade:** Calendário ou lista mostrando datas e slots disponíveis
- **Seleção de Procedimentos:** Selecionar um ou mais procedimentos da lista do admin
- **Agendar Consulta:** Selecionar data/horário e procedimentos para confirmar
- **Confirmação:** Mensagem de confirmação na tela
- **Email de Confirmação:** (Opcional para MVP)
- **Visualizar Agendamentos:** (Opcional para MVP)

## V. Requisitos Técnicos

### Integração Supabase (Obrigatória)
- Todos os dados devem ser armazenados no Supabase
- Tabelas necessárias:
  - **users:** Admin e clientes (campo role)
  - **patients:** Perfis de pacientes modelo
  - **procedures:** Procedimentos disponíveis
  - **courses_availability:** Disponibilidade de cursos
  - **appointments:** Agendamentos

### Esquema de Banco de Dados Sugerido

```sql
-- Tabela de usuários (admin e clientes)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  role VARCHAR NOT NULL CHECK (role IN ('admin', 'client')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de pacientes modelo
CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name VARCHAR NOT NULL,
  phone VARCHAR,
  email VARCHAR,
  payment_status VARCHAR DEFAULT 'Pendente' CHECK (payment_status IN ('Pago', 'Pendente', 'Isento')),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de procedimentos
CREATE TABLE procedures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de disponibilidade de cursos
CREATE TABLE courses_availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de agendamentos
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id),
  date DATE NOT NULL,
  time TIME NOT NULL,
  booked_by_admin BOOLEAN DEFAULT FALSE,
  status VARCHAR DEFAULT 'Agendado' CHECK (status IN ('Agendado', 'Confirmado', 'Cancelado', 'Concluído')),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de relacionamento entre agendamentos e procedimentos
CREATE TABLE appointment_procedures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID REFERENCES appointments(id),
  procedure_id UUID REFERENCES procedures(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

## VI. Design UI/UX e Tema

### Inspiração de Layout
- Dashboard inspirado no Horizon UI Pro
- Interface limpa baseada em cards
- Seções bem organizadas
- Apresentação clara de dados

### Esquema de Cores Personalizado
- **Tema Base:** Tema escuro para toda aplicação
- **Cor de Destaque:** Dourado neon vibrante (inspirado em https://trintae3.drasacha.com.br/)
- **Uso da Cor de Destaque:** Elementos interativos (botões, links, estados ativos), destaques, ícones importantes, texto específico importante
- **Cores de Texto:** Excelente contraste contra fundo escuro (tons de branco ou cinza claro)
- **Visual:** Moderno, sofisticado e profissional

### Responsividade
- Experiência otimizada para desktop
- Views amigáveis para tablet e mobile (especialmente Portal do Cliente)

## VII. Otimização de Código e Performance

### Revisão de Código
- Código limpo, eficiente e seguindo melhores práticas
- Otimizar para código mínimo e evitar complexidade desnecessária
- Manter aplicação leve

### Foco em Performance
- Tempos de carregamento rápidos
- Transições suaves e experiência dinâmica
- Otimizar consultas ao banco (Supabase)

## VIII. Stack Tecnológico Recomendado

### Frontend
- **Framework:** React com TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + daisyUI
- **Componentes:** shadcn/ui para componentes base
- **Calendário:** React Big Calendar ou similar
- **Drag & Drop:** @dnd-kit/core

### Backend/Database
- **Backend as a Service:** Supabase
- **Autenticação:** Supabase Auth
- **Database:** PostgreSQL (via Supabase)
- **Real-time:** Supabase Realtime (para atualizações de agendamentos)

### Deployment
- **Frontend:** Netlify ou Vercel
- **Backend:** Supabase (hospedado)

## IX. Funcionalidades MVP vs Futuras

### MVP (Mínimo Produto Viável)
- ✅ Autenticação básica (registro/login)
- ✅ Dashboard administrativo com calendário
- ✅ CRUD de pacientes, procedimentos e disponibilidade
- ✅ Agendamento manual e auto-agendamento
- ✅ Reagendamento drag-and-drop
- ✅ Interface em pt-BR
- ✅ Tema escuro com dourado neon

### Funcionalidades Futuras
- 📧 Confirmações por email
- 📱 Notificações push
- 📊 Relatórios e analytics
- 🔄 Sincronização com calendários externos
- 💳 Integração de pagamentos
- 📋 Histórico detalhado de pacientes

## X. Critérios de Sucesso

1. **Performance:** Carregamento de páginas < 2 segundos
2. **Usabilidade:** Interface intuitiva sem necessidade de treinamento
3. **Responsividade:** Funciona perfeitamente em desktop, tablet e mobile
4. **Confiabilidade:** Zero perda de dados de agendamentos
5. **Visual:** Design moderno e profissional alinhado com marca TRINTAE3

## XI. Cronograma de Desenvolvimento Sugerido

### Fase 1: Setup e Infraestrutura (1-2 dias)
- Configurar projeto React + TypeScript + Vite
- Configurar Supabase e criar esquema de banco
- Implementar autenticação básica
- Configurar tema escuro e cores

### Fase 2: Painel Administrativo (3-4 dias)
- Dashboard com calendário
- CRUD de pacientes e procedimentos
- Gerenciamento de disponibilidade
- Agendamento manual

### Fase 3: Portal do Cliente (2-3 dias)
- Interface de agendamento
- Seleção de procedimentos
- Auto-agendamento

### Fase 4: Funcionalidades Avançadas (2-3 dias)
- Reagendamento drag-and-drop
- Validações e prevenção de conflitos
- Otimizações de performance

### Fase 5: Testes e Deploy (1-2 dias)
- Testes de usabilidade
- Testes de responsividade
- Deploy em produção

**Total Estimado:** 9-14 dias de desenvolvimento
