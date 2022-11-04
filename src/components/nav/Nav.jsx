import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineRead } from 'react-icons/ai'
import { CgGames } from 'react-icons/cg'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FaRunning } from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [] = useState('#')
  return (
    <nav>
      <a href='#' ><AiOutlineHome /></a>
      <a href='#about' ><AiOutlineRead /></a>
      <a href='#experience' ><CgGames /></a>
      <a href='#portfolio' ><FaRunning /></a>
      <a href='#contact' ><BiMessageSquareDetail /></a>
    </nav>
  )
  }

  // if active needed use onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}

export default Nav