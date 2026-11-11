import { useState } from 'react'

const Nutrition = () => {
  const [activeGame, setActiveGame] = useState(null)
  const [selectedFoods, setSelectedFoods] = useState([])
  const [mealScore, setMealScore] = useState(0)
  
  // Quiz Game State
  const [quizQuestion, setQuizQuestion] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [showQuizResult, setShowQuizResult] = useState(false)
  
  // Food Classification Game State
  const [classificationFood, setClassificationFood] = useState(null)
  const [classificationScore, setClassificationScore] = useState(0)
  const [classificationRound, setClassificationRound] = useState(0)

  // Meal Builder Game
  const mealBuilderFoods = [
    { name: 'Arroz Integral', emoji: '🍚', group: 'carb', healthy: true },
    { name: 'Frango Grelhado', emoji: '🍗', group: 'protein', healthy: true },
    { name: 'Brócolis', emoji: '🥦', group: 'vegetable', healthy: true },
    { name: 'Maçã', emoji: '🍎', group: 'fruit', healthy: true },
    { name: 'Iogurte', emoji: '🥛', group: 'dairy', healthy: true },
    { name: 'Hambúrguer', emoji: '🍔', group: 'protein', healthy: false },
    { name: 'Batata Frita', emoji: '🍟', group: 'carb', healthy: false },
    { name: 'Refrigerante', emoji: '🥤', group: 'drink', healthy: false },
    { name: 'Salada', emoji: '🥗', group: 'vegetable', healthy: true },
    { name: 'Peixe', emoji: '🐟', group: 'protein', healthy: true },
  ]

  const toggleFood = (food) => {
    if (selectedFoods.find(f => f.name === food.name)) {
      setSelectedFoods(selectedFoods.filter(f => f.name !== food.name))
    } else if (selectedFoods.length < 5) {
      setSelectedFoods([...selectedFoods, food])
    }
  }

  const calculateMealScore = () => {
    const healthyCount = selectedFoods.filter(f => f.healthy).length
    const groups = new Set(selectedFoods.map(f => f.group))
    setMealScore(healthyCount * 20 + groups.size * 10)
  }

  // Quiz Game Data
  const quizQuestions = [
    {
      question: 'Qual destes alimentos é rico em proteína?',
      options: ['Arroz', 'Feijão', 'Frango', 'Banana'],
      correct: 2,
      explanation: 'O frango é uma excelente fonte de proteína magra.'
    },
    {
      question: 'Quantos copos de água devemos beber por dia?',
      options: ['2-3 copos', '4-6 copos', '8-10 copos', '12-14 copos'],
      correct: 2,
      explanation: 'Recomenda-se beber cerca de 8 copos de água por dia para manter-se hidratado.'
    },
    {
      question: 'Qual vitamina é abundante em laranjas?',
      options: ['Vitamina A', 'Vitamina C', 'Vitamina D', 'Vitamina E'],
      correct: 1,
      explanation: 'Laranjas são ricas em vitamina C, que fortalece o sistema imunológico.'
    },
    {
      question: 'O que é melhor para lanche da tarde?',
      options: ['Batata frita', 'Salgadinho', 'Fruta', 'Refrigerante'],
      correct: 2,
      explanation: 'Frutas são lanches saudáveis, ricos em vitaminas e fibras.'
    },
    {
      question: 'Qual grupo alimentar fornece mais energia?',
      options: ['Vegetais', 'Frutas', 'Carboidratos', 'Laticínios'],
      correct: 2,
      explanation: 'Carboidratos são a principal fonte de energia para o corpo.'
    },
  ]

  const handleQuizAnswer = (answerIndex) => {
    if (answerIndex === quizQuestions[quizQuestion].correct) {
      setQuizScore(quizScore + 1)
    }
    if (quizQuestion < quizQuestions.length - 1) {
      setQuizQuestion(quizQuestion + 1)
    } else {
      setShowQuizResult(true)
    }
  }

  const resetQuiz = () => {
    setQuizQuestion(0)
    setQuizScore(0)
    setShowQuizResult(false)
  }

  // Food Classification Game Data
  const classificationFoods = [
    { name: 'Maçã', emoji: '🍎', group: 'fruta' },
    { name: 'Brócolis', emoji: '🥦', group: 'vegetal' },
    { name: 'Arroz', emoji: '🍚', group: 'carboidrato' },
    { name: 'Peixe', emoji: '🐟', group: 'proteína' },
    { name: 'Leite', emoji: '🥛', group: 'laticínio' },
    { name: 'Banana', emoji: '🍌', group: 'fruta' },
    { name: 'Cenoura', emoji: '🥕', group: 'vegetal' },
    { name: 'Ovo', emoji: '🥚', group: 'proteína' },
    { name: 'Pão', emoji: '🍞', group: 'carboidrato' },
    { name: 'Iogurte', emoji: '🥛', group: 'laticínio' },
  ]

  const startClassificationRound = () => {
    const randomFood = classificationFoods[Math.floor(Math.random() * classificationFoods.length)]
    setClassificationFood(randomFood)
    setClassificationRound(classificationRound + 1)
  }

  const handleClassification = (selectedGroup) => {
    if (classificationFood && selectedGroup === classificationFood.group) {
      setClassificationScore(classificationScore + 1)
    }
    if (classificationRound < 4) {
      startClassificationRound()
    } else {
      setClassificationFood(null)
    }
  }

  const resetClassification = () => {
    setClassificationScore(0)
    setClassificationRound(0)
    setClassificationFood(null)
  }

  const foodGroups = [
    {
      name: 'Carboidratos',
      color: 'yellow',
      description: 'Fonte principal de energia',
      foods: ['Arroz', 'Pão integral', 'Massas', 'Batata', 'Aveia'],
      servings: '5-6 porções/dia',
      tips: 'Prefira versões integrais, ricas em fibras',
    },
    {
      name: 'Proteínas',
      color: 'red',
      description: 'Construção e reparo dos tecidos',
      foods: ['Carnes magras', 'Peixes', 'Ovos', 'Feijões', 'Lentilhas'],
      servings: '2-3 porções/dia',
      tips: 'Varie entre fontes animais e vegetais',
    },
    {
      name: 'Vegetais',
      color: 'green',
      description: 'Vitaminas, minerais e fibras',
      foods: ['Brócolis', 'Espinafre', 'Cenoura', 'Tomate', 'Abobrinha'],
      servings: '3-4 porções/dia',
      tips: 'Consuma crus ou cozidos no vapor',
    },
    {
      name: 'Frutas',
      color: 'orange',
      description: 'Vitaminas e antioxidantes',
      foods: ['Maçã', 'Banana', 'Laranja', 'Morango', 'Uva'],
      servings: '2-3 porções/dia',
      tips: 'Prefira frutas inteiras em vez de sucos',
    },
    {
      name: 'Laticínios',
      color: 'blue',
      description: 'Cálcio e vitamina D',
      foods: ['Leite', 'Iogurte', 'Queijo', 'Coalhada'],
      servings: '2-3 porções/dia',
      tips: 'Prefira versões com baixo teor de gordura',
    },
    {
      name: 'Gorduras Saudáveis',
      color: 'purple',
      description: 'Absorção de vitaminas e saúde do coração',
      foods: ['Azeite', 'Abacate', 'Nozes', 'Sementes'],
      servings: '1-2 porções/dia',
      tips: 'Consuma com moderação',
    },
  ]

  const healthyHabits = [
    { title: 'Hidratação', description: 'Beba pelo menos 2 litros de água por dia' },
    { title: 'Porções Adequadas', description: 'Use pratos menores e coma devagar' },
    { title: 'Variedade', description: 'Inclua alimentos de todos os grupos' },
    { title: 'Evite Processados', description: 'Reduza alimentos ultraprocessados' },
    { title: 'Regularidade', description: 'Faça refeições em horários fixos' },
    { title: 'Coma Consciente', description: 'Preste atenção ao que e como come' },
  ]

  const mealExamples = [
    {
      type: 'Café da Manhã',
      meals: [
        'Opção 1: Pão integral, ovos mexidos, fruta e café/leite',
        'Opção 2: Aveia com frutas, iogurte e castanhas',
        'Opção 3: Smoothie de frutas, granola e leite vegetal',
      ],
    },
    {
      type: 'Almoço',
      meals: [
        'Opção 1: Arroz integral, feijão, carne grelhada, salada verde',
        'Opção 2: Macarrão integral com molho de tomate e frango',
        'Opção 3: Salada completa com grão-de-bico e peixe',
      ],
    },
    {
      type: 'Jantar',
      meals: [
        'Opção 1: Sopa de legumes com frango desfiado',
        'Opção 2: Omelete de legumes com torrada integral',
        'Opção 3: Salada com atum e quinoa',
      ],
    },
    {
      type: 'Lanches',
      meals: [
        'Frutas frescas',
        'Iogurte natural com granola',
        'Castanhas e sementes',
        'Barra de cereais integral',
      ],
    },
  ]

  const colorClasses = {
    yellow: 'bg-yellow-50 border-yellow-500',
    red: 'bg-red-50 border-red-500',
    green: 'bg-green-50 border-green-500',
    orange: 'bg-orange-50 border-orange-500',
    blue: 'bg-blue-50 border-blue-500',
    purple: 'bg-purple-50 border-purple-500',
  }

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Nutrição Saudável</h1>
        <p className="text-xl text-gray-600">Guia completo para uma alimentação equilibrada</p>
      </header>

      {/* Game Selection */}
      {!activeGame && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('meal-builder')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Construtor de Refeições</h3>
            <p className="text-gray-600 text-center">Crie uma refeição saudável e equilibrada!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('quiz')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Quiz de Nutrição</h3>
            <p className="text-gray-600 text-center">Teste seus conhecimentos sobre alimentação!</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveGame('classification')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Classificação de Alimentos</h3>
            <p className="text-gray-600 text-center">Classifique os alimentos nos grupos corretos!</p>
          </div>
        </div>
      )}

      {/* Meal Builder Game */}
      {activeGame === 'meal-builder' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Construtor de Refeições</h2>
            <button onClick={() => setActiveGame(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-lg mb-4">Selecione até 5 alimentos para criar sua refeição:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {mealBuilderFoods.map((food) => (
                <button
                  key={food.name}
                  onClick={() => toggleFood(food)}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    selectedFoods.find(f => f.name === food.name)
                      ? 'bg-gradient-to-br from-nutrition-400 to-nutrition-500 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-2">{food.emoji}</div>
                  <p className="text-sm font-medium">{food.name}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-nutrition-50 to-nutrition-100 p-6 rounded-xl mb-6">
            <h3 className="text-xl font-bold mb-4">Sua Refeição:</h3>
            {selectedFoods.length === 0 ? (
              <p className="text-gray-600">Selecione alimentos acima</p>
            ) : (
              <div className="flex flex-wrap gap-3 mb-4">
                {selectedFoods.map((food) => (
                  <span key={food.name} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {food.emoji} {food.name}
                  </span>
                ))}
              </div>
            )}
            <button
              onClick={() => { calculateMealScore(); setActiveGame('meal-result'); }}
              disabled={selectedFoods.length === 0}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Avaliar Refeição
            </button>
          </div>
        </div>
      )}

      {/* Meal Result */}
      {activeGame === 'meal-result' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Resultado da Refeição</h2>
            <button onClick={() => { setActiveGame(null); setSelectedFoods([]); setMealScore(0); }} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="text-center py-8">
            <div className="text-5xl mb-4">
              {mealScore >= 80 ? 'Excelente!' : mealScore >= 50 ? 'Bom!' : 'Tente novamente!'}
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">Pontuação: {mealScore}/100</p>
            <p className="text-lg text-gray-600 mb-6">
              {mealScore >= 80 ? 'Excelente! Refeição muito equilibrada!' : 
               mealScore >= 50 ? 'Boa! Pode melhorar com mais variedade.' : 
               'Tente incluir mais alimentos saudáveis!'}
            </p>
            <button onClick={() => { setActiveGame('meal-builder'); setMealScore(0); }} className="btn-primary">
              Tentar Novamente
            </button>
          </div>
        </div>
      )}

      {/* Quiz Game */}
      {activeGame === 'quiz' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Quiz de Nutrição</h2>
            <button onClick={() => { setActiveGame(null); resetQuiz(); }} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!showQuizResult ? (
            <div className="py-8">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Pergunta {quizQuestion + 1} de {quizQuestions.length}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-nutrition-400 to-nutrition-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((quizQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{quizQuestions[quizQuestion].question}</h3>
              
              <div className="space-y-3 max-w-2xl mx-auto">
                {quizQuestions[quizQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    className="w-full text-left px-6 py-4 bg-gradient-to-r from-nutrition-50 to-nutrition-100 hover:from-nutrition-100 hover:to-nutrition-200 rounded-xl font-medium transition-all duration-300 border-2 border-nutrition-200 hover:border-nutrition-400"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-5xl mb-4">Quiz Completo!</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">Você acertou {quizScore} de {quizQuestions.length} perguntas!</p>
              <p className="text-lg text-gray-600 mb-6">
                {quizScore === quizQuestions.length ? 'Perfeito! Você é um expert em nutrição!' :
                 quizScore >= quizQuestions.length * 0.7 ? 'Muito bem! Você tem bons conhecimentos!' :
                 quizScore >= quizQuestions.length * 0.5 ? 'Bom! Continue aprendendo!' :
                 'Que tal estudar mais um pouco?'}
              </p>
              <button onClick={() => { resetQuiz(); }} className="btn-primary">
                Jogar Novamente
              </button>
            </div>
          )}
        </div>
      )}

      {/* Classification Game */}
      {activeGame === 'classification' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Classificação de Alimentos</h2>
            <button onClick={() => { setActiveGame(null); resetClassification(); }} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          {!classificationFood && classificationRound === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl mb-6">Classifique os alimentos nos grupos corretos!</p>
              <p className="text-lg text-gray-600 mb-4">Você terá 5 rodadas para classificar alimentos.</p>
              <button onClick={startClassificationRound} className="btn-primary text-xl">
                Começar Jogo
              </button>
            </div>
          ) : !classificationFood ? (
            <div className="text-center py-8">
              <p className="text-5xl mb-4">Jogo Completo!</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">Pontuação: {classificationScore}/5</p>
              <p className="text-lg text-gray-600 mb-6">
                {classificationScore === 5 ? 'Excelente! Você conhece bem os grupos alimentares!' :
                 classificationScore >= 3 ? 'Muito bem! Continue praticando!' :
                 'Que tal estudar mais os grupos alimentares?'}
              </p>
              <button onClick={resetClassification} className="btn-primary">
                Jogar Novamente
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-500 mb-4">Rodada {classificationRound} de 5</p>
              <div className="text-6xl mb-6">{classificationFood.emoji}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{classificationFood.name}</h3>
              <p className="text-lg text-gray-600 mb-6">Em qual grupo alimentar este alimento se encaixa?</p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                {['fruta', 'vegetal', 'carboidrato', 'proteína', 'laticínio'].map((group) => (
                  <button
                    key={group}
                    onClick={() => handleClassification(group)}
                    className="px-4 py-3 bg-gradient-to-r from-nutrition-50 to-nutrition-100 hover:from-nutrition-100 hover:to-nutrition-200 rounded-xl font-medium transition-all duration-300 border-2 border-nutrition-200 hover:border-nutrition-400 capitalize"
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Food Groups Section */}
      <section className="card animate-slide-up" aria-labelledby="groups-title">
        <h2 id="groups-title" className="section-title">Grupos Alimentares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodGroups.map((group, index) => (
            <article
              key={index}
              className={`${colorClasses[group.color]} border-l-4 p-6 rounded-r-xl hover:shadow-md transition-shadow duration-300`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">{group.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{group.description}</p>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Recomendado: {group.servings}
              </p>
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700">Exemplos:</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {group.foods.map((food, i) => (
                    <li key={i}>{food}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-600 italic">{group.tips}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Healthy Habits Section */}
      <section className="card animate-slide-up" aria-labelledby="habits-title">
        <h2 id="habits-title" className="section-title">Hábitos Saudáveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthyHabits.map((habit, index) => (
            <div key={index} className="bg-gradient-to-br from-nutrition-50 to-nutrition-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center">
              <h3 className="text-xl font-bold text-nutrition-600 mb-2">{habit.title}</h3>
              <p className="text-gray-700">{habit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meal Examples Section */}
      <section className="card animate-slide-up" aria-labelledby="meals-title">
        <h2 id="meals-title" className="section-title">Exemplos de Refeições</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mealExamples.map((meal, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-nutrition-500">
              <h3 className="text-2xl font-bold text-nutrition-600 mb-4">{meal.type}</h3>
              <ul className="space-y-2">
                {meal.meals.map((option, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-nutrition-500 mt-1">•</span>
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="card animate-slide-up" aria-labelledby="tips-title">
        <h2 id="tips-title" className="section-title">Dicas Práticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-orange-600 mb-4">No Supermercado</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Faça uma lista antes de ir</li>
              <li>• Leia os rótulos dos alimentos</li>
              <li>• Compre alimentos da época</li>
              <li>• Evite passar fome nas compras</li>
              <li>• Prefira alimentos in natura</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500">
            <h3 className="text-xl font-bold text-yellow-600 mb-4">Na Cozinha</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Cozinhe no vapor ou assado</li>
              <li>• Use temperos naturais</li>
              <li>• Reduza sal e açúcar</li>
              <li>• Prepare refeições em porções</li>
              <li>• Experimente novas receitas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hydration Section */}
      <section className="card animate-slide-up" aria-labelledby="hydration-title">
        <h2 id="hydration-title" className="section-title">Importância da Hidratação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-600 mb-3">Benefícios da Água</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Regula a temperatura corporal</li>
              <li>• Lubrifica as articulações</li>
              <li>• Transporta nutrientes</li>
              <li>• Melhora a função cognitiva</li>
              <li>• Ajuda na digestão</li>
              <li>• Melhora a pele</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-l-4 border-cyan-500">
            <h3 className="text-xl font-bold text-cyan-600 mb-3">Dicas para Beber Mais Água</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Tenha sempre uma garrafa por perto</li>
              <li>• Beba antes de sentir sede</li>
              <li>• Adicione limão ou hortelã</li>
              <li>• Defina lembretes no celular</li>
              <li>• Beba um copo antes das refeições</li>
              <li>• Coma frutas ricas em água</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nutrition
