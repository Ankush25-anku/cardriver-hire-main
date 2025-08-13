"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Félix Lengyel",
      car: "BMW X5 2008",
      image: "/assets/img/team-1.jpg",
    },
    {
      name: "Henry Nathan",
      car: "Mercedes‑Benz",
      image: "/assets/img/team-2.jpg",
    },
    {
      name: "Brandon Larned",
      car: "Hyundai 2022",
      image: "/assets/img/team-3.jpg",
    },
    {
      name: "Sasha Hostyn",
      car: "Toyota XCorola",
      image: "/assets/img/team-4.jpg",
    },
  ];

  return (
    <section className="team-section padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h4>
            <span></span>Lets Go With Us!
          </h4>
          <h2>Our Expert Drivers</h2>
          <p>
            We successfully cope with tasks of varying complexity, provide
            long-term <br />
            guarantees and regularly master new technologies.
          </p>
        </div>

        <div className="row">
          {teamMembers.map((driver, index) => (
            <div className="col-lg-3 col-md-6 sm-padding" key={index}>
              <div className="team-item">
                <div className="team-thumb">
                  <img src={driver.image} alt="thumb"
                   />
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

export default TeamSection;
