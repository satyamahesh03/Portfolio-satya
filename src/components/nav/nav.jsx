import React from 'react';
import './nav.css';
import { BiHome } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi'; 
import { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#header' rel='noopener'
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}><BiHome />
      </a>
      <a href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser />
      </a>
      <a href='#skills'
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}><HiOutlineLightBulb />
      </a>
      <a href='#education'
        onClick={() => setActiveNav('#education')}
        className={activeNav === '#education' ? 'active' : ''}><FaGraduationCap />
      </a>
      <a href='#recentWork'
        onClick={() => setActiveNav('#recentWork')}
        className={activeNav === '#recentWork' ? 'active' : ''}><MdOutlineWorkOutline />
      </a>
      <a href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}><HiOutlineMail />
      </a>
    </nav>
  )
}

export default Nav;