import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/template/App/App.tsx'
import './index.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)