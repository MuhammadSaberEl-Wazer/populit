import React from "react";
import "./team.scss";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="inline-div"></div>
        <div className="flexo">
          <div className="team-1">
            <h2>Meet The Team</h2>
          </div>
          <div className="team-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="team-3">
            <div className="row">
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <img
                      src={require("../../../team/client-1.png")}
                      alt="Team-img"
                    />
                  </div>
                  <div className="item-2">
                    <h3>John Savitskiy</h3>
                    <h5>CEO & CO-FOUNDER</h5>
                  </div>
                  <div className="item-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <img
                      src={require("../../../team/client-8.png")}
                      alt="Team-img"
                    />
                  </div>
                  <div className="item-2">
                    <h3>John Savitskiy</h3>
                    <h5>CEO & CO-FOUNDER</h5>
                  </div>
                  <div className="item-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <img
                      src={require("../../../team/client-3.png")}
                      alt="Team-img"
                    />
                  </div>
                  <div className="item-2">
                    <h3>John Savitskiy</h3>
                    <h5>CEO & CO-FOUNDER</h5>
                  </div>
                  <div className="item-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <img
                      src={require("../../../team/client-4.png")}
                      alt="Team-img"
                    />
                  </div>
                  <div className="item-2">
                    <h3>John Savitskiy</h3>
                    <h5>CEO & CO-FOUNDER</h5>
                  </div>
                  <div className="item-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <img
                      src={require("../../../team/client-6.png")}
                      alt="Team-img"
                    />
                  </div>
                  <div className="item-2">
                    <h3>John Savitskiy</h3>
                    <h5>CEO & CO-FOUNDER</h5>
                  </div>
                  <div className="item-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <img
                      src={require("../../../team/client-7.png")}
                      alt="Team-img"
                    />
                  </div>
                  <div className="item-2">
                    <h3>John Savitskiy</h3>
                    <h5>CEO & CO-FOUNDER</h5>
                  </div>
                  <div className="item-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
