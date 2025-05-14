import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/satyamahesh03' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://www.linkedin.com/in/satyamaheshkolli' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://www.instagram.com/sath_yyaa' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default headerSocials;