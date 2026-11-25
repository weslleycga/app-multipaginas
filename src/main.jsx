import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// PARTE 1 – O BrowserRouter envolve TODA a aplicação.
// Ele "escuta" a URL do navegador e permite que os componentes
// de rota (Routes, Route, NavLink, useParams...) funcionem.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
