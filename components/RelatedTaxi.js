"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const taxis = [
  {
    title: "BMW X5 2008",
    location: "Chicago",
    pricePerKm: "$2.50/km",
    initialCharge: "$2.50",
    perMile: "$4.20",
    perTraffic: "$1.50",
    passengers: "4 Person",
    img: "/assets/img/pricing-car.png",
  },
  {
    title: "Mercedes-Benz",
    location: "Florida",
    pricePerKm: "$3.50/km",
    initialCharge: "$2.50",
    perMile: "$4.20",
    perTraffic: "$1.50",
    passengers: "4 Person",
    img: "/assets/img/pricing-car.png",
  },
  {
    title: "Hyundai 2022",
    location: "New York",
    pricePerKm: "$4.50/km",
    initialCharge: "$2.50",
    perMile: "$4.20",
    perTraffic: "$1.50",
    passengers: "4 Person",
    img: "/assets/img/pricing-car.png",
  },
  {
    title: "BMW X5 2008",
    location: "Chicago",
    pricePerKm: "$2.50/km",
    initialCharge: "$2.50",
    perMile: "$4.20",
    perTraffic: "$1.50",
    passengers: "4 Person",
    img: "/assets/img/pricing-car.png",
  },
];

const RelatedTaxi = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="related-taxi bg-grey padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h4>
            <span></span>Our More Taxis
          </h4>
          <h2>Related Taxis To Ride</h2>
          <p>
            We successfully cope with tasks of varying complexity, provide
            long-term <br />
            guarantees and regularly master new technologies.
          </p>
        </div>

        <div className="taxi-carousel-wrapper">
          {/* Navigation Buttons */}
          <div ref={prevRef} className="custom-nav swiper-button-prev">
            <i className="las la-arrow-left"></i>
          </div>
          <div ref={nextRef} className="custom-nav swiper-button-next">
            <i className="las la-arrow-right"></i>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {taxis.map((taxi, idx) => (
              <SwiperSlide key={idx}>
                <div className="pricing-item">
                  <div className="pricing-head-wrap">
                    <div className="pricing-car">
                      <img src={taxi.img} alt={taxi.title} />
                      <div className="price">{taxi.pricePerKm}</div>
                    </div>
                  </div>
                  <div className="pricing-head">
                    <h3>
                      <Link href="/taxi-details">{taxi.title}</Link>
                    </h3>
                    <span className="location">{taxi.location}</span>
                  </div>
                  <ul className="pricing-list">
                    <li>
                      Initial Charge: <span>{taxi.initialCharge}</span>
                    </li>
                    <li>
                      Per Mile/KM: <span>{taxi.perMile}</span>
                    </li>
                    <li>
                      Per Stopped Traffic: <span>{taxi.perTraffic}</span>
                    </li>
                    <li>
                      Passengers: <span>{taxi.passengers}</span>
                    </li>
                    <li>
                      <Link href="/book-taxi" className="default-btn">
                        Book Taxi Now
                      </Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedTaxi;
