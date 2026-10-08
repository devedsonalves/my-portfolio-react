import { useEffect, useRef, useState } from 'react'
import { ArrowUp, CornerDownLeft, Sparkles } from 'lucide-react'

export const ChatComposer = ({
  onSend,
  busy,
  focusOnMount = false
}: {
  onSend: (text: string) => boolean
  busy: boolean
  focusOnMount?: boolean
}) => {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (focusOnMount) inputRef.current?.focus({ preventScroll: true })
  }, [focusOnMount])
  const submit = () => {
    if (onSend(input)) setInput('')
  }
  return (
    <form
      className="chat-composer"
      onSubmit={event => {
        event.preventDefault()
        submit()
        inputRef.current?.focus()
      }}
    >
      <label className="sr-only" htmlFor="portfolio-question">
        Pergunte algo sobre Edson
      </label>
      <textarea
        id="portfolio-question"
        ref={inputRef}
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder="O que você quer descobrir sobre mim?"
        maxLength={500}
        rows={2}
        onKeyDown={event => {
          if (
            event.key === 'Enter' &&
            !event.shiftKey &&
            !event.nativeEvent.isComposing
          ) {
            event.preventDefault()
            submit()
          }
        }}
      />
      <div className="composer-bottom">
        <span className="composer-label">
          <Sparkles size={14} /> Um novo jeito de me conhecer
        </span>
        <div>
          <span className="enter-hint">
            <CornerDownLeft size={12} /> Enter para enviar
          </span>
          <button
            type="submit"
            aria-label="Enviar pergunta"
            disabled={!input.trim() || busy}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </form>
  )
}
