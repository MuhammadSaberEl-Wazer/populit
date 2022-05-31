import React from "react";
import "./info.scss";
import { ReactComponent as FacebookSvg } from "../../../brands/clients-01.svg";
import { ReactComponent as TinderSvg } from "../../../brands/clients-02.svg";
import { ReactComponent as AirBnBSvg } from "../../../brands/clients-03.svg";
import { ReactComponent as MicrosoftSvg } from "../../../brands/clients-04.svg";
import { ReactComponent as HubSvg } from "../../../brands/clients-05.svg";

import { ReactComponent as Info1 } from "../../../infosvg/feature-tile-icon-01.svg";
import { ReactComponent as Info2 } from "../../../infosvg/feature-tile-icon-02.svg";
import { ReactComponent as Info3 } from "../../../infosvg/feature-tile-icon-03.svg";
import { ReactComponent as Info4 } from "../../../infosvg/feature-tile-icon-04.svg";
import { ReactComponent as Info5 } from "../../../infosvg/feature-tile-icon-05.svg";
import { ReactComponent as Info6 } from "../../../infosvg/feature-tile-icon-06.svg";

const Info = () => {
  return (
    <div className="info ">
      <div className="container">
        <div className="flexo">
          <div className="info-1">
            <div className="brands">
              <div
                className="img-container"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <FacebookSvg />
                <TinderSvg />
                <AirBnBSvg />
                <MicrosoftSvg />
                <HubSvg className="child-5" />
              </div>
            </div>
          </div>
          <div className="info-2">
            <div className="row">
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <Info1 />
                  </div>
                  <div className="item-2">
                    <h2>Join the system</h2>
                  </div>
                  <div className="item-3">
                    <p>
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <Info2 />
                  </div>
                  <div className="item-2">
                    <h2>Join the system</h2>
                  </div>
                  <div className="item-3">
                    <p>
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <Info3 />
                  </div>
                  <div className="item-2">
                    <h2>Join the system</h2>
                  </div>
                  <div className="item-3">
                    <p>
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <Info4 />
                  </div>
                  <div className="item-2">
                    <h2>Join the system</h2>
                  </div>
                  <div className="item-3">
                    <p>
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <Info5 />
                  </div>
                  <div className="item-2">
                    <h2>Join the system</h2>
                  </div>
                  <div className="item-3">
                    <p>
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item-container col-xs-12 col-sm-6 col-md-4">
                <div className="item">
                  <div className="item-1">
                    <Info6 />
                  </div>
                  <div className="item-2">
                    <h2>Join the system</h2>
                  </div>
                  <div className="item-3">
                    <p>
                      A pseudo-Latin text used in web design, layout, and
                      printing in place of things to emphasise design.
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

export default Info;
