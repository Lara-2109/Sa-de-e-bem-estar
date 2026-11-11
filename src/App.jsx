import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import AccessibilityPanel from './components/AccessibilityPanel'
import { AccessibilityProvider, useAccessibility } from './context/AccessibilityContext'
import ChildHealth from './pages/ChildHealth'
import ChildWellbeing from './pages/ChildWellbeing'
import MentalHealth from './pages/MentalHealth'
import AccessibilityTools from './pages/AccessibilityTools'
import Nutrition from './pages/Nutrition'
import HealthTools from './pages/HealthTools'
import DevelopmentGuide from './pages/DevelopmentGuide'

// Global keyboard shortcuts component
const GlobalKeyboardShortcuts = () => {
  const { highContrast, largeText, reducedMotion, screenReaderEnabled, speak } = useAccessibility()

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Alt + M: Ir para o menu principal
      if (event.altKey && (event.key === 'm' || event.key === 'M')) {
        event.preventDefault()
        const menu = document.querySelector('nav') || document.querySelector('[role="navigation"]')
        if (menu) {
          menu.focus()
          menu.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      // Alt + C: Ir para o conteúdo principal
      if (event.altKey && (event.key === 'c' || event.key === 'C')) {
        event.preventDefault()
        const mainContent = document.querySelector('main') || document.querySelector('[role="main"]')
        if (mainContent) {
          mainContent.focus()
          mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      // Alt + S: Pular para o conteúdo (skip link)
      if (event.altKey && (event.key === 's' || event.key === 'S')) {
        event.preventDefault()
        const skipLink = document.querySelector('.skip-link')
        if (skipLink) {
          skipLink.click()
        } else {
          const mainContent = document.querySelector('main') || document.querySelector('[role="main"]')
          if (mainContent) {
            mainContent.focus()
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }

      // Esc: Fechar modais e menus
      if (event.key === 'Escape') {
        // Close any open modals or dropdowns
        const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]')
        openModals.forEach(modal => {
          modal.setAttribute('aria-hidden', 'true')
          modal.style.display = 'none'
        })
        
        // Close dropdowns
        const openDropdowns = document.querySelectorAll('[aria-expanded="true"]')
        openDropdowns.forEach(dropdown => {
          dropdown.setAttribute('aria-expanded', 'false')
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Global click handler for screen reader
  useEffect(() => {
    const handleClick = (event) => {
      if (!screenReaderEnabled) return

      // Don't read if clicking on buttons, inputs, or the accessibility panel itself
      const target = event.target
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'INPUT' || 
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="region"][aria-label="Painel de acessibilidade"]')) {
        return
      }

      // Get text content from the clicked element
      let textToRead = ''
      
      // Try to get aria-label first
      if (target.getAttribute('aria-label')) {
        textToRead = target.getAttribute('aria-label')
      }
      // Try to get text content
      else if (target.textContent && target.textContent.trim()) {
        textToRead = target.textContent.trim()
      }
      // Try to get from parent if element has no text
      else if (target.parentElement && target.parentElement.textContent && target.parentElement.textContent.trim()) {
        textToRead = target.parentElement.textContent.trim()
      }

      // Only read if there's meaningful text (more than just icons)
      if (textToRead && textToRead.length > 1 && !/^[\s🔊🔇✓📝]*$/.test(textToRead)) {
        speak(textToRead)
      }
    }

    if (screenReaderEnabled) {
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    }
  }, [screenReaderEnabled, speak])

  return null
}

function App() {
  const [activeSection, setActiveSection] = useState('child-health')

  const sections = [
    { id: 'child-health', name: 'Saúde Infantil', component: ChildHealth },
    { id: 'child-wellbeing', name: 'Bem-Estar Infantil', component: ChildWellbeing },
    { id: 'mental-health', name: 'Saúde Mental', component: MentalHealth },
    { id: 'nutrition', name: 'Nutrição', component: Nutrition },
    { id: 'development-guide', name: 'Guia de Desenvolvimento', component: DevelopmentGuide },
    { id: 'health-tools', name: 'Ferramentas de Saúde', component: HealthTools },
    { id: 'accessibility-tools', name: 'Acessibilidade', component: AccessibilityTools },
  ]

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || ChildHealth

  return (
    <AccessibilityProvider>
      <div className="min-h-screen">
        <GlobalKeyboardShortcuts />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        
        <Navigation 
          sections={sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <AccessibilityPanel />
        
        <main id="main-content" className="container mx-auto px-4 py-8" role="main" tabIndex={-1}>
          <div className="animate-fade-in">
            <ActiveComponent />
          </div>
        </main>
        
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-16" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Saúde e Bem-Estar Infantil</h3>
              <p className="text-lg mb-4 opacity-90">Tecnologia para saúde, bem-estar e acessibilidade das crianças</p>
              <p className="text-sm opacity-75">Promovendo inclusão e qualidade de vida para todas as crianças</p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-xs opacity-50">© 2026 - Desenvolvido com foco em acessibilidade e inclusão infantil</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </AccessibilityProvider>
  )
}

export default App
