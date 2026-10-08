import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './use-theme'

const initialTheme = (): Theme => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // The theme also works when browser storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Keep the selected theme for this session if storage is blocked.
    }
  }, [theme])

  useEffect(() => {
    const syncTheme = (event: StorageEvent) => {
      if (
        event.key === 'theme' &&
        (event.newValue === 'light' || event.newValue === 'dark')
      )
        setTheme(event.newValue)
    }
    window.addEventListener('storage', syncTheme)
    return () => window.removeEventListener('storage', syncTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
