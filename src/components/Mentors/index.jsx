import React from 'react';
import './style.css';
import me4 from './me4.png';
import goutham from './goutham.png';
import pranav from './pranav.png';
import vijay from './vijay.png';
import samarth from './samarth.png';

const mentorsData = [
  {
    name: 'Vijay Varadarajan',
    role: 'Tech Lead',
    imgSrc: vijay,
    linkedin: 'https://www.linkedin.com/in/vijay-varadarajan-630597200/' // Replace with actual LinkedIn URL
  },
  {
    name: 'Gokul',
    role: 'Projects Lead',
    imgSrc: me4,
    linkedin: 'https://www.linkedin.com/in/gokulnandakumar' // Replace with actual LinkedIn URL
  },
  {
    name: 'Pranav P',
    role: 'App Dev Lead',
    imgSrc: pranav,
    linkedin: 'https://www.linkedin.com/in/pranav-p-495298269/' // Replace with actual LinkedIn URL
  },
  {
    name: 'Goutham Kurapati',
    role: 'AI/ML Lead',
    imgSrc: goutham,
    linkedin: 'https://www.linkedin.com/in/goutham-kurapati/' // Replace with actual LinkedIn URL
  },
  {
    name: 'Samarth Saxena',
    role: 'Blockchain Lead',
    imgSrc: samarth,
    linkedin: 'https://www.linkedin.com/in/awesamarth/' // Replace with actual LinkedIn URL
  }
];

const Mentors = () => {
  return (
    <>
      <div className='hero-heading mentors-heading'>
        <h3>Mentors</h3>
      </div>

      <div className="mentors">
        {mentorsData.map((mentor, index) => (
          <a key={index} href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="mentors-box">
            <div className="imgBx">
              <img src={mentor.imgSrc} alt={mentor.name} />
            </div>
            <div className="card-footer">
              <h3>{mentor.name}</h3>
              <h4>{mentor.role}</h4>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Mentors;
