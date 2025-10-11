import { useState, useEffect } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'Desenvolvedor Full Stack',
    'Especialista ReactJS',
    'Especialista em NodeJS',
  ]

  useEffect(() => {
    setIsVisible(true)

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(roleInterval)
  }, [])

  return (
    <div
      id="home"
      className="relative min-h-screen bg-zinc-950 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-white/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Disponível para novos projetos
          </div>

          <h1
            className={`text-5xl md:text-7xl font-light text-white mb-6 tracking-tight transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Edson Alves
          </h1>

          <div
            className={`text-xl md:text-2xl text-gray-400 mb-8 h-8 transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-block transition-all duration-500 ease-in-out">
              {roles[currentRole]}
            </span>
          </div>

          <p
            className={`text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-700 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Transformo ideias em soluções digitais elegantes e funcionais.
            Focado em performance, usabilidade e código de qualidade.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-700 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20">
              Ver Projetos
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center text-gray-600 hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Role para baixo
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
