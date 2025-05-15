import React from 'react';
import './services.css';
import { BsCheck2All } from 'react-icons/bs';

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
              <BsCheck2All className='service__list-icon' />
              <p><strong>Mobile-Friendly Design:</strong> Your website will look great and work smoothly on phones, tablets, and desktops.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p><strong>Clean & Modern Layout:</strong> We craft professional designs that feel fresh and easy to navigate for all users.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p><strong>User-Friendly Features:</strong> Visitors can quickly find what they need, fill out forms, or navigate pages with ease.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p><strong>Secure Contact Forms:</strong> Your clients can reach out safely, and their data is protected against spam or misuse.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p><strong>Easy Maintenance:</strong> The site is built so future updates like content or images are simple and fast to make.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p><strong>Fast Performance:</strong> Pages load quickly and the site remains stable and reliable at all times.</p>
            </li>
          </ul>


        </article>
      </div>


    </section>
  )
}

export default Services