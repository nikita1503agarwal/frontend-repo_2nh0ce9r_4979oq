import Navbar from '../components/Navbar'
import { Timer, Users, Info, History, Sparkles } from 'lucide-react'

export default function AuctionDetail(){
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="aspect-video rounded-2xl overflow-hidden bg-black/30 border border-white/10">
            <img alt="Product" src="https://images.unsplash.com/photo-1720357632099-6d84cd7ee044?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxpUGhvbmUlMjAxNSUyMFBybyUyME1heHxlbnwwfDB8fHwxNzYzMzIwMDM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-extrabold">PlayStation 5</div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Timer className="w-4 h-4 text-emerald-300" /> Ends in 00:12
              <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300">Live</span>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="text-sm text-white/70">Current Price</div>
              <div className="text-3xl font-extrabold text-emerald-300">DC 2.11</div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-center">
                <div className="text-xs text-white/60">Bids</div>
                <div className="font-bold">128</div>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-center">
                <div className="text-xs text-white/60">Participants</div>
                <div className="font-bold">62</div>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-center">
                <div className="text-xs text-white/60">Auto-bidders</div>
                <div className="font-bold">7</div>
              </div>
            </div>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">Join Auction Room</button>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm text-white/70"><Info className="w-4 h-4" /> Rules</div>
              <ul className="list-disc ml-4 text-sm text-white/80 mt-2 space-y-1">
                <li>Each bid adds +DC 0.01 and +3 seconds</li>
                <li>Last valid bid wins when timer reaches 0</li>
                <li>Final payment due within 24 hours</li>
              </ul>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm text-white/70"><History className="w-4 h-4" /> Recent History</div>
              <ul className="mt-2 text-sm space-y-1">
                <li>NovaX bid DC 2.10</li>
                <li>PixelPro bid DC 2.11</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
