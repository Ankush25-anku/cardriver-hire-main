"use client";

import React from "react";
import Link from "next/link";

const BlogDetailsSection = () => {
  return (
    <section className="blog-section blog-page bg-grey padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="post-details">
              <div className="post-thumb">
                <img src="assets/img/post-1.jpg" alt="img" />
              </div>

              <p>
                Financial experts support or help you to to find out which way you can raise your funds more. Arkit a trusted name for providing assistants. Initially their main objective was to ensure the service they provide these people are loyal to their industry, experienced and professional.
              </p>

              <p>
                Unless you are the one who really cares about this, it is not terribly important. What all matters are how your hybrid mobile application development is going to work in the long run as no one will care about how it was built.
              </p>

              <blockquote>
                <i className="fas fa-quote-right"></i>
                There are no secrets to success. It is the result preparation, hard work and learning from failure.
                <span>- Winston Churchill.</span>
              </blockquote>

              <p>
                There are some big shifts taking place in the field of construction equipment mathematics. Starting with the integration of mathematics devices in vehicles right from the manufacturers, to the standardization and integration of mathematics data across various business functions, the future of mathematics has never seemed so full of potential for fleet-based businesses.
              </p>

              <ul className="post-details-gallery">
                <li><img src="assets/img/post-1.jpg" alt="img" /></li>
                <li><img src="assets/img/post-2.jpg" alt="img" /></li>
              </ul>

              <h3>Creative approach to every project</h3>

              <p>
                Financial experts support or help you to to find out which way you can raise your funds more. Arkit a trusted name for providing assistants. Initially their main objective was to ensure the service they provide these people are loyal to their industry, experienced and professional.
              </p>
              <p>
                Another speaker, John Meuse, senior director of heavy equipment at Waste Management Inc., echoed this, citing a cost-saving of $17,000 for the company when it cut idling time of a single Caterpillar 966 wheel loader.
              </p>

              {/* Tags */}
              <ul className="tags">
                <li><Link href="#">Business</Link></li>
                <li><Link href="#">Marketing</Link></li>
                <li><Link href="#">Startup</Link></li>
                <li><Link href="#">Design</Link></li>
              </ul>

              {/* Post Navigation */}
              <ul className="post-navigation">
                <li>
                  <Link href="/blog-details">
                    <span><i className="las la-angle-left"></i>Previous</span>
                    How To Start Initiating An Startup In Few Days.
                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">
                    <span>Next<i className="las la-angle-right"></i></span>
                    Fresh Startup Ideas For Digital Business.
                  </Link>
                </li>
              </ul>

              {/* Author Box */}
              <div className="author-box">
                <div className="author-thumb">
                  <img src="assets/img/auhtor.png" alt="img" />
                </div>
                <div className="author-info">
                  <h3>Elliot Alderson</h3>
                  <p>
                    Our versatile team is built of designers, developers and digital marketers who all bring unique experience.
                  </p>
                  <ul className="social-icon">
                    <li><Link href="#"><i className="lab la-facebook-f"></i></Link></li>
                    <li><Link href="#"><i className="lab la-twitter"></i></Link></li>
                    <li><Link href="#"><i className="lab la-instagram"></i></Link></li>
                    <li><Link href="#"><i className="lab la-behance"></i></Link></li>
                  </ul>
                </div>
              </div>

              {/* Comments Section */}
              <h3 className="comment-title">Post Comments</h3>
              <ul className="comments-box">
                <li className="comment">
                  <div className="comment-inner">
                    <div className="comment-thumb">
                      <img src="assets/img/comment-1.png" alt="img" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comments-meta">
                        <h4>Ashton Porter <span>Jan 01, 2022 at 8:00</span></h4>
                      </div>
                      <div className="comment-area">
                        <p>
                          You guys have put so much work, effort, and time while designing this awesome theme I can see that passion when I incorporated it into my website.
                        </p>
                        <Link href="#" className="reply">Reply</Link>
                      </div>
                    </div>
                  </div>
                  {/* Nested Comment */}
                  <ul className="children">
                    <li className="comment">
                      <div className="comment-inner">
                        <div className="comment-thumb">
                          <img src="assets/img/comment-2.png" alt="img" />
                        </div>
                        <div className="comment-wrap">
                          <div className="comments-meta">
                            <h4>Melania Trump <span>Jan 01, 2022 at 8:00</span></h4>
                          </div>
                          <div className="comment-area">
                            <p>
                              The only thing I LOVE more than this theme and it’s incredible options is the support team! They are freaking amazable!
                            </p>
                            <Link href="#" className="reply">Reply</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="comment">
                  <div className="comment-inner">
                    <div className="comment-thumb">
                      <img src="assets/img/comment-3.png" alt="img" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comments-meta">
                        <h4>Elliot Alderson <span>Jan 01, 2022 at 8:00</span></h4>
                      </div>
                      <div className="comment-area">
                        <p>
                          Outstanding quality in this theme, brilliant Effects and perfect crafted Code. We absolutely love it and can highly recommend DynamicLayers!
                        </p>
                        <Link href="#" className="reply">Reply</Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Comment Form */}
              <h3 className="comment-title">Leave a Comment</h3>
              <form action="#" method="post" className="comment-form form-horizontal">
                <div className="form-group row">
                  <div className="col-sm-6 padding-15">
                    <input type="text" id="name" name="name" className="form-control" placeholder="Name*" required />
                  </div>
                  <div className="col-sm-6 padding-15">
                    <input type="email" id="email" name="email" className="form-control" placeholder="Email*" required />
                  </div>
                  <div className="col-md-12 padding-15">
                    <textarea id="comment" name="comment" rows="5" className="form-control comment" placeholder="Your Comment*" required></textarea>
                  </div>
                  <div className="col-md-12 padding-15">
                    <button id="submit" className="default-btn" type="submit">
                      Submit Comment<span></span>
                    </button>
                    <div id="form-messages" className="alert" role="alert"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
