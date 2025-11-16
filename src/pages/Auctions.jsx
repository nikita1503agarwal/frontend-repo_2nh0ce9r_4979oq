import Navbar from '../components/Navbar'
import { LiveAuctionsGrid } from '../components/Sections'

export default function Auctions(){
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl font-extrabold">Live Auctions</h1>
              <p className="text-white/70">Filter by category, price, and time.</p>
            </div>
            <div className="flex gap-2">
              <select aria-label="Category" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10">
                <option>All</option>
                <option>Phones</option>
                <option>Laptops</option>
                <option>Watches</option>
                <option>Audio</option>
                <option>Consoles</option>
                <option>Tablets</option>
              </select>
              <select aria-label="Sort" className="px-3 py-2 rounded-xl bg-white/10 border border-white/10">
                <option>Ending soon</option>
                <option>Newest</option>
                <option>Lowest price</option>
              </select>
            </div>
          </div>
        </section>
        <LiveAuctionsGrid onOpenAuction={()=>{}} />
      </main>
    </div>
  )
}
