import { createRoot } from 'react-dom/client'
import App from '@/app.tsx'
import '@/styles/globals.css'
import '@/styles/chat-portfolio.css'

createRoot(document.getElementById('root')!).render(<App />)
