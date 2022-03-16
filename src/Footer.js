import React from 'react'
import socials from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group 79.svg'
import './Footer.css'
import line from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group 78.svg'


const Footer = () => {
  return (
    <div>


        <div className='final'>
        <section>
            <ul className='product'>
                <h6>Products</h6>
                <li>Bitcoin</li>
                <li>Alt</li>
                <li>Flat</li>
                <li>Refill</li>
                <li>P2P</li>
            </ul>
        </section>

        <section>
            <ul className='learn'>
                <h6>Learn</h6>
                <li>Blog</li>
                <li>Help Center</li>
            </ul>
        </section>


        <section>
            <ul className='contact'>
                <h6>Contact</h6>
                <li>hello@tradeexpress.com</li> 
                <li>support@tradeexpress.com</li>
                <img src={socials} alt="" />
            </ul>
        </section>

        <section>
            <ul className='company'>
                <h6>Company</h6>
                <li>About Us</li>
                <li>Careers</li>
                <li>Rates</li>
                <li>Mobile</li>
            </ul>
        </section>

        <section>
            <ul className='legal'>
                <h6>Legal</h6>
                <li>Privacy Policy</li>
                <li>Anti-Money Laundering</li>
                <li>Terms and Conditions</li>
            </ul>
        </section>
        </div>

        <div className='lines' >
           <img className='bottle' src={line} alt="" />
        </div>
    </div>
  )
}

export default Footer