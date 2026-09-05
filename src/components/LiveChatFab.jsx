import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LiveChatFab() {
  const location = useLocation()

  // Sembunyikan FAB jika user sedang berada di halaman /chat itu sendiri
  if (location.pathname === '/chat') {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <Link
        to="/chat"
        className="bg-[#2AABEE] hover:bg-[#229ed9] text-white px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105"
        aria-label="Tanya CS Live"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
        <span className="font-bold text-sm tracking-wide">Tanya CS</span>
      </Link>
    </div>
  )
}
