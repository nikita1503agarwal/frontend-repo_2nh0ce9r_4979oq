import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { LiveAuctionsGrid, HowItWorks } from './components/Sections'
import WalletModal from './components/WalletModal'
import Footer from './components/Footer'

function App() {
  const [walletOpen, setWalletOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0d22]">
      <Navbar onOpenWallet={() => setWalletOpen(true)} />
      <main>
        <Hero />
        <LiveAuctionsGrid onOpenAuction={() => {}} />
        <HowItWorks />
      </main>
      <Footer />
      <WalletModal open={walletOpen} onClose={() => setWalletOpen(false)} />
    </div>
  )
}

export default App
