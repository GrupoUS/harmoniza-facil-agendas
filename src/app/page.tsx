import { Calendar, Clock, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Header */}
      <header className="border-b border-neutral-light bg-surface px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-accent-gold" />
            <h1 className="text-2xl font-bold heading-optima text-accent-gold">
              Harmoniza Fácil Agendas
            </h1>
          </div>
          <nav className="flex space-x-6">
            <a
              href="#"
              className="text-text-secondary hover:text-accent-gold transition-colors"
            >
              Início
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-accent-gold transition-colors"
            >
              Agendamentos
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-accent-gold transition-colors"
            >
              Pacientes
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-accent-gold transition-colors"
            >
              Procedimentos
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-12 mb-12">
          <h2 className="text-responsive-h1 font-bold heading-optima text-text-primary mb-4">
            Sistema de Agendamento
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto text-inter">
            Gerencie pacientes modelo para cursos de harmonização facial do
            GRUPO US
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/admin">
              <Button size="lg">Acessar Painel Admin</Button>
            </Link>
            <Link href="/paciente">
              <Button variant="secondary" size="lg">
                Portal do Paciente
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Calendar className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold heading-optima">
                Agendamento Inteligente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-inter">
                Sistema de calendário com slots de 30 minutos para otimizar o
                tempo dos cursos
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold heading-optima">
                Gestão de Pacientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-inter">
                Controle completo de pacientes modelo, procedimentos e status de
                pagamento
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <Clock className="w-12 h-12 text-accent-gold mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold heading-optima">
                Disponibilidade Flexível
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-inter">
                Defina horários de curso e permita auto-agendamento pelos
                pacientes
              </CardDescription>
            </CardContent>
          </Card>
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
                <span className="text-gray-300">
                  Maria Silva agendou Preenchimento Labial
                </span>
              </div>
              <span className="text-gray-500 text-sm">há 5 min</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">
                  João Santos confirmou pagamento
                </span>
              </div>
              <span className="text-gray-500 text-sm">há 12 min</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">
                  Ana Costa reagendou para amanhã
                </span>
              </div>
              <span className="text-gray-500 text-sm">há 25 min</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">
                  Novo procedimento adicionado: Harmonização Facial
                </span>
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
  );
}
