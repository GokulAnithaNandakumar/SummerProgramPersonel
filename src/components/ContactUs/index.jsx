import React from 'react';
import "./ContactUs.css";
import Button from '../Common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className='flex absolute-center max-width'>
      <div className="contact-box">
        <div className="contact-links">
          <h2>CONTACT US</h2>
          <div className="links">
            <div className="link">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <div className="link">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div className="link">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
            <div className="link">
              <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="email" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <Button buttonText="Send"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
