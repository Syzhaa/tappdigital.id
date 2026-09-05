import React, { useState, useEffect, useRef } from 'react'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState('form') // 'form' | 'chat'
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [purpose, setPurpose] = useState('Pertanyaan Produk')
  const [ticketId, setTicketId] = useState(null)
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef(null)
  const wsRef = useRef(null)

  useEffect(() => {
    const saved = localStorage.getItem('tapp_livechat_session')
    if (saved) {
      try {
        const data = JSON.parse(saved)
        if (data.ticketId && data.email) {
          setTicketId(data.ticketId)
          setEmail(data.email)
          setName(data.name || 'Pengunjung')
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

  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef(null)

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
              if (prev.some((m) => m.id === data.message.id)) return prev
              return [...prev, data.message]
            })
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

  const loadHistory = async (tid) => {
    try {
      const res = await fetch(`https://cs.tappdigital.id/api/public/ticket/${tid}`)
      if (res.ok) {
        const data = await res.json()
        setMessages(data.messages || [])
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

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputText.trim() || !ticketId || isSending) return
    const textToSend = inputText.trim()
    setInputText('')
    setIsSending(true)

    // Optimistic UI
    const tempMsg = {
      id: Date.now(),
      sender_type: 'CUSTOMER',
      body: textToSend,
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

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Tombol FAB Melayang */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#2AABEE] hover:bg-[#229ed9] text-white p-4 rounded-full shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105"
          aria-label="Live Chat CS"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
          </svg>
          <span className="font-semibold text-sm hidden sm:inline">Tanya CS</span>
        </button>
      )}

      {/* Box Chat Interaktif */}
      {isOpen && (
        <div className="bg-[#17212b] border border-[#242f3d] w-[90vw] sm:w-[380px] h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white animate-fade-in">
          {/* Header */}
          <div className="bg-[#242f3d] p-4 flex items-center justify-between border-b border-[#0e1621]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2AABEE] flex items-center justify-center font-bold text-white text-sm">
                CS
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-none">Customer Service</h3>
                <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online Real-time
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white text-xl leading-none p-1"
            >
              ✕
            </button>
          </div>

          {/* Form Step */}
          {step === 'form' ? (
            <form onSubmit={handleStartChat} className="p-5 flex-1 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="text-center mb-5">
                  <h4 className="font-bold text-base mb-1">Mulai Obrolan</h4>
                  <p className="text-xs text-slate-400">
                    Masukkan email Anda untuk menghubungkan obrolan langsung ke tim CS kami.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda"
                      className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Aktif</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contoh@gmail.com"
                      className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Keperluan / Kategori</label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                    >
                      <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                      <option value="Order Website / Undangan">Order Website / Undangan</option>
                      <option value="Bantuan Teknis / Support">Bantuan Teknis / Support</option>
                      <option value="Pembayaran & Billing">Pembayaran & Billing</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#2AABEE] hover:bg-[#229ed9] text-white font-semibold py-3 rounded-xl text-sm transition-colors mt-4 shadow-lg disabled:opacity-50"
              >
                {isSending ? 'Menghubungkan...' : 'Mulai Obrolan Sekarang'}
              </button>
            </form>
          ) : (
            /* Chat Step */
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0e1621]">
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <div className="text-center my-2">
                  <span className="text-[11px] bg-[#17212b] text-slate-400 px-3 py-1 rounded-full border border-[#242f3d]">
                    Kategori: {purpose}
                  </span>
                </div>

                {messages.map((m, idx) => {
                  const isMe = m.sender_type === 'CUSTOMER'
                  const isRead = m.is_read === 1
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[13.5px] leading-relaxed break-words shadow ${
                          isMe
                            ? 'bg-[#2b5278] text-white rounded-br-xs'
                            : 'bg-[#182533] text-slate-100 rounded-bl-xs border border-[#242f3d]'
                        }`}
                      >
                        {m.body}
                      </div>
                      <div className="flex items-center gap-1 mt-1 px-1 text-[10px] text-slate-400">
                        <span>{m.created_at ? new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
                        {isMe && (
                          isRead ? (
                            <span className="text-[#2AABEE] font-bold text-xs" title="Dibaca">✓✓</span>
                          ) : (
                            <span className="text-slate-400 text-xs" title="Terkirim">✓</span>
                          )
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Indikator CS Mengetik */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-[#2AABEE] bg-[#182533] px-3 py-1.5 rounded-full w-fit border border-[#242f3d] animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2AABEE]"></span>
                    <span>CS sedang mengetik...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-3 bg-[#17212b] border-t border-[#242f3d] flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value)
                    reportCustomerTyping()
                  }}
                  placeholder="Ketik pesan balasan..."
                  className="flex-1 bg-[#0e1621] border border-[#242f3d] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isSending}
                  className="bg-[#2AABEE] hover:bg-[#229ed9] text-white p-2.5 rounded-xl disabled:opacity-40 transition-colors"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
