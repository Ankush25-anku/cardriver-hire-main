"use client";

import React from "react";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section bg-grey">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Testimonials */}
          <div className="col-lg-6">
            <div className="section-heading mb-10">
              <h4>
                <span></span>Client Testimonials
              </h4>
              <h2>Your Trusted Partner for All Transportation Needs</h2>
              <p>
                Professional drivers and reliable vehicles for your comfort and
                safety. From daily commutes to outstation trips, Anand Car
                Driver Hire has you covered.
              </p>
            </div>

            <div className="swiper-outside testi-pagination">
              <div className="testimonial-carousel">
                <div className="swiper-wrapper">
                  {[1, 2, 3].map((_, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="testi-item">
                        <div className="quote-icon">
                          <i className="las la-quote-right"></i>
                        </div>
                        <p>
                          Anand Car Driver Hire made my journey stress-free and
                          comfortable. The driver was courteous, punctual, and
                          highly professional. I will definitely book again!
                        </p>
                        <div className="testi-author">
                          <div className="author-thumb">
                            <img src="assets/img/comment-1.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <h3>
                              Rajesh Kumar <span>Business Owner</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="col-lg-6">
            <div className="feature-wrap">
              <div
                className="section-heading mb-30 wow fade-in-right"
                data-wow-delay="200ms"
              >
                <h4 className="white">
                  <span></span>Why Choose Us!
                </h4>
                <h2 className="white">Why Ride with Anand Car Driver Hire?</h2>
                <p className="white">
                  We provide professional drivers and well-maintained vehicles,
                  ensuring your safety, comfort, and convenience for every trip.
                </p>
              </div>

              <ul className="ridek-features">
                <li className="wow fade-in-right" data-wow-delay="300ms">
                  <div className="feature-icon">
                    <i className="las la-shield-alt"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Safe & Reliable</h3>
                    <p>
                      All our drivers are background-checked and trained for
                      safe driving.
                    </p>
                  </div>
                </li>
                <li className="wow fade-in-right" data-wow-delay="400ms">
                  <div className="feature-icon">
                    <i className="las la-clock"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Punctual Service</h3>
                    <p>
                      We value your time and ensure on-time pickups and
                      drop-offs.
                    </p>
                  </div>
                </li>
                <li className="wow fade-in-right" data-wow-delay="500ms">
                  <div className="feature-icon">
                    <i className="las la-car"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Comfortable Rides</h3>
                    <p>
                      Travel in well-maintained vehicles for a smooth and
                      relaxing experience.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
