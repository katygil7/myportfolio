import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Front Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Back Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsFillPatchCheckFill />
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

