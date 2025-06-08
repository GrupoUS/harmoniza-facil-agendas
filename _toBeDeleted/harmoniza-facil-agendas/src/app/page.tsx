import { Calendar, Clock, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="main-layout">
      {/* Header */}
      <header className="header px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-glow" />
            <h1 className="text-2xl font-bold text-glow">Prática TRINTAE3</h1>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-glow transition-colors">
              Início
            </a>
            <a href="#" className="text-gray-300 hover:text-glow transition-colors">
              Agendamentos
            </a>
            <a href="#" className="text-gray-300 hover:text-glow transition-colors">
              Pacientes
            </a>
            <a href="#" className="text-gray-300 hover:text-glow transition-colors">
              Procedimentos
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Hero Section */}
        <section className="text-center py-12 mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Sistema de Agendamento
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Gerencie pacientes modelo para cursos de harmonização facial do GRUPO US
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/admin" className="btn-neon">
              Acessar Painel Admin
            </Link>
            <Link href="/paciente" className="btn-neon-outline">
              Portal do Paciente
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card-dark-hover p-6 text-center">
            <Calendar className="w-12 h-12 text-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Agendamento Inteligente
            </h3>
            <p className="text-gray-400">
              Sistema de calendário com slots de 30 minutos para otimizar o tempo dos cursos
            </p>
          </div>

          <div className="card-dark-hover p-6 text-center">
            <Users className="w-12 h-12 text-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Gestão de Pacientes
            </h3>
            <p className="text-gray-400">
              Controle completo de pacientes modelo, procedimentos e status de pagamento
            </p>
          </div>

          <div className="card-dark-hover p-6 text-center">
            <Clock className="w-12 h-12 text-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Disponibilidade Flexível
            </h3>
            <p className="text-gray-400">
              Defina horários de curso e permita auto-agendamento pelos pacientes
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card-dark p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Agendamentos Hoje</p>
                <p className="text-3xl font-bold text-glow">12</p>
              </div>
              <Calendar className="w-8 h-8 text-glow" />
            </div>
          </div>

          <div className="card-dark p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pacientes Ativos</p>
                <p className="text-3xl font-bold text-glow">48</p>
              </div>
              <Users className="w-8 h-8 text-glow" />
            </div>
          </div>

          <div className="card-dark p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Slots Disponíveis</p>
                <p className="text-3xl font-bold text-glow">24</p>
              </div>
              <Clock className="w-8 h-8 text-glow" />
            </div>
          </div>

          <div className="card-dark p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Procedimentos</p>
                <p className="text-3xl font-bold text-glow">8</p>
              </div>
              <Sparkles className="w-8 h-8 text-glow" />
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="card-dark p-6">
          <h3 className="text-xl font-semibold text-white mb-6">
            Atividade Recente
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Maria Silva agendou Preenchimento Labial</span>
              </div>
              <span className="text-gray-500 text-sm">há 5 min</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">João Santos confirmou pagamento</span>
              </div>
              <span className="text-gray-500 text-sm">há 12 min</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Ana Costa reagendou para amanhã</span>
              </div>
              <span className="text-gray-500 text-sm">há 25 min</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">Novo procedimento adicionado: Harmonização Facial</span>
              </div>
              <span className="text-gray-500 text-sm">há 1h</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 GRUPO US - Prática TRINTAE3. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-glow" />
            <span className="text-glow text-sm font-medium">
              Powered by GRUPO US
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
