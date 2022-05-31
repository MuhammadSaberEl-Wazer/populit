import React from "react";
import "./workflow.scss";

const Workflow = () => {
  return (
    <div className="workflow">
      <div className="container">
        <div className="inline-div"></div>
        <div className="flexo">
          <div className="workflow-1">
            <h2>Built For Your Workflow</h2>
          </div>
          <div className="workflow-2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat
              cupidatat non proident, sunt in culpa qui.
            </p>
          </div>
          <div className="workflow-3">
            <div className="row">
              <div
                className="item-container-text col-xs-12 col-md-6 largy"
                data-aos="zoom-in-up"
              >
                <div className="item-text">
                  <h2>Elements Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua — Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div
                className="item-container-img col-xs-12 col-md-6 "
                data-aos="zoom-in-up"
              >
                <div className="item-img">
                  <img
                    src={require("../../../workflow/features-split-image-01.png")}
                    alt="workflow-img"
                  />
                </div>
              </div>

              <div
                className="item-container-text col-xs-12 col-md-6 smally"
                data-aos="zoom-in-up"
              >
                <div className="item-text">
                  <h2>Elements Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua — Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div
                className="item-container-img col-xs-12 col-md-6"
                data-aos="zoom-in-down"
              >
                <div className="item-img">
                  <img
                    src={require("../../../workflow/features-split-image-02.png")}
                    alt="workflow-img"
                  />
                </div>
              </div>

              <div
                className="item-container-text col-xs-12 col-md-6 "
                data-aos="zoom-in-down"
              >
                <div className="item-text">
                  <h2>Elements Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua — Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div
                className="item-container-text col-xs-12 col-md-6 largy "
                data-aos="zoom-in-up"
              >
                <div className="item-text">
                  <h2>Elements Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua — Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div
                className="item-container-img col-xs-12 col-md-6"
                data-aos="zoom-in-up"
              >
                <div className="item-img">
                  <img
                    src={require("../../../workflow/features-split-image-03.png")}
                    alt="workflow-img"
                  />
                </div>
              </div>
              <div
                className="item-container-text text-down col-xs-12 col-md-6 smally "
                data-aos="zoom-in-up"
              >
                <div className="item-text">
                  <h2>Elements Management</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua — Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
