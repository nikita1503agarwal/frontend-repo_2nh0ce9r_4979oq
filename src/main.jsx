import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Dashboard from './pages/Dashboard'
import SignupLogin from './pages/SignupLogin'
import Auctions from './pages/Auctions'
import AuctionDetail from './pages/AuctionDetail'
import AuctionRoom from './pages/AuctionRoom'
import Rewards from './pages/Rewards'
import Orders from './pages/Orders'
import WalletPage from './pages/Wallet'
import Profile from './pages/Profile'
import Onboarding from './pages/Onboarding'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupLogin />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/:id" element={<AuctionDetail />} />
        <Route path="/room/:id" element={<AuctionRoom />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
