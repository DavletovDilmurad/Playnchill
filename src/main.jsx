import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './style/main.css'

ReactDOM.createRoot(document.querySelector('.wrapper')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
