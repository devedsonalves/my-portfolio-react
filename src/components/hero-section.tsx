import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="section-padding w-full">
        <div className="text-left w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary mb-4 font-medium w-full"
          >
            Olá, meu nome é
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4 w-full"
          >
            <span className="text-gradient w-full">Edson Alves</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-foreground/8 w-full"
          >
            Desenvolvedor Full Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg mb-8 text-foreground/70 max-w-2xl w-full"
          >
            Especializado em criar experiências digitais excepcionais. Atualmente 
            focado em construir aplicações web responsivas e acessíveis que 
            resolvem problemas reais.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="rounded-md min-w-[180px] min-h-[50px]"
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-md min-w-[180px] min-h-[50px]"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entre em Contato
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="h-8 w-8 text-primary animate-pulse-slow" />
      </motion.div>
    </section>
  );
}
