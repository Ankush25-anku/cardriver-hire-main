"use client";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";
import "./herosection.css";

export default function HeroSection() {
  return (
    <section className="anand-hero-container">
      <h2 className="anand-hero-heading">
        Your Trusted Partner for All Transportation Needs
      </h2>
      <p className="anand-hero-subtitle">
        Professional drivers and reliable vehicles for your comfort and safety. From daily
        commutes to outstation trips, we've got you covered.
      </p>
      <div className="anand-hero-badges">
        <div className="anand-badge anand-badge-blue">
          <FiCheckCircle />
          <span>Safe & Reliable</span>
        </div>
        <div className="anand-badge anand-badge-green">
          <FiClock />
          <span>24/7 Available</span>
        </div>
        <div className="anand-badge anand-badge-purple">
          <FaRupeeSign />
          <span>Affordable Rates</span>
        </div>
      </div>
    </section>
  );
}
