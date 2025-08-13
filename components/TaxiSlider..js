"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TaxiSlider = () => {
  const slides = [
    { id: 1, img: "/assets/img/velfire1.png", alt: "car" },
    { id: 2, img: "/assets/img/bike3.png", alt: "bike" },
  ];

  return (
    <div className="slider-section">
      <div className="main-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
          }}
          pagination={{
            el: ".slider-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 12000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="swiper-wrapper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              {/* Background Image */}
              <div className="slider-img">
                <img
                  src="/assets/img/slider-bg.jpg"
                  alt="background"
                  className="kenburns"
                  style={{ animationDuration: "12000ms" }}
                />
              </div>

              {/* Vehicle Image and Shape */}
              <div
                className={`car-holder ${slide.alt === "bike" ? "bike" : ""}`}
              >
                <img
                  src={slide.img}
                  alt={slide.alt}
                  data-animation="car-animation"
                  data-duration="1.5s"
                />
                <div className="shape">
                  <div
                    data-animation="slide-in-bottom"
                    data-duration="1.5s"
                    data-delay="0.3s"
                  ></div>
                  <div
                    data-animation="fade-in"
                    data-duration="1.5s"
                    data-delay="0.2s"
                  ></div>
                  <div
                    data-animation="slide-in-top"
                    data-duration="1.5s"
                    data-delay="0.5s"
                  ></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="slider-content-wrap d-flex align-items-center text-left">
                <div className="container">
                  <div className="slider-content" style={{ maxWidth: "650px" }}>
                    <div className="slider-caption medium mb-3">
                      <div className="inner-layer">
                        <div data-animation="fade-in-bottom" data-delay="0.3s">
                          Your Trusted Partner For All Transportation Needs
                        </div>
                      </div>
                    </div>

                    <div className="slider-caption big mb-3">
                      <div className="inner-layer">
                        <div data-animation="fade-in-bottom" data-delay="0.5s">
                          Professional Driver &amp; Vehicle Hire Services
                        </div>
                      </div>
                    </div>

                    <div className="slider-caption small mb-4">
                      <div className="inner-layer">
                        <div
                          data-animation="fade-in-bottom"
                          data-delay="0.7s"
                          data-duration="1s"
                        >
                          Professional drivers and reliable vehicles for your
                          comfort and safety. From daily commutes to outstation
                          trips, we've got you covered.
                        </div>
                      </div>
                    </div>

                    <div className="slider-btn">
                      <Link
                        href="/book-taxiride"
                        className="default-btn"
                        data-animation="fade-in-bottom"
                        data-delay="0.9s"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Navigation */}
        <div className="slider-controls">
          <div className="slider-control slider-button-prev">
            <span>
              <i className="las la-long-arrow-alt-left"></i>
            </span>
            Prev
          </div>
          <div className="slider-pagination"></div>
          <div className="slider-control slider-button-next">
            Next
            <span>
              <i className="las la-long-arrow-alt-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiSlider;
