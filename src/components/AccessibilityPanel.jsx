import { useAccessibility } from '../context/AccessibilityContext'

const AccessibilityPanel = () => {
  const {
    highContrast,
    largeText,
    reducedMotion,
    screenReaderEnabled,
    toggleHighContrast,
    toggleLargeText,
    toggleReducedMotion,
    toggleScreenReader,
  } = useAccessibility()

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 py-4" role="region" aria-label="Painel de acessibilidade">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Acessibilidade</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={toggleHighContrast}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                highContrast
                  ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={highContrast}
            >
              Alto Contraste
            </button>
            
            <button
              onClick={toggleLargeText}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                largeText
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={largeText}
            >
              Texto Grande
            </button>
            
            <button
              onClick={toggleReducedMotion}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                reducedMotion
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={reducedMotion}
            >
              Reduzir Movimento
            </button>
            
            <button
              onClick={toggleScreenReader}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                screenReaderEnabled
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-pressed={screenReaderEnabled}
            >
              {screenReaderEnabled ? '🔇 Leitor Ativo' : '🔊 Leitor de Tela'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityPanel
