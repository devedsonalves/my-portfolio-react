import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'
import { useTheme } from '@/hooks/use-theme'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const label = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'

  const toggleTheme = (button: HTMLButtonElement) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const canAnimate = typeof document.startViewTransition === 'function'

    if (!canAnimate || reducedMotion) {
      setTheme(nextTheme)
      return
    }

    const bounds = button.getBoundingClientRect()
    const x = bounds.left + bounds.width / 2
    const y = bounds.top + bounds.height / 2
    const radius = Math.ceil(
      Math.max(
        Math.hypot(x, y),
        Math.hypot(innerWidth - x, y),
        Math.hypot(x, innerHeight - y),
        Math.hypot(innerWidth - x, innerHeight - y)
      )
    )

    document.documentElement.style.setProperty('--theme-origin-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-origin-y', `${y}px`)
    document.documentElement.style.setProperty(
      '--theme-reveal-radius',
      `${radius}px`
    )
    try {
      document.startViewTransition(() => flushSync(() => setTheme(nextTheme)))
    } catch {
      setTheme(nextTheme)
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={event => toggleTheme(event.currentTarget)}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
export default ThemeToggle
