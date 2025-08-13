"use client";

import React from "react";
import Link from "next/link";

const drivers = [
  {
    name: "Félix Lengyel",
    car: "BMW X5 2008",
    img: "/assets/img/team-1.jpg",
  },
  {
    name: "Henry Nathan",
    car: "Mercedes‑Benz",
    img: "/assets/img/team-2.jpg",
  },
  {
    name: "Brandon Larned",
    car: "Hyundai 2022",
    img: "/assets/img/team-3.jpg",
  },
  {
    name: "Sasha Hostyn",
    car: "Toyota XCorola",
    img: "/assets/img/team-4.jpg",
  },
  {
    name: "Fede Sarmiento",
    car: "Toyota XCorola",
    img: "/assets/img/team-5.jpg",
  },
  {
    name: "Mauricio Fernández",
    car: "Hyundai 2022",
    img: "/assets/img/team-6.jpg",
  },
  {
    name: "Javier F. Arébalo",
    car: "Mercedes‑Benz",
    img: "/assets/img/team-7.jpg",
  },
  {
    name: "Martín Nonalaya",
    car: "BMW X5 2008",
    img: "/assets/img/team-8.jpg",
  },
];

const OurDriversPage = () => {
  return (
    <section className="team-section padding">
      <div className="container">
        <div className="row">
          {drivers.map((driver, index) => (
            <div key={index} className="col-lg-3 col-md-6 padding-15">
              <div className="team-item">
                <div className="team-thumb">
                  <img src={driver.img} alt={driver.name} />
                </div>
                <div className="team-content">
                  <h3>
                    <Link href="/driver-details">{driver.name}</Link>
                  </h3>
                  <h4>{driver.car}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDriversPage;
