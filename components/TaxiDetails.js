"use client";

import React from "react";
import Link from "next/link";

const TaxiDetails = () => {
  return (
    <section className="taxi-details bd-bottom padding">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6">
            <div className="taxi-details-img">
              <img src="assets/img/car-2.png" alt="taxi" />
              <div className="price">
                <i className="las la-tachometer-alt"></i>$0.85/km
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="section-heading">
              <h4>
                <span></span>Introducing
              </h4>
              <h2>Mercedes-Maybach Haute Voiture - 2024</h2>
              <p>
                We successfully cope with tasks of varying complexity, provide
                long-term guarantees and regularly master new technologies. Our
                portfolio includes dozens of successfully completed projects of
                houses of different storeys, with high–quality finishes and good
                repairs. Book your taxi from anywhare today!
              </p>
            </div>

            {/* Features List */}
            <ul className="taxi-features">
              <li>
                <span>
                  <i className="las la-taxi"></i>Car ID:
                </span>{" "}
                7762
              </li>
              <li>
                <span>
                  <i className="las la-compass"></i>Transmission:
                </span>{" "}
                Auto
              </li>
              <li>
                <span>
                  <i className="las la-route"></i>Mileage:
                </span>{" "}
                170K
              </li>
              <li>
                <span>
                  <i className="las la-tools"></i>Engine:
                </span>{" "}
                6.5L LP petrol
              </li>
              <li>
                <span>
                  <i className="las la-sync"></i>Air Condition:
                </span>{" "}
                Yes
              </li>
              <li>
                <span>
                  <i className="las la-briefcase"></i>Luggage Carry:
                </span>{" "}
                4
              </li>
            </ul>

            <Link href="/book-taxi" className="default-btn mt-30">
              Book Your Ride
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiDetails;
