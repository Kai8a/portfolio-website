import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { FaRunning } from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know More</h5>
      <h2>About übersect</h2>

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
              <small>Combined over 50,000+ Hours</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Trainers</h5>
              <small>5 Skilled trainers</small>
            </article>

            <article className='about__card'>
              <FaRunning className='about__icon' />
              <h5>Coaching</h5>
              <small>Coaches in Games and Physical Health </small>
            </article>
          </div>

          <p>
          übersect was created by a group of friends to compete in a CS:GO tournament back in 2020 and has gone through many evolutions.
          and übersect will forever be evolving and moving forward. We make a promise to the South African gaming community to strive to make it
          a viable carreer to pursue just like it has been for many years in Europe, Asia and North America. It's time to get South Africa on the same
          track, becuase you the players deserve that.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default about