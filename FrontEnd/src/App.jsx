import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home/Home'
import Navbar from './page/Navbar/navbar'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Wallet from './page/Wallet/Wallet'
import Watchlist from './page/Watchlist/Watchlist'
import Withdrawal from './page/Withdrawal/Withdrawal'
import Profile from './page/Profile/Profile'
import Payment from './page/Payment/Payment'
import NotFound from './page/NotFound/NotFound'
import StockDetails from './page/StockDetails/StockDetails'
import SignInForm from './page/Auth/SignInForm'
import SignUpForm from './page/Auth/SignUpForm'
import ForgotPasswordForm from './page/Auth/ForgotPasswordForm'

function App() {

  return (
    <>
      <Routes>

        {/* Auth routes — no Navbar */}
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />

        {/* Main app routes — with Navbar */}
        <Route
          path="/*"
          element={
            <div className="">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/withdrawal" element={<Withdrawal />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/market/:id" element={<StockDetails />} />
                {/* <Route path="/search" element={<SearchCoin />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          }
        />

      </Routes>
    </>
  )
}

export default App
