import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Game from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Tricky Traka</h1>
    <Game />
  </StrictMode>,
)
