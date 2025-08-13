"use client";

import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section bd-bottom padding">
      <div className="map"></div>

      <div className="container">
        <div className="row">
          {/* Contact Details */}
          <div className="col-md-6">
            <div className="contact-details-wrap">
              <div className="contact-title">
                <h2>
                  Have Any <span>Questions?</span>
                </h2>
                <p>
                  Get in touch to discuss your employee wellbeing needs today.
                  Please give us a call, drop us an email or fill out the
                  contact form.
                </p>
              </div>
              <ul className="contact-details">
                <li>
                  <i className="fas fa-map-marker-alt"></i>962 Fifth Avenue,
                  <br /> New York, NY10022
                </li>
                <li>
                  <i className="fas fa-envelope"></i>hello@themeaster.net
                  <br />
                  Yourmail@gmail.com
                </li>
                <li>
                  <i className="fas fa-phone"></i>(+123) 456 789 101
                  <br />
                  +1-302-123-4567
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-form">
              <form
                action="contact.php"
                method="post"
                id="ajax_contact"
                className="form-horizontal"
              >
                <div className="contact-title">
                  <h2>
                    Contact With Us! <span></span>
                  </h2>
                </div>

                <div className="contact-form-group">
                  <div className="form-field">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-field message">
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="4"
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-field">
                    <button id="submit" className="default-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>

                <div id="form-messages" className="alert" role="alert"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
