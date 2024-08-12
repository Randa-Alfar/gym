import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iav6xo5', 'template_d3rtqxr', form.current, '16jLfvvjQaSMt74b_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='join-container'>
        
        <div>
        <span className="blur blur-join-r"></span>
            <span className='strock-txt'>READY TO</span><span>LEVEL UP</span></div>
        <div>
            <span>YOUR BODY</span><span className='strock-txt'>WITH US?</span>
            <span className="blur blur-join-l"></span>
        </div>
        
        <form ref={form} action="" className='email-form' onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder='Enter your email to join us...' />
            <button type='submit'>Join Now</button>
        </form>
        
    </div>
  )
}

export default Join
