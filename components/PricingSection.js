"use client";

import React, { useState } from "react";

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("service-driver");

  const allServices = {
    "service-driver": [
      {
        title: "Book a Driver (Local - 4 Hours / 40 KM)",
        location: "Citywide",
        img: "assets/img/velfire.png",
        initial: "₹800",
        perKm: "₹15/km (Extra)",
        waiting: "₹150/hour (Extra)",
        passengers: "4",
      },
      {
        title: "Book a Driver (Local - 8 Hours / 80 KM)",
        location: "Citywide",
        img: "assets/img/velfire.png",
        initial: "₹1,500",
        perKm: "₹15/km (Extra)",
        waiting: "₹150/hour (Extra)",
        passengers: "4",
      },
      {
        title: "Book a Driver (Local - 12 Hours / 120 KM)",
        location: "Citywide",
        img: "assets/img/velfire.png",
        initial: "₹2,000",
        perKm: "₹15/km (Extra)",
        waiting: "₹150/hour (Extra)",
        passengers: "4",
      },
      {
        title: "Book a Driver (Outstation - One Way)",
        location: "Intercity",
        img: "assets/img/velfire.png",
        initial: "₹12/km",
        perKm: "₹12/km",
        waiting: "Driver Allowance ₹500/day",
        passengers: "4",
      },
      {
        title: "Book a Driver (Outstation - Round Trip)",
        location: "Intercity",
        img: "assets/img/velfire.png",
        initial: "₹10/km",
        perKm: "₹10/km",
        waiting: "Driver Allowance ₹500/day",
        passengers: "4",
      },
    ],
    "service-two-wheeler": [
      {
        title: "Hire Two-Wheeler",
        location: "Fast Urban Rides",
        img: "assets/img/bike3.png",
        initial: "₹50 (First 2 KM)",
        perKm: "₹15 (After 2 KM)",
        waiting: "₹5/min",
        passengers: "1",
      },
      {
        title: "Scooter Rental",
        location: "Hourly Packages",
        img: "assets/img/bike3.png",
        initial: "₹300 (2 Hours / 20 KM)",
        perKm: "₹550 (4 Hours / 40 KM)",
        waiting: "₹12/km (Extra KM)",
        passengers: "1",
      },
      {
        title: "Bike with Driver",
        location: "Extended Hour Packages",
        img: "assets/img/bike3.png",
        initial: "₹1,000 (8 Hours / 80 KM)",
        perKm: "₹12/km (Extra KM)",
        waiting: "Night Charges: +25%",
        passengers: "1",
      },
    ],

    "service-auto": [
      {
        title: "Hire Auto",
        location: "Local Areas",
        img: "assets/img/Auto1.png",
        initial: "₹25 (First 2 KM)",
        perKm: "₹12 (After 2 KM)",
        waiting: "₹3/min",
        passengers: "3",
      },
      {
        title: "Auto for Packages",
        location: "Small Cargo",
        img: "assets/img/Auto1.png",
        initial: "₹25 (First 2 KM)",
        perKm: "₹12 (After 2 KM)",
        waiting: "₹3/min",
        passengers: "2",
      },
      {
        title: "Tourist Auto",
        location: "City Sightseeing",
        img: "assets/img/Auto1.png",
        initial: "₹25 (First 2 KM)",
        perKm: "₹12 (After 2 KM)",
        waiting: "₹3/min",
        passengers: "3",
      },
    ],
    "service-car": [
      {
        title: "Sedan (AC)",
        location: "City & Outstation",
        img: "assets/img/range.png",
        initial: "₹1,200 (4H / 40KM)",
        perKm: "₹12 (After 2 KM)",
        waiting: "₹200 / hour (Extra Hour)",
        passengers: "4",
      },
      {
        title: "SUV (AC)",
        location: "City & Outstation",
        img: "assets/img/range.png",
        initial: "₹1,500 (4H / 40KM)",
        perKm: "₹12 (After 2 KM)",
        waiting: "₹250 / hour (Extra Hour)",
        passengers: "6-7",
      },
      {
        title: "Driver Allowance",
        location: "Applicable for Outstation Trips",
        img: "assets/img/range.png",
        initial: "₹500 / day",
        perKm: "-",
        waiting: "-",
        passengers: "-",
      },
    ],
  };

  // helper to render multiline values (accepts string or array)
  const renderLines = (value) => {
    if (Array.isArray(value)) {
      return value.filter(Boolean).map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ));
    }

    // coerce to string, split on newline, filter empty lines
    return String(value || "")
      .split(/\r?\n/)
      .filter((l) => l.trim() !== "")
      .map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ));
  };

  return (
    <section className="pricing-section bg-grey bd-bottom padding">
      <div className="container">
        {/* Section Heading */}
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h4>
            <span></span>Our Services
          </h4>
          <h2>We’ve Got the Right Ride for You!</h2>
          <p>
            From short trips to long journeys — choose the perfect option for
            your needs. Reliable, comfortable, and available anytime.
          </p>
        </div>

        {/* Tabs */}
        <ul className="nav pricing-tab-menu" role="tablist">
          {Object.keys(allServices).map((key) => (
            <li className="nav-item" key={key}>
              <button
                className={`nav-link ${activeTab === key ? "active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {key.replace("service-", "").replace("-", " ").toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Cards */}
        <div className="row">
          {allServices[activeTab].map((service, idx) => (
            <div
              className="col-lg-4 col-md-6 sm-padding"
              key={`${activeTab}-${idx}`}
            >
              <div className="pricing-item">
                <div className="pricing-head-wrap">
                  <div className="pricing-car">
                    <img src={service.img} alt="car" />
                    <div className="price">Custom Rates</div>
                  </div>
                </div>
                <div className="pricing-head">
                  <h3>
                    <a href="service-details.html">{service.title}</a>
                  </h3>
                  <span className="location">{service.location}</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <strong>Initial Charge:</strong> <br />
                    <span>{service.initial}</span>
                  </li>
                  <li>
                    <strong>Per KM:</strong> <br />
                    {renderLines(service.perKm)}
                  </li>
                  <li>
                    <strong>Waiting Charge:</strong> <br />
                    <span>{service.waiting}</span>
                  </li>
                  <li>
                    <strong>Passengers:</strong> <br />
                    <span>{service.passengers}</span>
                  </li>
                  <li>
                    <a href="book-service.html" className="default-btn">
                      Book Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
