"use client";

import React from "react";

const DownloadSection = () => {
  return (
    <section className="download-section bd-bottom padding">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div
              className="section-heading wow fade-in-left"
              data-wow-delay="200ms"
            >
              <h4>
                <span></span>Book a Driver
              </h4>
              <h2>Get the Anand Driver Hire App and Travel Hassle-Free!</h2>
              <p>
                From quick city commutes to long-distance trips, Anand Driver
                Hire makes it simple to book professional drivers anytime,
                anywhere — ensuring safety, comfort, and reliability.
              </p>

              <ul className="app-feature">
                <li>
                  <i>
                    <img
                      className="feature-icon"
                      src="assets/img/icon-navigator.svg"
                      alt="icon"
                    />
                  </i>
                  <h3>
                    Find Trusted <br /> Drivers Nearby
                  </h3>
                </li>
                <li>
                  <i>
                    <img
                      className="feature-icon"
                      src="assets/img/icon-clock.svg"
                      alt="icon"
                    />
                  </i>
                  <h3>
                    On-Time Pickups <br /> Every Time
                  </h3>
                </li>
                <li>
                  <i>
                    <img
                      className="feature-icon"
                      src="assets/img/icon-docs.svg"
                      alt="icon"
                    />
                  </i>
                  <h3>
                    Transparent Rates <br /> No Hidden Fees
                  </h3>
                </li>
              </ul>

              <div className="download-btn">
                <a href="#">
                  <img src="assets/img/google-play.svg" alt="PlayStore" />
                </a>
                <a href="#">
                  <img src="assets/img/app-store.svg" alt="AppStore" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Image Holder) */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="taxi-holder">
              <div
                className="taxi wow fade-in-left"
                data-wow-delay="300ms"
              ></div>
              <div
                className="mockup wow fade-in-bottom"
                data-wow-delay="400ms"
              ></div>
              <div
                className="charecter wow fade-in-right"
                data-wow-delay="500ms"
              ></div>
              {/* <img
                className="location-marker"
                src="assets/img/location-marker.png"
                alt="location"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
