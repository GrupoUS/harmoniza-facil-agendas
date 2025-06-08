'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, Clock, Settings, ArrowLeft, Plus, Edit, Trash2, Search, Filter, Sparkles, User, Phone, Mail, CreditCard } from 'lucide-react';

export default function AdminPanel() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const appointments = [
    { id: 1, time: '09:00', patient: 'Maria Silva', procedure: 'Preenchimento Labial', status: 'confirmado', payment: 'pago' },
    { id: 2, time: '09:30', patient: 'João Santos', procedure: 'Botox', status: 'confirmado', payment: 'pendente' },
    { id: 3, time: '10:00', patient: null, procedure: null, status: 'disponivel', payment: null },
    { id: 4, time: '10:30', patient: 'Ana Costa', procedure: 'Harmonização Facial', status: 'confirmado', payment: 'pago' },
    { id: 5, time: '11:00', patient: null, procedure: null, status: 'disponivel', payment: null },
    { id: 6, time: '11:30', patient: 'Carlos Lima', procedure: 'Preenchimento', status: 'pendente', payment: 'pendente' },
  ];

  const patients = [
    { id: 1, name: 'Maria Silva', phone: '(11) 99999-9999', email: 'maria@email.com', procedures: ['Preenchimento Labial'], payment: 'pago' },
    { id: 2, name: 'João Santos', phone: '(11) 88888-8888', email: 'joao@email.com', procedures: ['Botox'], payment: 'pendente' },
    { id: 3, name: 'Ana Costa', phone: '(11) 77777-7777', email: 'ana@email.com', procedures: ['Harmonização Facial'], payment: 'pago' },
    { id: 4, name: 'Carlos Lima', phone: '(11) 66666-6666', email: 'carlos@email.com', procedures: ['Preenchimento'], payment: 'pendente' },
  ];

  const procedures = [
    { id: 1, name: 'Preenchimento Labial', description: 'Aumento e definição dos lábios' },
    { id: 2, name: 'Botox', description: 'Aplicação de toxina botulínica' },
    { id: 3, name: 'Harmonização Facial', description: 'Procedimento completo de harmonização' },
    { id: 4, name: 'Preenchimento Facial', description: 'Preenchimento de sulcos e rugas' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-dark p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Agendamentos Hoje</p>
              <p className="text-3xl font-bold text-glow">4</p>
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
              <p className="text-3xl font-bold text-glow">2</p>
            </div>
            <Clock className="w-8 h-8 text-glow" />
          </div>
        </div>

        <div className="card-dark p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Procedimentos</p>
              <p className="text-3xl font-bold text-glow">4</p>
            </div>
            <Settings className="w-8 h-8 text-glow" />
          </div>
        </div>
      </div>

      {/* Calendar and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2 card-dark p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-glow">Calendário de Agendamentos</h2>
            <div className="flex items-center space-x-4">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-dark"
              />
              <button className="btn-neon">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                  appointment.status === 'confirmado'
                    ? 'bg-green-500/10 border-green-500/30'
                    : appointment.status === 'pendente'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'card-dark-hover border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-lg font-bold text-glow">{appointment.time}</span>
                  {appointment.patient ? (
                    <div>
                      <p className="font-medium text-white">{appointment.patient}</p>
                      <p className="text-sm text-gray-400">{appointment.procedure}</p>
                    </div>
                  ) : (
                    <span className="text-gray-400">Slot Disponível</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {appointment.patient && (
                    <>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.payment === 'pago'
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-gray-900'
                      }`}>
                        {appointment.payment === 'pago' ? 'Pago' : 'Pendente'}
                      </span>
                      <button className="p-2 text-gray-400 hover:text-glow transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="card-dark p-6">
            <h3 className="text-lg font-bold text-glow mb-4">Ações Rápidas</h3>
            <div className="space-y-3">
              <button className="btn-neon w-full">
                <Plus className="w-4 h-4 mr-2" />
                Novo Agendamento
              </button>
              <button className="btn-neon-outline w-full">
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Pacientes
              </button>
              <button className="btn-neon-outline w-full">
                <Clock className="w-4 h-4 mr-2" />
                Configurar Disponibilidade
              </button>
              <button className="btn-neon-outline w-full">
                <Settings className="w-4 h-4 mr-2" />
                Gerenciar Procedimentos
              </button>
            </div>
          </div>

          <div className="card-dark p-6">
            <h3 className="text-lg font-bold text-glow mb-4">Próximos Agendamentos</h3>
            <div className="space-y-3">
              {appointments.filter(a => a.patient).slice(0, 3).map((appointment) => (
                <div key={appointment.id} className="card-dark-hover p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{appointment.patient}</p>
                      <p className="text-sm text-gray-400">{appointment.time} - {appointment.procedure}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      appointment.status === 'confirmado'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-gray-900'
                    }`}>
                      {appointment.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPatients = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-glow">Gerenciar Pacientes</h2>
        <button className="btn-neon">
          <Plus className="w-4 h-4 mr-2" />
          Novo Paciente
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar pacientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-dark pl-10"
          />
        </div>
        <button className="btn-neon-outline">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </button>
      </div>

      {/* Patients List */}
      <div className="card-dark">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Lista de Pacientes</h3>
        </div>
        <div className="divide-y divide-gray-700">
          {patients.map((patient) => (
            <div key={patient.id} className="p-6 hover:bg-gray-700/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{patient.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        {patient.phone}
                      </span>
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        {patient.email}
                      </span>
                    </div>
                    <div className="mt-1">
                      <span className="text-xs text-gray-500">Procedimentos: </span>
                      <span className="text-xs text-glow">{patient.procedures.join(', ')}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    patient.payment === 'pago'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-gray-900'
                  }`}>
                    <CreditCard className="w-3 h-3 mr-1 inline" />
                    {patient.payment === 'pago' ? 'Pago' : 'Pendente'}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-glow transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProcedures = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-glow">Gerenciar Procedimentos</h2>
        <button className="btn-neon">
          <Plus className="w-4 h-4 mr-2" />
          Novo Procedimento
        </button>
      </div>

      {/* Procedures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {procedures.map((procedure) => (
          <div key={procedure.id} className="card-dark-hover p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gray-900" />
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-glow transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{procedure.name}</h3>
            <p className="text-gray-400 text-sm">{procedure.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="main-layout">
      {/* Header */}
      <header className="header px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-glow hover:text-yellow-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Início</span>
            </Link>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-glow" />
              <h1 className="text-2xl font-bold text-glow">Painel Admin - TRINTAE3</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Administrador</span>
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-gray-900 font-bold">A</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-gray-700 px-6">
        <div className="flex space-x-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Calendar },
            { id: 'agendamentos', label: 'Agendamentos', icon: Clock },
            { id: 'pacientes', label: 'Pacientes', icon: Users },
            { id: 'procedimentos', label: 'Procedimentos', icon: Settings },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                activeTab === id
                  ? 'border-amber-400 text-glow'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'pacientes' && renderPatients()}
        {activeTab === 'procedimentos' && renderProcedures()}
        {activeTab === 'agendamentos' && renderDashboard()}
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
