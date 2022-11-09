import React, { useState } from 'react'
import './nav.css'
import {GrHome} from 'react-icons/gr'
import {GrUserFemale} from 'react-icons/gr'
import {MdWorkOutline} from 'react-icons/md'
import {GrBook} from 'react-icons/gr'
import {BiMessageDetail} from 'react-icons/bi'
// import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#top' onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><GrHome/ ></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GrUserFemale/ ></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline/ ></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrBook/ ></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav