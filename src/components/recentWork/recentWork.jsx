import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/Project1.png';
import IMG2 from '../../assets/Project2.png';
import IMG3 from '../../assets/Project3.png';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Pack & Go',
    github: 'https://github.com/satyamahesh03/Pack-Go-Project',
    demo: 'https://packngo.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Car Finder',
    github: 'https://github.com/satyamahesh03/car-finder-app',
    demo: 'https://carfinderlite.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tic Tac Toe',
    github: 'https://github.com/satyamahesh03/tic-tac-toe',
    demo: 'https://satyamahesh03.github.io/tic-tac-toe'
  }
];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='recentWork__item'>
                <div className='recentWork__item-image'>
                  <img src={image} alt='title'/>
                </div>
                <h3>{title}</h3>
                <div className='recentWork__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default RecentWork