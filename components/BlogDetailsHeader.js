"use client";

import React from "react";

const BlogDetailsHeader = () => {
  return (
    <section className="page-header blog-details">
      <div className="container">
        <div className="page-header-info text-center">
          <h4>Blog Details</h4>
          <h2>
            Fresh Startup Ideas For <br /> Digital Business
          </h2>
          <p>
            Our versatile team is built of designers, developers and <br />
            digital marketers who all bring unique experience.
          </p>
          <ul className="post-meta">
            <li>
              <i className="las la-user"></i>Elliot Alderson
            </li>
            <li>
              <i className="las la-calendar"></i>Jan 01 2022
            </li>
            <li>
              <i className="las la-comments"></i>Comments 0
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsHeader;
