"use client";

import React from "react";

const DownloadSection = () => {
  return (
    <section className="download-section-2 padding">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          {/* Left Side: Content */}
          <div className="col-lg-6">
            <div className="section-heading">
              <h4>
                <span></span>Online Booking
              </h4>
              <h2>Get the Ridek Mobile app and Start Your Journey!</h2>
              <p>
                We successfully cope with tasks of varying complexity, provide long-term guarantees
                and regularly master technologies.
              </p>
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

          {/* Right Side: App Mockup */}
          <div className="col-md-6 d-none d-lg-block">
            <div className="download-mockup wow fade-in-bottom" data-wow-delay="200ms"></div>
            <div className="app-screen wow fade-in-bottom" data-wow-delay="400ms">
              <img src="assets/img/mockup-3.png" alt="App Mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
