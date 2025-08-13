"use client";

import React from "react";
import Link from "next/link";

const PopupSidebox = () => {
  return (
    <>
      <div id="popup-sidebox" className="popup-sidebox">
        <div className="sidebox-content">
          <div className="site-logo">
            <Link href="/">
              <img src="/assets/img/logo-light.png" alt="logo" />
            </Link>
          </div>
          <p>
            Everything your taxi business needs is already here! Ridek, a theme
            made for taxi service companies.
          </p>
          <ul className="sidebox-list">
            <li className="call">
              <span>Call for ride:</span>5267-214-392
            </li>
            <li>
              <span>You can find us at:</span>Halk Street New York, USA - 2386
            </li>
            <li>
              <span>Email now:</span>Info.ridek@mail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebox overlay */}
      <div id="sidebox-overlay"></div>
    </>
  );
};

export default PopupSidebox;
