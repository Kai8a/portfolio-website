import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Where You Can</h5>
      <h2>Contact Us</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ubersect@ubersect.de</h5>
            <a href='mailto:ubersect@ubersect.de' target='_blank'><div className='msg'>Send a Message</div></a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Ubersect</h5>
            <a href='https://m.me/ubersect' target='_blank'><div className='msg'>Send a Message</div></a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>076 074 ****</h5>
            <a href='https://api.whatsapp.com/send?phone=27760747844' target='_blank'><div className='msg'>Send a Message</div></a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form action=''>
          <input type='text' name='name' placeholder='Your/Company Name' required />
          <input type='email' name='email' placeholder='Your/Company Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <div>
        <a href='#header' className='scroll__down'>Go To Top</a>
        </div>
      </div>
    </section>
  )
}

export default contact