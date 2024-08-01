import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowsDownToPeople, faGlobe, faMoneyCheckDollar, faCircleCheck, faPeopleGroup, faGear, faTree } from '@fortawesome/free-solid-svg-icons';
import "./services.css";

const serviceData = [
  {
    icon: faCircleCheck,
    title: "Attendance App",
    description: "An app that scans Bar Codes in ID cards during events to mark student attendance.",
    link: "/projects/attendance-app"
  },
  {
    icon: faChartLine,
    title: "Exam Paper Hub",
    description: "A platform for VIT students to access and download past CAT and FAT papers.",
    link: "/projects/exam-paper-hub"
  },
  {
    icon: faGlobe,
    title: "Quiz Bot",
    description: "A quiz generator bot that can be used to create quiz questions based on given material.",
    link: "/projects/quiz-bot"
  },
  {
    icon: faGear,
    title: "FAQ Chatbot",
    description: "A chatbot that can answer frequently asked questions about VIT.",
    link: "/projects/faq-chatbot"
  },
  {
    icon: faArrowsDownToPeople,
    title: "Event Hub",
    description: "A platform for all VIT clubs and chapters to promote and manage their events.",
    link: "/projects/event-hub"
  },
  {
    icon: faTree,
    title: "PlantEase",
    description: "An E-Commerce Web application for plant related products with AI functionalities.",
    link: "/projects/plantease"
  },
  {
    icon: faPeopleGroup,
    title: "VIT PL Portal",
    description: "A portal for students of VIT to register and participate in VIT's Premier League games.",
    link: "/projects/vit-pl-portal"
  }
];

function Card({ icon, title, description, link }) {
  return (
    <Link to={link} className="card">
          <div class="basic-card basic-card-dark">
                <div class="card-icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div class="card-content">

                    <span class="card-title">{title}</span>
                    <p class="card-text">
                        {description}
                    </p>
                </div>

                <div class="card-link">
                    <a href={link} title="Read Full">Know More</a>
                </div>
            </div>

    </Link>
  );
}

function Services() {
  return (
    <>
      <div className='container'>
        <h1 className='section-title'>Our Projects</h1>
        <div className='card-category-1'>
          {serviceData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;