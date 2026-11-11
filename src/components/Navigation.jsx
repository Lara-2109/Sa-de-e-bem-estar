import { useState } from 'react'

const Navigation = ({ sections, activeSection, onSectionChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/90 backdrop-blur-lg shadow-soft sticky top-0 z-40 border-b border-gray-100" role="navigation" aria-label="Navegação principal" tabIndex={0}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md">
              S
            </div>
            <h1 className="text-2xl font-bold gradient-text" aria-label="Logo do site">
              Saúde & Bem-Estar
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menu de navegação"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-2 pb-4" role="menubar">
          {sections.map((section) => (
            <li key={section.id} role="none">
              <button
                role="menuitem"
                onClick={() => onSectionChange(section.id)}
                className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <ul id="mobile-menu" className="md:hidden pb-4 space-y-2 animate-slide-up" role="menu">
            {sections.map((section) => (
              <li key={section.id} role="none">
                <button
                  role="menuitem"
                  onClick={() => {
                    onSectionChange(section.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600'
                  }`}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navigation
