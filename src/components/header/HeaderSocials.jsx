import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https:://twitter.com/SaifaKvK/' target='_blank'><BsTwitter /></a>
        <a href='https:://youtube.com' target='_blank'><BsYoutube /></a>
        <a href='https:://Facebook.com' target='_blank'><BsFacebook /></a>
        <a href='https:://tiktok.com' target='_blank'><FaTiktok /></a>
        <a href='https:://Instagram.com' target='_blank'><FiInstagram /></a>
    </div>
  )
}
