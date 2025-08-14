"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    title: "Book a Driver",
    img: "/assets/img/highway2.jpg",
    car: "/assets/img/Driverimage.png",
    link: "service-details.html",
    delay: "200ms",
  },
  {
    title: "Hire Two-Wheeler",
    img: "/assets/img/bikebg.jpg",
    car: "/assets/img/Bike5.png",
    link: "service-details.html",
    delay: "400ms",
  },
  {
    title: "Hire Auto",
    img: "/assets/img/Auto5.jpg",
    car: "/assets/img/Auto1.png",
    link: "service-details.html",
    delay: "600ms",
  },
  {
    title: "Hire Car",
    img: "/assets/img/service-4.jpg",
    car: "/assets/img/innova-crysta.png",
    link: "service-details.html",
    delay: "0ms",
  },
  {
    title: "Book a Professional Driver",
    img: "/assets/img/service-5.jpg",
    car: "/assets/img/range.png",
    link: "service-details.html",
    delay: "0ms",
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section bg-grey padding">
      <div className="bg-half"></div>
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h4>
            <span></span>Our Services
          </h4>
          <h2 className="white">
            Reliable Drivers & Vehicles <br /> Tailored to Your Needs
          </h2>
          <p>
            From two-wheelers to cars and autos, Anand Car Driver Hire offers a
            full range of transportation options. <br />
            Whether you need a ride or a skilled driver for your own vehicle —
            we&apos;re here to help.
          </p>
        </div>

        <div className="swiper-outside">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="service-carousel"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="service-item wow fade-in-bottom"
                  data-wow-delay={service.delay}
                >
                  <div className="service-thumb">
                    <img src={service.img} alt={service.title} />
                    <div className="service-shape-wrap">
                      <div className="service-shape"></div>
                    </div>
                    <div className="service-car">
                      <img src={service.car} alt="vehicle icon" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3>
                      <a href={service.link}>{service.title}</a>
                    </h3>
                    <p>
                      Need a skilled driver or vehicle? Our professional team is
                      ready for both local and outstation rides, ensuring
                      comfort and reliability.
                    </p>
                    <a className="read-more" href={service.link}>
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
          <div className="swiper-nav swiper-next">
            <i className="las la-long-arrow-alt-right"></i>
          </div>
          <div className="swiper-nav swiper-prev">
            <i className="las la-long-arrow-alt-left"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
