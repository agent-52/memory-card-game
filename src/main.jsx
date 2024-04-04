import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Main} from "./components/main.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
