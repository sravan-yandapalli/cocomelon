import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './screens/Navbar.jsx'
import './index.css'
import CoverPage from './screens/CoverPage.jsx'
import Curriculam from './screens/Curriculam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <CoverPage />
    <Curriculam />
  </StrictMode>,
)
