import { useState } from 'react'

const DevelopmentGuide = () => {
  const [activeSection, setActiveSection] = useState(null)

  const developmentStages = [
    {
      age: 'Recém-nascido (0-2 meses)',
      motor: ['Levanta a cabeça por instantes', 'Movimenta braços e pernas', 'Segura objetos por breve tempo'],
      cognitive: ['Segue objetos com os olhos', 'Reconhece vozes familiares', 'Começa a sorrir'],
      social: ['Faz contato visual', 'Chora para comunicar necessidades', 'Responde ao toque e voz'],
      tips: 'Muita interação, carinho e estímulo visual e auditivo.'
    },
    {
      age: 'Lactente (3-11 meses)',
      motor: ['Senta sem apoio', 'Engatinha', 'Fica em pé com apoio', 'Pega objetos com pinça'],
      cognitive: ['Reconhece nome', 'Entende "não"', 'Babala e faz sons', 'Procura objetos escondidos'],
      social: ['Sorri espontaneamente', 'Demonstra preferência por pessoas conhecidas', 'Brinca de esconde-esconde'],
      tips: 'Estimule a exploração segura e ofereça brinquedos coloridos.'
    },
    {
      age: 'Primeira infância (1-3 anos)',
      motor: ['Anda sozinho', 'Corre', 'Sobe escadas', 'Chuta bola'],
      cognitive: ['Fala frases simples', 'Segue instruções de 2 passos', 'Nomeia objetos', 'Imita adultos'],
      social: ['Brinca com outras crianças', 'Demonstra independência', 'Tem birras', 'Mostra afeto'],
      tips: 'Estabeleça rotinas e limite o tempo de tela.'
    },
    {
      age: 'Pré-escolar (3-5 anos)',
      motor: ['Pula com um pé', 'Corta com tesoura', 'Veste-se com ajuda', 'Desenha figuras'],
      cognitive: ['Conta até 10', 'Conhece cores', 'Fala frases completas', 'Entende conceitos de tempo'],
      social: ['Brinca cooperativamente', 'Expressa emoções', 'Compartilha brinquedos', 'Segue regras simples'],
      tips: 'Incentive a criatividade e a socialização.'
    },
    {
      age: 'Escolar (6-11 anos)',
      motor: ['Coordenação motora fina desenvolvida', 'Pratica esportes', 'Escreve legivelmente'],
      cognitive: ['Lê e escreve', 'Pensa logicamente', 'Entende causa e efeito', 'Tem atenção prolongada'],
      social: ['Faz amigos', 'Entende regras sociais', 'Desenvolve senso de moralidade', 'Independente em tarefas diárias'],
      tips: 'Apoie nos estudos e incentive hobbies.'
    },
    {
      age: 'Adolescência (12-18 anos)',
      motor: ['Crescimento rápido', 'Desenvolvimento sexual', 'Força e resistência aumentam'],
      cognitive: ['Pensamento abstrato', 'Planeja para o futuro', 'Desenvolve identidade', 'Toma decisões'],
      social: ['Valoriza amizades', 'Busca independência', 'Interesse romântico', 'Identidade de grupo'],
      tips: 'Mantenha comunicação aberta e ofereça orientação.'
    },
  ]

  const feedingMethods = [
    {
      method: 'Papinhas Tradicionais',
      description: 'Alimentos amassados ou batidos, oferecidos com colher.',
      advantages: ['Fácil para a criança aceitar', 'Menor risco de engasgo', 'Controle maior da quantidade'],
      considerations: ['Pode atrasar desenvolvimento motor', 'Criança pode ter menos autonomia'],
    },
    {
      method: 'BLW (Baby-Led Weaning)',
      description: 'Criança se alimenta sozinha com pedaços de alimentos.',
      advantages: ['Desenvolve coordenação motora', 'Autonomia na alimentação', 'Exploração de texturas'],
      considerations: ['Maior risco de engasgo inicial', 'Mais bagunça', 'Requer supervisão constante'],
    },
    {
      method: 'Misto',
      description: 'Combinação de papinhas e alimentos em pedaços.',
      advantages: ['Flexibilidade', 'Adapta à preferência da criança', 'Melhor de ambos os mundos'],
      considerations: ['Requer planejamento', 'Pode confundir se não consistente'],
    },
  ]

  const commonIllnesses = [
    {
      name: 'Viroses (Resfriado/Gripe)',
      symptoms: ['Coriza', 'Tosse', 'Febre baixa', 'Mal-estar'],
      treatment: 'Repouso, hidratação, antitérmicos se necessário.',
      whenToSeek: 'Se febre alta por mais de 3 dias, dificuldade respiratória ou piora.',
    },
    {
      name: 'Alergias Alimentares',
      symptoms: ['Vômitos', 'Diarréia', 'Urticária', 'Inchaço'],
      treatment: 'Identificar e eliminar alimento causador. Antialérgicos se prescrito.',
      whenToSeek: 'Se reação grave (dificuldade respiratória, inchaço de face) - emergência!',
    },
    {
      name: 'Otite (Infecção no ouvido)',
      symptoms: ['Dor de ouvido', 'Febre', 'Irritabilidade', 'Puxar a orelha'],
      treatment: 'Antibióticos se bacteriana, analgésicos para dor.',
      whenToSeek: 'Se dor intensa, febre alta ou secreção no ouvido.',
    },
    {
      name: 'Piolho',
      symptoms: ['Coceira na cabeça', 'Ovos (lêndeas) nos cabelos', 'Piolhos visíveis'],
      treatment: 'Uso de shampoo antipiolho, remoção manual de lêndeas.',
      whenToSeek: 'Se infestação severa ou tratamento caseiro não funcionar.',
    },
    {
      name: 'Assaduras',
      symptoms: ['Vermelhidão', 'Irritação', 'Dor ao tocar'],
      treatment: 'Trocar fralda frequentemente, usar pomada protetora, deixar área respirar.',
      whenToSeek: 'Se não melhorar em 2-3 dias ou houver feridas.',
    },
  ]

  const mentalHealthTips = [
    {
      topic: 'Birras',
      tips: ['Mantenha a calma', 'Valide os sentimentos da criança', 'Estabeleça limites claros', 'Dê escolhas limitadas'],
      example: 'Entendo que você está bravo. Você pode escolher brincar aqui ou ali, mas não pode bater.',
    },
    {
      topic: 'Regulação Emocional',
      tips: ['Ensine a nomear emoções', 'Modele comportamento calmo', 'Crie espaço para expressão', 'Use técnicas de respiração'],
      example: 'Você parece triste. Quer conversar sobre o que aconteceu?',
    },
    {
      topic: 'Sono do Bebê',
      tips: ['Estabeleça rotina de sono', 'Crie ambiente escuro e silencioso', 'Evite estímulos antes de dormir', 'Seja consistente'],
      example: 'Hora de dormir! Vamos ler uma história e apagar as luzes.',
    },
    {
      topic: 'Ansiedade Infantil',
      tips: ['Valide os medos', 'Não minimize sentimentos', 'Ensine estratégias de enfrentamento', 'Busque ajuda profissional se necessário'],
      example: 'Sei que você está com medo do escuro. Vamos juntos ver que está tudo bem.',
    },
  ]

  const screenTimeGuidelines = [
    { age: 'Menos de 2 anos', recommendation: 'Evitar telas completamente', exceptions: 'Videochamadas com família' },
    { age: '2-5 anos', recommendation: 'Máximo 1 hora por dia', exceptions: 'Programas educacionais com supervisão' },
    { age: '6-12 anos', recommendation: 'Máximo 2 horas por dia', exceptions: 'Tarefas escolares podem ter exceção' },
    { age: 'Adolescentes', recommendation: 'Limitar uso recreativo', exceptions: 'Equilibrar com outras atividades' },
  ]

  const weeklyMenu = [
    {
      day: 'Segunda-feira',
      breakfast: 'Pão integral com queijo, fruta, leite',
      lunch: 'Arroz, feijão, frango grelhado, salada verde',
      snack: 'Iogurte com granola',
      dinner: 'Sopa de legumes com torradas',
    },
    {
      day: 'Terça-feira',
      breakfast: 'Aveia com banana e mel, suco natural',
      lunch: 'Macarrão integral com molho de tomate e carne moída',
      snack: 'Fruta da estação',
      dinner: 'Omelete de legumes com arroz',
    },
    {
      day: 'Quarta-feira',
      breakfast: 'Tapioca com queijo, fruta',
      lunch: 'Arroz, lentilha, peixe assado, salada mista',
      snack: 'Castanhas e fruta',
      dinner: 'Salada completa com atum',
    },
    {
      day: 'Quinta-feira',
      breakfast: 'Pão com ovo, suco de laranja',
      lunch: 'Arroz, feijão, carne assada, legumes cozidos',
      snack: 'Iogurte natural',
      dinner: 'Sanduíche natural com salada',
    },
    {
      day: 'Sexta-feira',
      breakfast: 'Smoothie de frutas com aveia',
      lunch: 'Arroz, grão-de-bico, frango, salada',
      snack: 'Fruta e castanhas',
      dinner: 'Pizza caseira com vegetais',
    },
    {
      day: 'Sábado',
      breakfast: 'Panqueca de banana',
      lunch: 'Churrasco com saladas variadas',
      snack: 'Sorvete de fruta natural',
      dinner: 'Sopa de legumes',
    },
    {
      day: 'Domingo',
      breakfast: 'Pão com manteiga e geleia, café/leite',
      lunch: 'Arroz, feijão, carne assada, farofa, saladas',
      snack: 'Fruta',
      dinner: 'Prato leve com salada e ovo cozido',
    },
  ]

  const lunchboxIdeas = [
    { name: 'Frutas cortadas', tip: 'Maçã, banana, uva, melão em potes' },
    { name: 'Iogurte natural', tip: 'Com granola ou mel separado' },
    { name: 'Sanduíche natural', tip: 'Pão integral, queijo, presunto, alface' },
    { name: 'Ovos cozidos', tip: 'Com salada de folhas' },
    { name: 'Mix de castanhas', tip: 'Pequena porção para energia' },
    { name: 'Palitos de vegetais', tip: 'Cenoura, pepino com homus' },
    { name: 'Queijo cottage', tip: 'Com frutas picadas' },
    { name: 'Torradas integrais', tip: 'Com patê de atum' },
  ]

  const selectiveEatingTips = [
    'Não force a criança a comer',
    'Ofereça novos alimentos repetidamente (pode levar 10-15 tentativas)',
    'Envolve a criança no preparo das refeições',
    'Faça das refeições um momento agradável',
    'Seja um bom exemplo comendo alimentos variados',
    'Apresente alimentos de formas divertidas',
    'Respeite o apetite da criança',
    'Ofereça opções saudáveis e deixe escolher',
  ]

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Guia de Desenvolvimento</h1>
        <p className="text-xl text-gray-600">Informações essenciais sobre crescimento, alimentação e saúde infantil</p>
      </header>

      {/* Section Selection */}
      {!activeSection && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          <div className="card card-hover cursor-pointer" onClick={() => setActiveSection('development')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Marcos do Desenvolvimento</h3>
            <p className="text-gray-600 text-center">Motor, cognitivo e social por idade</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveSection('feeding')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Alimentação Infantil</h3>
            <p className="text-gray-600 text-center">Introdução, cardápios e dicas</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveSection('mental')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Saúde Mental</h3>
            <p className="text-gray-600 text-center">Birras, sono, ansiedade e telas</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveSection('illnesses')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Doenças Comuns</h3>
            <p className="text-gray-600 text-center">Sintomas e tratamentos</p>
          </div>
          <div className="card card-hover cursor-pointer" onClick={() => setActiveSection('resources')}>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Recursos para Imprimir</h3>
            <p className="text-gray-600 text-center">Checklists e tabelas guia</p>
          </div>
        </div>
      )}

      {/* Development Milestones */}
      {activeSection === 'development' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Marcos do Desenvolvimento</h2>
            <button onClick={() => setActiveSection(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="space-y-6">
            {developmentStages.map((stage, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{stage.age}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Motor</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {stage.motor.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Cognitivo</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {stage.cognitive.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Social</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {stage.social.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic bg-white p-3 rounded-lg">{stage.tips}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feeding Section */}
      {activeSection === 'feeding' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Alimentação Infantil</h2>
            <button onClick={() => setActiveSection(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Métodos de Introdução Alimentar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {feedingMethods.map((method, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-green-700 mb-2">{method.method}</h4>
                  <p className="text-gray-700 mb-3">{method.description}</p>
                  <div className="mb-3">
                    <p className="font-medium text-gray-800">Vantagens:</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {method.advantages.map((adv, i) => (
                        <li key={i}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Considerações:</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {method.considerations.map((cons, i) => (
                        <li key={i}>{cons}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Cardápio Semanal Sugerido</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weeklyMenu.map((day, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-l-4 border-orange-500">
                  <h4 className="text-lg font-bold text-orange-700 mb-3">{day.day}</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Café:</strong> {day.breakfast}</p>
                    <p><strong>Almoço:</strong> {day.lunch}</p>
                    <p><strong>Lanche:</strong> {day.snack}</p>
                    <p><strong>Jantar:</strong> {day.dinner}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ideias para Lancheira</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {lunchboxIdeas.map((idea, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-1">{idea.name}</h4>
                  <p className="text-sm text-gray-600">{idea.tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Dicas para Seletividade Alimentar</h3>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
              <ul className="space-y-2">
                {selectiveEatingTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}

      {/* Mental Health Section */}
      {activeSection === 'mental' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Saúde Mental e Comportamento</h2>
            <button onClick={() => setActiveSection(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Dicas de Comportamento</h3>
            <div className="space-y-6">
              {mentalHealthTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-500">
                  <h4 className="text-xl font-bold text-pink-700 mb-3">{tip.topic}</h4>
                  <ul className="text-gray-700 mb-3 space-y-1">
                    {tip.tips.map((t, i) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-sm text-gray-600 italic">Exemplo: "{tip.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Uso de Telas por Idade</h3>
            <div className="space-y-4">
              {screenTimeGuidelines.map((guideline, index) => (
                <div key={index} className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl p-4 border-l-4 border-cyan-500">
                  <h4 className="font-bold text-cyan-700 mb-1">{guideline.age}</h4>
                  <p className="text-gray-700"><strong>Recomendação:</strong> {guideline.recommendation}</p>
                  <p className="text-sm text-gray-600"><strong>Exceções:</strong> {guideline.exceptions}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Common Illnesses Section */}
      {activeSection === 'illnesses' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Doenças Comuns</h2>
            <button onClick={() => setActiveSection(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIllnesses.map((illness, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">{illness.name}</h3>
                <div className="mb-3">
                  <p className="font-medium text-gray-800 mb-1">Sintomas:</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {illness.symptoms.map((symptom, i) => (
                      <li key={i}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-medium text-gray-800 mb-1">Tratamento:</p>
                  <p className="text-sm text-gray-600">{illness.treatment}</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm text-red-800"><strong>Quando buscar médico:</strong> {illness.whenToSeek}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources Section */}
      {activeSection === 'resources' && (
        <div className="card animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Recursos para Imprimir</h2>
            <button onClick={() => setActiveSection(null)} className="text-gray-500 hover:text-gray-700">
              Voltar
            </button>
          </div>
          
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Checklist do Enxoval do Bebê</h3>
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-500 print:border-2 print:border-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Roupas</h4>
                  <ul className="space-y-1 text-sm">
                    <li> Bodies (6-8 unidades)</li>
                    <li> Macacões (4-6 unidades)</li>
                    <li> Meias (6-8 pares)</li>
                    <li> Toucas (2-3 unidades)</li>
                    <li> Luvas (2-3 pares)</li>
                    <li> Roupa de sair (2-3 unidades)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Fraldas e Higiene</h4>
                  <ul className="space-y-1 text-sm">
                    <li> Fraldas recém-nascido (2 pacotes)</li>
                    <li> Lenços umedecidos</li>
                    <li> Álcool 70%</li>
                    <li> Cotonetes</li>
                    <li> Termômetro</li>
                    <li> Tesoura com ponta arredondada</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Quarto</h4>
                  <ul className="space-y-1 text-sm">
                    <li> Berço com colchão</li>
                    <li> Lençol e cobertor</li>
                    <li> Protetor de colchão</li>
                    <li> Móbile</li>
                    <li> Trocador</li>
                    <li> Cesto de roupa suja</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Banho</h4>
                  <ul className="space-y-1 text-sm">
                    <li> Banheira</li>
                    <li> Toalhas (3-4 unidades)</li>
                    <li> Sabonete neutro</li>
                    <li> Xampu infantil</li>
                    <li> Esponja</li>
                    <li> Creme para assadura</li>
                  </ul>
                </div>
              </div>
              <button onClick={() => window.print()} className="btn-primary mt-4">
                Imprimir Checklist
              </button>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Checklist da Lancheira Saudável</h3>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 print:border-2 print:border-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Sempre Incluir</h4>
                  <ul className="space-y-1 text-sm">
                    <li> 1 fruta ou vegetal</li>
                    <li> 1 fonte de proteína</li>
                    <li> 1 carboidrato integral</li>
                    <li> Água ou suco natural</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Evitar</h4>
                  <ul className="space-y-1 text-sm">
                    <li> Refrigerantes</li>
                    <li> Salgadinhos industrializados</li>
                    <li> Doces e balas</li>
                    <li> Embutidos em excesso</li>
                  </ul>
                </div>
              </div>
              <button onClick={() => window.print()} className="btn-primary mt-4">
                Imprimir Checklist
              </button>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ficha de Controle de Medicação e Febre</h3>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 print:border-2 print:border-black">
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 text-sm font-bold border-b border-gray-300 pb-2">
                  <div>Data/Hora</div>
                  <div>Temperatura</div>
                  <div>Medicamento</div>
                  <div>Dose</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 text-sm border-b border-gray-200 pb-2">
                    <div className="border border-gray-300 p-1 h-8"></div>
                    <div className="border border-gray-300 p-1 h-8"></div>
                    <div className="border border-gray-300 p-1 h-8"></div>
                    <div className="border border-gray-300 p-1 h-8"></div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Anote a temperatura e medicamentos administrados para mostrar ao pediatra.
              </p>
              <button onClick={() => window.print()} className="btn-primary mt-4">
                Imprimir Ficha
              </button>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tabela de Sono Recomendado por Idade</h3>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500 print:border-2 print:border-black">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-purple-300">
                    <th className="text-left py-2">Idade</th>
                    <th className="text-left py-2">Sono Total (24h)</th>
                    <th className="text-left py-2">Sono Noturno</th>
                    <th className="text-left py-2">Sonecas Diurnas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-200">
                    <td className="py-2">0-3 meses</td>
                    <td className="py-2">14-17 horas</td>
                    <td className="py-2">8-10 horas</td>
                    <td className="py-2">4-7 horas (3-5 sonecas)</td>
                  </tr>
                  <tr className="border-b border-purple-200">
                    <td className="py-2">4-11 meses</td>
                    <td className="py-2">12-15 horas</td>
                    <td className="py-2">9-12 horas</td>
                    <td className="py-2">2-4 horas (2-3 sonecas)</td>
                  </tr>
                  <tr className="border-b border-purple-200">
                    <td className="py-2">1-2 anos</td>
                    <td className="py-2">11-14 horas</td>
                    <td className="py-2">10-12 horas</td>
                    <td className="py-2">1-3 horas (1-2 sonecas)</td>
                  </tr>
                  <tr className="border-b border-purple-200">
                    <td className="py-2">3-5 anos</td>
                    <td className="py-2">10-13 horas</td>
                    <td className="py-2">10-12 horas</td>
                    <td className="py-2">0-2 horas (0-1 soneca)</td>
                  </tr>
                  <tr className="border-b border-purple-200">
                    <td className="py-2">6-12 anos</td>
                    <td className="py-2">9-12 horas</td>
                    <td className="py-2">9-12 horas</td>
                    <td className="py-2">0 horas</td>
                  </tr>
                  <tr>
                    <td className="py-2">13-18 anos</td>
                    <td className="py-2">8-10 horas</td>
                    <td className="py-2">8-10 horas</td>
                    <td className="py-2">0 horas</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={() => window.print()} className="btn-primary mt-4">
                Imprimir Tabela
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default DevelopmentGuide
