import React from 'react'
import Resume from "../../assets/Resume.pdf";

const CoreToAction = () => {
  return (
    <div className='cta'>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CoreToAction