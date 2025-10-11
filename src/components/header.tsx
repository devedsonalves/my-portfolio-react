import React, { useState, useEffect } from 'react'
import { Mail, Code, Menu, X, Download } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Sobre', href: '#about', id: 'about' },
    { name: 'Projetos', href: '#projects', id: 'projects' },
    { name: 'Contato', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-zinc-950/50 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#home')
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img src="logo.png" className="w-full h-full text-white" />
                </div>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ name, href, id }) => (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(href)
                  }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                    activeSection === id
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {name}
                  {activeSection === id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">CV</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#contact')
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Contato
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-zinc-950/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(({ name, href, id }) => (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(href)
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === id
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#contact')
                  }}
                  className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Entre em contato
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
