import React from "react";
import "../components/servercard.css"; 
import logo from '../assets/react.svg'; 

const ServerCard = () => {
  return (
    <div className="server-card">
      <div className="background-image">
        <img src={logo} alt="Background" /> 
      </div>
      <div className="server-details">
        <img src={logo} alt="Midjourney Logo" className="server-logo" />
        <div className="server-title">Midjourney</div>
        <div className="server-description">
          The official server for Midjourney, a text-to-image AI where your imagination is the only limit.
        </div>
        <div className="server-stats">
          <span className="online">🟢 929,004 Online</span>
          <span className="members">20,903,880 Members</span>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
