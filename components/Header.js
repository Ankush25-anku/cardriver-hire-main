"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Site Preloader */}
      {/* <div className="site-preloader">
        <div className="car">
          <div className="strike"></div>
          <div className="strike strike2"></div>
          <div className="strike strike3"></div>
          <div className="strike strike4"></div>
          <div className="strike strike5"></div>
          <div className="car-detail spoiler"></div>
          <div className="car-detail back"></div>
          <div className="car-detail center"></div>
          <div className="car-detail center1"></div>
          <div className="car-detail front"></div>
          <div className="car-detail wheel"></div>
          <div className="car-detail wheel wheel2"></div>
        </div>
      </div> */}

      {/* Main Header */}
      <header className="main-header">
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap">
              <div className="top-left">
                <p>Anand Car Driver Hire!</p>
              </div>
              <div className="top-right">
                <ul className="top-header-nav">
                  <li>
                    <Link href="/faqs">Help</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQ</Link>
                  </li>
                </ul>
                <ul className="header-social-share">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
