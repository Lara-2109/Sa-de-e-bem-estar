import { useState, useEffect } from 'react'

const MentalHealth = () => {
  const [selectedMood, setSelectedMood] = useState(null)
  const [showTip, setShowTip] = useState(false)
  const [breathingActive, setBreathingActive] = useState(false)
  const [breathingPhase, setBreathingPhase] = useState('')
  const [breathingCount, setBreathingCount] = useState(0)

  const moods = [
    { emoji: '😊', label: 'Bem', color: 'green' },
    { emoji: '😐', label: 'Neutro', color: 'yellow' },
    { emoji: '😔', label: 'Triste', color: 'blue' },
    { emoji: '😰', label: 'Ansioso', color: 'purple' },
    { emoji: '😤', label: 'Irritado', color: 'red' },
  ]

  const tipsByMood = {
    'Bem': 'Ótimo! Aproveite esse momento e compartilhe sua energia positiva com outros. Pratique gratidão diariamente.',
    'Neutro': 'Tente identificar pequenas coisas que trazem alegria. Uma caminhada, música ou conversa podem ajudar.',
    'Triste': 'É normal sentir-se triste às vezes. Converse com alguém de confiança, pratique autocuidado e considere buscar ajuda profissional.',
    'Ansioso': 'Tente técnicas de respiração profunda. Inspire por 4 segundos, segure por 4, expire por 4. Repita algumas vezes.',
    'Irritado': 'Dê um passo atrás, respire fundo. Identifique a causa e tente resolver o problema com calma.',
  }

  const relaxationTechniques = [
    {
      title: 'Respiração 4-7-8',
      description: 'Inspire pelo nariz por 4 segundos, segure por 7, expire pela boca por 8. Repita 4 vezes.',
    },
    {
      title: 'Meditação Guiada',
      description: 'Sente-se confortavelmente, feche os olhos e foque na respiração por 5-10 minutos.',
    },
    {
      title: 'Grounding (5-4-3-2-1)',
      description: 'Identifique 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que prova.',
    },
    {
      title: 'Alongamento',
      description: 'Estique os músculos suavemente, focando em áreas de tensão como pescoço e ombros.',
    },
  ]

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood)
    setShowTip(true)
  }

  // Breathing Exercise Game
  const startBreathingExercise = () => {
    setBreathingActive(true)
    setBreathingCount(0)
    runBreathingCycle()
  }

  const runBreathingCycle = () => {
    setBreathingPhase('Inspire...')
    setTimeout(() => {
      setBreathingPhase('Segure...')
      setTimeout(() => {
        setBreathingPhase('Expire...')
        setTimeout(() => {
          setBreathingCount(prev => {
            const newCount = prev + 1
            if (newCount < 4) {
              runBreathingCycle()
            } else {
              setBreathingActive(false)
              setBreathingPhase('Completo!')
            }
            return newCount
          })
        }, 4000)
      }, 4000)
    }, 4000)
  }

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Saúde Mental</h1>
        <p className="text-xl text-gray-600">Cuidar da mente é tão importante quanto cuidar do corpo</p>
      </header>

      {/* Mood Check-in Section */}
      <section className="card animate-slide-up" aria-labelledby="mood-title">
        <h2 id="mood-title" className="section-title">Como você está se sentindo hoje?</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleMoodSelection(mood.label)}
              className={`p-4 rounded-xl text-3xl transition-all duration-300 transform hover:scale-110 ${
                selectedMood === mood.label
                  ? 'bg-gradient-to-br from-mental-100 to-mental-200 border-4 border-mental-500 shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              aria-label={`Estou me sentindo ${mood.label}`}
              aria-pressed={selectedMood === mood.label}
            >
              {mood.emoji}
            </button>
          ))}
        </div>

        {showTip && selectedMood && (
          <div className="bg-gradient-to-r from-mental-50 to-mental-100 border-l-4 border-mental-500 p-6 rounded-r-xl animate-fade-in">
            <p className="text-xl font-semibold text-mental-700 mb-2">
              Dica para quando você está se sentindo {selectedMood.toLowerCase()}:
            </p>
            <p className="text-lg text-gray-700">{tipsByMood[selectedMood]}</p>
          </div>
        )}
      </section>

      {/* Breathing Exercise Game */}
      <section className="card animate-slide-up" aria-labelledby="breathing-title">
        <h2 id="breathing-title" className="section-title">Exercício de Respiração Guiada</h2>
        
        {!breathingActive && breathingPhase !== 'Completo!' ? (
          <div className="text-center py-8">
            <p className="text-xl mb-6">Pratique respiração profunda para reduzir o estresse e a ansiedade</p>
            <button onClick={startBreathingExercise} className="btn-primary text-xl">
              Começar Exercício
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className={`w-48 h-48 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-1000 ${
              breathingPhase === 'Inspire...' ? 'bg-gradient-to-br from-blue-400 to-blue-600 scale-110' :
              breathingPhase === 'Segure...' ? 'bg-gradient-to-br from-purple-400 to-purple-600 scale-125' :
              breathingPhase === 'Expire...' ? 'bg-gradient-to-br from-green-400 to-green-600 scale-100' :
              'bg-gradient-to-br from-mental-400 to-mental-600'
            }`}>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-4">{breathingPhase}</p>
            <p className="text-lg text-gray-600">Ciclo: {breathingCount}/4</p>
            {breathingPhase === 'Completo!' && (
              <button onClick={() => { setBreathingPhase(''); setBreathingCount(0) }} className="btn-primary mt-6">
                Repetir Exercício
              </button>
            )}
          </div>
        )}
      </section>

      {/* Relaxation Techniques Section */}
      <section className="card animate-slide-up" aria-labelledby="relaxation-title">
        <h2 id="relaxation-title" className="section-title">Técnicas de Relaxamento</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relaxationTechniques.map((technique, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-mental-50 to-mental-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover"
            >
              <h3 className="text-xl font-bold text-mental-600 mb-2">{technique.title}</h3>
              <p className="text-gray-700">{technique.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Self-Care Tips Section */}
      <section className="card animate-slide-up" aria-labelledby="selfcare-title">
        <h2 id="selfcare-title" className="section-title">Dicas de Autocuidado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-green-700 mb-3">Corpo</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Durma 7-8 horas por noite</li>
              <li>• Pratique exercícios regularmente</li>
              <li>• Alimente-se de forma saudável</li>
              <li>• Faça pausas durante o dia</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Mente</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pratique mindfulness</li>
              <li>• Aprenda algo novo</li>
              <li>• Limite o tempo nas redes sociais</li>
              <li>• Escreva em um diário</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-mental-50 to-mental-100 rounded-xl p-6 border-l-4 border-mental-500">
            <h3 className="text-xl font-bold text-mental-700 mb-3">Emoções</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Conecte-se com pessoas</li>
              <li>• Expresse seus sentimentos</li>
              <li>• Estabeleça limites saudáveis</li>
              <li>• Pratique a gratidão</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="card animate-slide-up" aria-labelledby="help-title">
        <h2 id="help-title" className="section-title">Quando Buscar Ajuda Profissional</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border-l-4 border-red-500">
            <p className="text-lg">Se sentimentos de tristeza, ansiedade ou preocupação persistirem por mais de duas semanas</p>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
            <p className="text-lg">Se afetar significativamente suas atividades diárias, trabalho ou relacionamentos</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border-l-4 border-yellow-500">
            <p className="text-lg">Se tiver pensamentos de se machucar ou desistir da vida</p>
          </div>
        </div>
        <div className="mt-6 bg-gradient-to-r from-red-500 to-red-600 p-8 rounded-xl text-center text-white shadow-lg">
          <p className="text-xl font-bold mb-2">CVV - Centro de Valorização da Vida</p>
          <p className="text-5xl font-bold mb-2">188</p>
          <p className="opacity-90">Atendimento 24h, gratuito e anônimo</p>
        </div>
      </section>
    </div>
  )
}

export default MentalHealth
