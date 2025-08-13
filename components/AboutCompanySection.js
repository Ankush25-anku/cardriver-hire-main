"use client";

import React from "react";
import Image from "next/image";

const AboutCompanySection = () => {
  return (
    <section className="about-section padding">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-md-6">
            <div className="section-heading mb-40">
              <h4>
                <span></span>About Our Company
              </h4>
              <h2>
                Feel the difference and Relaxation with Ridek Taxi Company!
              </h2>
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
                <Image
                  className="owner-thumb"
                  src="/assets/img/comment-1.png"
                  alt="thumb"
                />
                <div className="owner">
                  <h4>Founder - CEO</h4>
                  <Image
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

          {/* Right Video/Image Section */}
          <div className="col-md-6">
            <div className="video-box-inner">
              <Image src="/assets/img/about-3.jpg" alt="thumb" />
              <div className="video-box">
                <Image src="/assets/img/about-1.png" alt="thumb" />
                <a
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=lrf-GAYUOkQ"
                  className="dl-video-popup play-btn"
                >
                  <svg
                    enableBackground="new 0 0 41.999 41.999"
                    version="1.1"
                    viewBox="0 0 41.999 41.999"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40  c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20  c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z"></path>
                  </svg>
                  <div className="ripple"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
