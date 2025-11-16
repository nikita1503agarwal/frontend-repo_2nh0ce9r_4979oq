import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1024] via-[#171b3a] to-[#00112b]" />
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/30 via-violet-600/30 to-fuchsia-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live gadget auctions, every minute
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Win futuristic gadgets with skill, speed, and a little luck
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-xl">
            Bid in real-time using DreamCoins. Every bid nudges the price and extends the timer. Be the last to bid when it hits zero and the gadget is yours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/signup" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/auctions" className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10">
              Browse Live Auctions
            </Link>
          </div>
          <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-white/80">
            <li className="bg-white/10 rounded-xl p-3">Verified Sellers</li>
            <li className="bg-white/10 rounded-xl p-3">Secure Payments</li>
            <li className="bg-white/10 rounded-xl p-3">24/7 Support</li>
          </ul>
        </div>
        <div className="h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
