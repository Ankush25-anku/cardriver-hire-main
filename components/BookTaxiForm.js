"use client";

import React from "react";

const BookTaxiForm = () => {
  return (
    <div className="taxi-booking bg-grey padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <form action="book-ride.php" id="book-taxi-ride">
              <div className="taxi-booking-form">
                <div className="form-field">
                  <i className="las la-user-tie"></i>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-field">
                  <i className="las la-envelope-open"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-field">
                  <i className="las la-tags"></i>
                  <select
                    name="package-type"
                    id="package-type"
                    className="niceSelect"
                  >
                    <option value="standard">Standard</option>
                    <option value="business">Business</option>
                    <option value="economy">Economy</option>
                    <option value="vip-spacial">VIP Spacial</option>
                    <option value="comfort">Comfort</option>
                  </select>
                </div>
                <div className="form-field">
                  <i className="las la-user-friends"></i>
                  <select
                    name="passengers"
                    id="passengers"
                    className="niceSelect"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Person</option>
                    <option value="3">3 Person</option>
                    <option value="4">4 Person</option>
                    <option value="5">5 Person</option>
                  </select>
                </div>
                <div className="form-field">
                  <i className="las la-map-marker"></i>
                  <input
                    type="text"
                    id="start-dest"
                    name="start-dest"
                    className="form-control"
                    placeholder="Start Destination"
                    required
                  />
                </div>
                <div className="form-field">
                  <i className="las la-map-marker"></i>
                  <input
                    type="text"
                    id="end-dest"
                    name="end-dest"
                    className="form-control"
                    placeholder="End Destination"
                    required
                  />
                </div>
                <div className="form-field">
                  <i className="las la-calendar"></i>
                  <input
                    type="text"
                    id="ride-date"
                    name="ride-date"
                    className="form-control date-picker"
                    placeholder="Select Date"
                    required
                  />
                </div>
                <div className="form-field">
                  <i className="las la-clock"></i>
                  <input
                    type="text"
                    id="ride-time"
                    name="ride-time"
                    className="form-control time-picker"
                    placeholder="Select Time"
                    required
                  />
                </div>
                <div className="form-field">
                  <button id="submit" className="default-btn" type="submit">
                    Book Your Taxi
                  </button>
                </div>
              </div>
              <div id="form-messages" className="alert" role="alert"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTaxiForm;
