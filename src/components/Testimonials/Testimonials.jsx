import React, { useState } from 'react'
import './Testimonials.css'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import {testimonialsData} from '../../data/testimonialsData'
const Testimonials =()=> {
    const [selected,setselected]=useState(2);
    const tlength = testimonialsData.length;

      return (
        <div className='Testimonials-container'>
                <div className='Testimonials-heading'>
                    <span className=''>TESTIMONIALS</span>
                    <span className='strock-txt'>WHAT THEY</span>
                    <span >SAY ABOUT US</span>
                    <span>
                        {testimonialsData[selected].review}
                    </span>
                    <div>
                    <span style={{color:'var(--blue)',fontWeight:'bold'}}>{testimonialsData[selected].name} </span><span> - {testimonialsData[selected].status}</span>
                    </div>
                </div>
                <div className="testimonial-imgs">
                    <div></div>
                    <div></div>
                    <img src={testimonialsData[selected].image} alt="img" />
                    <div className='arrow-container'>
                        <img src={leftArrow} alt="leftarrow" onClick={()=>{
                            selected===0?
                            setselected(tlength-1):
                            setselected((pre)=>pre-1)
                        }}/>
                        <img src={rightArrow} alt="rightarrow" onClick={()=>{
                            selected===tlength-1?
                            setselected(0):
                            setselected((prev)=>prev+1)
                        }} />
                    </div>
                    
                </div>
        </div>
      )
    
  }

export default Testimonials;