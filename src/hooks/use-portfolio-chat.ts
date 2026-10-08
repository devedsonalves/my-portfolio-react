import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { identifyTopic, type Topic } from '@/data/portfolio-chat'

export type ChatMessage =
  | { id: number; role: 'user'; text: string }
  | { id: number; role: 'assistant'; topic: Topic }

export const usePortfolioChat = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')?.trim().slice(0, 500) ?? ''
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const pending = useRef(false)
  const nextId = useRef(0)

  useEffect(() => {
    clearTimeout(timer.current)
    pending.current = false
    setIsTyping(false)
    setMessages(
      query
        ? [
            { id: nextId.current++, role: 'user', text: query },
            {
              id: nextId.current++,
              role: 'assistant',
              topic: identifyTopic(query)
            }
          ]
        : []
    )
    return () => clearTimeout(timer.current)
  }, [query])

  const send = (value: string) => {
    const text = value.trim().slice(0, 500)
    if (!text || pending.current) return false
    pending.current = true
    setMessages(previous => [
      ...previous,
      { id: nextId.current++, role: 'user', text }
    ])
    setIsTyping(true)
    timer.current = setTimeout(() => {
      setMessages(previous => [
        ...previous,
        { id: nextId.current++, role: 'assistant', topic: identifyTopic(text) }
      ])
      pending.current = false
      setIsTyping(false)
    }, 650)
    return true
  }

  const reset = () => {
    clearTimeout(timer.current)
    pending.current = false
    setIsTyping(false)
    setMessages([])
    if (query) setSearchParams({}, { replace: true })
  }

  return { messages, isTyping, send, reset }
}
