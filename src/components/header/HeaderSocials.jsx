import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://twitter.com/ubersect/' target='_blank'><BsTwitter /></a>
        <a href='https://www.youtube.com/channel/UCLQ5hCHRPhS-hjHuy6jrNKA' target='_blank'><BsYoutube /></a>
        <a href='https://www.facebook.com/groups/435847038695142/?mibextid=6NoCDW' target='_blank'><BsFacebook /></a>
        <a href='https://www.tiktok.com/@ubersect' target='_blank'><FaTiktok /></a>
        <a href='https://www.instagram.com/ubersect/' target='_blank'><FiInstagram /></a>
    </div>
  )
}
