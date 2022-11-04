import React from 'react'
import './footer.css'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

const footer = () => {
  return (
    <section className='footer__section'>
    <div className='footer__text'>
      <h4>Copyright © übersect Pty Ltd. 2022</h4>
    </div>
    <div className='designed__by'> 
    <h4>website by <a href="https://twitter.com/saifaKvK" target='_blank'>Kai Hasse</a></h4>
    </div>
      {/* <div className='footer__socials'>
        <ol>
        <a href='https:://twitter.com/SaifaKvK/' target='_blank'><BsTwitter /></a>
        <a href='https:://github.com' target='_blank'><BsYoutube /></a>
        <a href='https:://Facebook.com' target='_blank'><BsFacebook /></a>
        <a href='https:://Instagram.com' target='_blank'><FiInstagram /></a>
        </ol>
      </div> */}
    </section>
  )
}

export default footer