import React from 'react'
import './style.css'

const Mentors = () => {
  return (
    <>
      <div className='hero-heading mentors-heading'>
        <h3>Mentors</h3>
      </div>

      <div class="mentors">
      <div class="mentors-box">
        <div class="imgBx">
          <img src="https://i.ibb.co/x1Gth6s/team-1.jpg" alt="" />
        </div>
        <div class="card-footer">
          <h3>Vijay Varadarajan</h3>
          <h4>Tech Lead</h4>
        </div>
      </div>
      
      <div class="mentors-box">
        <div class="imgBx">
          <img src="https://i.ibb.co/VNnNB0P/team-2.jpg" alt="" />
        </div>
        <div class="card-footer">
          <h3>A N Gokul</h3>
          <h4>Projects Lead</h4>
        </div>
      </div>
      
      <div class="mentors-box">
        <div class="imgBx">
          <img src="https://i.ibb.co/2MP418L/team-3.jpg" alt="" />
        </div>
        <div class="card-footer">
          <h3>Pranav P</h3>
          <h4>App Dev Lead</h4>
        </div>
      </div>
      
      <div class="mentors-box">
        <div class="imgBx">
          <img src="https://i.ibb.co/jGcmRHP/team-4.jpg" alt="" />
        </div>
        <div class="card-footer">
          <h3>Goutham Kurapati</h3>
          <h4>AI/ML Lead</h4>
        </div>
      </div>

      <div class="mentors-box">
        <div class="imgBx">
          <img src="https://i.ibb.co/jGcmRHP/team-4.jpg" alt="" />
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