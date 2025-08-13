"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingSection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [rideDate, setRideDate] = useState(null);
  const [rideTime, setRideTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    packageType: "standard",
    passengers: "1",
    startDest: "",
    endDest: "",
  });

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedOption) {
      alert("Please select a vehicle type");
      return;
    }

    const dateStr = rideDate ? rideDate.toLocaleDateString() : "";
    const timeStr = rideTime
      ? rideTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "";

   
    const phoneNumber = "919741672416"; 

    // WhatsApp message
    const message = `*🚖 New Ride Booking Request*
--------------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
🎫 Package: ${formData.packageType}
🧍 Passengers: ${formData.passengers}
📍 From: ${formData.startDest}
📍 To: ${formData.endDest}
📅 Date: ${dateStr}
⏰ Time: ${timeStr}
🚗 Vehicle Type: ${selectedOption}
--------------------------------
Sent from Website Booking Form`;

    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="row pos-relative padding">
          <div className="col-lg-4">
            <div
              className="booking-car wow fade-in-left"
              data-wow-delay="200ms"
            ></div>
          </div>
          <div className="col-lg-8">
            <div className="booking-wrap">
              <div className="section-heading mb-30">
                <h4>
                  <span></span>Online Booking
                </h4>
                <h2 className="white">Book Your Ride</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="booking-form">
                  {/* Name */}
                  <div className="form-field">
                    <i className="las la-user-tie"></i>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <i className="las la-envelope-open"></i>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Package Type */}
                  <div className="form-field select-wrapper">
                    <select
                      name="packageType"
                      className="form-control styled-select"
                      value={formData.packageType}
                      onChange={handleChange}
                      required
                    >
                      <option value="standard">Standard</option>
                      <option value="business">Business</option>
                      <option value="economy">Economy</option>
                      <option value="vip-spacial">VIP Special</option>
                      <option value="comfort">Comfort</option>
                    </select>
                    <i className="las la-tags icon-right"></i>
                  </div>

                  {/* Passengers */}
                  <div className="form-field select-wrapper">
                    <select
                      name="passengers"
                      className="form-control styled-select"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                    </select>
                    <i className="las la-user-friends icon-right"></i>
                  </div>

                  {/* Start Destination */}
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                      type="text"
                      name="startDest"
                      className="form-control"
                      placeholder="Start Destination"
                      value={formData.startDest}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* End Destination */}
                  <div className="form-field">
                    <i className="las la-map-marker"></i>
                    <input
                      type="text"
                      name="endDest"
                      className="form-control"
                      placeholder="End Destination"
                      value={formData.endDest}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Date */}
                  <div className="form-field">
                    <i className="las la-calendar"></i>
                    <DatePicker
                      selected={rideDate}
                      onChange={(date) => setRideDate(date)}
                      placeholderText="Select Date"
                      className="form-control date-picker"
                      dateFormat="MM/dd/yyyy"
                      required
                    />
                  </div>

                  {/* Time */}
                  <div className="form-field">
                    <i className="las la-clock"></i>
                    <DatePicker
                      selected={rideTime}
                      onChange={(time) => setRideTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText="Select Time"
                      className="form-control time-picker"
                      required
                    />
                  </div>

                  {/* Vehicle Type Dropdown */}
                  <div className="form-field select-wrapper">
                    <select
                      className="form-control styled-select"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="" disabled>
                        Book a Driver
                      </option>
                      <option value="Hire Two-Wheeler">Hire Two-Wheeler</option>
                      <option value="Hire Auto">Hire Auto</option>
                      <option value="Hire Car">Hire Car</option>
                    </select>
                    <i className="las la-car-side icon-right"></i>
                  </div>

                  {/* Submit Button */}
                  <div className="form-field">
                    <button id="submit" className="default-btn" type="submit">
                      {selectedOption || "Book a Driver"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
