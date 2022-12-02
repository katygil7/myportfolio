import React from 'react'
import './footer.css'


const Footer = () => {
  return (
   <footer>
    <a href='/' className='footer_logo'>Katherine Gil</a>

    <ul className='permalinks'>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
    </ul>
   </footer>
  )
}

export default Footer
