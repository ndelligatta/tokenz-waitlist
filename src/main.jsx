import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Privacy from './pages/Privacy.jsx'
import Support from './pages/Support.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
