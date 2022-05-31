import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 ">
            <div className="left-content">© 2022 Popul8IT, All Rights Reserved</div>
          </div>
          <div className="col-xs-12 col-md-6 ">
            <div className="right-content">
              <div className="right-div">
              <a href="#">Contnet</a>
              <a href="#">About</a>
              <a href="#">Support</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
