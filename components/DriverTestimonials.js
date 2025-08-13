"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `Anand Car Driver Hire made my long-distance trip so much easier. The driver was punctual, courteous, and highly professional. I felt safe and comfortable throughout the journey.`,
    name: "Rajesh Kumar",
    position: "Business Owner",
    image: "/assets/img/comment-1.png",
  },
  {
    text: `I regularly hire drivers for my daily commute through Anand Car Driver Hire. They always provide reliable drivers and well-maintained vehicles. Highly recommended for anyone looking for peace of mind while traveling.`,
    name: "Priya Sharma",
    position: "Marketing Executive",
    image: "/assets/img/comment-2.png",
  },
  {
    text: `From airport pickups to outstation trips, Anand Car Driver Hire has been my go-to service. Their professionalism and focus on passenger safety are truly commendable.`,
    name: "Ankit Mehta",
    position: "IT Consultant",
    image: "/assets/img/comment-3.png",
  },
];

const RidekTestimonials = () => {
  const swiperRef = useRef(null);

  return (
    <section className="ridek-testimonial-section bg-grey">
      <div className="ridek-container">
        <div className="ridek-section-heading text-center mb-40">
          <h4>
            <span></span>Client Testimonials
          </h4>
          <h2>Your Trusted Partner for All Transportation Needs</h2>
          <p>
            Professional drivers and reliable vehicles for your comfort and
            safety. From daily commutes to outstation trips, Anand Car Driver
            Hire has you covered.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          loop={true}
          className="ridek-testimonial-swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="ridek-testimonial-card">
                <div className="ridek-quote-icon">
                  <i className="las la-quote-right"></i>
                </div>
                <p>{item.text}</p>
                <div className="ridek-testimonial-author">
                  <div className="ridek-author-thumb">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="ridek-author-info">
                    <h3>
                      {item.name} <span>{item.position}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Review Button */}
        <div className="text-center mt-4">
          <button
            className="default-btn"
            onClick={() => swiperRef.current.slideNext()}
          >
            Next Review →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RidekTestimonials;
