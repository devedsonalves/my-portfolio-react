import React, { useState, useEffect, useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  CheckCircle,
} from 'lucide-react'

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef(null)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contato@edsonalves.dev',
      href: 'mailto:contato@edsonalves.dev',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (83) 9 9999-9999',
      href: 'tel:+5583999999999',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'João Pessoa, PB - Brasil',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'Github',
      href: 'https://github.com',
      color: 'hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-sky-400',
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-zinc-950 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Vamos criar algo <br />
            <span className="text-gray-400">incrível juntos</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Estou sempre interessado em novos projetos e oportunidades. Entre em
            contato e vamos conversar sobre suas ideias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h3 className="text-xl font-medium text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white/3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/15 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white text-center sm:text-left mb-6">
                Redes Sociais
              </h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 ${social.color} hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/3 border border-white/10 rounded-xl p-8 hover:bg-white/5 transition-all duration-500">
              <h3 className="text-xl font-medium text-white mb-6">
                Envie uma Mensagem
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-white font-medium mb-2">
                    Mensagem enviada!
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Obrigado pelo contato. Retornarei em breve.
                  </p>
                </div>
              ) : (
                <div onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-300 text-sm font-medium mb-2"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:border-white/40 transition-all duration-300"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-300 text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:border-white/40 transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:border-white/40 transition-all duration-300"
                      placeholder="Sobre o que gostaria de falar?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:border-white/40 transition-all duration-300 resize-none"
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
