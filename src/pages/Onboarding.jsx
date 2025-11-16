import Navbar from '../components/Navbar'

export default function Onboarding(){
  const steps = [
    {t:'Create account', d:'Use email/phone or continue with Google, GitHub, Facebook.'},
    {t:'Load DreamCoins', d:'Secure payment gateway, instant balance updates.'},
    {t:'Join an auction', d:'Watch the timer flip, place bids, and stay on top.'},
    {t:'Win & track', d:'Complete payment, add delivery, and track your order.'}
  ]
  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-extrabold">Getting Started</h1>
        <ol className="mt-6 space-y-4">
          {steps.map((s,i)=> (
            <li key={i} className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <div className="text-emerald-300 text-sm">Step {i+1}</div>
              <div className="font-bold">{s.t}</div>
              <p className="text-white/80 text-sm mt-1">{s.d}</p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  )
}
