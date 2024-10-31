import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifEXpertApp } from './GifEXpertApp'
import './styles.css'; // Tell webpack that Button.js uses these styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifEXpertApp />
  </React.StrictMode>,
)
