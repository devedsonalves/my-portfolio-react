import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import { ChatHeader, ChatSidebar } from '@/components/chat/chat-navigation'
import { PixelAvatar } from '@/components/chat/pixel-avatar'

const NotFound = () => {
  const navigate = useNavigate()
  const navigation = {
    onAsk: (question: string) =>
      navigate(`/chat?${new URLSearchParams({ query: question })}`),
    onReset: () => navigate('/'),
    busy: false
  }
  return (
    <div className="portfolio-chat">
      <a className="chat-skip-link" href="#not-found-main">
        Pular para o conteúdo
      </a>
      <ChatSidebar {...navigation} />
      <div className="chat-workspace">
        <ChatHeader {...navigation} />
        <main id="not-found-main" className="not-found-main">
          <span className="not-found-code">ERRO 404 · FORA DA CONVERSA</span>
          <PixelAvatar className="not-found-avatar" />
          <h1>
            Parece que perdemos
            <br />
            <em>o fio da conversa.</em>
          </h1>
          <div className="not-found-message">
            <MessageCircle size={21} aria-hidden="true" />
            <p>
              Não encontrei essa página. Mas posso te ajudar a conhecer meus
              projetos, minha trajetória ou começar uma nova conversa.
            </p>
          </div>
          <Link to="/" className="not-found-return">
            Voltar para o chat <ArrowUpRight size={17} />
          </Link>
          <p className="not-found-hint">
            Uma boa conversa sempre tem um recomeço.
          </p>
        </main>
      </div>
    </div>
  )
}
export default NotFound
