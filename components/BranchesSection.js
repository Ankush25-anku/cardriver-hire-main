"use client";

import React from "react";

const BranchesSection = () => {
  return (
    <section className="branches-section bg-grey padding">
      <div className="container">
        <div className="row branches-lists">
          {/* Sydney Branch */}
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="branches-list">
              <h3>Sydney (Head Office)</h3>
              <ul>
                <li>1 Epping Road</li>
                <li>North Ryde, NSW 2113</li>
                <li>
                  <a href="#">+61 2 9870 7689</a>
                </li>
                <li>
                  <a href="#">email@example.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Brisbane Branch */}
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="branches-list">
              <h3>Brisbane</h3>
              <ul>
                <li>1 Epping Road</li>
                <li>North Ryde, NSW 2113</li>
                <li>
                  <a href="#">+61 2 9870 7689</a>
                </li>
                <li>
                  <a href="#">email@example.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hobart Branch */}
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="branches-list">
              <h3>Hobart</h3>
              <ul>
                <li>1 Epping Road</li>
                <li>North Ryde, NSW 2113</li>
                <li>
                  <a href="#">+61 2 9870 7689</a>
                </li>
                <li>
                  <a href="#">email@example.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Melbourne Branch */}
          <div className="col-lg-3 col-sm-6 sm-padding">
            <div className="branches-list">
              <h3>Melbourne</h3>
              <ul>
                <li>1 Epping Road</li>
                <li>North Ryde, NSW 2113</li>
                <li>
                  <a href="#">+61 2 9870 7689</a>
                </li>
                <li>
                  <a href="#">email@example.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
