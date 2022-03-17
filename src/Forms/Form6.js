import React from 'react'
import { Link } from 'react-router-dom'

const Form6 = () => {
  return (
    <div className='back'>
      <h4 className='piece'>Welcome Back!</h4>


      <div>
      <section className='input bad'>
        <input className='put' type="text" name='text' placeholder='Username' />

        <input className='put' type="password" name='word' placeholder='Password' />
      
      </section>

      <div className='check'>
      <section>
        <input  type="checkbox" />
        <span>Remember Password</span>
      </section>

      <Link>Forgot Password</Link>
      </div>
      </div>


      <Link><button className='log'>Log in</button></Link>

      <p className='user'>New User? <Link>Click here</Link></p>
    </div>
  )
}

export default Form6