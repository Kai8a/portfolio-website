import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:://twitter.com/SaifaKvK/' target='_blank'><BsTwitter /></a>
        <a href='https:://github.com' target='_blank'><FaGithub /></a>
        <a href='https:://Facebook.com' target='_blank'><BsFacebook /></a>
        <a href='https:://Instagram.com' target='_blank'><FiInstagram /></a>
    </div>
  )
}
