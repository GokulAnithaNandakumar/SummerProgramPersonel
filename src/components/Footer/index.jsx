import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import iet_logo from "../../common/Images/iet_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contain max-width">
        <div className="col">
          <h1>SUMMER PROGRAM'24</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>
        <div className="col projects-col">
          <h1>Projects</h1>
          <div className="projects-grid">
            <div className="projects-column">
              <ul>
                <li><Link to="/projects/exam-paper-hub">ExamPaper Hub</Link></li>
                <li><Link to="/projects/faq-chatbot">FAQ Chatbot</Link></li>
                <li><Link to="/projects/quiz-bot">Quiz bot</Link></li>
                <li><Link to="/projects/plantease">PlantEase</Link></li>
              </ul>
            </div>
            <div className="projects-column">
              <ul>
                <li><Link to="/projects/attendance-app">Attendance App</Link></li>
                <li><Link to="/projects/event-hub">Event Hub</Link></li>
                <li><Link to="/projects/vit-pl-portal">VIT PL Portal</Link></li>
                <li><Link to="/projects/smart-menu">Smart Menu</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{marginBottom: "30px"}}>
            <Link to="https://ietvit.co"><img src={iet_logo} alt="" height="50" width="90" /></Link>
          </div>

          <h1>Socials</h1>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/company/ietvit/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ietvit/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCGaH_LnucepnbSRjbGFATGw" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>

          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Footer;