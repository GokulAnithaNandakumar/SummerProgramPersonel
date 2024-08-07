import React from 'react'
import "./community.css"
import Button from '../Common/Button'
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className='community photo-section'>
      <div className='max-width'>
        <div className='photo-section-child'>
          <div className='photo-section-top'>
            <div className='photo-section-heading'>
              Community Impact
            </div>
            <div className='photo-section-subheading'>

            </div>
          </div>
          <div className='photo-section-bottom'>
            <div className='photo-section-description'>
              The IETVIT Summer Program empowers youth to solve real-world problems, 
              fostering critical thinking and innovation. Through hands-on projects in healthcare, 
              environment, and technology, participants develop practical skills while addressing 
              community challenges. This initiative promotes collaboration, raises awareness, and 
              inspires future programs, creating lasting positive impacts and strengthening community ties.
            </div>
            <div>
              <Link to="/projects"><Button buttonText='Know More' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community;
