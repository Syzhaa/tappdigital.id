import React, { useState, useEffect, useRef } from 'react'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
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

  // Cek sesi tersimpan di localStorage saat pertama kali load
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

  // Hubungkan WebSocket saat berada di mode chat
  useEffect(() => {
    if (step === 'chat' && ticketId) {
      connectWs()
    }
    return () => {
      if (wsRef.current) wsRef.current.close()
    }
  }, [step, ticketId])

  // Auto scroll ke bawah saat pesan bertambah
  useEffect(() => {
    if (isOpen && step === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, step])

  const connectWs = () => {
    try {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) return
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

            // Jika pesan dari CS, tandai sudah dibaca customer
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

      ws.onclose = () => {
        setTimeout(() => {
          if (step === 'chat' && ticketId) connectWs()
        }, 3000)
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
          initial_message: `Memulai obrolan mengenai: ${purpose}`
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
      alert('Gagal memulai chat, silakan coba lagi.')
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
        setRestoreError(data.detail || 'Email tidak ditemukan dalam riwayat chat.')
      }
    } catch (err) {
      setRestoreError('Gagal menyinkronkan chat, coba lagi.')
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
    if (confirm('Keluar dari sesi ini? Anda bisa melanjutkan kembali kapan saja dengan memasukkan email.')) {
      localStorage.removeItem('tapp_livechat_session')
      setTicketId(null)
      setMessages([])
      setStep('form')
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans flex flex-col items-end gap-3">
      {/* 2 FAB Lingkaran Sempurna (WhatsApp & Live Chat CS) */}
      {!isOpen && (
        <div className="flex flex-col items-center gap-3">
          {/* FAB WhatsApp Bulat */}
          <a
            href="https://wa.me/628593510424?text=Halo%20Tappdigital,%20saya%20mau%20konsultasi"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Hubungi via WhatsApp"
            title="Chat WhatsApp"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
            </svg>
          </a>

          {/* FAB Live Chat Bulat */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-[#2AABEE] hover:bg-[#229ed9] text-white rounded-full shadow-[0_8px_25px_rgba(42,171,238,0.4)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Buka Live Chat CS"
            title="Live Chat CS"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>
          </button>
        </div>
      )}

      {/* Modal Kecil Pop-up Live Chat (Gaya Intercom / Crisp Modern) */}
      {isOpen && (
        <div className="bg-[#17212b] border border-[#242f3d] w-[calc(100vw-28px)] sm:w-[380px] h-[520px] max-h-[82vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header Modal */}
          <div className="bg-[#242f3d] px-4 py-3 flex items-center justify-between border-b border-[#0e1621] shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#2AABEE] flex items-center justify-center font-bold text-white text-xs shadow-md">
                CS
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight">Customer Service</h3>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online Live Support
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {step === 'chat' && (
                <button
                  onClick={handleResetChat}
                  title="Ganti akun / Sesi baru"
                  className="text-slate-400 hover:text-amber-400 p-1.5 rounded-lg text-xs transition-colors"
                >
                  🔄
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg text-lg leading-none transition-colors"
                aria-label="Tutup"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Form Step: Input Pengunjung */}
          {step === 'form' && (
            <form onSubmit={handleStartChat} className="p-4 sm:p-5 flex-1 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="text-center mb-4">
                  <h4 className="font-bold text-base text-white mb-1">Mulai Obrolan</h4>
                  <p className="text-xs text-slate-400">
                    Koneksi langsung ke tim CS resmi Tappdigital.
                  </p>
                </div>

                <div className="space-y-3">
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

              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#2AABEE] hover:bg-[#229ed9] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors mt-3 shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {isSending ? 'Menghubungkan...' : 'Mulai Obrolan'}
                </button>

                <div className="text-center mt-3 pt-3 border-t border-[#242f3d]">
                  <p className="text-[11px] text-slate-400 mb-1">Pernah chat sebelumnya?</p>
                  <button
                    type="button"
                    onClick={() => {
                      setStep('restore')
                      setRestoreError('')
                    }}
                    className="text-xs text-[#2AABEE] hover:underline font-medium cursor-pointer"
                  >
                    👉 Lanjutkan Obrolan Sebelumnya
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Restore Step: Lanjutkan Riwayat */}
          {step === 'restore' && (
            <form onSubmit={handleRestoreChat} className="p-4 sm:p-5 flex-1 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="text-center mb-4">
                  <h4 className="font-bold text-base text-white mb-1">Lanjutkan Obrolan</h4>
                  <p className="text-xs text-slate-400">
                    Masukkan email Anda untuk menyinkronkan kembali riwayat chat sebelumnya.
                  </p>
                </div>

                {restoreError && (
                  <div className="mb-3 p-2 bg-red-900/40 border border-red-500/50 rounded-xl text-red-300 text-xs text-center">
                    {restoreError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Terdaftar</label>
                  <input
                    type="email"
                    required
                    value={restoreEmail}
                    onChange={(e) => setRestoreEmail(e.target.value)}
                    placeholder="contoh@gmail.com"
                    className="w-full bg-[#0e1621] border border-[#242f3d] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-[#2AABEE] hover:bg-[#229ed9] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors mt-3 shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  {isSending ? 'Menyinkronkan...' : 'Sinkronkan & Buka Chat'}
                </button>

                <div className="text-center mt-3 pt-3 border-t border-[#242f3d]">
                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="text-xs text-slate-400 hover:text-white cursor-pointer"
                  >
                    ← Kembali ke Mulai Obrolan
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Chat Step: Ruang Obrolan */}
          {step === 'chat' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#0e1621]">
              <div className="bg-[#17212b] px-3 py-1.5 flex items-center justify-between border-b border-[#242f3d] text-[11px]">
                <span className="text-slate-300 bg-[#242f3d] px-2 py-0.5 rounded-md truncate max-w-[180px]">
                  {purpose}
                </span>
                <span className="text-slate-400 truncate max-w-[150px]">{email}</span>
              </div>

              <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5">
                {messages.map((m, idx) => {
                  const isMe = m.sender_type === 'CUSTOMER'
                  const isRead = m.is_read === 1
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[82%] px-3 py-2 rounded-2xl text-[13px] leading-relaxed break-words shadow ${
                          isMe
                            ? 'bg-[#2b5278] text-white rounded-br-xs'
                            : 'bg-[#182533] text-slate-100 rounded-bl-xs border border-[#242f3d]'
                        }`}
                      >
                        {m.body}
                      </div>
                      <div className="flex items-center gap-1 mt-0.5 px-1 text-[10px] text-slate-400">
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

                {/* Indikator CS Mengetik */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 text-xs text-[#2AABEE] bg-[#182533] px-3 py-1.5 rounded-full w-fit border border-[#242f3d] animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2AABEE]"></span>
                    <span>CS sedang mengetik...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={handleSendMessage}
                className="p-2.5 bg-[#17212b] border-t border-[#242f3d] flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value)
                    reportCustomerTyping()
                  }}
                  placeholder="Ketik pesan..."
                  className="flex-1 bg-[#0e1621] border border-[#242f3d] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#2AABEE]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isSending}
                  className="bg-[#2AABEE] hover:bg-[#229ed9] text-white p-2 rounded-xl disabled:opacity-40 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
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
