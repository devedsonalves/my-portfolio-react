import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Github,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Folder,
} from 'lucide-react'
import { projects } from '@/data/projects'

const ProjectsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

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

  const scrollToProject = useCallback((index: number) => {
    if (carouselRef.current) {
      const projectWidth = 400
      carouselRef.current.scrollTo({
        left: index * projectWidth,
        behavior: 'smooth',
      })
      setCurrentIndex(index)
    }
  }, [])

  const nextProject = useCallback(() => {
    const nextIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    scrollToProject(nextIndex)
  }, [currentIndex, projects.length, scrollToProject])

  const prevProject = useCallback(() => {
    const prevIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    scrollToProject(prevIndex)
  }, [currentIndex, projects.length, scrollToProject])

  const handleScroll = useCallback(() => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const projectWidth = 400
      const newIndex = Math.round(scrollLeft / projectWidth)
      setCurrentIndex(newIndex)
    }
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/1 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-white/2 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6">
            <Folder className="w-4 h-4" />
            Projetos
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Trabalhos que fazem a <br />
            <span className="text-gray-400">diferença</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Uma seleção dos projetos mais relevantes que desenvolvi, cada um com
            suas particularidades e desafios únicos.
          </p>
        </div>

        <div
          className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={prevProject}
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onScroll={handleScroll}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="min-w-[380px] snap-center bg-white/3 border border-white/10 rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Concluído'
                          ? 'bg-green-600/70 text-green-400 border border-green-500/30'
                          : project.status === 'Em desenvolvimento'
                          ? 'bg-yellow-600/70 text-yellow-400 border border-yellow-500/30'
                          : 'bg-blue-600/70 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded text-gray-300 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            Ver todos os projetos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
