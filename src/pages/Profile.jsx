import Navbar from '../components/Navbar'

export default function Profile(){
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <section className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white/10 border border-white/10 rounded-2xl p-5">
            <div className="text-sm text-white/70">Profile Settings</div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3">
              <input placeholder="Full Name" className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <input placeholder="Email" className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <input placeholder="Phone" className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <select className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none">
                <option>Notifications: All</option>
                <option>Only important</option>
                <option>Mute</option>
              </select>
            </div>
            <button className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">Save</button>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
            <div className="text-sm text-white/70">KYC</div>
            <p className="text-sm text-white/80 mt-2">Upload ID to unlock higher limits and faster withdrawals.</p>
            <button className="mt-3 w-full py-2 rounded-xl bg-white/10 hover:bg-white/20">Start KYC</button>
            <div className="text-sm text-white/70 mt-4">Auto-bid Preferences</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <input placeholder="Max per bid (DC)" className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
              <input placeholder="Max per auction (DC)" className="px-3 py-2 rounded-xl bg-black/30 border border-white/10 outline-none" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
