import { useState } from 'react'
import { Mail, Phone, ShieldCheck, Fingerprint, KeyRound, Github, Facebook, Google } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function SignupLogin() {
  const [mode, setMode] = useState('signup')
  const [otpSent, setOtpSent] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0d22] text-white">
      <Navbar />
      <section className="relative py-10">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1024] via-[#171b3a] to-[#00112b]" />
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600/30 via-violet-600/30 to-fuchsia-600/30 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs">
              <ShieldCheck className="w-4 h-4" /> Secure • KYC enabled • PCI compliant
            </div>
            <h1 className="text-4xl font-extrabold leading-tight">Welcome to Dream60</h1>
            <p className="text-white/80">Create your account, verify with OTP or continue with socials. We keep your data safe.</p>
            <ul className="text-white/70 text-sm space-y-2">
              <li className="flex items-center gap-2"><Fingerprint className="w-4 h-4 text-emerald-300" /> Quick KYC for higher limits</li>
              <li className="flex items-center gap-2"><KeyRound className="w-4 h-4 text-emerald-300" /> 2FA & device verification</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex p-1 bg-white/10 rounded-xl mb-4">
              <button onClick={()=>setMode('signup')} className={`flex-1 py-2 rounded-lg ${mode==='signup'?'bg-white/10 font-bold':''}`}>Sign up</button>
              <button onClick={()=>setMode('login')} className={`flex-1 py-2 rounded-lg ${mode==='login'?'bg-white/10 font-bold':''}`}>Log in</button>
            </div>

            {!otpSent ? (
              <div className="space-y-3">
                <label className="block text-sm text-white/80">Email</label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/30 border border-white/10">
                  <Mail className="w-4 h-4 text-white/60" />
                  <input aria-label="Email" placeholder="you@dream.com" className="bg-transparent outline-none flex-1" />
                </div>
                <label className="block text-sm text-white/80">Phone</label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/30 border border-white/10">
                  <Phone className="w-4 h-4 text-white/60" />
                  <input aria-label="Phone" placeholder="+1 555 123 4567" className="bg-transparent outline-none flex-1" />
                </div>
                <button onClick={()=>setOtpSent(true)} className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/40">Send OTP</button>
                <div className="flex items-center gap-3 mt-2">
                  <button className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 inline-flex items-center justify-center gap-2"><Google className="w-4 h-4" /> Google</button>
                  <button className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 inline-flex items-center justify-center gap-2"><Github className="w-4 h-4" /> GitHub</button>
                  <button className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 inline-flex items-center justify-center gap-2"><Facebook className="w-4 h-4" /> Facebook</button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="text-sm text-white/80">Enter the 6-digit OTP sent to your phone</div>
                <div className="grid grid-cols-6 gap-2">
                  {Array.from({length:6}).map((_,i)=> (
                    <input key={i} aria-label={`OTP ${i+1}`} className="h-12 text-center rounded-xl bg-black/30 border border-white/10 outline-none" />
                  ))}
                </div>
                <button className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500">Verify & Continue</button>
              </div>
            )}

            <p className="mt-4 text-xs text-white/60">By continuing, you agree to our Terms and Privacy Policy.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
