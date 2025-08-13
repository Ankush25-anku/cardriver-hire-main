"use client";
import { FaCar } from "react-icons/fa"; // more accurate icon
import { FiPhoneCall } from "react-icons/fi";
import "./customheader.css";

export default function CustomHeader() {
  return (
    <header className="anand-header">
      {/* Left: Logo & Branding */}
      <div className="anand-left">
        <div className="anand-icon-container">
          <FaCar className="anand-icon" />
        </div>
        <div className="anand-branding">
          <h1 className="anand-title">Anand Car Driver Hire</h1>
          <p className="anand-subtitle">
            Professional Driver & Vehicle Hire Services
          </p>
        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="anand-right">
        <p className="anand-service-text">24/7 Service Available</p>
        <div className="anand-contact">
          <FiPhoneCall className="anand-phone-icon" />
          <span className="anand-phone-number">+91 98765 43210</span>
        </div>
      </div>
    </header>
  );
}
