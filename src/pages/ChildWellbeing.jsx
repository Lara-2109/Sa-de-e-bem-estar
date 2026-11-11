import { useState } from 'react'

const ChildWellbeing = () => {
  const [activeActivity, setActiveActivity] = useState(null)
  
  // Activity 1: Physical Exercises
  const [exerciseRound, setExerciseRound] = useState(0)
  const [exerciseScore, setExerciseScore] = useState(0)
  const [currentExercise, setCurrentExercise] = useState(null)

  const exercises = [
    { name: 'Pular corda', emoji: '🪢', duration: '5 minutos', benefit: 'Fortalece o coração e as pernas' },
    { name: 'Correr', emoji: '🏃', duration: '10 minutos', benefit: 'Melhora a resistência' },
    { name: 'Nadar', emoji: '🏊', duration: '20 minutos', benefit: 'Trabalha todo o corpo' },
    { name: 'Andar de bicicleta', emoji: '🚲', duration: '15 minutos', benefit: 'Melhora o equilíbrio' },
    { name: 'Dançar', emoji: '💃', duration: '10 minutos', benefit: 'Melhora o humor e coordenação' },
    { name: 'Pular amarelinha', emoji: '⬜', duration: '10 minutos', benefit: 'Desenvolve coordenação motora' },
    { name: 'Brincar de bola', emoji: '⚽', duration: '15 minutos', benefit: 'Trabalha em equipe e reflexos' },
    { name: 'Fazer polichinelos', emoji: '🙆', duration: '3 minutos', benefit: 'Aquece o corpo' },
  ]

  const startExerciseRound = () => {
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)]
    setCurrentExercise(randomExercise)
    setExerciseRound(exerciseRound + 1)
  }

  const handleExerciseComplete = () => {
    setExerciseScore(exerciseScore + 1)
    if (exerciseRound < 4) {
      startExerciseRound()
    } else {
      setCurrentExercise(null)
    }
  }

  const resetExercise = () => {
    setExerciseRound(0)
    setExerciseScore(0)
    setCurrentExercise(null)
  }

  // Activity 2: Relaxation Techniques
  const [relaxationTechnique, setRelaxationTechnique] = useState(null)

  const relaxationTechniques = [
    {
      name: 'Respiração Profunda',
      emoji: '🌬️',
      description: 'Sente-se confortavelmente. Feche os olhos. Inspire profundamente pelo nariz contando até 4. Segure o ar por 2 segundos. Expire lentamente pela boca contando até 6. Repita 5 vezes.',
      duration: '3 minutos',
    },
    {
      name: 'Imaginação Guiada',
      emoji: '🌈',
      description: 'Feche os olhos e imagine que você está em um lugar especial, como uma praia ou um parque. Imagine os sons, cheiros e sensações desse lugar. Fique assim por 2 minutos.',
      duration: '2 minutos',
    },
    {
      name: 'Alongamento Suave',
      emoji: '🧘',
      description: 'Estique os braços para cima, depois para os lados. Gire o pescoço suavemente. Estique as pernas. Faça movimentos lentos e gentis.',
      duration: '5 minutos',
    },
    {
      name: 'Música Relaxante',
      emoji: '🎵',
      description: 'Sente-se em silêncio e ouça uma música calma. Feche os olhos e deixe a música te relaxar. Respire profundamente enquanto ouve.',
      duration: '5 minutos',
    },
  ]

  // Activity 3: Creative Hobbies
  const [selectedHobby, setSelectedHobby] = useState(null)

  const hobbies = [
    { name: 'Desenhar e Pintar', emoji: '🎨', description: 'Use lápis, canetinhas ou tintas para criar arte', benefits: ['Desenvolve criatividade', 'Melhora coordenação motora', 'Reduz estresse'] },
    { name: 'Ler Histórias', emoji: '📚', description: 'Leia livros de aventura, contos de fadas ou histórias educativas', benefits: ['Melhora vocabulário', 'Estimula imaginação', 'Desenvolve concentração'] },
    { name: 'Fazer Artesanato', emoji: '✂️', description: 'Crie coisas com papel, cola e outros materiais', benefits: ['Desenvolve criatividade', 'Melhora habilidades manuais', 'Cria senso de realização'] },
    { name: 'Tocar Instrumento', emoji: '🎸', description: 'Aprenda a tocar piano, violão, flauta ou outros instrumentos', benefits: ['Desenvolve disciplina', 'Melhora memória', 'Expressa emoções'] },
    { name: 'Cozinhar com Ajuda', emoji: '👩‍🍳', description: 'Ajude a preparar receitas simples e saudáveis', benefits: ['Aprende sobre nutrição', 'Desenvolve habilidades motoras', 'Cria momentos em família'] },
    { name: 'Jardinagem', emoji: '🌱', description: 'Plante sementes e cuide de plantas', benefits: ['Conecta com natureza', 'Ensina responsabilidade', 'Reduz ansiedade'] },
  ]

  const wellbeingTips = [
    { title: 'Sono Adequado', description: 'Dormir entre 9 a 11 horas por noite é essencial para o crescimento e desenvolvimento.', icon: '😴' },
    { title: 'Tempo de Tela', description: 'Limite o tempo em frente a telas a no máximo 2 horas por dia, excluindo tempo escolar.', icon: '📱' },
    { title: 'Brincadeiras ao Ar Livre', description: 'Brincar fora ajuda a desenvolver habilidades sociais e melhora o humor.', icon: '🌳' },
    { title: 'Área Social', description: 'Mantenha contato com amigos e familiares para desenvolver habilidades sociais.', icon: '👥' },
    { title: 'Expressão de Emoções', description: 'Fale sobre como você se sente com pessoas de confiança.', icon: '💭' },
    { title: 'Rotina Diária', description: 'Ter horários regulares para comer, dormir e brincar ajuda a se sentir organizado.', icon: '📅' },
  ]

  const colorClasses = {
    green: 'bg-green-50 border-green-500',
    blue: 'bg-blue-50 border-blue-500',
    purple: 'bg-purple-50 border-purple-500',
    orange: 'bg-orange-50 border-orange-500',
    pink: 'bg-pink-50 border-pink-500',
    yellow: 'bg-yellow-50 border-yellow-500',
  }

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Bem-Estar Infantil</h1>
        <p className="text-xl text-gray-600">Atividades e dicas para uma vida saudável e feliz!</p>
      </header>

      {/* Activity Selection */}
      {!activeActivity && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <div className="card card-hover cursor-pointer" onClick={() => setActiveActivity('exercises')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Exercícios Físicos</h3>
            <p className="text-gray-600 text-center">Atividades para se movimentar e se divertir!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveActivity('relaxation')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Relaxamento</h3>
            <p className="text-gray-600 text-center">Técnicas para acalmar e descansar a mente!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveActivity('hobbies')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Hobbies Criativos</h3>
            <p className="text-gray-600 text-center">Atividades divertidas para desenvolver talentos!</p>
          </div>
        </div>
      )}

      {/* Physical Exercises Activity */}
      {activeActivity === 'exercises' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Exercícios Físicos</h2>
            <button onClick={() => { setActiveActivity(null); resetExercise(); }} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!currentExercise && exerciseRound === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl mb-6">Vamos fazer exercícios divertidos!</p>
              <p className="text-lg text-gray-600 mb-4">Você terá 5 exercícios para praticar. Cada um mostra o tempo recomendado.</p>
              <button onClick={startExerciseRound} className="btn-primary text-xl">
                Começar
              </button>
            </div>
          ) : !currentExercise ? (
            <div className="text-center py-8">
              <p className="text-5xl mb-4">Parabéns!</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">Você completou {exerciseScore} exercícios!</p>
              <p className="text-lg text-gray-600 mb-6">
                {exerciseScore === 5 ? 'Excelente! Você é muito ativo!' :
                 exerciseScore >= 3 ? 'Muito bem! Continue se exercitando!' :
                 'Que tal tentar mais exercícios?'}
              </p>
              <button onClick={resetExercise} className="btn-primary">
                Começar Novamente
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-500 mb-4">Exercício {exerciseRound} de 5</p>
              <div className="text-6xl mb-6">{currentExercise.emoji}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{currentExercise.name}</h3>
              <p className="text-lg text-gray-600 mb-2">Tempo recomendado: {currentExercise.duration}</p>
              <p className="text-lg text-gray-600 mb-6">Benefício: {currentExercise.benefit}</p>
              
              <button onClick={handleExerciseComplete} className="btn-primary">
                Completei este exercício!
              </button>
            </div>
          )}
        </div>
      )}

      {/* Relaxation Activity */}
      {activeActivity === 'relaxation' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Técnicas de Relaxamento</h2>
            <button onClick={() => setActiveActivity(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!relaxationTechnique ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relaxationTechniques.map((technique, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500 cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => setRelaxationTechnique(technique)}
                >
                  <div className="text-4xl mb-3">{technique.emoji}</div>
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{technique.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Duração: {technique.duration}</p>
                  <p className="text-gray-700">{technique.description.substring(0, 80)}...</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-6">{relaxationTechnique.emoji}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{relaxationTechnique.name}</h3>
              <p className="text-lg text-gray-600 mb-2">Duração: {relaxationTechnique.duration}</p>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{relaxationTechnique.description}</p>
              
              <button onClick={() => setRelaxationTechnique(null)} className="btn-primary">
                Voltar para as técnicas
              </button>
            </div>
          )}
        </div>
      )}

      {/* Creative Hobbies Activity */}
      {activeActivity === 'hobbies' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Hobbies Criativos</h2>
            <button onClick={() => setActiveActivity(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!selectedHobby ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-500 cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedHobby(hobby)}
                >
                  <div className="text-4xl mb-3">{hobby.emoji}</div>
                  <h3 className="text-xl font-bold text-pink-700 mb-2">{hobby.name}</h3>
                  <p className="text-gray-700 mb-3">{hobby.description}</p>
                  <div className="text-sm text-gray-600">
                    <strong>Benefícios:</strong>
                    <ul className="list-disc list-inside mt-1">
                      {hobby.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-6">{selectedHobby.emoji}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{selectedHobby.name}</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{selectedHobby.description}</p>
              
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6 max-w-2xl mx-auto mb-6">
                <h4 className="text-xl font-bold text-pink-700 mb-3">Benefícios:</h4>
                <ul className="text-left text-gray-700 space-y-2">
                  {selectedHobby.benefits.map((benefit, i) => (
                    <li key={i}>• {selectedHobby.benefits[i]}</li>
                  ))}
                </ul>
              </div>
              
              <button onClick={() => setSelectedHobby(null)} className="btn-primary">
                Voltar para os hobbies
              </button>
            </div>
          )}
        </div>
      )}

      {/* Wellbeing Tips Section */}
      <section className="card animate-slide-up" aria-labelledby="tips-title">
        <h2 id="tips-title" className="section-title">Dicas de Bem-Estar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wellbeingTips.map((tip, index) => {
            const colors = ['green', 'blue', 'purple', 'orange', 'pink', 'yellow']
            const color = colors[index % colors.length]
            return (
              <div
                key={index}
                className={`${colorClasses[color]} border-l-4 p-6 rounded-r-xl`}
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Daily Routine Section */}
      <section className="card animate-slide-up" aria-labelledby="routine-title">
        <h2 id="routine-title" className="section-title">Rotina Diária Sugerida</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-500">
            <div className="text-2xl">🌅</div>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Manhã (7:00 - 12:00)</h4>
              <p className="text-gray-700">Acordar, tomar café da manhã saudável, ir para a escola, fazer pausas ativas</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
            <div className="text-2xl">☀️</div>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Tarde (12:00 - 18:00)</h4>
              <p className="text-gray-700">Almoçar, continuar escola, fazer lanche saudável, brincar ao ar livre</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
            <div className="text-2xl">🌙</div>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Noite (18:00 - 21:00)</h4>
              <p className="text-gray-700">Jantar, fazer lição de casa, tempo em família, relaxar, dormir cedo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChildWellbeing
