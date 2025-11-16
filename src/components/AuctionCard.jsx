import { Timer, Users, Crown } from 'lucide-react'

export default function AuctionCard({ title, price, time, image, bids = 128, onClick }) {
  return (
    <button onClick={onClick} className="group text-left relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400">
      <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
        {image ? (
          <img src={image} alt="Auction item" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/40">Gadget</div>
        )}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs text-white bg-black/40 px-2 py-1 rounded-full">
          <Timer className="w-3.5 h-3.5 text-emerald-300" /> {time}
        </span>
      </div>
      <div className="p-4 text-white">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold line-clamp-1">{title}</h3>
            <div className="mt-1 text-xs text-white/70 inline-flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> {bids} bids
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/70">Current</div>
            <div className="text-lg font-extrabold tracking-tight">DC {price}</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-blue-600/20 via-transparent to-transparent" />
    </button>
  )
}
