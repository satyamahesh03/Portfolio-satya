import React from 'react'
import "./about.css";
import Me from '../../assets/Sat-image-about.jpg';
import { BsAward } from 'react-icons/bs';
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
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
          </div>
          <p>
            I am looking for a Job to build my carrier in software industry. Computer Science Engineering student with a strong understanding of full-stack web developmentand programming fundamentals. Experienced in building responsive and user-friendly web applications using the MERN stack.
            Skilled in C, C++, Python, Java, and database systems like MongoDB and MySQL. A quick learner with good problem-solving and teamwork abilities, looking to contribute to real-world software projects and grow in the tech industry.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About