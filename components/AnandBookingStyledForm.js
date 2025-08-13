"use client";
import React, { useState } from "react";
import "./anandBookingStyledForm.css";

export default function AnandBookingStyledForm() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    duration: "",
    pickup: "",
    drop: "",
    name: "",
    phone: "",
    special: "",
  });

  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      service,
      date,
      time,
      duration,
      pickup,
      drop,
      name,
      phone,
      special,
    } = formData;

    // Basic validation
    if (
      !service ||
      !date ||
      !time ||
      !duration ||
      !pickup ||
      !drop ||
      !name ||
      !phone
    ) {
      setNotification("Please fill in all required fields before submitting.");
      return;
    }

    // Format WhatsApp message
    const message = `🚗 *New Booking Request*\n
*Service:* ${service}
*Date:* ${date}
*Time:* ${time}
*Duration:* ${duration}
*Pickup:* ${pickup}
*Drop:* ${drop}
*Name:* ${name}
*Phone:* ${phone}
*Special Requirements:* ${special || "N/A"}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = "919741672416"; // Replace with your number (with country code)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp chat in new tab
    window.open(whatsappURL, "_blank");

    // Clear form + show notification
    setNotification(
      "Thank you for your booking request! We will contact you shortly via WhatsApp."
    );
    setFormData({
      service: "",
      date: "",
      time: "",
      duration: "",
      pickup: "",
      drop: "",
      name: "",
      phone: "",
      special: "",
    });
  };

  return (
    <section className="anand-booking-container">
      <h2 className="anand-booking-heading">Quick Booking</h2>
      <form onSubmit={handleSubmit} className="anand-booking-form-layout">
        {/* Row 1: Service Type, Date */}
        <div className="anand-booking-row">
          <div className="anand-booking-group">
            <label>Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select Service</option>
              <option value="driver">Book a Driver</option>
              <option value="bike">Hire Two-Wheeler</option>
              <option value="auto">Hire Auto</option>
              <option value="car">Hire Car</option>
            </select>
          </div>
          <div className="anand-booking-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 2: Time, Duration */}
        <div className="anand-booking-row">
          <div className="anand-booking-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div className="anand-booking-group">
            <label>Duration</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            >
              <option value="">Select Duration</option>
              <option value="4h">4 Hours</option>
              <option value="8h">8 Hours</option>
              <option value="12h">12 Hours</option>
            </select>
          </div>
        </div>

        {/* Row 3: Pickup, Drop */}
        <div className="anand-booking-row">
          <div className="anand-booking-group">
            <label>Pickup Location</label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Enter pickup location"
            />
          </div>
          <div className="anand-booking-group">
            <label>Drop Location</label>
            <input
              type="text"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              placeholder="Enter drop location"
            />
          </div>
        </div>

        {/* Row 4: Name, Phone */}
        <div className="anand-booking-row">
          <div className="anand-booking-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="anand-booking-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
        </div>

        {/* Special Instructions */}
        <div className="anand-booking-group full-width">
          <label>Special Requirements</label>
          <textarea
            name="special"
            value={formData.special}
            onChange={handleChange}
            placeholder="Any special instructions..."
          ></textarea>
        </div>

        <div className="anand-booking-submit-wrap">
          <button type="submit" className="anand-booking-submit-btn">
            📲 Book via WhatsApp
          </button>
        </div>
      </form>

      {notification && <p className="anand-booking-message">{notification}</p>}
    </section>
  );
}
