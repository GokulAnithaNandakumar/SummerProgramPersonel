import React from 'react'
import "./about.css"
import companyLogo from '../../common/Images/logo-black.png'; // Make sure to update the path to your actual logo image file

const About = () => {
  return (
    <div className='about-section-wrapper'>
      <div className='flex flex-col about-hero-section max-width'>
        <div className='logo-frame'>
          <img src={companyLogo} alt="Azero Tech Logo" className='company-logo' />
        </div>
        <div className='about-heading'>
          Azero Tech: Pioneering Technology Solutions in Vellore
        </div>
        <div className='about-sub-heading'>
          Azero Tech is a dynamic tech startup based in Vellore, initiated by a passionate
          community of college students. Our mission is to provide cutting-edge software
          technology solutions tailored to the unique needs of educational institutions and medical
          facilities. With a strong foundation of 10 years of collective experience in technology, we
          are committed to delivering high-quality services at affordable prices.
          <br />
          Azero Tech is a dynamic tech startup based in Vellore, initiated by a passionate
          community of college students. Our mission is to provide cutting-edge software
          technology solutions tailored to the unique needs of educational institutions and medical
          facilities. With a strong foundation of 10 years of collective experience in technology, we
          are committed to delivering high-quality services at affordable prices.
        </div>
      </div>
    </div>
  )
}

export default About
