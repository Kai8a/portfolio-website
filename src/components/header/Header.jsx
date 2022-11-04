import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocials } from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Welcome to</h5>
        <h1>übersect</h1>
        <h5 className='text__light'>"The consistent pursuit of excellence in all aspects of life"</h5>
        <CTA />
        <HeaderSocials />

      <div className='me'>
        <img src={ME} alt='me'/>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header