import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero" data-aos="zoom-in" data-aos-duration="1000">
      <div className="container">
        <div className="flexo">
          <div className="hero-1" >
            <h1>Landing template for startups</h1>
          </div>
          <div className="hero-2" >
            <h6>
              Our landing page template works on all devices,
              <br /> so you only have to set it up once, and get beautiful
              results forever.
            </h6>
          </div>
          <div className="hero-3">
            <button>PRICING AND PLANS</button>
          </div>
          <div className="hero-4">
            <div className="img-container">
              <img src={require("../../../hero.webp")} alt="Hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
