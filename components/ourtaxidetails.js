"use client";

import React from "react";
import Link from "next/link";

const OurTaxiList = () => {
  return (
    <section className="our-taxi padding">
      <div className="container">
        <div className="row">
          {/* Taxi Item 1 */}
          <div className="col-lg-4 col-md-6 sm-padding">
            <div className="pricing-item">
              <div className="pricing-head-wrap">
                <div className="pricing-car">
                  <img src="assets/img/pricing-car.png" alt="car" />
                  <div className="price">$2.50/km</div>
                </div>
              </div>
              <div className="pricing-head">
                <h3>
                  <Link href="/taxi-details">BMW X5 2008</Link>
                </h3>
                <span className="location">Chicago</span>
              </div>
              <ul className="pricing-list">
                <li>
                  Initial Charge: <span>$2.50</span>
                </li>
                <li>
                  Per Mile/KM: <span>$4.20</span>
                </li>
                <li>
                  Per Stopped Traffic: <span>$1.50</span>
                </li>
                <li>
                  Passengers: <span>4 Person</span>
                </li>
                <li>
                  <Link href="/book-taxi" className="default-btn">
                    Book Taxi Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Taxi Item 2 */}
          <div className="col-lg-4 col-md-6 sm-padding">
            <div className="pricing-item">
              <div className="pricing-head-wrap">
                <div className="pricing-car">
                  <img src="assets/img/pricing-car.png" alt="car" />
                  <div className="price">$3.50/km</div>
                </div>
              </div>
              <div className="pricing-head">
                <h3>
                  <Link href="/taxi-details">Mercedes‑Benz</Link>
                </h3>
                <span className="location">Florida</span>
              </div>
              <ul className="pricing-list">
                <li>
                  Initial Charge: <span>$2.50</span>
                </li>
                <li>
                  Per Mile/KM: <span>$4.20</span>
                </li>
                <li>
                  Per Stopped Traffic: <span>$1.50</span>
                </li>
                <li>
                  Passengers: <span>4 Person</span>
                </li>
                <li>
                  <Link href="/book-taxi" className="default-btn">
                    Book Taxi Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Taxi Item 3 */}
          <div className="col-lg-4 col-md-6 sm-padding">
            <div className="pricing-item">
              <div className="pricing-head-wrap">
                <div className="pricing-car">
                  <img src="assets/img/pricing-car.png" alt="car" />
                  <div className="price">$4.50/km</div>
                </div>
              </div>
              <div className="pricing-head">
                <h3>
                  <Link href="/taxi-details">Hyundai 2022</Link>
                </h3>
                <span className="location">New York</span>
              </div>
              <ul className="pricing-list">
                <li>
                  Initial Charge: <span>$2.50</span>
                </li>
                <li>
                  Per Mile/KM: <span>$4.20</span>
                </li>
                <li>
                  Per Stopped Traffic: <span>$1.50</span>
                </li>
                <li>
                  Passengers: <span>4 Person</span>
                </li>
                <li>
                  <Link href="/book-taxi" className="default-btn">
                    Book Taxi Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTaxiList;
