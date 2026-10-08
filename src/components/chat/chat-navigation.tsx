import { useRef } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FolderOpen,
  Github,
  Linkedin,
  Menu,
  MessageCircle,
  Plus,
  UserRound
} from 'lucide-react'
import { portfolioContact, topics } from '@/data/portfolio-chat'
import { PixelAvatar } from './pixel-avatar'
import ThemeToggle from '@/components/theme-toggle'

const icons = {
  about: UserRound,
  projects: FolderOpen,
  skills: Code2,
  experience: BriefcaseBusiness,
  contact: MessageCircle
}

interface NavigationProps {
  onAsk: (question: string) => void
  onReset: () => void
  busy: boolean
}

const Explorer = ({ onAsk, busy }: Pick<NavigationProps, 'onAsk' | 'busy'>) => (
  <nav className="chat-explorer" aria-label="Explorar portfólio">
    {topics.map(topic => {
      const Icon = icons[topic.id]
      return (
        <button
          key={topic.id}
          disabled={busy}
          onClick={() => onAsk(topic.prompt)}
        >
          <Icon size={17} />
          <span>{topic.label}</span>
          <span className="nav-number">{topic.symbol}</span>
        </button>
      )
    })}
  </nav>
)

export const ChatSidebar = (props: NavigationProps) => (
  <aside className="chat-sidebar">
    <div className="sidebar-content">
      <a href="/" className="chat-brand" aria-label="Edson Alves, início">
        <span className="brand-copy">
          <span className="brand-name">
            Edson <em>Alves.</em>
          </span>
          <span className="brand-caption">DESENVOLVEDOR FULL STACK</span>
        </span>
      </a>
      <button className="new-chat" onClick={props.onReset}>
        <Plus size={17} /> Nova conversa<span>↗</span>
      </button>
      <Explorer {...props} />
    </div>
    <div className="sidebar-invitation">
      <p>
        Vamos construir
        <br />
        <em>algo juntos?</em>
      </p>
      <button
        type="button"
        disabled={props.busy}
        onClick={() => props.onAsk('Vamos trabalhar juntos?')}
      >
        Começar uma conversa <ArrowUpRight size={15} aria-hidden="true" />
      </button>
    </div>
  </aside>
)

export const ChatHeader = (props: NavigationProps) => {
  const menu = useRef<HTMLDetailsElement>(null)
  const closeAndAsk = (question: string) => {
    if (menu.current) {
      menu.current.open = false
      menu.current.querySelector('summary')?.focus({ preventScroll: true })
    }
    props.onAsk(question)
  }
  return (
    <header className="chat-header">
      <div className="header-location">
        <PixelAvatar className="header-avatar" />
        <span>
          Portfólio <span className="header-slash">/</span>{' '}
          <strong>Uma conversa comigo</strong>
        </span>
      </div>
      <div className="header-links">
        <ThemeToggle />
        <a
          href={portfolioContact.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar GitHub de Edson Alves"
        >
          <Github size={17} />
          <span>GitHub</span>
          <ArrowUpRight size={13} />
        </a>
        <a
          href={portfolioContact.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar LinkedIn de Edson Alves"
        >
          <Linkedin size={17} />
          <span>LinkedIn</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
      <details
        className="mobile-menu"
        ref={menu}
        onKeyDown={event => {
          if (event.key === 'Escape' && menu.current) {
            menu.current.open = false
            menu.current.querySelector('summary')?.focus()
          }
        }}
      >
        <summary aria-label="Abrir navegação">
          <Menu size={20} />
        </summary>
        <div className="mobile-menu-panel">
          <button
            className="new-chat"
            onClick={() => {
              props.onReset()
              if (menu.current) menu.current.open = false
            }}
          >
            <Plus size={17} /> Nova conversa
          </button>
          <Explorer onAsk={closeAndAsk} busy={props.busy} />
        </div>
      </details>
    </header>
  )
}
