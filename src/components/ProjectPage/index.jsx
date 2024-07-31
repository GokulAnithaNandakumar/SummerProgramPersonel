import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import IframeCover from '../iframeCover';

import { FaArrowLeft } from "react-icons/fa";


import './style.css';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  
  if (!project) {
    return <div className="text-center mt-5">Project not found</div>;
  }

  return (
    
    <div id="sub_main">
    <div id="main_container">
      <Link to="/projects" className="">
        <FaArrowLeft className="back-icon" />
      </Link>
      <div id="heading">
                <h1>{project.title}</h1>
      </div>
      
      <hr id="break_line" />
      <IframeCover videoURL={project.videoUrl} />

      <div id='paragraph-container'>
        <div id="paragraph">
              <h2>Description</h2>
              <p>
                {project.description}
              </p>
        </div>
      </div>
      <hr id="break_line" />

      <div id="team">
            <h2>Team</h2>
        
        
          <div className="team-container">
            {project.teamMembers.map((member, index) => (
              <div className="box" key={index}> 
                <div className="content">
                  <div className="initials">
                    {member.split(' ').map(name => name[0]).join('')}
                  </div>
                  <strong>{member}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <br />
        <br />
      </div>
    
        
      </div>
  );
};

export default ProjectPage;