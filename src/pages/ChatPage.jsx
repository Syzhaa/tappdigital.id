import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChatPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState('form') // 'form' | 'restore' | 'chat'
  const [email, setEmail] = useState('')
  const [restoreEmail, setRestoreEmail] = useState('')
  const [name, setName] = useState('')
  const [purpose, setPurpose] = useState('Pertanyaan Produk')
  const [ticketId, setTicketId] = useState(null)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [restoreError, setRestoreError] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)
  const wsRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('tapp_livechat_session')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (data.ticketId && data.email) {
          setTicketId(data.ticketId)
          setEmail(data.email)
          setName(data.name || 'Pengunjung')
          setPurpose(data.purpose || 'Pertanyaan Produk')
          setStep('chat')
          loadHistory(data.ticketId)
        }
      } catch (e) {}
    }
  }, [])

  useEffect(() => {
    if (step === 'chat' && ticketId) {
      connectWs()
    }
    return () => {
      if (wsRef.current) wsRef.current.close()
    }
  }, [step, ticketId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const connectWs = () => {
    try {
      const ws = new WebSocket('wss://cs.tappdigital.id/ws')
      wsRef.current = ws
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          if (data.event === 'new_message' && data.ticket_id === ticketId) {
            setIsTyping(false)
            setMessages((prev) => {
              const exists = prev.some(
                (m) =>
                  (data.message.id && m.id === data.message.id) ||
                  (m.sender_type === data.message.sender_type &&
                    m.body === data.message.body &&
                    Math.abs(new Date(m.created_at || Date.now()) - new Date(data.message.created_at || Date.now())) < 5000)
              )
              if (exists) {
                return prev.map((m) =>
                  m.body === data.message.body && m.sender_type === data.message.sender_type
                    ? { ...m, id: data.message.id, is_read: data.message.is_read || 0 }
                    : m
                )
              }
              return [...prev, data.message]
            })

            if (data.message.sender_type === 'AGENT') {
              fetch(`https://cs.tappdigital.id/api/public/ticket/${ticketId}/read`, { method: 'POST' }).catch(() => {})
            }
          } else if (data.event === 'messages_read' && data.ticket_id === ticketId) {
            setMessages((prev) => prev.map((m) => ({ ...m, is_read: 1 })))
          } else if (data.event === 'user_typing' && data.ticket_id === ticketId && data.sender_type === 'AGENT') {
            setIsTyping(true)
            clearTimeout(typingTimeoutRef.current)
            typingTimeoutRef.current = setTimeout(() => setIsTyping(false), 3000)
          }
        } catch (e) {}
      }
    } catch (e) {}
  }

  const reportCustomerTyping = () => {
    if (!ticketId) return
    fetch(`https://cs.tappdigital.id/api/chat/${ticketId}/typing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender_type: 'CUSTOMER', sender_name: name || 'Pengunjung' })
    }).catch(() => {})
  }

  const formatClientTime = (isoStr) => {
    if (!isoStr) return ''
    try {
      let d
      if (typeof isoStr === 'string') {
        if (/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(isoStr)) {
          d = new Date(isoStr.replace(' ', 'T') + 'Z')
        } else if (!isoStr.endsWith('Z') && !isoStr.includes('+')) {
          d = new Date(isoStr + 'Z')
        } else {
          d = new Date(isoStr)
        }
      } else {
        d = new Date(isoStr)
      }
      if (isNaN(d.getTime())) return ''
      return d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    } catch (e) {
      return ''
    }
  }

  const loadHistory = async (tid) => {
    try {
      const res = await fetch(`https://cs.tappdigital.id/api/public/ticket/${tid}`)
      if (res.ok) {
        const data = await res.json()
        setMessages(data.messages || [])
        fetch(`https://cs.tappdigital.id/api/public/ticket/${tid}/read`, { method: 'POST' }).catch(() => {})
      }
    } catch (e) {}
  }

  const handleStartChat = async (e) => {
    e.preventDefault()
    if (!email || !name) return
    setIsSending(true)
    try {
      const res = await fetch('https://cs.tappdigital.id/api/livechat/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          purpose,
          initial_message: `Memulai percakapan Live Chat mengenai: ${purpose}`
        })
      })
      const data = await res.json()
      if (data.ticket_id) {
        setTicketId(data.ticket_id)
        localStorage.setItem(
          'tapp_livechat_session',
          JSON.stringify({ ticketId: data.ticket_id, email, name, purpose })
        )
        setStep('chat')
        loadHistory(data.ticket_id)
      }
    } catch (err) {
      alert('Gagal memulai chat, coba beberapa saat lagi.')
    } finally {
      setIsSending(false)
    }
  }

  const handleRestoreChat = async (e) => {
    e.preventDefault()
    if (!restoreEmail.trim()) return
    setIsSending(true)
    setRestoreError('')

    try {
      const res = await fetch('https://cs.tappdigital.id/api/livechat/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: restoreEmail.trim() })
      })
      const data = await res.json()
      if (res.ok && data.ticket_id) {
        setTicketId(data.ticket_id)
        setEmail(data.email)
        setName(data.name || 'Pengunjung')
        setPurpose(data.purpose || 'Pertanyaan Produk')
        setMessages(data.messages || [])
        localStorage.setItem(
          'tapp_livechat_session',
          JSON.stringify({ ticketId: data.ticket_id, email: data.email, name: data.name, purpose: data.purpose })
        )
        setStep('chat')
      } else {
        setRestoreError(data.detail || 'Email tidak ditemukan dalam riwayat obrolan.')
      }
    } catch (err) {
      setRestoreError('Gagal menghubungkan ke server, coba lagi.')
    } finally {
      setIsSending(false)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputText.trim() || !ticketId || isSending) return
    const textToSend = inputText.trim()
    setInputText('')
    setIsSending(true)

    const tempMsg = {
      id: Date.now(),
      sender_type: 'CUSTOMER',
      body: textToSend,
      is_read: 0,
      created_at: new Date().toISOString()
    }
    setMessages((prev) => [...prev, tempMsg])

    try {
      await fetch(`https://cs.tappdigital.id/api/livechat/${ticketId}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          body: textToSend
        })
      })
    } catch (err) {
      console.error(err)
    } finally {
      setIsSending(false)
    }
  }

  const handleResetChat = () => {
    if (confirm('Keluar dari obrolan ini? Anda bisa melanjutkan kembali kapan saja dengan memasukkan email.')) {
      localStorage.removeItem('tapp_livechat_session')
      setTicketId(null)
      setMessages([])
      setStep('form')
    }
  }

  return (
    <div className="min-h-screen bg-[#0e1621] text-white flex flex-col font-sans">
      {/* Header Halaman Penuh */}
      <header className="bg-[#17212b] border-b border-[#242f3d] px-4 py-3.5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            title="Kembali"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center font-bold text-white shadow-md">
            CS
          </div>
          <div>
            <h1 className="font-semibold text-base leading-tight">Customer Service Tappdigital</h1>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Online • Live Support
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {step === 'chat' && (
            <button
              onClick={handleResetChat}
              className="text-xs bg-[#242f3d] hover:bg-[#2b5278] text-slate-300 px-3 py-1.5 rounded-lg border border-[#242f3d] transition-colors"
            >
              🔄 Ganti Sesi
            </button>
          )}
        </div>
      </header>

      {/* Konten Halaman Penuh */}
      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto p-4 sm:p-6 justify-center">
        {step === 'form' && (
          <div className="bg-[#17212b] border border-[#242f3d] rounded-2xl p-6 sm:p-8 max-w-lg w-full mx-auto shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Mulai Obrolan CS</h2>
              <p className="text-sm text-slate-400">
                Layanan bantuan resmi Tappdigital. Konsultasikan kebutuhan website, undangan digital, atau kendala layanan Anda.
              </p>
            </div>

            <form onSubmit={handleStartChat} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Aktif</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contoh@gmail.com"
                  className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Keperluan / Kategori Layanan</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                >
                  <option value="Pertanyaan Produk">Pertanyaan Produk & Jasa</option>
                  <option value="Order Website / Undangan">Pemesanan Website UMKM / Undangan</option>
                  <option value="Bantuan Teknis / Support">Bantuan Teknis & Kendala</option>
                  <option value="Pembayaran & Billing">Pembayaran & Konfirmasi Transfer</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#2AABEE] hover:bg-[#229ed9] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-lg disabled:opacity-50 mt-2"
              >
                {isSending ? 'Menghubungkan...' : 'Mulai Obrolan Sekarang'}
              </button>

              <div className="text-center pt-4 border-t border-[#242f3d] mt-4">
                <p className="text-xs text-slate-400 mb-2">Pernah chat sebelumnya di perangkat atau browser lain?</p>
                <button
                  type="button"
                  onClick={() => {
                    setStep('restore')
                    setRestoreError('')
                  }}
                  className="text-sm text-[#2AABEE] hover:underline font-semibold"
                >
                  👉 Lanjutkan Obrolan Sebelumnya
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'restore' && (
          <div className="bg-[#17212b] border border-[#242f3d] rounded-2xl p-6 sm:p-8 max-w-lg w-full mx-auto shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Lanjutkan Obrolan</h2>
              <p className="text-sm text-slate-400">
                Masukkan email yang pernah Anda gunakan sebelumnya untuk menyinkronkan seluruh riwayat obrolan Anda.
              </p>
            </div>

            {restoreError && (
              <div className="mb-4 p-3 bg-red-900/40 border border-red-500/50 rounded-xl text-red-300 text-xs text-center">
                {restoreError}
              </div>
            )}

            <form onSubmit={handleRestoreChat} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Email Terdaftar</label>
                <input
                  type="email"
                  required
                  value={restoreEmail}
                  onChange={(e) => setRestoreEmail(e.target.value)}
                  placeholder="contoh@gmail.com"
                  className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#2AABEE] hover:bg-[#229ed9] text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-lg disabled:opacity-50"
              >
                {isSending ? 'Menyinkronkan...' : 'Sinkronkan & Buka Obrolan'}
              </button>

              <div className="text-center pt-3 border-t border-[#242f3d]">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  ← Kembali ke Mulai Obrolan Baru
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'chat' && (
          <div className="flex-1 flex flex-col bg-[#17212b] border border-[#242f3d] rounded-2xl overflow-hidden shadow-2xl h-[calc(100dvh-130px)] max-h-[780px]">
            {/* Top Bar inside Chat */}
            <div className="bg-[#242f3d] px-4 py-2.5 flex items-center justify-between border-b border-[#0e1621]">
              <span className="text-xs bg-[#17212b] text-slate-300 px-3 py-1 rounded-full border border-[#242f3d]">
                Topik: {purpose}
              </span>
              <span className="text-xs text-slate-400">{email}</span>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 bg-[#0e1621]">
              {messages.map((m, idx) => {
                const isMe = m.sender_type === 'CUSTOMER'
                const isRead = m.is_read === 1
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[80%] sm:max-w-[68%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed break-words shadow ${
                        isMe
                          ? 'bg-[#2b5278] text-white rounded-br-xs'
                          : 'bg-[#182533] text-slate-100 rounded-bl-xs border border-[#242f3d]'
                      }`}
                    >
                      {m.body}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 px-1.5 text-[11px] text-slate-400">
                      <span>{formatClientTime(m.created_at)}</span>
                      {isMe &&
                        (isRead ? (
                          <span className="text-[#2AABEE] font-bold text-xs" title="Dibaca">
                            ✓✓
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs" title="Terkirim">
                            ✓
                          </span>
                        ))}
                    </div>
                  </div>
                )
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#2AABEE] bg-[#182533] px-3.5 py-2 rounded-full w-fit border border-[#242f3d] animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-[#2AABEE]"></span>
                  <span>CS sedang mengetik...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 sm:p-4 bg-[#17212b] border-t border-[#242f3d] flex items-center gap-3"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value)
                  reportCustomerTyping()
                }}
                placeholder="Ketik pesan Anda..."
                className="flex-1 bg-[#0e1621] border border-[#242f3d] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isSending}
                className="bg-[#2AABEE] hover:bg-[#229ed9] text-white p-3 rounded-xl disabled:opacity-40 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
