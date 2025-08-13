"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="about-section padding">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-md-6">
            <div className="about-img">
              <Image
                className="about-img1 wow fade-in-left"
                data-wow-delay="200ms"
                src="/assets/img/about-1.png"
                alt="about Anand Car Driver Hire"
                width={450} // intrinsic width
                height={380}
              />
              <Image
                className="about-img2 wow fade-in-bottom"
                data-wow-delay="400ms"
                src="/assets/img/about-2.png"
                alt="professional drivers"
                width={200}
                height={225}
              />
              <figure className="round-text">
                <Image
                  src="/assets/img/experience-text-round.png"
                  alt="experience"
                  width={187}
                  height={187}
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
                travel and long-distance needs. Whether It&apos;s a routine
                commute, airport transfer, or an outstation trip, our
                professional team ensures your journey is smooth, safe, and on
                time.
              </p>
            </div>

            <ul className="about-info wow fade-in-right" data-wow-delay="400ms">
              <li>
                <Image
                  className="owner-thumb"
                  src="/assets/img/comment-1.png"
                  alt="founder"
                  width={80}
                  height={80}
                />
                <div className="owner">
                  <h4>Founder - CEO</h4>
                  <Image
                    className="signature"
                    src="/assets/img/signature.png"
                    alt="signature"
                    width="140"
                    height={50} // numeric value in pixels (adjust to keep aspect ratio)
                    style={{ width: "140px", height: "auto" }}
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
