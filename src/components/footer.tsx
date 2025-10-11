import React, { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ]

  const services = [
    { name: 'Desenvolvimento Web', href: '#' },
    { name: 'Aplicativos Mobile', href: '#' },
    { name: 'Consultoria Tech', href: '#' },
    { name: 'Code Review', href: '#' },
  ]

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Portfólio', href: '#' },
    { name: 'Recursos', href: '#' },
    { name: 'FAQ', href: '#' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      username: '@joaosilva',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      username: 'João Silva',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:joao@exemplo.com',
      username: 'joao@exemplo.com',
    },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer
      ref={sectionRef}
      className="relative bg-zinc-950 border-t border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className={`py-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © {currentYear} Edson Alves. Todos os direitos reservados.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm">
                Disponível para projetos
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-px bg-gradient-to-l from-white/10 to-transparent" />
    </footer>
  )
}

export default Footer
