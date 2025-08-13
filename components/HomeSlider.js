"use client";

import React from "react";

const HomeSlider = () => {
  return (
    <div className="slider-section">
      <div className="main-slider-2">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="slider-img">
              <img
                src="assets/img/slider-bg.jpg"
                alt="img"
                className="kenburns"
                style={{ animationDuration: "12000ms" }}
              />
            </div>
            <div className="slider-content-wrap d-flex align-items-center text-left">
              <div className="container">
                <div className="slider-content text-center pb-60">
                  <div className="slider-caption medium">
                    <div className="inner-layer">
                      <div data-animation="fade-in-bottom" data-delay="0.3s">
                        Travel securely with us!
                      </div>
                    </div>
                  </div>
                  <div className="slider-caption big">
                    <div className="inner-layer">
                      <div data-animation="fade-in-bottom" data-delay="0.5s">
                        Book your taxi from <br /> anywhare today!
                      </div>
                    </div>
                  </div>
                  <div className="slider-caption small">
                    <div className="inner-layer">
                      <div
                        data-animation="fade-in-bottom"
                        data-delay="0.7s"
                        data-duration="1s"
                      >
                        Everything your taxi business needs is already here! <br />
                        Ridek made for taxi service companies!
                      </div>
                    </div>
                  </div>
                  <div className="slider-btn">
                    <a
                      href="book-taxi.html"
                      className="default-btn"
                      data-animation="fade-in-bottom"
                      data-delay="0.9s"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="slider-img">
              <img
                src="assets/img/slider-bg.jpg"
                alt="img"
                className="kenburns"
                style={{ animationDuration: "12000ms" }}
              />
            </div>
            <div className="slider-content-wrap d-flex align-items-center text-left">
              <div className="container">
                <div className="slider-content text-center pb-60">
                  <div className="slider-caption medium">
                    <div className="inner-layer">
                      <div data-animation="fade-in-bottom" data-delay="0.3s">
                        Travel securely with us!
                      </div>
                    </div>
                  </div>
                  <div className="slider-caption big">
                    <div className="inner-layer">
                      <div data-animation="fade-in-bottom" data-delay="0.5s">
                        Book your taxi from <br /> anywhare today!
                      </div>
                    </div>
                  </div>
                  <div className="slider-caption small">
                    <div className="inner-layer">
                      <div
                        data-animation="fade-in-bottom"
                        data-delay="0.7s"
                        data-duration="1s"
                      >
                        Everything your taxi business needs is already here! <br />
                        Ridek made for taxi service companies!
                      </div>
                    </div>
                  </div>
                  <div className="slider-btn">
                    <a
                      href="book-taxi.html"
                      className="default-btn"
                      data-animation="fade-in-bottom"
                      data-delay="0.9s"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Arrows */}
        <div className="swiper-nav swiper-next">
          <i className="las la-long-arrow-alt-right"></i>
        </div>
        <div className="swiper-nav swiper-prev">
          <i className="las la-long-arrow-alt-left"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
