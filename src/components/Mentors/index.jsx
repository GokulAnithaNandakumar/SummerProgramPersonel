import React from 'react'
import './style.css'
import me4 from './me4.png'
import goutham from './goutham.png'
import pranav from './pranav.png'
import vijay from './vijay.png'
import samarth from './samarth.png'

const Mentors = () => {
  return (
    <>
      <div className='hero-heading mentors-heading'>
        <h3>Mentors</h3>
      </div>

      <div class="mentors">
      <div class="mentors-box">
        <div class="imgBx">
          <img src={vijay} alt="" />
        </div>
        <div class="card-footer">
          <h3>Vijay Varadarajan</h3>
          <h4>Tech Lead</h4>
        </div>
      </div>
      
      <div class="mentors-box">
        <div class="imgBx">
          <img src={me4} alt="" />
        </div>
        <div class="card-footer">
          <h3>A N Gokul</h3>
          <h4>Projects Lead</h4>
        </div>
      </div>
      
      <div class="mentors-box">
        <div class="imgBx">
          <img src={pranav} alt="" />
        </div>
        <div class="card-footer">
          <h3>Pranav P</h3>
          <h4>App Dev Lead</h4>
        </div>
      </div>
      
      <div class="mentors-box">
        <div class="imgBx">
          <img src={goutham} alt="" />
        </div>
        <div class="card-footer">
          <h3>Goutham Kurapati</h3>
          <h4>AI/ML Lead</h4>
        </div>
      </div>

      <div class="mentors-box">
        <div class="imgBx">
          <img src={samarth} alt="" />
        </div>
        <div class="card-footer">
          <h3>Samarth Saxena</h3>
          <h4>Blockchain Lead</h4>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Mentors