import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './Components/ThemeContext/ThemeContext.tsx'
import ToggleIcon from './Components/ThemeContext/ToggleIcon.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < ThemeProvider>
    <ToggleIcon />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
