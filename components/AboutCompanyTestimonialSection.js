"use client";

import React from "react";

const testimonials = [
  {
    text: `Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings.`,
    author: "Eredrik Johanson",
    company: "Financial .INC",
    image: "/assets/img/comment-1.png",
  },
  {
    text: `Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings.`,
    author: "Eredrik Johanson",
    company: "Financial .INC",
    image: "/assets/img/comment-1.png",
  },
  {
    text: `Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings.`,
    author: "Eredrik Johanson",
    company: "Financial .INC",
    image: "/assets/img/comment-1.png",
  },
];

const features = [
  {
    icon: "las la-gem",
    title: "Safe Guarantee",
    description: "We successfully cope with tasks of varying complexity!",
  },
  {
    icon: "las la-taxi",
    title: "Fast Pickups",
    description: "We successfully cope with tasks of varying complexity!",
  },
  {
    icon: "las la-tachometer-alt",
    title: "Quick Ride",
    description: "We successfully cope with tasks of varying complexity!",
  },
];

const TestimonialFeatureSection = () => {
  return (
    <section className="testimonial-section bg-grey">
      <div className="container">
        <div className="row align-items-center">
          {/* Testimonial Left */}
          <div className="col-lg-6">
            <div className="section-heading mb-10">
              <h4>
                <span></span>Clients Testimonial
              </h4>
              <h2>Ridek Passenger Reviews...</h2>
              <p>
                We successfully cope with tasks of varying complexity, provide
                long-term guarantees and regularly master technologies.
              </p>
            </div>

            <div className="swiper-outside testi-pagination">
              <div className="testimonial-carousel">
                <div className="swiper-wrapper">
                  {testimonials.map((item, idx) => (
                    <div className="swiper-slide" key={idx}>
                      <div className="testi-item">
                        <div className="quote-icon">
                          <i className="las la-quote-right"></i>
                        </div>
                        <p>{item.text}</p>
                        <div className="testi-author">
                          <div className="author-thumb">
                            <img src={item.image} alt="author" />
                          </div>
                          <div className="author-info">
                            <h3>
                              {item.author} <span>{item.company}</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          {/* Features Right */}
          <div className="col-lg-6">
            <div className="feature-wrap">
              <div className="section-heading mb-30">
                <h4 className="white">
                  <span></span>Why Choose Us!
                </h4>
                <h2 className="white">Why Ride with Ridek?</h2>
                <p className="white">
                  We successfully cope with tasks of varying complexity, provide
                  long-term guarantees and regularly master technologies.
                </p>
              </div>

              <ul className="ridek-features">
                {features.map((feature, idx) => (
                  <li key={idx}>
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h3>{feature.title}</h3>
                      <p>
                        We successfully cope with tasks of <br />
                        varying complexity!
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialFeatureSection;
