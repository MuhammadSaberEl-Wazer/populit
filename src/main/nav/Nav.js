import React, { useState } from "react";
import "./nav.scss";

const Nav = (props) => {
  const [modeName, setmodeName] = useState("Light Mode!");
  let { modeSwitcher } = props;

  let Switcher = () => {
    modeSwitcher();
    if (modeName === "Dark Mode!") {
      setmodeName("Light Mode!");
    } else if (modeName === "Light Mode!") {
      setmodeName("Dark Mode!");
    }
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <div className="container main-navo">
          <a className="navbar-brand" to="#">
            Popul8IT
          </a>

          <button
            type="button"
            className="btn btn-warning works-btn"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            How it works!
          </button>

          <div
            className="modal fade bd-example-modal-lg"
            id="bd-example-modal-lg"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <h2 className="video-header">How it works!</h2>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TX_jUaRaDbg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="form-check form-switch">
            <input
              onClick={() => Switcher()}
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {modeName}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

/*  {/* <div>
            <div className="a-button">
              <a>
                <i
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal-vid1"
                  data-aos="zoom-in"
                >
                  Watch Video
                </i>
              </a>
            </div>

            <div
              className="modal fade"
              id="exampleModal-vid1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Let's get to know each other{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <video
                      id="player"
                      playsInline
                      controls
                      data-poster="/path/to/poster.jpg"
                    >
                      <source
                        src="https://www.youtube.com/watch?v=msE0f7bty6s"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>  */

/* <button className=" btn btn-primary" to="/add">
            Dark Mode!
          </button> */
