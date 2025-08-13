"use client";

import React from "react";
import Link from "next/link";

const DriverDetails = () => {
  return (
    <section className="driver-details-section bd-bottom padding">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="section-heading mb-40">
              <h4>
                <span></span>About The Driver!
              </h4>
              <h2>Mauricio Fernández</h2>
              <p>
                We successfully cope with tasks of varying complexity, provide
                long-term guarantees and regularly master new technologies. Our
                portfolio includes dozens of successfully completed projects of
                houses of different storeys, with high–quality finishes and good
                repairs. Book your taxi from anywhere today!
              </p>
            </div>

            <ul className="about-info">
              <li>
                <img
                  className="owner-thumb"
                  src="/assets/img/comment-1.png"
                  alt="thumb"
                />
                <div className="owner">
                  <h4>Founder - CEO</h4>
                  <img
                    className="signature"
                    src="/assets/img/signature.png"
                    alt="signature"
                  />
                </div>
              </li>
              <li>
                <h2>
                  <span>Call For Taxi</span>
                  <a href="tel:5267214392">5267-214-392</a>
                </h2>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="driver-details">
              <img
                src="/assets/img/team-details.jpg"
                alt="driver"
              />
              <div className="experience-box">
                <h3>
                  <span>12+</span>Years Of <br /> Experiences!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverDetails;
