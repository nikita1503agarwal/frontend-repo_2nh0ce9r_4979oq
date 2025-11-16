import { useState } from 'react'
import { Menu, Wallet, Bell, User, Search, Crown, ShieldCheck } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ balance = 1200, onOpenWallet }) {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-gradient-to-b from-[#0d1024]/80 to-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button aria-label="Menu" className="md:hidden text-white/80" onClick={() => setOpen(!open)}>
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-blue-500/30" />
              <span className="text-white font-extrabold tracking-wide text-lg">Dream60</span>
            </Link>
            <span className="hidden md:flex items-center gap-1 text-xs text-emerald-300/90 bg-emerald-400/10 px-2 py-1 rounded-full ml-2">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure Auctions
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            <NavLink to="/auctions" className={navLinkClass}>Live Auctions</NavLink>
            <NavLink to="/rewards" className={navLinkClass}>Rewards</NavLink>
            <NavLink to="/orders" className={navLinkClass}>Orders</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-white/90">
              <Search className="w-4 h-4 opacity-80" />
              <input aria-label="Search gadgets" placeholder="Search gadgets" className="bg-transparent placeholder-white/50 outline-none text-sm w-44" />
            </div>
            <button aria-label="Notifications" className="p-2 rounded-lg bg-white/10 text-white/90 hover:bg-white/20">
              <Bell className="w-5 h-5" />
            </button>
            <button aria-label="Open wallet" onClick={onOpenWallet} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30">
              <Wallet className="w-4 h-4" />
              <span className="font-bold text-sm">{balance.toLocaleString()} DC</span>
            </button>
            <Link aria-label="Profile" to="/profile" className="p-2 rounded-lg bg-white/10 text-white/90 hover:bg-white/20">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/dashboard" className="block px-3 py-2 rounded-lg text-white/90 bg-white/10">Dashboard</NavLink>
            <NavLink to="/auctions" className="block px-3 py-2 rounded-lg text-white/90 bg-white/10">Live Auctions</NavLink>
            <NavLink to="/rewards" className="block px-3 py-2 rounded-lg text-white/90 bg-white/10">Rewards</NavLink>
            <NavLink to="/orders" className="block px-3 py-2 rounded-lg text-white/90 bg-white/10">Orders</NavLink>
          </div>
        )}
      </div>
    </header>
  )
}
