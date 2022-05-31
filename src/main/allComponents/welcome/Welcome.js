import React from "react";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-container">
        <img src={require("../../../pop.webp")} alt="Team-img" />
        
      </div>
    </div>
  );
};

export default Welcome;
