import { createContext, useContext, useState, useEffect } from 'react'

const AccessibilityContext = createContext()

export const AccessibilityProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false)
  const speechSynth = typeof window !== 'undefined' ? window.speechSynthesis : null

  useEffect(() => {
    document.documentElement.setAttribute('data-high-contrast', highContrast)
  }, [highContrast])

  useEffect(() => {
    if (largeText) {
      document.documentElement.classList.add('text-large')
    } else {
      document.documentElement.classList.remove('text-large')
    }
  }, [largeText])

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }
  }, [reducedMotion])

  const toggleHighContrast = () => setHighContrast(!highContrast)
  const toggleLargeText = () => setLargeText(!largeText)
  const toggleReducedMotion = () => setReducedMotion(!reducedMotion)

  const speak = (text) => {
    if (!screenReaderEnabled || !speechSynth) return
    
    speechSynth.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'pt-BR'
    utterance.rate = 1
    speechSynth.speak(utterance)
  }

  const toggleScreenReader = () => {
    setScreenReaderEnabled(!screenReaderEnabled)
    if (!screenReaderEnabled && speechSynth) {
      speak('Leitor de tela ativado. Clique em qualquer elemento para ouvir o conteúdo.')
    } else if (speechSynth) {
      speechSynth.cancel()
    }
  }

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        largeText,
        reducedMotion,
        screenReaderEnabled,
        toggleHighContrast,
        toggleLargeText,
        toggleReducedMotion,
        toggleScreenReader,
        speak,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider')
  }
  return context
}
