import React from 'react'
import { Link } from 'react-router-dom'


const Form3 = () => {
  return (
    <div className='instant'>
      <h4 className='buy-sell'>Buy/Sell Instantly</h4>

      
                    <div className='but'>
                        <Link className='butt buttactive' to='./Form3'>Buy</Link>
                        <Link className='butt' to='./Form4'>Sell</Link>
                    </div>

                    <div className='fall' >

                      <h6 className='buy'>Coin to Buy</h6>
                    <select className='coin' name="" id="">
                      <option value="">Bitcoin (BTC)</option>
                      <option value="">Ethereum (ETH)</option>
                      <option value="">Tether (USDT)</option>
                      <option value="">Binance Coin (BNB)</option>
                      <option value="">United States Dollar Coin (USDC)</option>
                    </select>

                    </div>
                    
                    <section className='fall'>
                    <h6 className='buy'>Currency</h6>
                    <select className='coin' name="" id="">
                      <option value="">Naira (NGN)</option>
                      <option value="">Dollars (USD)</option>
                      <option value="">Pounds (GBP)</option>
                      <option value="">Euro (EUR)</option>
                      <option value="">Canadian Dollar (CAD)</option>
                    </select>
                    </section>

                    

                    <section className='fall'>
                      <h6 className='buy'>Amount</h6>

                      <span className='para'>
                        <input className='ngn' type="NGN" disabled value='NGN' />
                        <input className='montext' type="text" />
                      </span>
                    </section>

                    <Link className='fall' ><button className='coin con'>Continue</button></Link>
    </div>
  )
}

export default Form3