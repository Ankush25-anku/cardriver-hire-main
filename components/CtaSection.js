"use client";

import React from "react";

const CtaSection = () => {
  return (
    <section className="cta-section padding">
      <div className="cta-men wow fade-in-bottom" data-wow-delay="200ms"></div>
      <div className="container">
        <div className="cta-content">
          <h2>
            Anand Car Driver Hire <br /> Your Trusted Partner <br />
            for All Transportation Needs
          </h2>
          <p>
            Professional drivers and reliable vehicles for your comfort and
            safety.
            <br />
            From daily commutes to outstation trips, we&apos;ve got you covered.
          </p>
          <div className="cta-call">
            <i className="las la-phone-volume"></i>
            <p>
              <span>Call For Booking</span>
              <a href="tel:5267214392">+91 98765 43210</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
