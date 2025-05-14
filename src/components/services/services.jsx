import React from 'react';
import './services.css';
import {BsCheck2All} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer?</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Mobile-friendly websites.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Clean and modern design.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Easy-to-use features.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Simple and secure contact forms.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Easy to update and maintain.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Fast and reliable performance.</p>
            </li>
          </ul>

          
        </article>
      </div>
      

    </section>
  )
}

export default Services