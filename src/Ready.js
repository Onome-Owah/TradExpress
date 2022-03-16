import React from 'react'
import './Ready.css'
import ios from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group68.svg'
import driod from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group69.svg'
import { Link } from 'react-router-dom'

const Ready = () => {
  return (
    <div className='height'>
        <div className='one'>
            <p className='two'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
            <h3 className='three'>Create your account for free and start trading today!</h3>
            <div>
                <button className='four'>Get started</button>
            </div>
        </div>
        
        <div className='store'>

        <Link>
        <img className='ios' src={ios} alt="" />
        </Link>
        <Link>
        <img className='ios' src={driod} alt="" />
        </Link>
       

        </div>
    </div>
  )
}

export default Ready