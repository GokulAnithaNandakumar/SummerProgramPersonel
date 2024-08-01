import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowsDownToPeople, faGlobe, faMoneyCheckDollar, faCircleCheck, faPeopleGroup, faGear } from '@fortawesome/free-solid-svg-icons';
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
    description: "A platform for all VIT clubs and chapters to promote and manage their events and activities.",
    link: "/projects/event-hub"
  },
  {
    icon: faPeopleGroup,
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

function Services() {
  return (

      <div>
   <section id="advertisers" className="advertisers-service-sec pt-5 pb-5 max-width">
    
       <div className="container">
           <div className="row">
             <div className="section-header">
               <h2 className="fw-bold">
                 Projects
               </h2>
               <p className="sec-icon">
                 <FontAwesomeIcon icon={faGear} />
               </p>
             </div>
         <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 justify-content-center">
             {serviceData.map((service, index) => (
                 <Link to={service.link} className="text-decoration-none text-dark">
                   <div className="col" key={index}>
                      <div className="service-card">
                        <div className="icon-wrapper">
                          <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>
                          {service.description}
                        </p>
                      </div>
                    </div>
                 </Link>
             ))}
             </div>
           </div> 
        </div>

    </section>
    </div>

  );
}

export default Services;