import React, {useEffect, useState} from 'react'
import './Bitcoin.css'

function Bitcoin() {
    const [data, setDate] = useState ([])
    useEffect (() =>{
        fetch('https://api.coinlore.net/api/tickers/?start=0&limit=5')
        .then(get => get.json())
        .then(getting => setDate(getting.data))
    })
        return (
          <div className='section'>
              
              {data.map((datum) =>{
                return (
                    <div className='all' key={datum.id}>
                        <div className='phone'>
                        {datum.symbol}/NGN
                        <p>{datum.percent_change_1h}%</p>
                        </div>
                        
                        <p>{datum.price_usd}</p>
                        
                    </div>
                )

                })}

          </div>
        )
      }

export default Bitcoin