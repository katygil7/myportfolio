import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {CgWorkAlt} from 'react-icons/cg'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#top')
  return (
    <nav>
      <a href='#top' onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><AiOutlineHome/ ></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/ ></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline/ ></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><CgWorkAlt/ ></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/ ></a>
    </nav>
  )
}

export default Nav