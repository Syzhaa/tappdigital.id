import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profil from './pages/Profil.jsx'
import Toko from './pages/Toko.jsx'
import ChatPage from './pages/ChatPage.jsx'
import Navbar from './components/home/Navbar.jsx'
import Footer from './components/home/Footer.jsx'
import LiveChatFab from './components/LiveChatFab.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toko" element={<Toko />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <Footer />
      <LiveChatFab />
    </BrowserRouter>
  </StrictMode>,
)
