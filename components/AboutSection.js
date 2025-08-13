"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section padding">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6">
            <div className="about-img">
              <img
                className="about-img1 wow fade-in-left"
                data-wow-delay="200ms"
                src="/assets/img/about-1.png"
                alt="about Anand Car Driver Hire"
              />
              <img
                className="about-img2 wow fade-in-bottom"
                data-wow-delay="400ms"
                src="/assets/img/about-2.png"
                alt="professional drivers"
              />
              <figure className="round-text">
                <img
                  src="/assets/img/experience-text-round.png"
                  alt="experience"
                />
              </figure>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="col-md-6">
            <div
              className="section-heading mb-40 wow fade-in-right"
              data-wow-delay="200ms"
            >
              <h4>
                <span></span>About Anand Car Driver Hire
              </h4>
              <h2>Your Trusted Partner for All Transportation Needs</h2>
              <p>
                At Anand Car Driver Hire, we specialize in providing reliable
                drivers and well-maintained vehicles to meet your everyday
                travel and long-distance needs. Whether it’s a routine commute,
                airport transfer, or an outstation trip, our professional team
                ensures your journey is smooth, safe, and on time.
              </p>
            </div>

            <ul className="about-info wow fade-in-right" data-wow-delay="400ms">
              <li>
                <img
                  className="owner-thumb"
                  src="/assets/img/comment-1.png"
                  alt="founder"
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
                  <span>Call For Booking</span>
                  <a href="tel:5267214392">+91 98765 43210</a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
