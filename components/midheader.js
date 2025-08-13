"use client";

import React from "react";
import Link from "next/link";

const MidHeader = () => {
  return (
    <div className="mid-header">
      <div className="container">
        <div className="mid-header-wrap">
          {/* Site Logo */}
          <div className="site-logo">
            <Link href="/">
              <img src="/assets/img/logo-dark.png" alt="Logo" />
            </Link>
          </div>

          {/* Header Info */}
          <ul className="header-info">
            <li>
              <div className="header-info-icon">
                <i className="las la-phone-volume"></i>
              </div>
              <div className="header-info-text">
                <h3>
                  <span>Call us now</span>
                  <a href="tel:5267214392">+91 98765 43210</a>
                </h3>
              </div>
            </li>
            <li>
              <div className="header-info-icon">
                <i className="las la-envelope-open"></i>
              </div>
              <div className="header-info-text">
                <h3>
                  <span>Email now</span>
                  info@anandcardriverhire.com
                </h3>
              </div>
            </li>
            <li>
              <div className="header-info-icon">
                <i className="las la-map-marked-alt"></i>
              </div>
              <div className="header-info-text">
                <h3>
                  <span>Halk Street</span>
                  Pune, Maharashtra
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
