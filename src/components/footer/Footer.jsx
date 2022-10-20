import React from 'react'
import './footer.css'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

const footer = () => {
  return (
    <section className='footer__section'>
    <div className='footer__text'>
      <h2>This website was developed and designed by Kai Hasse</h2>
      <h5>2022</h5>
    </div>
      <div className='footer__socials'>
        <ol>
        <a href='https:://twitter.com/SaifaKvK/' target='_blank'><BsTwitter /></a>
        <a href='https:://github.com' target='_blank'><FaGithub /></a>
        <a href='https:://Facebook.com' target='_blank'><BsFacebook /></a>
        <a href='https:://Instagram.com' target='_blank'><FiInstagram /></a>
        </ol>
      </div>
    </section>
  )
}

export default footer