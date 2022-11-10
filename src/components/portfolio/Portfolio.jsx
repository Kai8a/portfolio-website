import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ubersect.png'
import IMG2 from '../../assets/ubersect.png'
import IMG3 from '../../assets/ubersect.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'üB Store',
    github: '#store' ,
    demo: 'https://ubersect.de',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Coming Soon!',
    github: '',
    demo: '',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Coming Soon!',
    github: '',
    demo: '',
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>View all</h5>
      <h2>übersect products</h2>

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
                  <a href={github} className='btn' id='btn' target='_blank'>See Store</a>
                  <a href={demo} className='btn' id='btn-primary' target='_blank'>Surprise me</a>
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