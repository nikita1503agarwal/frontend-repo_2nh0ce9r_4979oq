import { useState } from 'react'
import { Timer, LightningBoltIcon as Lightning, ShieldCheck, Gift, Star, Trophy, Users, Volume2, VolumeX } from 'lucide-react'

export function LiveAuctionsGrid({ onOpenAuction }) {
  const items = [
    { id:1, title:'iPhone 15 Pro Max', price: '3.42', time:'00:25', image:'https://images.unsplash.com/photo-1720357632099-6d84cd7ee044?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heHxlbnwwfDB8fHwxNzYzMzIwMDM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id:2, title:'PlayStation 5', price: '2.11', time:'00:12', image:'https://images.unsplash.com/photo-1720357632099-6d84cd7ee044?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heHxlbnwwfDB8fHwxNzYzMzIwMDM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id:3, title:'Apple Watch Ultra', price: '1.87', time:'00:31', image:'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop' },
    { id:4, title:'iPad Pro', price: '4.22', time:'00:44', image:'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1200&auto=format&fit=crop' }
  ]
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-white text-2xl font-extrabold">Live Auctions</h2>
          <div className="text-sm text-white/70">Every bid adds seconds. Last bid wins.</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(item => (
            <button key={item.id} onClick={() => onOpenAuction(item)} className="group text-left relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <div className="aspect-video">
                <img src={item.image} alt="Auction item" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs text-white bg-black/40 px-2 py-1 rounded-full">
                  <Timer className="w-3.5 h-3.5 text-emerald-300" /> {item.time}
                </span>
              </div>
              <div className="p-4 text-white">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold line-clamp-1">{item.title}</h3>
                    <div className="mt-1 text-xs text-white/70">128 bids • 62 participants</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/70">Current</div>
                    <div className="text-lg font-extrabold tracking-tight">DC {item.price}</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const steps = [
    { t:'Sign up & verify', d:'Create your account, verify with OTP or social login, and complete quick KYC for higher limits.' },
    { t:'Load DreamCoins', d:'Add money securely, apply promos, and watch your balance animate smoothly.' },
    { t:'Join a live room', d:'Pick any auction, watch the timer, and place bids. Each bid adds a few seconds to the clock.' },
    { t:'Last bid wins', d:'Be the final bidder when the timer reaches zero, pay the final amount, and track your delivery.' },
  ]
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-2xl font-extrabold mb-6">How Dream60 Works</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="p-5 rounded-2xl border border-white/10 bg-white/5 text-white">
              <div className="text-emerald-300 text-sm mb-2">Step {i+1}</div>
              <div className="font-bold">{s.t}</div>
              <p className="text-white/80 text-sm mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
