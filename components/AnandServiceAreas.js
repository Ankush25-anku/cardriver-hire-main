"use client";
import { FaMapMarkedAlt, FaCity, FaRoute } from "react-icons/fa";
import "./anandServiceAreas.css";

export default function AnandServiceAreas() {
  return (
    <section className="anand-serviceareas-section">
      <div className="anand-serviceareas-wrapper">
        <h2 className="anand-serviceareas-title">Service Areas</h2>

        <div className="anand-serviceareas-content">
          <h3 className="anand-serviceareas-heading">Currently Serving</h3>
          <p className="anand-serviceareas-description">
            We provide our services in the following areas with plans to expand
            soon
          </p>

          <div className="anand-serviceareas-grid">
            <div className="anand-serviceareas-card">
              <FaMapMarkedAlt className="anand-serviceareas-icon" />
              <h4 className="anand-serviceareas-card-title">Pune City</h4>
              <p className="anand-serviceareas-card-text">
                Complete city coverage including all major areas
              </p>
            </div>

            <div className="anand-serviceareas-card">
              <FaCity className="anand-serviceareas-icon" />
              <h4 className="anand-serviceareas-card-title">Pune Metro</h4>
              <p className="anand-serviceareas-card-text">
                Pimpri-Chinchwad, Wakad, Hinjewadi, Kharadi
              </p>
            </div>

            <div className="anand-serviceareas-card">
              <FaRoute className="anand-serviceareas-icon" />
              <h4 className="anand-serviceareas-card-title">Outstation</h4>
              <p className="anand-serviceareas-card-text">
                Mumbai, Nashik, Kolhapur, Goa, Aurangabad
              </p>
            </div>
          </div>

          <p className="anand-serviceareas-footer-text">
            Don’t see your area? We’re expanding rapidly!
          </p>

          <button className="anand-serviceareas-button">
            + Request New Area
          </button>
        </div>
      </div>
    </section>
  );
}
