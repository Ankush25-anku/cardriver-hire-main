"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import PopupSearchBox from "./PopupSearchBox";

const NavMenuWrapper = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div className="nav-menu-wrapper">
        <div className="container">
          <div className="nav-menu-inner">
            {/* Logo */}
            <div className="site-logo">
              <Link href="/">
                <img src="/assets/img/logo-dark.png" alt="Logo" />
              </Link>
            </div>

            {/* Menu */}
            <div className="header-menu-wrap">
              <ul className="nav-menu">
                <li className="active dropdown_menu">
                  <Link href="/">Home</Link>
                  <ul>
                    <li>
                      <Link href="/">Home Default</Link>
                    </li>
                    <li>
                      <Link href="/index-2">Home Modern</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown_menu">
                  <Link href="/about-us">Company</Link>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/about-company">About Company</Link>
                    </li>
                    <li>
                      <Link href="/our-services">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Services Details</Link>
                    </li>
                    <li>
                      <Link href="/book-taxi">Book a Ride</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown_menu">
                  <Link href="/our-taxi">Our Taxi</Link>
                  <ul>
                    <li>
                      <Link href="/our-taxi">Taxi Lists</Link>
                    </li>
                    <li>
                      <Link href="/taxi-details">Taxi Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown_menu">
                  <Link href="#">Pages</Link>
                  <ul>
                    <li>
                      <Link href="/our-drivers">Our Drivers</Link>
                    </li>
                    <li>
                      <Link href="/driver-details">Driver Details</Link>
                    </li>
                    <li>
                      <Link href="/testimonials">Customer Reviews</Link>
                    </li>
                    <li>
                      <Link href="/faqs">Help &amp; Faq&apos;s</Link>
                    </li>
                    <li>
                      <Link href="/404">404 Error</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown_menu">
                  <Link href="/blog-grid">Blog</Link>
                  <ul>
                    <li>
                      <Link href="/blog-grid">Grid Posts</Link>
                    </li>
                    <li>
                      <Link href="/blog-classic">Classic Posts</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Right side buttons/icons */}
            <div className="menu-right-item">
              <div
                className="search-icon dl-search-icon"
                onClick={handleSearchClick}
              >
                <i className="las la-search"></i>
              </div>
              <div className="sidebox-icon dl-sidebox-icon">
                <i className="las la-bars"></i>
              </div>
              <Link href="/book-taxiride" className="menu-btn">
                Book a Taxi
              </Link>
            </div>

            {/* Mobile menu icon */}
            <div className="mobile-menu-icon">
              <div className="burger-menu">
                <div className="line-menu line-half first-line"></div>
                <div className="line-menu"></div>
                <div className="line-menu line-half last-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupSearchBox show={showSearch} onClose={handleSearchClose} />
    </>
  );
};

export default NavMenuWrapper;
