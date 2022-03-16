import React from 'react'
import './Forms.css'
import { Link } from 'react-router-dom'

const Form1 = () => {
  return (
    <div >
            <div className='welcome1'>
            <h3>Welcome!</h3>

                <div>
                    <div className='but'>
                        <Link to='./Form1'><button className='butt'>Individual</button></Link>
                        <Link to='./Form2'><button className='butt'>Business</button></Link>
                    </div>
                    

                    <div className='input'>
                    <input className='put' type="text" name='username' placeholder='Username' />

                    <input className='put' type="text" name= 'full name' placeholder='Full Name' />

                    <input className='put' type="email" name='mail' placeholder='Email' />

                    <input className='put' type="number"  name='number' placeholder='Phone Number'/>

                    <input className='put' type="text" name='code' placeholder='Referral code (Optional)' />

                    <p>By clicking the Sign Up button below, you agree to TradExpress <a href="">terms and service</a></p>


                    <div>
                        <button className='sign'>Sign Up</button>
                    </div>

                        <p>Already have an account ?<a href="">Click here</a> </p>
                    </div>

                    
                </div>
            </div>
    </div>
  )
}

export default Form1