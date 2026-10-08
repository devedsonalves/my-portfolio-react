import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, RotateCcw } from 'lucide-react'
import { usePortfolioChat } from '@/hooks/use-portfolio-chat'
import { portfolioContact } from '@/data/portfolio-chat'
import { ChatHeader, ChatSidebar } from './chat-navigation'
import { ChatWelcome, ChatSuggestions, FeaturedProject } from './chat-welcome'
import { ChatComposer } from './chat-composer'
import { ChatAnswer } from './chat-answer'
import { PixelAvatar } from './pixel-avatar'

export const ChatPortfolio = () => {
  const { messages, isTyping, send, reset } = usePortfolioChat()
  const latestMessage = useRef<HTMLDivElement>(null)
  const [conversationId, setConversationId] = useState(0)
  const hasMessages = messages.length > 0

  useEffect(() => {
    if (hasMessages)
      latestMessage.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
        block: 'start'
      })
  }, [messages, isTyping, hasMessages])

  const newConversation = () => {
    reset()
    setConversationId(previous => previous + 1)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="portfolio-chat">
      <a className="chat-skip-link" href="#chat-main">
        Pular para a conversa
      </a>
      <ChatSidebar onAsk={send} onReset={newConversation} busy={isTyping} />
      <div className="chat-workspace">
        <ChatHeader onAsk={send} onReset={newConversation} busy={isTyping} />
        <main
          id="chat-main"
          className={`chat-main ${hasMessages ? 'has-conversation' : ''}`}
        >
          {hasMessages ? (
            <>
              <div className="conversation-heading">
                <span>
                  <span className="small-asterisk" aria-hidden="true">
                    ✳
                  </span>{' '}
                  Conheça o Edson
                </span>
                <button onClick={newConversation}>
                  <RotateCcw size={14} /> Recomeçar
                </button>
              </div>
              <div
                className="conversation-messages"
                role="log"
                aria-label="Conversa sobre o portfólio"
                aria-live="polite"
                aria-relevant="additions"
              >
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`chat-message message-${message.role}`}
                    ref={
                      index === messages.length - 1 ? latestMessage : undefined
                    }
                  >
                    {message.role === 'user' ? (
                      <div className="user-bubble">
                        <span className="sr-only">Você: </span>
                        {message.text}
                      </div>
                    ) : (
                      <>
                        <div className="assistant-label">
                          <PixelAvatar className="assistant-avatar" /> Edson{' '}
                        </div>
                        <ChatAnswer
                          topic={message.topic}
                          onAsk={send}
                          busy={isTyping}
                        />
                      </>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="typing-indicator" role="status">
                    <PixelAvatar className="assistant-avatar" />
                    <span className="typing-dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className="sr-only">Preparando resposta…</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <ChatWelcome />
          )}
          <div
            className={
              hasMessages ? 'conversation-composer' : 'welcome-composer'
            }
          >
            <ChatComposer
              key={conversationId}
              onSend={send}
              busy={isTyping}
              focusOnMount={conversationId > 0}
            />
            {!hasMessages && (
              <>
                <div className="suggestions-caption">
                  <span>SEM IDEIA POR ONDE COMEÇAR?</span>
                  <span>vai por aqui ↴</span>
                </div>
                <ChatSuggestions onAsk={send} />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
