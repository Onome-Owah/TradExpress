import React from 'react'
import driod from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group69.svg'
import ios from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group68.svg'
import './Main.css'
import Bitcoin from './Bitcoin'
import People from './People'
import {Link} from 'react-router-dom'
import Crypto from './Crypto'
import Ready from './Ready'
import Review from './Review'
import Footer from './Footer'

const Main = () => {
  return (
      <div>
    <div className='home'>
        <div className='begin'>
            <section className='sect1'>
            <h1>Buy, sell and Manage your crypto on TradExpress</h1>
            </section>

            <section className='sect2'>
            <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
            </section>
            
            <section className='sect3'>
            <button className='get'>Get started</button>
            </section>
            <div className='block'>
            <Link><img className='take' src={ios} alt="" /></Link>
           <Link> <img className='give' src={driod} alt="" /></Link>
            </div>
            
            </div>
           
</div>
<Bitcoin/>
<People/>
<Crypto/>
<Ready/>
<Review/>
<Footer/>
    </div>
  )
}

export default Main