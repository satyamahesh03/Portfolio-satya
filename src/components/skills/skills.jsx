import React from 'react';
import './skills.css';
import { FiCheckCircle } from 'react-icons/fi';

const Skills = () => {
  const skillSections = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools & Technologies': ['GitHub', 'VS Code', 'Vercel', 'Render'],
    'Key Strengths': ['Problem Solving', 'Team Collaboration', 'Active Listener', 'Time Management'],
  };

  return (
    <section id='skills'>
      <h5>What Skills I Have?</h5>
      <h2>My Skills</h2>

      <div className='container skills__container'>

        {/* First Row */}
        <div className='skills__row first'>
          {['Programming Languages', 'Web Technologies'].map(category => (
            <div className='skills__category' key={category}>
              <h3>{category}</h3>
              <div className='skills__content'>
                {skillSections[category].map(skill => (
                  <article className='skills__details' key={skill}>
                    <FiCheckCircle className='skills__details-icon' />
                    <div><h4>{skill}</h4></div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className='skills__row second'>
          {['Databases', 'Tools & Technologies', 'Key Strengths'].map(category => (
            <div className='skills__category' key={category}>
              <h3>{category}</h3>
              <div className='skills__content'>
                {skillSections[category].map(skill => (
                  <article className='skills__details' key={skill}>
                    <FiCheckCircle className='skills__details-icon' />
                    <div><h4>{skill}</h4></div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;