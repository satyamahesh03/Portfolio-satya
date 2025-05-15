// src/components/education/Education.jsx

import React from 'react';
import './education.css';
import { BsCheck2All } from 'react-icons/bs';

const Education = () => {
  return (
    <section id='education'>
      <h5>My Academic Journey</h5>
      <h2>Education</h2>

      <div className='container education__container'>
        <article className='education'>
          <div className='education__head'>
            <h3>Formal Education</h3>
          </div>

          <ul className='education__list'>
            <li>
              <BsCheck2All className='education__list-icon' />
              <p>
                <strong>B.Tech in Computer Science</strong><br />
                Maharaj Vijayaram Gajapathi Raj College of Engineering, Vizianagaram (2022–2026)<br />
                <em>CGPA:</em> 8.29
              </p>
            </li>
            <li>
              <BsCheck2All className='education__list-icon' />
              <p>
                <strong>Intermediate</strong><br />
                Gravity Junior College, Visakhapatnam (2020–2022)<br />
                <em>Percentage:</em> 82%
              </p>
            </li>
            <li>
              <BsCheck2All className='education__list-icon' />
              <p>
                <strong>10th Grade</strong><br />
                Suresh High School, Parvathipuram (2019–2020)<br />
                <em>GPA:</em> 10.0
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;