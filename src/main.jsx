import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import './index.css'
import CoverPage from './CoverPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <CoverPage />
  </StrictMode>,
)
