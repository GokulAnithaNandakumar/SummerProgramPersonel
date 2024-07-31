import React from 'react'
import "./commitment.css"
import Button from '../Common/Button'
import { Link } from "react-router-dom";

const Commitment = () => {
  return (
    <div className='commitment photo-section'>
        <div className='max-width'>
          <div className='photo-section-child'>
            <div className='photo-section-top'> 
              <div className='photo-section-heading'>
                Our Commitment
              </div>
              <div className='photo-section-subheading'>
                
              </div>
            </div>
            <div className='photo-section-bottom'> 
              <div className='photo-section-description'>
                We recently noticed an advertisement on Instagram and explored the page, but found
                limited online presence. Azero Tech is here to bridge that gap. We specialize in helping
                businesses grow by enhancing their online visibility and presence. If you have any
                requirements or need assistance in boosting your business growth, feel free to reach out
                to us.
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

export default Commitment;
