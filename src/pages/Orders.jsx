import Navbar from '../components/Navbar'

export default function Orders(){
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <section className="bg-white/10 border border-white/10 rounded-2xl p-5">
          <div className="text-sm text-white/70">Order Tracking</div>
          <ul className="mt-3 space-y-3">
            <li className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-bold">iPhone 15 Pro Max</div>
              <div className="text-xs text-white/60">Order #D60-23910 • DC 3.42</div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {['Paid','Packed','Shipped','Out for delivery'].map((s,i)=> (
                  <div key={i} className={`text-xs text-center py-2 rounded-lg ${i<3? 'bg-emerald-400/10 text-emerald-300 border border-emerald-300/30' : 'bg-white/10 border border-white/10'}`}>{s}</div>
                ))}
              </div>
              <button className="mt-3 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm">View Invoice</button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
