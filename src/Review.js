import React from 'react'
import view from '/Users/onomeowah/Desktop/TradExpress/src/Images/popup.png'
import './Review.css'
import me from '/Users/onomeowah/Desktop/TradExpress/src/Images/IMG_0055.jpeg'
// import her from '/Users/onomeowah/Desktop/TradExpress/src/Images/Comfort.jpg'
// import him from '/Users/onomeowah/Desktop/TradExpress/src/Images/Baby.jpeg'
// import quote from '/Users/onomeowah/Desktop/TradExpress/src/Images/Group 8699.svg'


const Review = () => {
  return (
    <div className='customer'>
        <h3>Customer's Review</h3>

        <div className='forflex'>
        <div className='light'>
        <img className='vue ' src={view} alt="" />
        <p className='ptext'>
        <span className='pan'>"</span> Trading on TradExpress mobile & web platforms has been a smooth experience for me quite easy to navigate.
        </p>
        <img className='review' src={me} alt="" />
        </div>

        <div className='light'>
        <img className='vue' src={view} alt="" />
        <p className='ptext'>
        "They have the best rate compared to other platforms with fast payout.
        </p>
        <img className='review cee' src={me} alt="" />
        </div>

        <div className='light'>
        <img className='vue' src={view} alt="" />
        <p className='ptext'>
        "Easy to fund and withdraw coins or cash on their platform, I will definitely trade with them again.
        </p>
        <img className='review bee' src={me} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Review