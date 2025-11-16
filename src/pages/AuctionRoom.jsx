import { useEffect, useRef, useState } from 'react'
import { Timer, Users, Activity, Rocket, Volume2, VolumeX, Zap, Trophy } from 'lucide-react'
import Navbar from '../components/Navbar'

function FlipDigit({ value }) {
  return (
    <div className="relative w-10 h-14 sm:w-12 sm:h-16 bg-black/40 border border-white/10 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-extrabold text-emerald-300">
        {value}
      </div>
    </div>
  )
}

export default function AuctionRoom() {
  const [seconds, setSeconds] = useState(25)
  const [price, setPrice] = useState(3.42)
  const [sound, setSound] = useState(true)
  const [participants] = useState(62)
  const [lastBidders, setLastBidders] = useState([
    {name:'NovaX', amount:3.41}, {name:'PixelPro', amount:3.42}
  ])
  const [lowBalance, setLowBalance] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(()=>{
    if (seconds<=0) {
      setWon(true)
      return
    }
    const t = setTimeout(()=> setSeconds(s=>s-1), 1000)
    return ()=> clearTimeout(t)
  }, [seconds])

  const bid = () => {
    if (lowBalance) return
    setPrice(p=> Number((p+0.01).toFixed(2)))
    setSeconds(s=> s+3)
    setLastBidders(b=> [{name:'You', amount: price+0.01}, ...b].slice(0,5))
  }

  const s = String(seconds).padStart(2,'0')

  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-4">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-white/70">Auction: iPhone 15 Pro Max (256GB)</div>
              <div className="inline-flex items-center gap-2 text-xs bg-emerald-400/10 text-emerald-300 px-2 py-1 rounded-full">
                <Users className="w-3.5 h-3.5" /> {participants} in room
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-black/30 border border-white/10">
                <img alt="Product" src="https://images.unsplash.com/photo-1720357632099-6d84cd7ee044?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heHxlbnwwfDB8fHwxNzYzMzIwMDM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="text-white/70 text-sm">Time Remaining</div>
                <div className="flex gap-2">
                  <FlipDigit value={s[0]} />
                  <FlipDigit value={s[1]} />
                </div>
                <div className={`text-4xl font-extrabold ${seconds<=5 ? 'animate-pulse text-rose-300' : 'text-emerald-300'}`}>DC {price.toFixed(2)}</div>
                <button onClick={bid} className={`relative px-8 py-4 rounded-2xl text-lg font-extrabold tracking-wider ${lowBalance?'bg-white/10 cursor-not-allowed':'bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:brightness-110'} shadow-[0_0_30px_rgba(34,197,94,0.35)] focus:outline-none focus:ring-2 focus:ring-emerald-300`}>Bid Now</button>
                {lowBalance && <div className="text-sm text-rose-300">Low balance. Add DreamCoins to continue.</div>}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="text-sm text-white/70 mb-2">Last bidders</div>
              <ul className="space-y-2 text-sm">
                {lastBidders.map((b,i)=> (
                  <li key={i} className="flex justify-between"><span className={i===0?'text-emerald-300 font-semibold':''}>{b.name}</span><span>DC {b.amount.toFixed(2)}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="text-sm text-white/70 mb-2">Activity</div>
              <ul className="space-y-2 text-sm">
                <li>NovaX placed a bid</li>
                <li>PixelPro placed a bid</li>
                <li>You joined the room</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="text-sm text-white/70 mb-2">Rules</div>
              <ul className="text-sm text-white/80 list-disc ml-4 space-y-1">
                <li>Each bid adds +DC 0.01</li>
                <li>Each bid extends timer +3s</li>
                <li>Last valid bid at 0s wins</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/70">Sound</div>
              <button aria-label="Toggle sound" onClick={()=>setSound(s=>!s)} className="p-2 rounded-lg bg-white/10">
                {sound ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
            <div className="text-sm text-white/70 mb-2">Auto-bid</div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20">Min +0.01</button>
              <button className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20">Smart +0.02</button>
            </div>
          </div>
          {won && (
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-300/30 rounded-2xl p-4 text-emerald-200">
              <div className="flex items-center gap-2 font-bold"><Trophy className="w-5 h-5" /> You won!</div>
              <p className="text-sm mt-1">Complete payment and add delivery details to place your order.</p>
              <button className="mt-3 w-full py-2 rounded-xl bg-white/10 hover:bg-white/20">Proceed</button>
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}
