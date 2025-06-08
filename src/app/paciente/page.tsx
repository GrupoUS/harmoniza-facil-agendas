'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, CheckCircle } from 'lucide-react';

export default function PatientPortal() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const procedures = [
    'Preenchimento Labial',
    'Botox',
    'Preenchimento de Rugas',
    'Harmonização Facial',
    'Lifting Facial',
    'Peeling Químico',
    'Microagulhamento',
    'Bioestimulador'
  ];

  const availableSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleProcedureToggle = (procedure: string) => {
    setSelectedProcedures(prev => 
      prev.includes(procedure) 
        ? prev.filter(p => p !== procedure)
        : [...prev, procedure]
    );
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  if (showLogin && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-amber-400 mb-2">⚡ Portal do Paciente</h1>
              <p className="text-gray-400">TRINTAE3 - GRUPO US</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="••••••••"
                />
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Entrar
              </button>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Não tem conta?{' '}
                  <button className="text-amber-400 hover:text-amber-300">
                    Cadastre-se aqui
                  </button>
                </p>
              </div>

              <div className="text-center">
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-amber-400 text-sm flex items-center justify-center space-x-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar ao Início</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Início</span>
            </Link>
            <div className="h-6 w-px bg-gray-600"></div>
            <h1 className="text-2xl font-bold text-amber-400">⚡ Portal do Paciente - TRINTAE3</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Maria Silva</span>
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-900" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-amber-400 mb-6">Agendar Consulta</h2>

            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Selecione a Data
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Horários Disponíveis
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? 'bg-amber-400 text-gray-900 border-amber-400'
                            : 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Procedure Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Procedimentos de Interesse
                </label>
                <div className="space-y-2">
                  {procedures.map((procedure) => (
                    <label key={procedure} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedProcedures.includes(procedure)}
                        onChange={() => handleProcedureToggle(procedure)}
                        className="w-4 h-4 text-amber-400 bg-gray-700 border-gray-600 rounded focus:ring-amber-400"
                      />
                      <span className="text-gray-300">{procedure}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                disabled={!selectedDate || !selectedTime || selectedProcedures.length === 0}
                className="w-full bg-amber-400 hover:bg-amber-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Confirmar Agendamento
              </button>
            </div>
          </div>

          {/* Booking Summary & Info */}
          <div className="space-y-6">
            {/* Current Selection */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-amber-400 mb-4">Resumo do Agendamento</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">
                    {selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR') : 'Selecione uma data'}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300">
                    {selectedTime || 'Selecione um horário'}
                  </span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-gray-300 font-medium">Procedimentos:</p>
                    {selectedProcedures.length > 0 ? (
                      <ul className="text-sm text-gray-400 mt-1">
                        {selectedProcedures.map((proc) => (
                          <li key={proc}>• {proc}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-400 mt-1">Nenhum procedimento selecionado</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-amber-400 mb-4">Informações Importantes</h3>
              
              <div className="space-y-3 text-sm text-gray-300">
                <p>• Os agendamentos são para participação como paciente modelo em nossos cursos de harmonização facial.</p>
                <p>• Todos os procedimentos são realizados por profissionais qualificados sob supervisão.</p>
                <p>• É necessário chegar 15 minutos antes do horário agendado.</p>
                <p>• Em caso de cancelamento, avisar com pelo menos 24h de antecedência.</p>
                <p>• Dúvidas? Entre em contato conosco pelo WhatsApp.</p>
              </div>
            </div>

            {/* My Appointments */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-amber-400 mb-4">Meus Agendamentos</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium">15/06/2025 - 14:30</p>
                    <p className="text-sm text-gray-400">Preenchimento Labial</p>
                  </div>
                  <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    Confirmado
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium">22/06/2025 - 10:00</p>
                    <p className="text-sm text-gray-400">Botox</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-500 text-gray-900 text-xs rounded-full">
                    Pendente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
