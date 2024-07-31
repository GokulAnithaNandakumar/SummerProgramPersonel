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
                Azero Tech is more than just a tech company; we are a community-driven initiative. We
                provide valuable opportunities for college students to gain practical experience, develop
                their skills, and earn while they learn. By fostering a collaborative environment, we aim to
                empower the next generation of tech innovators.

              </div>
              <div>
                <Link to="/about"><Button buttonText='Know More' /></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Community;
