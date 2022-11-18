import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/IMG1.png'
import IMG2 from '../../assests/IMG2.png'
import IMG3 from '../../assests/IMG3.png'
import IMG4 from '../../assests/IMG4.png'



function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG4} alt = ""/>
          </div>
          <h3>iPlant</h3>
          <a href='https://github.com/i-Plant/iPlant' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt = ""/>
          </div>
          <h3>GreenCup Films</h3>
          <a href='https://github.com/GreenCup-Films/movies-kat-louie' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG2} alt = ""/>
          </div>
          <h3>WeatherMap</h3>
          <a href='https://github.com/katygil7/codeup-web-exercises/blob/main/weather_map.html' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={IMG1} alt = ""/>
          </div>
          <h3>Coffee</h3>
          <a href='https://github.com/katygil7/coffee-katherine-jacob' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
        </article>


      </div>

    </section>
  )
}

export default Portfolio
