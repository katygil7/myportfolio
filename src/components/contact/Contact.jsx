import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8f1v2a3', 'template_b2xjeag', form.current, '5dthKpLH6wOteDpQx')
    e.target.reset()
    
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    
   <div className="container contact_container">
    <div className='contact_options'>
      <article className='contact_option'>
        <MdOutlineMailOutline className='contact_option-icon' />
        <h4>Email</h4>
        <h5>gil.katherine22@gmail.com</h5>
        <a href='mailto:gil.katherine22@gmail.com' target='blank'>Send a message</a>
      </article>
      <article className='contact_option'>
        <FaWhatsappSquare className='contact_option-icon' />
        <h4>WhatsApp</h4>
        <h5>+12105604454</h5>
        <a href='https://api.whatsapp.com/send?phone=12105604454' target='_blank' rel='noopener noreferrer'>Send a message</a>
      </article>
    </div>


      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='text' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit'value='send' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
