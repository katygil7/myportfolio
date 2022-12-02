import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/IMG1.png'
import IMG2 from '../../assests/IMG2.png'
import IMG3 from '../../assests/IMG3.png'
import IMG4 from '../../assests/IMG4.png'

const data = [
  {
    id: 4,
    image: IMG4,
    title: 'iPlant',
    github: 'https://github.com/i-Plant/iPlant'
  },
  {
    id: 3,
    image: IMG3,
    title: 'GreenCupFilms',
    github: 'https://github.com/GreenCup-Films/movies-kat-louie'
  },
  {
    id: 2,
    image: IMG2,
    title: 'WeatherMap',
    github: 'https://github.com/katygil7/codeup-web-exercises/blob/main/weather_map.html'
  },
  {
    id: 1,
    image: IMG1,
    title: "Coffee Store",
    github: 'https://github.com/katygil7/coffee-katherine-jacob'
  },
]

const Portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
  
        <div className='container portfolio_container'>
          {
            data.map(({id, image, title, github}) => {
              return(
                <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt ={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
  
      </section>
    )
}

export default Portfolio
// --Future REFERENCE this is how to do the projects using one div for each project. vs the Dinamically generated portfolio iteams (object array).
/* <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            <img src={IMG4} alt = ""/>
            </div>
            <h3>iPlant</h3>
            <div className="portfolio_item-cta">
              <a href='https://github.com/i-Plant/iPlant' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            </div>
          </article>
  
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={IMG3} alt = ""/>
            </div>
            <h3>GreenCupFilms</h3>
            <div className="portfolio_item-cta">
              <a href='https://github.com/GreenCup-Films/movies-kat-louie' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            </div>
          </article>
  
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            <img src={IMG2} alt = ""/>
            </div>
            <h3>WeatherMap</h3>
            <div className="portoflio_item-cta">
              <a href='https://github.com/katygil7/codeup-web-exercises/blob/main/weather_map.html' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            </div>
            </article>
  
          <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            <img src={IMG1} alt = ""/>
            </div>
            <h3>Coffee</h3>
            <div className="portfolio_item-cta">
              <a href='https://github.com/katygil7/coffee-katherine-jacob' className='btn' target='_blank' rel="noopener noreferrer">Github</a>
            </div>
          </article> */
