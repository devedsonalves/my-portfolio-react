export type Topic =
  | 'about'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'contact'
  | 'margem'
  | 'finora'
  | 'fallback'

export const portfolioContact = {
  email: 'devedsonalves@gmail.com',
  github: 'https://github.com/devedsonalves',
  linkedin: 'https://www.linkedin.com/in/edson4lves/',
  whatsapp: 'https://wa.me/5588993583361'
}

export const topics = [
  {
    id: 'about',
    label: 'Sobre mim',
    prompt: 'Quem é o Edson?',
    hint: 'O dev por trás do código',
    symbol: '01'
  },
  {
    id: 'projects',
    label: 'Projetos',
    prompt: 'Quero conhecer seus projetos',
    hint: 'Ideias que viraram código',
    symbol: '02'
  },
  {
    id: 'skills',
    label: 'Minha stack',
    prompt: 'Quais são suas habilidades?',
    hint: 'O que tem na minha caixa de ferramentas',
    symbol: '03'
  },
  {
    id: 'experience',
    label: 'Trajetória',
    prompt: 'Me conte sobre sua experiência',
    hint: 'O que construí pelo caminho',
    symbol: '04'
  },
  {
    id: 'contact',
    label: 'Contato',
    prompt: 'Vamos trabalhar juntos?',
    hint: 'O começo de uma boa conversa',
    symbol: '05'
  }
] as const

const matchers: { topic: Topic; pattern: RegExp }[] = [
  { topic: 'margem', pattern: /\b(margem|pdf|leitura|reader)\b/ },
  { topic: 'finora', pattern: /\bfinora\b/ },
  {
    topic: 'contact',
    pattern:
      /contat|contact|email|e-mail|whatsapp|github(?!\s+actions)|contrat|orcamento|conversar|trabalhar juntos|hire|curriculo|resume|linkedin/
  },
  {
    topic: 'experience',
    pattern: /experien|trajetoria|carreira|habit|knex|nordsol|trabalhou|career/
  },
  {
    topic: 'skills',
    pattern:
      /habilidade|stack|tecnologia|skill|frontend|backend|ferramenta|infraestrutura|devops|testes|praticas|\b(html|css|react|next|typescript|javascript|tailwind|styled components|ui\s*\/\s*ux|node|nestjs|express|fastify|apis?\s+rest|sql|postgresql|mysql|nosql|dynamodb|mongodb|firebase|redis|filas|bullmq|elasticmq|websockets?|aws|lambda|ecs|s3|rds|cloudwatch|docker|terraform|ci\s*\/\s*cd|github actions|jest|vitest|tdd|git|scrum)\b/
  },
  {
    topic: 'projects',
    pattern: /projeto|project|portfolio|construiu|trabalho|work/
  },
  {
    topic: 'about',
    pattern:
      /\b(oi|ola|hey|hi|hello|edson|voce|you)\b|sobre|quem|apresent|about|brejo|ceara/
  }
]

export const identifyTopic = (question: string): Topic => {
  const normalized = question
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
  return (
    matchers.find(({ pattern }) => pattern.test(normalized))?.topic ??
    'fallback'
  )
}

export const responses: Record<Topic, { title: string; text: string }> = {
  about: {
    title: 'Prazer, Edson. Desenvolvedor e curioso por natureza.',
    text: 'Sou desenvolvedor Full Stack de Brejo Santo, no Ceará. Trabalho com React e Node.js para transformar ideias em aplicações práticas. Gosto de código organizado, boa performance e experiências simples para quem está do outro lado da tela.'
  },
  projects: {
    title: 'Um pouco do que sai da minha mesa.',
    text: 'Gosto de construir soluções para problemas reais. Explore os projetos abaixo para conhecer o contexto e as tecnologias de cada um.'
  },
  skills: {
    title: 'As ferramentas mudam. O cuidado com a entrega, não.',
    text: 'Minhas habilidades técnicas abrangem interfaces web e mobile, APIs, bancos de dados, infraestrutura e DevOps. Trabalho também com testes automatizados e práticas de desenvolvimento para cuidar da qualidade em cada etapa.'
  },
  experience: {
    title: 'Aprendizado que vem de construir.',
    text: 'Minha trajetória passa por automação, modernização de sistemas e desenvolvimento de produtos. Aqui estão as experiências que fazem parte desse caminho.'
  },
  contact: {
    title: 'Boas ideias começam com uma conversa.',
    text: 'Tem um projeto, um desafio ou uma oportunidade? Me conte o que você tem em mente. Você pode falar diretamente comigo por e-mail ou WhatsApp e conhecer mais do meu código no GitHub.'
  },
  margem: {
    title: 'Margem — um espaço para ler, pensar e conectar.',
    text: 'Uma plataforma de leitura e estudo que reúne biblioteca pessoal, leitor de PDF, destaques, notas de margem e cadernos. A ideia é transformar documentos em conhecimento organizado, com React, TypeScript, NestJS e PostgreSQL.'
  },
  finora: {
    title: 'Finora — mais clareza para entender os próprios gastos.',
    text: 'O Finora é um gerenciador de gastos que centraliza despesas e ajuda a acompanhar para onde o dinheiro está indo. Foi desenvolvido com TypeScript, React, Fastify, PostgreSQL, Drizzle ORM e Pluggy.'
  },
  fallback: {
    title: 'Vamos explorar meu universo?',
    text: 'Este é um chat simulado com respostas sobre meu trabalho. Posso te contar sobre meus projetos, habilidades, trajetória e formas de contato. Escolha um assunto abaixo ou reformule sua pergunta.'
  }
}

export const skillGroups = [
  {
    name: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'React.js',
      'Next.js',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Styled Components',
      'UI/UX'
    ]
  },
  {
    name: 'Backend',
    items: [
      'Node.js (NestJS, Express.js, Fastify)',
      'APIs REST',
      'SQL (PostgreSQL, MySQL)',
      'NoSQL (DynamoDB, MongoDB, Firebase)',
      'Redis',
      'Filas (BullMQ, ElasticMQ)',
      'WebSockets'
    ]
  },
  {
    name: 'Infraestrutura e DevOps',
    items: [
      'AWS (Lambda, ECS, S3, RDS e CloudWatch)',
      'Docker',
      'Terraform',
      'CI/CD com GitHub Actions'
    ]
  },
  {
    name: 'Testes e Práticas',
    items: [
      'Jest',
      'Vitest',
      'React Testing Library',
      'TDD (Test-Driven Development)',
      'Git',
      'GitHub',
      'Scrum'
    ]
  }
]
