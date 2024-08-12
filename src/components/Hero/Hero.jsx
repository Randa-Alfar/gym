import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import hero_image from '../../assets/hero_image.png'

const Hero = () => {
  return (
    // the Hero section of the gym landing page on react
    <div id='hero-container'>
        {/* the right side section */}
        <div className='right-side'>

            {/* Heading section */}
            <Header/>

            {/* the best ads section */}
            <div className="the-best-ads">
                <div></div>
                <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>

            {/* the shape your body section */}
            <div className='shape-body-container'>
                <div>
                    <span className='strock-txt'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>IDEAL BODY</div>
                <div>In here we will help you to shape and build your ideal body and live up your life to fullest</div>
            </div>

            {/* the figurse section */}
            <div className="figures-container">
                <div><span>+ 140</span><span>EXPERT COACHES</span></div>
                <div><span>+ 978</span><span>MEMBERS JOINED</span></div>
                <div><span>+ 50</span><span>FITNESS PROGRAMS</span></div>
            </div>

            {/* button section */}
            <div className="getstart-learn-container">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>

    </div>
    
  )
}

export default Hero
