import { X, Wallet, CreditCard, BadgePercent } from 'lucide-react'
import { useState } from 'react'

export default function WalletModal({ open, onClose }) {
  const [amount, setAmount] = useState(500)

  if (!open) return null

  return (
    <div role="dialog" aria-label="Wallet" className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-[#0f132f] text-white rounded-t-2xl sm:rounded-2xl border border-white/10 shadow-2xl">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-cyan-300" />
            <h3 className="font-bold">DreamCoins Wallet</h3>
          </div>
          <button aria-label="Close" onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5 space-y-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-sm text-white/70">Add Money</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 flex items-center rounded-xl bg-black/30 px-3 py-2 border border-white/10">
                <span className="text-white/60 text-sm">DC</span>
                <input aria-label="Amount" type="number" value={amount} onChange={e=>setAmount(Number(e.target.value))} className="bg-transparent w-full outline-none px-2" />
              </div>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg shadow-cyan-500/30">Add</button>
            </div>
            <div className="mt-3 flex gap-2">
              {[200,500,1000,2000].map(v=> (
                <button key={v} onClick={()=>setAmount(v)} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm">{v}</button>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <BadgePercent className="w-4 h-4" /> Apply Promo Code
            </div>
            <div className="mt-2 flex gap-2">
              <input aria-label="Promo" placeholder="Enter code" className="flex-1 px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">Apply</button>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-sm text-white/70">Recent Transactions</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex justify-between"><span>Added</span><span>+DC 500</span></li>
              <li className="flex justify-between"><span>Bid - iPhone 15</span><span>-DC 3</span></li>
              <li className="flex justify-between"><span>Bid - PS5</span><span>-DC 2</span></li>
            </ul>
          </div>
        </div>
        <div className="p-5 border-t border-white/10 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10">Close</button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 font-semibold">Proceed to Pay</button>
        </div>
      </div>
    </div>
  )
}
