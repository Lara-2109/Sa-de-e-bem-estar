import { useState } from 'react'

const ChildHealth = () => {
  const [activeGame, setActiveGame] = useState(null)
  
  // Game 1: Healthy Food Quiz
  const [gameScore, setGameScore] = useState(0)
  const [currentFood, setCurrentFood] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const foods = [
    { name: 'Maçã', emoji: '🍎', healthy: true },
    { name: 'Hambúrguer', emoji: '🍔', healthy: false },
    { name: 'Brócolis', emoji: '🥦', healthy: true },
    { name: 'Refrigerante', emoji: '🥤', healthy: false },
    { name: 'Banana', emoji: '🍌', healthy: true },
    { name: 'Batata Frita', emoji: '🍟', healthy: false },
    { name: 'Cenoura', emoji: '🥕', healthy: true },
    { name: 'Chocolate', emoji: '🍫', healthy: false },
    { name: 'Morango', emoji: '🍓', healthy: true },
    { name: 'Pizza', emoji: '🍕', healthy: false },
  ]

  const startFoodGame = () => {
    const randomFood = foods[Math.floor(Math.random() * foods.length)]
    setCurrentFood(randomFood)
    setShowAnswer(false)
    setGameScore(0)
  }

  const checkFoodAnswer = (isHealthy) => {
    if (currentFood && isHealthy === currentFood.healthy) {
      setGameScore(gameScore + 1)
      setShowAnswer(true)
    } else {
      setShowAnswer(true)
    }
  }

  // Game 2: Memory Game
  const [memoryCards, setMemoryCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [memoryMoves, setMemoryMoves] = useState(0)

  const memoryEmojis = ['🍎', '🥦', '🍌', '🥕', '🍓', '🍇']
  
  const startMemoryGame = () => {
    const cards = [...memoryEmojis, ...memoryEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }))
    setMemoryCards(cards)
    setFlippedCards([])
    setMatchedPairs([])
    setMemoryMoves(0)
  }

  const flipCard = (cardId) => {
    if (flippedCards.length === 2) return
    if (flippedCards.includes(cardId)) return
    if (memoryCards.find(c => c.id === cardId)?.matched) return

    const newFlipped = [...flippedCards, cardId]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      setMemoryMoves(memoryMoves + 1)
      const [firstId, secondId] = newFlipped
      const firstCard = memoryCards.find(c => c.id === firstId)
      const secondCard = memoryCards.find(c => c.id === secondId)

      if (firstCard.emoji === secondCard.emoji) {
        setMatchedPairs([...matchedPairs, firstCard.emoji])
        setMemoryCards(memoryCards.map(c => 
          c.id === firstId || c.id === secondId ? { ...c, matched: true } : c
        ))
        setTimeout(() => setFlippedCards([]), 500)
      } else {
        setTimeout(() => setFlippedCards([]), 1000)
      }
    }
  }

  // Game 3: Hygiene Sequence
  const [hygieneStep, setHygieneStep] = useState(0)
  const [hygieneScore, setHygieneScore] = useState(0)

  const hygieneSteps = [
    { icon: '🌅', question: 'Qual é a primeira coisa que você faz ao acordar?', options: ['Lavar o rosto', 'Tomar café', 'Brincar'], correct: 0 },
    { icon: '🍽️', question: 'O que você faz antes de comer?', options: ['Brincar', 'Lavar as mãos', 'Dormir'], correct: 1 },
    { icon: '🚽', question: 'Depois de usar o banheiro, você deve?', options: ['Lavar as mãos', 'Correr', 'Comer'], correct: 0 },
    { icon: '🦷', question: 'Quantas vezes por dia você deve escovar os dentes?', options: ['1 vez', '2 vezes', '3 vezes'], correct: 2 },
    { icon: '🌙', question: 'Antes de dormir, você deve?', options: ['Escovar os dentes', 'Comer doce', 'Ver TV'], correct: 0 },
  ]

  const startHygieneGame = () => {
    setHygieneStep(0)
    setHygieneScore(0)
  }

  const answerHygiene = (optionIndex) => {
    if (optionIndex === hygieneSteps[hygieneStep].correct) {
      setHygieneScore(hygieneScore + 1)
    }
    if (hygieneStep < hygieneSteps.length - 1) {
      setHygieneStep(hygieneStep + 1)
    }
  }

  // Game 4: Exercise Matching
  const [exerciseRound, setExerciseRound] = useState(0)
  const [exerciseScore, setExerciseScore] = useState(0)
  const [currentExercise, setCurrentExercise] = useState(null)

  const exercises = [
    { name: 'Correr', emoji: '🏃', benefit: 'Melhora o coração' },
    { name: 'Nadar', emoji: '🏊', benefit: 'Trabalha todo o corpo' },
    { name: 'Pular corda', emoji: '🪢', benefit: 'Fortalece as pernas' },
    { name: 'Andar de bicicleta', emoji: '🚲', benefit: 'Melhora o equilíbrio' },
    { name: 'Dançar', emoji: '💃', benefit: 'Melhora o humor' },
  ]

  const exerciseBenefits = [
    'Melhora o coração',
    'Trabalha todo o corpo',
    'Fortalece as pernas',
    'Melhora o equilíbrio',
    'Melhora o humor',
    'Aumenta a energia',
    'Fortalece os músculos',
    'Melhora a respiração',
  ]

  const startExerciseRound = () => {
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)]
    setCurrentExercise(randomExercise)
    setExerciseRound(exerciseRound + 1)
  }

  const handleExerciseAnswer = (selectedBenefit) => {
    if (currentExercise && selectedBenefit === currentExercise.benefit) {
      setExerciseScore(exerciseScore + 1)
    }
    if (exerciseRound < 4) {
      startExerciseRound()
    } else {
      setCurrentExercise(null)
    }
  }

  const resetExerciseGame = () => {
    setExerciseRound(0)
    setExerciseScore(0)
    setCurrentExercise(null)
  }

  const safetyTips = [
    { title: 'Lave as mãos', desc: 'Antes de comer e depois do banheiro' },
    { title: 'Escove os dentes', desc: 'Pelo menos 3 vezes ao dia' },
    { title: 'Brinque ao ar livre', desc: '30 minutos de exercício por dia' },
    { title: 'Durma bem', desc: '9 a 11 horas por noite' },
  ]

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Saúde Infantil</h1>
        <p className="text-xl text-gray-600">Dicas essenciais para o bem-estar das crianças</p>
      </header>

      {/* Game Selection */}
      {!activeGame && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('food')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Jogo dos Alimentos</h3>
            <p className="text-gray-600 text-center">Adivinhe quais alimentos são saudáveis!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('memory')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Jogo da Memória</h3>
            <p className="text-gray-600 text-center">Encontre os pares de alimentos!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('hygiene')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Quiz de Higiene</h3>
            <p className="text-gray-600 text-center">Teste seus conhecimentos de higiene!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('exercise')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Exercícios e Benefícios</h3>
            <p className="text-gray-600 text-center">Descubra os benefícios dos exercícios!</p>
          </div>
        </div>
      )}

      {/* Game 1: Food Quiz */}
      {activeGame === 'food' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Jogo dos Alimentos Saudáveis</h2>
            <button onClick={() => setActiveGame(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!currentFood ? (
            <div className="text-center py-8">
              <p className="text-xl mb-6">Vamos aprender quais alimentos são saudáveis?</p>
              <button
                onClick={startFoodGame}
                className="btn-primary text-xl"
              >
                Começar o Jogo
              </button>
            </div>
          ) : (
            <div className="text-center space-y-6 py-8">
              <div className="text-5xl mb-4 animate-bounce-slow" role="img" aria-label={currentFood.name}>
                {currentFood.emoji}
              </div>
              <p className="text-xl font-semibold mb-4">Este alimento é saudável?</p>
              
              {!showAnswer ? (
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => checkFoodAnswer(true)}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
                    aria-label="Sim, é saudável"
                  >
                    ✅ Sim
                  </button>
                  <button
                    onClick={() => checkFoodAnswer(false)}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg font-bold py-3 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
                    aria-label="Não, não é saudável"
                  >
                    ❌ Não
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className={`text-2xl font-bold ${currentFood.healthy ? 'text-green-600' : 'text-red-600'}`}>
                    {currentFood.healthy ? '✅ Correto! É saudável!' : '❌ Não é saudável!'}
                  </p>
                  <p className="text-xl text-gray-600">Sua pontuação: {gameScore}</p>
                  <button
                    onClick={startFoodGame}
                    className="btn-primary text-lg"
                  >
                    Próximo Alimento
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Game 2: Memory Game */}
      {activeGame === 'memory' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Jogo da Memória</h2>
            <button onClick={() => setActiveGame(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {memoryCards.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl mb-6">Encontre os pares de alimentos saudáveis!</p>
              <button onClick={startMemoryGame} className="btn-secondary text-xl">
                Começar o Jogo
              </button>
            </div>
          ) : (
            <div className="py-8">
              <div className="text-center mb-6">
                <p className="text-lg">Movimentos: {memoryMoves} | Pares: {matchedPairs.length}/{memoryEmojis.length}</p>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-lg mx-auto">
                {memoryCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => flipCard(card.id)}
                    disabled={card.matched}
                    className={`aspect-square text-3xl rounded-xl flex items-center justify-center transition-all duration-300 ${
                      card.matched
                        ? 'bg-green-100 border-2 border-green-500'
                        : flippedCards.includes(card.id)
                        ? 'bg-white border-2 border-secondary-500 shadow-md'
                        : 'bg-gradient-to-br from-secondary-100 to-secondary-200 border-2 border-secondary-300'
                    }`}
                  >
                    {flippedCards.includes(card.id) || card.matched ? card.emoji : '❓'}
                  </button>
                ))}
              </div>
              {matchedPairs.length === memoryEmojis.length && (
                <div className="text-center mt-6">
                  <p className="text-xl font-bold text-green-600 mb-4">Parabéns! Você completou o jogo!</p>
                  <button onClick={startMemoryGame} className="btn-secondary">
                    Jogar Novamente
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Game 3: Hygiene Quiz */}
      {activeGame === 'hygiene' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Quiz de Higiene</h2>
            <button onClick={() => setActiveGame(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {hygieneStep < hygieneSteps.length ? (
            <div className="py-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{hygieneSteps[hygieneStep].icon}</div>
                <p className="text-xl font-semibold">{hygieneSteps[hygieneStep].question}</p>
              </div>
              <div className="space-y-3 max-w-md mx-auto">
                {hygieneSteps[hygieneStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => answerHygiene(index)}
                    className="w-full text-left px-6 py-4 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 rounded-xl font-medium transition-all duration-300 border-2 border-primary-200 hover:border-primary-400"
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="text-center mt-6 text-gray-600">Pontuação: {hygieneScore}/{hygieneSteps.length}</p>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completo!</h3>
              <p className="text-xl mb-6">Você acertou {hygieneScore} de {hygieneSteps.length} perguntas!</p>
              <button onClick={startHygieneGame} className="btn-primary">
                Jogar Novamente
              </button>
            </div>
          )}
        </div>
      )}

      {/* Game 4: Exercise Matching */}
      {activeGame === 'exercise' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Exercícios e Benefícios</h2>
            <button onClick={() => { setActiveGame(null); resetExerciseGame(); }} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!currentExercise && exerciseRound === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl mb-6">Descubra os benefícios dos exercícios!</p>
              <p className="text-lg text-gray-600 mb-4">Você terá 5 rodadas para associar exercícios aos seus benefícios.</p>
              <button onClick={startExerciseRound} className="btn-primary text-xl">
                Começar Jogo
              </button>
            </div>
          ) : !currentExercise ? (
            <div className="text-center py-8">
              <p className="text-5xl mb-4">Jogo Completo!</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">Pontuação: {exerciseScore}/5</p>
              <p className="text-lg text-gray-600 mb-6">
                {exerciseScore === 5 ? 'Excelente! Você conhece bem os exercícios!' :
                 exerciseScore >= 3 ? 'Muito bem! Continue praticando!' :
                 'Que tal se exercitar mais?'}
              </p>
              <button onClick={resetExerciseGame} className="btn-primary">
                Jogar Novamente
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-500 mb-4">Rodada {exerciseRound} de 5</p>
              <div className="text-6xl mb-6">{currentExercise.emoji}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{currentExercise.name}</h3>
              <p className="text-lg text-gray-600 mb-6">Qual é o principal benefício deste exercício?</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {exerciseBenefits.map((benefit, index) => (
                  <button
                    key={index}
                    onClick={() => handleExerciseAnswer(benefit)}
                    className="px-4 py-3 bg-gradient-to-r from-child-50 to-child-100 hover:from-child-100 hover:to-child-200 rounded-xl font-medium transition-all duration-300 border-2 border-child-200 hover:border-child-400 text-sm"
                  >
                    {benefit}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Safety Tips Section */}
      <section className="card animate-slide-up" aria-labelledby="tips-title">
        <h2 id="tips-title" className="section-title">Dicas de Segurança e Higiene</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyTips.map((tip, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-child-50 to-child-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover"
            >
              <h3 className="text-xl font-bold text-child-600 mb-2 text-center">{tip.title}</h3>
              <p className="text-gray-600 text-center">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Safety Section */}
      <section className="card animate-slide-up" aria-labelledby="digital-title">
        <h2 id="digital-title" className="section-title">Segurança Digital</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="text-lg"><strong>Proteja suas senhas:</strong> Não compartilhe com ninguém!</p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-r-xl">
            <p className="text-lg"><strong>Fale com seus pais:</strong> Se algo na internet te deixar desconfortável</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-lg"><strong>Limite o tempo de tela:</strong> Faça pausas e brinque ao ar livre</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-r-xl">
            <p className="text-lg"><strong>Pense antes de clicar:</strong> Não abra links de desconhecidos</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChildHealth
