export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0b0e24] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-extrabold text-white text-lg">Dream60</div>
          <p className="mt-2 text-sm">Futuristic gadget auctions with secure payments and verified sellers.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Company</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Support</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Help Center</li>
            <li>Payments</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Legal</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            <li>KYC Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} Dream60. All rights reserved.</div>
    </footer>
  )
}
