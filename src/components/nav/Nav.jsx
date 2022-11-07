import React from 'react'
import './nav.css'
import {GrHome} from 'react-icons/gr'
import {GrUserFemale} from 'react-icons/gr'
import {MdWorkOutline} from 'react-icons/md'
import {GrBook} from 'react-icons/gr'
import {BiMessageDetail} from 'react-icons/bi'
// import { useState } from 'react'


const Nav = () => {
  return (
    <nav>
      <a href="home" className='active'><GrHome/ ></a>
      <a href='#about'><GrUserFemale/ ></a>
      <a href='#experience'><MdWorkOutline/ ></a>
      <a href='#portfolio'><GrBook/ ></a>
      <a href='#contact'><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav