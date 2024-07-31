import React, { useState } from "react";
import "./style.css";

const IframeCover = ({ videoURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="wrap">
      <div className={`box-video ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <div className="video-container">
        <iframe width="560" height="315" src={videoURL} title="YouTube video player" frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default IframeCover;
