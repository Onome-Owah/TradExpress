import React from 'react'
import letter from '/Users/onomeowah/Desktop/TradExpress/src/Images/message.png'
import { Link } from 'react-router-dom'

const Form5 = () => {
  return (
    <div className='iretiayo' >
      <h2 className='innerhem'>You're Almost In!</h2>

      <h2>Welcome Iretiayo</h2>

      <img src={letter} alt="" />

      <p className='activate'>An activation link has been set to <Link className='feem'>Ireti4tech@gmail.com</Link> Please click on the link to verify your email and activate your 
      TradExpress account
      </p>

      <Link className='feem'><button className='conty'>Continue</button></Link>


      <p className='kind'>Didn't get an email? Kindly click <Link className='feem'>resend email</Link> Wrong email supplied? <Link className='feem'>Edit email address</Link></p>
    </div>
  )
}

export default Form5