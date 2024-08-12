import React from 'react'
import './Plans.css'
import tick from '../../assets/whiteTick.png'
import arrow from '../../assets/rightArrow.png'
import {plansData} from '../../data/plansData'
const Plans = () => {
  return (
    <div className='plans-container'>
        {/* header plans section */}
        <div className='header-plan'>
            <span className='strock-txt'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='strock-txt'>NOW WITHUS</span>
        </div>
        <div className="blur blur-plans"></div>
        {/* plan cards section */}
        <div className="card-plan">
        

            {plansData.map((cards , i )=>(
                <div className="card-container" key={i}>
                    {cards.icon}
                    <span>{cards.name}</span>
                    <span>${cards.price}</span>
                    
                    <div className="features">
                        {cards.features.map((feature , i)=> (
                            <div className="feature">
                                <img src={tick} alt="tick" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className='benefits'>
                        <span>See more benefits</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
        

    </div>
  )
}

export default Plans
