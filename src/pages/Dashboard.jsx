import Navbar from '../components/Navbar'
import { LiveAuctionsGrid, HowItWorks } from '../components/Sections'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main>
        <section className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold">Dashboard</h1>
            <p className="text-white/70 mt-1">Featured gadgets, quick access to your wallet, and live rooms.</p>
          </div>
        </section>
        <LiveAuctionsGrid onOpenAuction={()=>{}} />
        <HowItWorks />
      </main>
    </div>
  )
}
