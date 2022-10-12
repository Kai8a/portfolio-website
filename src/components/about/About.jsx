import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='about image' />
            </div>
        </div>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Years Coding Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Employers</h5>
              <small>2 Employers Total</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
          </div>

          <p>
          My name is Kai Hasse an 18 year old web developer from South Africa currently based in Åland, Finland. in 2016 I originally started programming
          because I was interested in game developing so decided to take lessons in primary school, learning how to code with C# in Unity.
          In 2018 after going to High School I wanted to try something different so started looking at app development instead of game development, and taught myself
          how to code basic apps using Python. And then finally we come to 2022 when I decided to learn web development, and started working as a Jnr Dev for a company 
          called Kastelo.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about