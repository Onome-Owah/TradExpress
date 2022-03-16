import React from 'react'
import './People.css'
import { Carousel } from 'react-bootstrap'
import one from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group 28.svg'



const People = () => {
  return (
    <div className='bless'>
        <section>
        <h3 className='why'>Why do people get involved with Cryptocurrencies?</h3>
        </section >

        
        

        <section>
        <div className='caro'>
        <Carousel className=''>
  <Carousel.Item interval={3000}>
  <section className='sect'>
        <img className='one' src={one} alt="" />
        <h4>Easy Mode of Payment</h4>
        <p className='peep'>
        People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.
        </p>
        </section>
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <section className='sect'>
        <img className='one' src={one} alt="" />
        <h4>Financial Freedom</h4>
        <p className='peep'>
        Just like the internet no single entity controls the Crypto network which provides users transparency 
        and privacy, which puts you in absolute control of your money.
        </p>
        </section>
    
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <section className='sect'>
        <img className='one' src={one} alt="" />
        <h4>Investment</h4>
        <p className='peep'>
        The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.
        </p>
        </section>
    
  </Carousel.Item>
</Carousel>
        </div>
        </section>

        <div>

            <button className='bttn'>Learn More</button>
        {/* <Link className='btn btn-outline px-5'>Learn More</Link> */}
        </div>
    </div>
    
  )
}

export default People