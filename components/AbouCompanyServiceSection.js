"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";



const services = [
  {
    id: 1,
    title: "Regular Transport",
    image: "/assets/img/service-1.jpg",
    carImage: "/assets/img/car-1.png",
    link: "/service-details",
  },
  {
    id: 2,
    title: "Airport Transport",
    image: "/assets/img/service-2.jpg",
    carImage: "/assets/img/car-1.png",
    link: "/service-details",
  },
  {
    id: 3,
    title: "Luggage Transport",
    image: "/assets/img/service-3.jpg",
    carImage: "/assets/img/car-1.png",
    link: "/service-details",
  },
  {
    id: 4,
    title: "City Transport",
    image: "/assets/img/service-4.jpg",
    carImage: "/assets/img/car-1.png",
    link: "/service-details",
  },
  {
    id: 5,
    title: "Business Transport",
    image: "/assets/img/service-5.jpg",
    carImage: "/assets/img/car-1.png",
    link: "/service-details",
  },
  {
    id: 6,
    title: "Local Transport",
    image: "/assets/img/service-5.jpg",
    carImage: "/assets/img/car-1.png",
    link: "/service-details",
  },
];

const AboutCompanyServiceSection = () => {
  return (
    <section className="service-section bg-grey bd-bottom padding">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-sm-6 padding-15" key={service.id}>
              <div className="service-item">
                <div className="service-thumb">
                                  <Image fill
                      style={{ objectFit: "cover" }} src={service.image} alt="img" />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car">
                                    <Image fill
                        style={{ objectFit: "cover" }} src={service.carImage} alt="car" />
                  </div>
                </div>
                <div className="service-content">
                  <h3>
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p>
                    Everything your taxi business needs is already here! Ridek
                    made for taxi service companies!
                  </p>
                  <Link className="read-more" href={service.link}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyServiceSection;
