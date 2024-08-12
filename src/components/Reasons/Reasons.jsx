import React from 'react'
import './Reasons.css'
import image1  from '../../assets/image1.png'
import image2  from '../../assets/image2.png'
import image3  from '../../assets/image3.png'
import image4  from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import adidas from '../../assets/adidas.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'
const Reasons = () => {
  return (
    <div className='reasons-container'>
        {/* gallery section */}
        <div className='right-container'>
            <div className='img-container'>
                 <img src={image1} alt="" className="img1" />
            </div>
            <div className='img-container'>
                <img src={image2} alt="" className="img2" />
                <img src={image3} alt="" className="img3" />
                <img src={image4} alt="" className="img4" />
            </div>
        </div>

        {/* why reasons section */}
        <div className='left-container'>
            <div className='shadow-txt'>SOME REASONS</div>
            <div>
                <span className='strock-txt'>WHY </span>
                <span>CHOOSE US?</span>
            </div>
            <ul className='reason-list'>
                <li>
                    <img src={tick} alt="tick" /><span>OVER 140+ EXPERT COACHS</span>
                    </li>
                <li>
                    <img src={tick} alt="tick" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </li>
                <li>
                    <img src={tick} alt="tick" /><span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </li>
                <li>
                    <img src={tick} alt="tick" /><span>RELIABLE PARTNERS</span>
                    </li>
            </ul>
            <div>OUR PARTNERS</div>
            <div className='our-partner-list'>
                <img src={adidas} alt="" />
                <img src={nb} alt="" />
                <img src={nike} alt="" />
            </div>
            
        </div>
        <div className="blur blur-reasons"></div>

    </div>
  )
}

export default Reasons
