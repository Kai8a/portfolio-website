import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The level of my</h5>
      <h2>Skills</h2>

      <div className='container experience__container'>
        <div>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Proficient</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* End of Frontend */}
        <div>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Proficient</small>
                </div>                
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>                
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default experience