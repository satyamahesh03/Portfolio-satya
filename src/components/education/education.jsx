// src/components/education/Education.jsx

import React from 'react';
import './education.css';
import { FaUniversity } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { GiSchoolBag } from 'react-icons/gi';

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
                            <FaUniversity className='education__list-icon' />
                            <p>
                                <strong>B.Tech in Computer Science</strong><br />
                                <a href="https://maps.google.com/?q=MVGR+College+of+Engineering+Vizianagaram" target="_blank" rel="noopener noreferrer">
                                    Maharaj Vijayaram Gajapathi Raj College of Engineering, Vizianagaram (2022–2026)
                                </a><br />
                                <em>CGPA:</em> 7.95
                            </p>
                        </li>
                        <li>
                            <PiStudentFill className='education__list-icon' />
                            <p>
                                <strong>Intermediate</strong><br />
                                <a href="https://maps.google.com/?q=Gravity+Junior+College+Visakhapatnam" target="_blank" rel="noopener noreferrer">
                                    Gravity Junior College, Visakhapatnam (2020–2022)
                                </a><br />
                                <em>Percentage:</em> 82%
                            </p>
                        </li>
                        <li>
                            <GiSchoolBag className='education__list-icon' />
                            <p>
                                <strong>10th Grade</strong><br />
                                <a href="https://maps.google.com/?q=Suresh+High+School+Parvathipuram" target="_blank" rel="noopener noreferrer">
                                    Suresh High School, Parvathipuram (2019–2020)
                                </a><br />
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