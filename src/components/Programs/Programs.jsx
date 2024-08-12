import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='programs-container'>
        {/* heading of programs section */}
        <div className='programs-title'>
            <span className='strock-txt'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='strock-txt'>TO SHAPE YOU</span>
        </div>

        {/* program cards section */}
        <div className="programs-category">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <button className='btn join-now'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
