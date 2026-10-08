import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  FolderOpen,
  MessageCircle,
  UserRound
} from 'lucide-react'
import { topics } from '@/data/portfolio-chat'

interface WelcomeProps {
  onAsk: (question: string) => void
}

export const ChatWelcome = () => (
  <section className="chat-welcome" aria-labelledby="welcome-title">
    <div className="portrait-sticker">
      <div className="portrait-orbit" />
      <img
        src="/edson-pixel.png"
        alt="Avatar de Edson Alves em pixel art"
        className="pixel-avatar"
        width={94}
        height={94}
      />
      <span className="portrait-wave" aria-hidden="true">
        ✌️
      </span>
      <span className="portrait-label">oi, eu sou o Edson!</span>
    </div>
    <h1 id="welcome-title">
      Do primeiro rascunho
      <br />
      <em>ao último detalhe.</em>
      <span className="title-spark" aria-hidden="true">
        ✳
      </span>
    </h1>
    <p>
      Sou Edson, desenvolvedor Full Stack.
      <br className="mobile-break" /> Transformo ideias em experiências
      digitais.
      <br className="desktop-break" /> Escolha um assunto ou pergunte algo. A
      conversa é sua.
    </p>
  </section>
)

const suggestionIcons = {
  about: UserRound,
  projects: FolderOpen,
  skills: Code2,
  contact: MessageCircle
}

export const ChatSuggestions = ({ onAsk }: WelcomeProps) => (
  <div className="chat-suggestions" aria-label="Sugestões para começar">
    {topics
      .filter(topic => topic.id !== 'experience')
      .map(topic => {
        const Icon = suggestionIcons[topic.id as keyof typeof suggestionIcons]
        return (
          <button
            className={`suggestion suggestion-${topic.id}`}
            key={topic.id}
            onClick={() => onAsk(topic.prompt)}
          >
            <span className="suggestion-top">
              <Icon size={20} strokeWidth={1.5} />
              <ArrowUpRight size={15} />
            </span>
            <strong>{topic.label}</strong>
            <span>
              {topic.id === 'skills' ? 'Ferramentas & habilidades' : topic.hint}
            </span>
          </button>
        )
      })}
  </div>
)

export const FeaturedProject = ({ onAsk }: WelcomeProps) => (
  <button
    className="featured-project"
    onClick={() => onAsk('Me conte mais sobre o Margem')}
  >
    <div className="featured-image">
      <img src="/projects/margem-reader.png" alt="" />
    </div>
    <div>
      <span className="featured-eyebrow">ENTRE UMA LINHA E OUTRA</span>
      <strong>
        Conheça o Margem <span>— meu projeto de leitura e estudo.</span>
      </strong>
    </div>
    <ArrowDownRight size={21} />
  </button>
)
