import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TBD',
    github: 'https://github.com',
    demo: 'https://ubersect.de',
  },
  {
    id: 2,
    image: IMG2,
    title: 'TBD',
    github: 'https://github.com/',
    demo: 'https://ubersect.de/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TBD',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'TBD',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'TBD',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'TBD',
    github: 'https://github.com',
    demo: 'https://google.com'
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Coaches that are</h5>
      <h2>available on übersect</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' id='btn' target='_blank'>Hire Now</a>
                  <a href={demo} className='btn' id='btn-primary' target='_blank'>Video</a>
                </div>
              </article>
              
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio