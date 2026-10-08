export interface Project {
  id: string
  title: string
  description?: string
  image?: string
  tags?: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'margem',
    title: 'Margem',
    description:
      'Plataforma de leitura e estudo que reúne biblioteca pessoal, leitor de PDF, destaques, notas de margem e cadernos para transformar documentos em conhecimento organizado.',
    image: '/projects/margem-reader.png',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL']
  },
  {
    id: 'finora',
    title: 'Finora',
    description:
      'Um gerenciador de gastos que centraliza as despesas e ajuda a acompanhar, com mais clareza, para onde o dinheiro está indo.',
    tags: ['TypeScript', 'React', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Pluggy']
  }
]
