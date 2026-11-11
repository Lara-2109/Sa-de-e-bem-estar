import { useState } from 'react'

const HealthTools = () => {
  const [activeTool, setActiveTool] = useState(null)
  
  // Growth Calculator
  const [ageMonths, setAgeMonths] = useState('')
  const [ageUnit, setAgeUnit] = useState('meses')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [growthResult, setGrowthResult] = useState(null)

  const calculateGrowth = () => {
    const ageValue = parseFloat(ageMonths)
    const w = parseFloat(weight)
    const h = parseFloat(height)
    
    if (!ageValue || !w || !h) return
    
    // Convert to months if in years
    const age = ageUnit === 'anos' ? ageValue * 12 : ageValue
    
    // Simplified WHO growth standards (approximate)
    const bmi = w / ((h / 100) ** 2)
    
    // BMI percentiles by age based on WHO growth standards (simplified)
    let weightStatus = ''
    if (age < 60) {
      // Children under 5 years - use weight-for-age
      if (w < 7) weightStatus = 'Abaixo do peso'
      else if (w < 10) weightStatus = 'Peso normal'
      else weightStatus = 'Acima do peso'
    } else if (age < 12 * 5) {
      // Children 5-10 years - BMI percentiles (approximate)
      if (bmi < 14) weightStatus = 'Abaixo do peso'
      else if (bmi < 18) weightStatus = 'Peso normal'
      else if (bmi < 22) weightStatus = 'Acima do peso'
      else weightStatus = 'Obesidade'
    } else {
      // Adolescents and adults - BMI percentiles (WHO reference)
      if (bmi < 18.5) weightStatus = 'Abaixo do peso'
      else if (bmi < 25) weightStatus = 'Peso normal'
      else if (bmi < 30) weightStatus = 'Acima do peso'
      else weightStatus = 'Obesidade'
    }
    
    setGrowthResult({
      bmi: bmi.toFixed(1),
      weightStatus,
      height: h,
      weight: w,
      age: age
    })
  }

  // Fever Medication Calculator
  const [childWeight, setChildWeight] = useState('')
  const [medicationResult, setMedicationResult] = useState(null)

  const calculateMedication = () => {
    const weight = parseFloat(childWeight)
    if (!weight) return
    
    // Paracetamol: 10-15mg/kg every 4-6 hours (max 4 doses/day)
    const paracetamolMin = (weight * 10).toFixed(0)
    const paracetamolMax = (weight * 15).toFixed(0)
    
    // Ibuprofen: 5-10mg/kg every 6-8 hours (for children > 6 months)
    const ibuprofenMin = (weight * 5).toFixed(0)
    const ibuprofenMax = (weight * 10).toFixed(0)
    
    setMedicationResult({
      paracetamol: `${paracetamolMin}-${paracetamolMax}mg`,
      ibuprofen: `${ibuprofenMin}-${ibuprofenMax}mg`,
      weight
    })
  }

  // Vaccine Tracker
  const [birthDate, setBirthDate] = useState('')
  const [vaccineResult, setVaccineResult] = useState(null)

  const calculateVaccines = () => {
    if (!birthDate) return
    
    const birth = new Date(birthDate)
    const today = new Date()
    const ageInDays = Math.floor((today - birth) / (1000 * 60 * 60 * 24))
    const ageInMonths = Math.floor(ageInDays / 30)
    
    const vaccines = [
      { name: 'BCG', age: 'Ao nascer', done: ageInDays >= 0 },
      { name: 'Hepatite B (1ª dose)', age: 'Ao nascer', done: ageInDays >= 0 },
      { name: 'Penta (1ª dose)', age: '2 meses', done: ageInMonths >= 2 },
      { name: 'VIP (1ª dose)', age: '2 meses', done: ageInMonths >= 2 },
      { name: 'Rotavírus (1ª dose)', age: '2 meses', done: ageInMonths >= 2 },
      { name: 'Pneumocócica (1ª dose)', age: '2 meses', done: ageInMonths >= 2 },
      { name: 'Meningocócica C', age: '3 meses', done: ageInMonths >= 3 },
      { name: 'Penta (2ª dose)', age: '4 meses', done: ageInMonths >= 4 },
      { name: 'VIP (2ª dose)', age: '4 meses', done: ageInMonths >= 4 },
      { name: 'Rotavírus (2ª dose)', age: '4 meses', done: ageInMonths >= 4 },
      { name: 'Pneumocócica (2ª dose)', age: '4 meses', done: ageInMonths >= 4 },
      { name: 'Penta (3ª dose)', age: '6 meses', done: ageInMonths >= 6 },
      { name: 'VIP (3ª dose)', age: '6 meses', done: ageInMonths >= 6 },
      { name: 'Pneumocócica (3ª dose)', age: '6 meses', done: ageInMonths >= 6 },
      { name: 'Influenza (1ª dose)', age: '6 meses', done: ageInMonths >= 6 },
      { name: 'Tríplice Viral (SCR)', age: '12 meses', done: ageInMonths >= 12 },
      { name: 'Hepatite A', age: '12 meses', done: ageInMonths >= 12 },
      { name: 'Pneumocócica (reforço)', age: '12 meses', done: ageInMonths >= 12 },
      { name: 'Meningocócica C (reforço)', age: '12 meses', done: ageInMonths >= 12 },
      { name: 'Varicela', age: '15 meses', done: ageInMonths >= 15 },
      { name: 'DTP (reforço)', age: '15 meses', done: ageInMonths >= 15 },
      { name: 'VIP (reforço)', age: '15 meses', done: ageInMonths >= 15 },
      { name: 'Tríplice Bacteriana (DTP)', age: '4-6 anos', done: ageInMonths >= 48 },
      { name: 'VIP (reforço)', age: '4-6 anos', done: ageInMonths >= 48 },
    ]
    
    setVaccineResult(vaccines)
  }

  // Symptom Checker
  const [symptomStep, setSymptomStep] = useState(0)
  const [symptomAnswers, setSymptomAnswers] = useState([])
  const [triageResult, setTriageResult] = useState(null)

  const symptomQuestions = [
    {
      question: 'Qual é a principal queixa?',
      options: ['Febre', 'Dor de barriga', 'Tosse', 'Dor de cabeça', 'Vômito/Diarreia', 'Outro'],
    },
    {
      question: 'Há quanto tempo os sintomas começaram?',
      options: ['Menos de 24h', '1-3 dias', '4-7 dias', 'Mais de 7 dias'],
    },
    {
      question: 'A criança está comendo e bebendo normalmente?',
      options: ['Sim, normalmente', 'Comendo menos, bebendo bem', 'Comendo e bebendo pouco', 'Recusando tudo'],
    },
    {
      question: 'Como está o comportamento da criança?',
      options: ['Normal/brincando', 'Mais irritada que o normal', 'Muito sonolenta/letárgica', 'Confusa/desorientada'],
    },
    {
      question: 'Há dificuldade para respirar?',
      options: ['Não', 'Respiração um pouco rápida', 'Respiração muito rápida/difícil', 'Não consegue respirar'],
    },
  ]

  const handleSymptomAnswer = (answer) => {
    const newAnswers = [...symptomAnswers, answer]
    setSymptomAnswers(newAnswers)
    
    if (symptomStep < symptomQuestions.length - 1) {
      setSymptomStep(symptomStep + 1)
    } else {
      // Simple triage logic
      let urgency = 'baixa'
      let recommendation = 'Agende uma consulta regular com o pediatra.'
      
      if (newAnswers[3] === 'Muito sonolenta/letárgica' || newAnswers[3] === 'Confusa/desorientada' ||
          newAnswers[4] === 'Não consegue respirar' || newAnswers[4] === 'Respiração muito rápida/difícil' ||
          newAnswers[2] === 'Recusando tudo') {
        urgency = 'alta'
        recommendation = 'Procure atendimento de emergência IMEDIATAMENTE!'
      } else if (newAnswers[1] === 'Menos de 24h' && newAnswers[0] === 'Febre' && newAnswers[2] === 'Comendo menos, bebendo bem') {
        urgency = 'média'
        recommendation = 'Entre em contato com o pediatra hoje. Monitore os sintomas.'
      } else if (newAnswers[2] === 'Comendo e bebendo pouco' || newAnswers[3] === 'Mais irritada que o normal') {
        urgency = 'média'
        recommendation = 'Agende uma consulta o mais breve possível.'
      }
      
      setTriageResult({ urgency, recommendation, answers: newAnswers })
    }
  }

  const resetSymptomChecker = () => {
    setSymptomStep(0)
    setSymptomAnswers([])
    setTriageResult(null)
  }

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Ferramentas de Saúde</h1>
        <p className="text-xl text-gray-600">Calculadoras e rastreadores para ajudar no cuidado da criança</p>
      </header>

      {/* Tool Selection */}
      {!activeTool && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <div className="card card-hover cursor-pointer" onClick={() => setActiveTool('growth')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Curva de Crescimento</h3>
            <p className="text-gray-600 text-center">Calcule peso, altura e IMC</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveTool('medication')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Calculadora de Medicamentos</h3>
            <p className="text-gray-600 text-center">Dose de antitérmicos por peso</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveTool('vaccine')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Rastreador de Vacinas</h3>
            <p className="text-gray-600 text-center">Verifique vacinas pendentes</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveTool('symptom')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Buscador de Sintomas</h3>
            <p className="text-gray-600 text-center">Triagem rápida para emergências</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveTool('firstaid')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Primeiros Socorros</h3>
            <p className="text-gray-600 text-center">O que fazer em emergências</p>
          </div>
        </div>
      )}

      {/* Growth Calculator */}
      {activeTool === 'growth' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Curva de Crescimento</h2>
            <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={ageMonths}
                  onChange={(e) => setAgeMonths(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 24"
                />
                <select
                  value={ageUnit}
                  onChange={(e) => setAgeUnit(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="meses">Meses</option>
                  <option value="anos">Anos</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: 12.5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Altura (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: 158 (para 1,58m)"
              />
              <p className="text-xs text-gray-500 mt-1">Digite a altura em centímetros (ex: 158 para 1,58m)</p>
            </div>
            <button onClick={calculateGrowth} className="btn-primary w-full">
              Calcular
            </button>
          </div>

          {growthResult && (
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Resultado</h3>
              <p className="text-gray-700"><strong>IMC:</strong> {growthResult.bmi}</p>
              <p className="text-gray-700"><strong>Status do peso:</strong> {growthResult.weightStatus}</p>
              <p className="text-sm text-gray-600 mt-4">
                Nota: Estes valores são aproximados baseados nas curvas da OMS. Consulte sempre o pediatra para avaliação completa.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Medication Calculator */}
      {activeTool === 'medication' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Calculadora de Medicamentos</h2>
            <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Peso da criança (kg)</label>
              <input
                type="number"
                step="0.1"
                value={childWeight}
                onChange={(e) => setChildWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: 15"
              />
            </div>
            <button onClick={calculateMedication} className="btn-primary w-full">
              Calcular Dose
            </button>
          </div>

          {medicationResult && (
            <div className="mt-6 space-y-4">
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-2">Paracetamol</h3>
                <p className="text-gray-700"><strong>Dose:</strong> {medicationResult.paracetamol}</p>
                <p className="text-sm text-gray-600">A cada 4-6 horas (máximo 4 doses/dia)</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Ibuprofeno</h3>
                <p className="text-gray-700"><strong>Dose:</strong> {medicationResult.ibuprofen}</p>
                <p className="text-sm text-gray-600">A cada 6-8 horas (apenas para crianças maiores de 6 meses)</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                <p className="text-sm text-yellow-800">
                  <strong>AVISO IMPORTANTE:</strong> Sempre confirme a dose com o pediatra antes de administrar qualquer medicamento. Esta calculadora é apenas para referência.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Vaccine Tracker */}
      {activeTool === 'vaccine' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Rastreador de Vacinas</h2>
            <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button onClick={calculateVaccines} className="btn-primary w-full">
              Verificar Vacinas
            </button>
          </div>

          {vaccineResult && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Calendário Vacinal (PNI)</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {vaccineResult.map((vaccine, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      vaccine.done
                        ? 'bg-green-50 border-l-4 border-green-500'
                        : 'bg-gray-50 border-l-4 border-gray-300'
                    }`}
                  >
                    <div>
                      <p className="font-medium text-gray-800">{vaccine.name}</p>
                      <p className="text-sm text-gray-600">Idade recomendada: {vaccine.age}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      vaccine.done ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                    }`}>
                      {vaccine.done ? 'Pendente' : 'Ainda não'}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Consulte sempre o calendário oficial do PNI e seu pediatra para informações atualizadas.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Symptom Checker */}
      {activeTool === 'symptom' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Buscador de Sintomas</h2>
            <button onClick={() => { setActiveTool(null); resetSymptomChecker(); }} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!triageResult ? (
            <div className="py-8">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Pergunta {symptomStep + 1} de {symptomQuestions.length}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((symptomStep + 1) / symptomQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{symptomQuestions[symptomStep].question}</h3>
              
              <div className="space-y-3 max-w-2xl mx-auto">
                {symptomQuestions[symptomStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSymptomAnswer(option)}
                    className="w-full text-left px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl font-medium transition-all duration-300 border-2 border-blue-200 hover:border-blue-400"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className={`text-6xl mb-4 ${
                triageResult.urgency === 'alta' ? '🚨' :
                triageResult.urgency === 'média' ? '⚠️' : '✅'
              }`}>
                {triageResult.urgency === 'alta' ? '🚨' :
                 triageResult.urgency === 'média' ? '⚠️' : '✅'}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Urgência: {triageResult.urgency === 'alta' ? 'ALTA' :
                          triageResult.urgency === 'média' ? 'MÉDIA' : 'BAIXA'}
              </h3>
              <p className="text-lg text-gray-600 mb-6">{triageResult.recommendation}</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl max-w-2xl mx-auto mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>AVISO:</strong> Este buscador de sintomas é apenas para orientação e não substitui avaliação médica. Em caso de dúvida, sempre consulte um profissional de saúde.
                </p>
              </div>
              
              <button onClick={resetSymptomChecker} className="btn-primary">
                Nova Consulta
              </button>
            </div>
          )}
        </div>
      )}

      {/* First Aid Section */}
      {activeTool === 'firstaid' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Primeiros Socorros</h2>
            <button onClick={() => setActiveTool(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Engasgo</h3>
              <div className="space-y-3">
                <p className="font-bold text-gray-800">Sinais:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4">
                  <li>Não consegue falar, tossir ou respirar</li>
                  <li>Segura o pescoço com as mãos</li>
                  <li>Pele e lábios ficam azuis</li>
                </ul>
                <p className="font-bold text-gray-800 mt-3">O que fazer:</p>
                <ol className="text-gray-700 list-decimal list-inside ml-4">
                  <li>Chame emergência (192) imediatamente</li>
                  <li>Se a criança estiver consciente: faça a manobra de Heimlich</li>
                  <li>Fique atrás da criança, abrace a cintura</li>
                  <li>Faça um punho com uma mão, coloque acima do umbigo</li>
                  <li>Cubra o punho com a outra mão</li>
                  <li>Faça compressões rápidas para cima e para dentro</li>
                  <li>Repita até o objeto sair ou a criança perder a consciência</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">Febre Alta</h3>
              <div className="space-y-3">
                <p className="font-bold text-gray-800">Quando é emergência:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4">
                  <li>Febre acima de 39°C em bebês menores de 3 meses</li>
                  <li>Febre que dura mais de 3 dias</li>
                  <li>Convulsões</li>
                  <li>Dificuldade para respirar</li>
                  <li>Letargia ou irritabilidade extrema</li>
                </ul>
                <p className="font-bold text-gray-800 mt-3">O que fazer:</p>
                <ol className="text-gray-700 list-decimal list-inside ml-4">
                  <li>Mantenha a criança hidratada</li>
                  <li>Vista roupas leves</li>
                  <li>Banho morno (não frio)</li>
                  <li>Antitérmico se prescrito pelo médico</li>
                  <li>Procure médico se houver sinais de alerta</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Queimaduras</h3>
              <div className="space-y-3">
                <p className="font-bold text-gray-800">Classificação:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4">
                  <li>1º grau: Vermelhidão, dor leve</li>
                  <li>2º grau: Bolhas, dor intensa</li>
                  <li>3º grau: Pele branca/preta, sem dor (danos nos nervos)</li>
                </ul>
                <p className="font-bold text-gray-800 mt-3">O que fazer:</p>
                <ol className="text-gray-700 list-decimal list-inside ml-4">
                  <li>Resfrie a área com água corrente por 10-15 minutos</li>
                  <li>Não use gelo diretamente na queimadura</li>
                  <li>Não estoure bolhas</li>
                  <li>Cubra com gaze estéril ou pano limpo</li>
                  <li>Não aplique pomadas caseiras</li>
                  <li>Procure médico se for 2º ou 3º grau, ou se for grande área</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">Quedas</h3>
              <div className="space-y-3">
                <p className="font-bold text-gray-800">Quando buscar emergência:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4">
                  <li>Perda de consciência</li>
                  <li>Vômito após a queda</li>
                  <li>Confusão ou sonolência</li>
                  <li>Dor de cabeça intensa</li>
                  <li>Sangramento pelo nariz ou ouvido</li>
                  <li>Não consegue mover uma parte do corpo</li>
                </ul>
                <p className="font-bold text-gray-800 mt-3">O que fazer:</p>
                <ol className="text-gray-700 list-decimal list-inside ml-4">
                  <li>Mantenha a criança calma e imóvel</li>
                  <li>Aplique gelo na área inchada</li>
                  <li>Não mova se houver suspeita de lesão na coluna</li>
                  <li>Observe por 24 horas após a queda</li>
                  <li>Procure médico se houver qualquer sinal de alerta</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Cortes e Ferimentos</h3>
              <div className="space-y-3">
                <p className="font-bold text-gray-800">O que fazer:</p>
                <ol className="text-gray-700 list-decimal list-inside ml-4">
                  <li>Lave as mãos antes de tocar</li>
                  <li>Lave o ferimento com água e sabão</li>
                  <li>Pressione com gaze estéril para parar sangramento</li>
                  <li>Aplique antisséptico</li>
                  <li>Cubra com curativo</li>
                </ol>
                <p className="font-bold text-gray-800 mt-3">Quando buscar médico:</p>
                <ul className="text-gray-700 list-disc list-inside ml-4">
                  <li>Corte profundo ou largo</li>
                  <li>Sangramento não para após 10 minutos de pressão</li>
                  <li>Objeto encravado (não remova!)</li>
                  <li>Sinais de infecção (vermelhidão, calor, pus)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl">
              <p className="text-sm text-yellow-800">
                <strong>IMPORTANTE:</strong> Estas informações são para orientação. Em caso de emergência real, chame o SAMU (192) ou leve ao pronto-socorro imediatamente. Não substitui atendimento médico profissional.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HealthTools
