import { DevTools } from 'jotai-devtools'
import 'jotai-devtools/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <App />
    <DevTools />

  </StrictMode>,
)
