import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs' 
import { BsMouse2 } from 'react-icons/bs'
import { CgGames } from 'react-icons/cg'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What übersect</h5>
      <h2>Offers</h2>

      <div className='container experience__container'>
        <div>
          <h3><BsMouse2 />  Aiming <BsMouse2 /></h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>Tracking</h4>
                  <small className='text-light'>Learn from players that have the smoothest aim out there</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Flicking</h4>
                  <small className='text-light'>Learn from players who have perfected the flick. Faster than light</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>Target Switching</h4>
                  <small className='text-light'>Learn from the Target Switching masters themselves</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>All Around</h4>
                  <small className='text-light'>Want to focus on all these skills? We do that too</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* End of Frontend */}
        <div>
        <h3><CgGames /> Game Specific Coaching <CgGames /></h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>CS:GO</h4>
                  <small className='text-light'>Learn from super talented CS:GO players with thousands of hours of experience</small>
                </div>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>Valorant</h4>
                  <small className='text-light'>Learn from the most knowledgeable Valorant players South Africa has to offer</small>
                </div>                
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>LoL</h4>
                  <small className='text-light'>Learn from the best League of Legends players in the South African region</small>
                </div>                
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'  />
                <div>
                  <h4>Dota 2</h4>
                  <small className='text-light'>Learn Dota 2 from Masters of the game, become an unstopable machine</small>
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