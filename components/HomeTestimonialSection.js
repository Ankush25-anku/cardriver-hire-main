"use client";

import React from "react";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section bd-bottom bg-grey">
      <div className="container">
        <div className="row align-items-center">
          {/* Testimonials Left Side */}
          <div className="col-lg-6">
            <div className="section-heading mb-10">
              <h4>
                <span></span>Clients Testimonial
              </h4>
              <h2>Ridek Passenger Reviews...</h2>
              <p>
                We successfully cope with tasks of varying complexity, provide long-term guarantees
                and regularly master technologies.
              </p>
            </div>

            <div className="swiper-outside testi-pagination">
              <div className="testimonial-carousel">
                <div className="swiper-wrapper">
                  {[1, 2, 3].map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="testi-item">
                        <div className="quote-icon">
                          <i className="las la-quote-right"></i>
                        </div>
                        <p>
                          Good to have transportation available in places and times it is otherwise
                          hard to find, but the app has always been a bit difficult to use
                          especially how it works or doesn’t with large font phone settings.
                        </p>
                        <div className="testi-author">
                          <div className="author-thumb">
                            <img src="assets/img/comment-1.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <h3>
                              Eredrik Johanson <span>Financial .INC</span>
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

          {/* Why Choose Us Right Side */}
          <div className="col-lg-6">
            <div className="feature-wrap">
              <div className="section-heading mb-30 wow fade-in-right" data-wow-delay="200ms">
                <h4 className="white">
                  <span></span>Why Choose Us!
                </h4>
                <h2 className="white">Why Ride with Ridek?</h2>
                <p className="white">
                  We successfully cope with tasks of varying complexity, provide long-term
                  guarantees and regularly master technologies.
                </p>
              </div>

              <ul className="ridek-features">
                <li className="wow fade-in-right" data-wow-delay="300ms">
                  <div className="feature-icon">
                    <i className="las la-gem"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Safe Guarantee</h3>
                    <p>
                      We successfully cope with tasks of <br /> varying complexity!
                    </p>
                  </div>
                </li>
                <li className="wow fade-in-right" data-wow-delay="400ms">
                  <div className="feature-icon">
                    <i className="las la-taxi"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Fast Pickups</h3>
                    <p>
                      We successfully cope with tasks of <br /> varying complexity!
                    </p>
                  </div>
                </li>
                <li className="wow fade-in-right" data-wow-delay="500ms">
                  <div className="feature-icon">
                    <i className="las la-tachometer-alt"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Quick Ride</h3>
                    <p>
                      We successfully cope with tasks of <br /> varying complexity!
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
