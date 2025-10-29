import React from 'react'
import "./about.css";
import Me from '../../assets/Sat-image-about.jpg';
import { FiUser } from 'react-icons/fi';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} draggable={false} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Student</h5>
              <small>Final Year CSE</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Hi, I'm Satya Mahesh Kolli, a MERN stack developer who believes that technology is one of the most powerful tools to shape the future. For me, coding isn't just about writing lines of code, it's about creating something meaningful, solving problems, and bringing ideas to life through innovation.
            <br /><br />
            I'm driven by curiosity and the constant desire to learn, build, and evolve. Every new concept I explore, every challenge I face, pushes me to think differently and craft smarter solutions. I enjoy the process of turning abstract ideas into interactive digital experiences that make an impact.
            <br /><br />
            Beyond academics, I'm someone who values growth, collaboration, and creativity. I believe that great things happen when passion meets purpose, and I strive to blend both in everything I do. My goal is to continue learning, experimenting, and contributing to a world where technology truly makes life better.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About