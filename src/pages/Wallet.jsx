import Navbar from '../components/Navbar'

export default function WalletPage(){
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white/10 border border-white/10 rounded-2xl p-5">
            <div className="text-sm text-white/70">Add Money</div>
            <div className="mt-3 flex gap-2">
              <input placeholder="Amount (DC)" className="flex-1 px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">Add</button>
            </div>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
            <div className="text-sm text-white/70">Promo Code</div>
            <div className="mt-3 flex gap-2">
              <input placeholder="Enter code" className="flex-1 px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">Apply</button>
            </div>
          </div>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
          <div className="text-sm text-white/70">Transaction History</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between"><span>Added</span><span>+DC 1000</span></li>
            <li className="flex justify-between"><span>Bid - MacBook Air</span><span>-DC 4</span></li>
            <li className="flex justify-between"><span>Bid - Steam Deck</span><span>-DC 3</span></li>
          </ul>
        </div>
      </main>
    </div>
  )
}
