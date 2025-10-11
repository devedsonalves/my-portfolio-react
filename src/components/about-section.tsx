import React, { useState, useEffect, useRef } from 'react'
import { User, Code, Target, Coffee, Award, Calendar } from 'lucide-react'

const AboutSection: React.FC = () => {
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

  const stats = [
    { icon: Calendar, label: 'Anos de experiência', value: '5+' },
    { icon: Code, label: 'Projetos concluídos', value: '50+' },
    { icon: Award, label: 'Clientes satisfeitos', value: '30+' },
    { icon: Coffee, label: 'Cafés por dia', value: '∞' },
  ]

  const skills = [
    {
      name: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    { name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/1 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6">
            <User className="w-4 h-4" />
            Sobre mim
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Desenvolvedor apaixonado por <br />
            <span className="text-gray-400">criar experiências digitais</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
                Há mais de 5 anos transformo ideias em realidade digital.
                Comecei minha jornada como autodidata, movido pela curiosidade
                de entender como funcionam as aplicações que usamos no dia a
                dia.
              </p>

              <p className="text-gray-500 leading-relaxed mb-6 font-light">
                Especializei-me em desenvolvimento full-stack, com foco especial
                em React e Node.js. Acredito que a melhor tecnologia é aquela
                que resolve problemas reais de forma elegante e eficiente.
              </p>

              <p className="text-gray-500 leading-relaxed mb-8 font-light">
                Quando não estou codando, você pode me encontrar estudando novas
                tecnologias, contribuindo para projetos open-source ou tomando
                um bom café enquanto planejo o próximo projeto.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div
              className={`transition-all duration-700 delay-600 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-6">
                {skills.map(({ name, items }, index) => (
                  <div
                    key={index}
                    className="bg-white/3 border border-white/10 rounded-lg p-4"
                  >
                    <h4 className="text-white text-sm font-medium mb-3">
                      {name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-xs font-light hover:bg-white/15 transition-colors duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
