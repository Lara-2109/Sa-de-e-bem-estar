import { useState, useRef } from 'react'

const AccessibilityTools = () => {
  const [virtualKeyboardText, setVirtualKeyboardText] = useState('')
  const inputRef = useRef(null)

  // Virtual Keyboard functionality
  const keyboardLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-'],
    ['ESPAÇO', 'BACKSPACE', 'ENTER', 'CLEAR']
  ]

  const handleVirtualKey = (key) => {
    if (key === 'BACKSPACE') {
      setVirtualKeyboardText(prev => prev.slice(0, -1))
    } else if (key === 'ENTER') {
      setVirtualKeyboardText(prev => prev + '\n')
    } else if (key === 'CLEAR') {
      setVirtualKeyboardText('')
    } else if (key === 'ESPAÇO') {
      setVirtualKeyboardText(prev => prev + ' ')
    } else {
      setVirtualKeyboardText(prev => prev + key)
    }
    
    // Focus the input after typing
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const tools = [
    {
      title: 'Leitores de Tela',
      description: 'Software que lê o conteúdo da tela em voz alta, permitindo que pessoas com deficiência visual naveguem na internet.',
      examples: ['NVDA (gratuito)', 'JAWS (pago)', 'VoiceOver (Mac/iOS)', 'TalkBack (Android)'],
      color: 'blue',
    },
    {
      title: 'Lupas e Ampliadores',
      description: 'Ferramentas que ampliam partes da tela para ajudar pessoas com baixa visão a ler conteúdo.',
      examples: ['Lupa do Windows', 'ZoomText', 'ChromeVox'],
      color: 'green',
    },
    {
      title: 'Teclado Virtual',
      description: 'Permite digitar usando mouse, trackball ou outros dispositivos de ponteiro, útil para pessoas com dificuldades motoras.',
      examples: ['Teclado Virtual do Windows', 'On-Screen Keyboard'],
      color: 'purple',
    },
    {
      title: 'Reconhecimento de Voz',
      description: 'Controla o computador e digita texto usando comandos de voz.',
      examples: ['Dragon NaturallySpeaking', 'Dictação do Windows', 'Voice Control (Mac)'],
      color: 'orange',
    },
    {
      title: 'Contraste e Cores',
      description: 'Ferramentas que ajustam cores e contraste para melhorar a legibilidade.',
      examples: ['High Contrast Mode', 'Color Blindness Simulator', 'Contrast Checker'],
      color: 'red',
    },
    {
      title: 'Navegação por Teclado',
      description: 'Permite navegar em sites usando apenas o teclado, com atalhos e navegação estrutural.',
      examples: ['Tab', 'Shift+Tab', 'Teclas de seta', 'Atalhos do navegador'],
      color: 'yellow',
    },
  ]

  const wcagPrinciples = [
    {
      principle: 'Perceptível',
      description: 'O conteúdo deve ser apresentado de formas que todos os usuários possam perceber.',
      examples: ['Texto alternativo para imagens', 'Legendas em vídeos', 'Contraste suficiente', 'Controles de volume'],
    },
    {
      principle: 'Operável',
      description: 'Os componentes da interface devem ser operáveis por todos os usuários.',
      examples: ['Todas as funções disponíveis por teclado', 'Tempo suficiente para ler', 'Não causar convulsões', 'Navegação previsível'],
    },
    {
      principle: 'Compreensível',
      description: 'O conteúdo e a interface devem ser compreensíveis.',
      examples: ['Linguagem clara e simples', 'Previsibilidade de funcionalidades', 'Ajuda na correção de erros'],
    },
    {
      principle: 'Robusto',
      description: 'O conteúdo deve ser robusto o suficiente para ser interpretado por tecnologias assistivas.',
      examples: ['Compatibilidade com tecnologias assistivas', 'HTML semântico', 'ARIA labels'],
    },
  ]

  const keyboardShortcuts = [
    { keys: 'Tab', description: 'Navegar para o próximo elemento' },
    { keys: 'Shift + Tab', description: 'Navegar para o elemento anterior' },
    { keys: 'Enter / Espaço', description: 'Ativar botões e links' },
    { keys: 'Alt + M', description: 'Ir para o menu principal' },
    { keys: 'Alt + C', description: 'Ir para o conteúdo principal' },
    { keys: 'Alt + S', description: 'Pular para o conteúdo' },
    { keys: 'Esc', description: 'Fechar modais e menus' },
  ]

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-500',
    green: 'bg-green-50 border-green-500',
    purple: 'bg-purple-50 border-purple-500',
    orange: 'bg-orange-50 border-orange-500',
    red: 'bg-red-50 border-red-500',
    yellow: 'bg-yellow-50 border-yellow-500',
  }

  return (
    <div className="space-y-8">
      <header className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Ferramentas de Acessibilidade</h1>
        <p className="text-xl text-gray-600">Recursos e tecnologias para inclusão digital</p>
      </header>

      {/* Screen Reader Info Section */}
      <section className="card animate-slide-up" aria-labelledby="screen-reader-info-title">
        <h2 id="screen-reader-info-title" className="section-title">Leitor de Tela Global</h2>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-700 mb-2">Leitor de Tela Disponível em Todo o Site</h3>
          <p className="text-gray-700 mb-4">
            O leitor de tela agora está disponível globalmente! Ative-o usando o botão "🔊 Leitor de Tela" no painel de acessibilidade no topo de qualquer página.
          </p>
          <div className="bg-white rounded-lg p-4 border-2 border-green-200">
            <p className="text-sm text-green-600 font-medium mb-2">✓ Como usar:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Clique no botão "🔊 Leitor de Tela" no painel de acessibilidade para ativá-lo</li>
              <li>• Clique em qualquer texto do site para ouvir o conteúdo em voz alta</li>
              <li>• Clique novamente no botão para desativar o leitor</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assistive Technologies Section */}
      <section className="card animate-slide-up" aria-labelledby="tech-title">
        <h2 id="tech-title" className="section-title">Tecnologias Assistivas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <article
              key={index}
              className={`${colorClasses[tool.color]} border-l-4 p-6 rounded-r-lg`}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
              <p className="text-gray-700 mb-3">{tool.description}</p>
              <div className="text-sm text-gray-600">
                <strong>Exemplos:</strong>
                <ul className="list-disc list-inside mt-1">
                  {tool.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Virtual Keyboard */}
      <section className="card animate-slide-up" aria-labelledby="virtual-keyboard-title">
        <h2 id="virtual-keyboard-title" className="section-title">Teclado Virtual</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Teclado Virtual On-Screen</h3>
            <p className="text-gray-700 mb-4">Use o teclado virtual abaixo para digitar texto usando o mouse ou dispositivo de ponteiro. Útil para pessoas com dificuldades motoras.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texto digitado:</label>
                <textarea
                  ref={inputRef}
                  value={virtualKeyboardText}
                  onChange={(e) => setVirtualKeyboardText(e.target.value)}
                  className="w-full h-32 px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                  placeholder="Clique nas teclas do teclado virtual para digitar..."
                  aria-label="Área de texto para teclado virtual"
                />
              </div>
              
              <div className="bg-white rounded-lg p-4 border-2 border-purple-200">
                {keyboardLayout.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex gap-1 mb-1 justify-center">
                    {row.map((key) => (
                      <button
                        key={key}
                        onClick={() => handleVirtualKey(key)}
                        className={`px-3 py-3 rounded font-bold transition-all hover:scale-105 active:scale-95 ${
                          key === 'ESPAÇO'
                            ? 'w-48 bg-purple-500 hover:bg-purple-600 text-white'
                            : key === 'BACKSPACE'
                            ? 'w-24 bg-red-500 hover:bg-red-600 text-white text-sm'
                            : key === 'ENTER'
                            ? 'w-20 bg-green-500 hover:bg-green-600 text-white text-sm'
                            : key === 'CLEAR'
                            ? 'w-20 bg-gray-500 hover:bg-gray-600 text-white text-sm'
                            : 'w-10 bg-purple-100 hover:bg-purple-200 text-purple-800'
                        }`}
                        aria-label={`Tecla ${key}`}
                      >
                        {key === 'BACKSPACE' ? '⌫' : key === 'ENTER' ? '↵' : key === 'CLEAR' ? '🗑️' : key}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WCAG Principles Section */}
      <section className="card animate-slide-up" aria-labelledby="wcag-title">
        <h2 id="wcag-title" className="section-title">Princípios WCAG</h2>
        <p className="text-lg text-gray-700 mb-6">
          As Diretrizes de Acessibilidade para Conteúdo Web (WCAG) são baseadas em quatro princípios fundamentais:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wcagPrinciples.map((principle, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{principle.principle}</h3>
              <p className="text-gray-700 mb-3">{principle.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {principle.examples.map((example, i) => (
                  <li key={i}>• {example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Keyboard Shortcuts Section */}
      <section className="card animate-slide-up" aria-labelledby="keyboard-title">
        <h2 id="keyboard-title" className="section-title">Atalhos de Teclado</h2>
        <div className="mb-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-700 mb-2">Teste os Atalhos Agora!</h3>
          <p className="text-gray-700">Os atalhos de teclado abaixo estão ativos. Tente usá-los:</p>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>• Pressione <kbd className="bg-white px-2 py-1 rounded font-mono text-sm border">Alt + M</kbd> para ir ao menu principal</li>
            <li>• Pressione <kbd className="bg-white px-2 py-1 rounded font-mono text-sm border">Alt + C</kbd> para ir ao conteúdo principal</li>
            <li>• Pressione <kbd className="bg-white px-2 py-1 rounded font-mono text-sm border">Alt + S</kbd> para pular para o conteúdo</li>
            <li>• Pressione <kbd className="bg-white px-2 py-1 rounded font-mono text-sm border">Esc</kbd> para fechar modais</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyboardShortcuts.map((shortcut, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors">
              <kbd className="bg-white px-3 py-2 rounded font-mono text-sm font-bold shadow-sm border border-gray-200">
                {shortcut.keys}
              </kbd>
              <span className="text-gray-700">{shortcut.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testing Tools Section */}
      <section className="card animate-slide-up" aria-labelledby="testing-title">
        <h2 id="testing-title" className="section-title">Ferramentas de Teste</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-3">Validadores Automáticos</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• WAVE Web Accessibility Evaluator</li>
              <li>• axe DevTools</li>
              <li>• Lighthouse (Chrome)</li>
              <li>• AChecker</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Teste de Contraste</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• WebAIM Contrast Checker</li>
              <li>• Contrast Ratio Calculator</li>
              <li>• Colour Contrast Analyser</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500 shadow-md">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Teste de Leitores</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• NVDA (Windows)</li>
              <li>• VoiceOver (Mac)</li>
              <li>• TalkBack (Android)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="card animate-slide-up" aria-labelledby="practices-title">
        <h2 id="practices-title" className="section-title">Melhores Práticas</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
            <span className="text-3xl">✅</span>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Use HTML Semântico</h4>
              <p className="text-gray-700">Utilize tags apropriadas como &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
            <span className="text-3xl">✅</span>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Forneça Texto Alternativo</h4>
              <p className="text-gray-700">Adicione atributos alt descritivos em todas as imagens</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
            <span className="text-3xl">✅</span>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Garanta Contraste Adequado</h4>
              <p className="text-gray-700">Mínimo de 4.5:1 para texto normal e 3:1 para texto grande</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
            <span className="text-3xl">✅</span>
            <div>
              <h4 className="font-bold text-lg">Teste com Teclado</h4>
              <p className="text-gray-700">Verifique se todo o site é navegável usando apenas o teclado</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
            <span className="text-3xl">✅</span>
            <div>
              <h4 className="font-bold text-lg text-gray-800">Use ARIA Labels</h4>
              <p className="text-gray-700">Adicione rótulos ARIA quando HTML semântico não for suficiente</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccessibilityTools
