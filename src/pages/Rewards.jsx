import Navbar from '../components/Navbar'
import { Trophy, Award, Gift, Users } from 'lucide-react'

export default function Rewards(){
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <section className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white/10 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sm text-white/70"><Trophy className="w-4 h-4" /> Levels & Badges</div>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {[{t:'Bronze',c:'from-amber-500 to-orange-600'},{t:'Silver',c:'from-slate-300 to-slate-500'},{t:'Gold',c:'from-yellow-400 to-amber-500'}].map((b,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${b.c} shadow-lg`} />
                  <div className="mt-2 font-bold">{b.t}</div>
                  <div className="text-xs text-white/70">Win auctions to level up</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sm text-white/70"><Gift className="w-4 h-4" /> Daily Bonus</div>
            <button className="mt-3 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">Claim +DC 10</button>
            <div className="text-xs text-white/60 mt-2">Come back daily to keep your streak.</div>
          </div>
        </section>

        <section className="bg-white/10 border border-white/10 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-white/70"><Users className="w-4 h-4" /> Leaderboard</div>
            <div className="text-xs text-white/60">Top winners this week</div>
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {['NovaX','PixelPro','Zenith','Volt','You'].map((n,i)=> (
              <li key={n} className="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-6 text-center text-white/70">{i+1}</span>
                  <span className={n==='You' ? 'text-emerald-300 font-semibold' : ''}>{n}</span>
                </div>
                <span>Wins: {8-i}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
