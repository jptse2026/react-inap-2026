import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NumProvider } from './context/NumContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NumProvider>
      <App />
    </NumProvider>
  </StrictMode>,
)
