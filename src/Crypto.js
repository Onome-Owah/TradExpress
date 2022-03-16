import React from 'react'
import two from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group 52.svg'
import './Crypto.css'
import one from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group 28.svg'

const Crypto = () => {
  return (
    <div className='currencies'>

        <h4 className='sell'>Buy and Sell your Cryptocurrency in 3 easy steps</h4>
        <section className='sector coke'>


        <div className='money'>
        <div className='money1'>
        <img className='one' src={two} alt="" />
        </div>


        <div className='money2'>
        <h5 className='head'>Create a free Account</h5>
        <p className='peep'>
        Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.
        </p>
        </div>
        </div>



        </section>

        <section className='sector them'>


       <div className='money'>
       
        <div className='money2'>
        <h5 className='head'>Deposit</h5>
        <p className='peep'>
        Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to 
        your wallet for easy funding/withdrawal.
        </p>
        </div>

        <div className='money1'>
        <img className='one' src={one} alt="" />
        </div>
       </div>


        </section>


        <section className='sector direct'>

        <div className='money'>
        <div className='money1'>
        <img className='one' src={two} alt="" />
        </div>

        <div className='money2'>
        <h5 className='head'>Buy and Sell Crypto</h5>
        <p className='peep'>
        Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.
        </p>
        </div>

        </div>

        </section>
    </div>
  )
}

export default Crypto