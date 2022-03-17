import React from 'react'
import { Link } from 'react-router-dom'

const Form2 = () => {
  return (
    
        <div className='welcome1'>
            <h3>Welcome!</h3>

                <div>
                    <div className='but'>
                        <Link className='butt' to ='/Form1'>Individual</Link>
                        <Link className='butt buttactive' to= '/Form2'>Business</Link>
                    </div>
                    

                    <div className='input'>
                    <input className='put' type="text" name='username' placeholder='Username' />

                    <input className='put' type="text" name= 'full name' placeholder='Business Name' />

                    <input className='put' type="email" name='mail' placeholder='Email' />

                    <input className='put' type="tel"  name='tel' placeholder='Phone Number'/>

                    <input className='put' type="text" name='code' placeholder='Referral code (Optional)' />

                    <p>By clicking the Sign Up button below, you agree to TradExpress <a href="">terms and service</a></p>


                    <div>
                        <button className='sign'>Sign Up</button>
                    </div>

                        <p>Already have an account ?<a href="">Click here</a> </p>
                    </div>

                    
                </div>
    </div>
  )
}

export default Form2