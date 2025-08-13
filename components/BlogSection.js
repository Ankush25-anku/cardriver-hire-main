"use client";

import React from "react";

const BlogSection = () => {
  return (
    <section className="blog-section bg-grey padding">
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h4><span></span>Recent Posts!</h4>
          <h2>News And Insights!</h2>
          <p>
            We successfully cope with tasks of varying complexity, provide
            long-term <br /> guarantees and regularly master new technologies.
          </p>
        </div>

        <div className="row grid-post">
          {[
            {
              image: "assets/img/post-1.jpg",
              category: "Business",
              date: "Jan 01 2022",
              author: "Elliot Alderson",
              title: "How to start initiating a startup in few days.",
              link: "blog-details.html",
            },
            {
              image: "assets/img/post-2.jpg",
              category: "Startup",
              date: "Jan 01 2022",
              author: "Elliot Alderson",
              title: "Financial experts support help you to find out.",
              link: "blog-details.html",
            },
            {
              image: "assets/img/post-3.jpg",
              category: "Finance",
              date: "Jan 01 2022",
              author: "Elliot Alderson",
              title: "Innovative business all over the world.",
              link: "blog-details.html",
            },
          ].map((post, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src={post.image} alt="post" />
                  <a href={post.link} className="post-category">
                    {post.category}
                  </a>
                </div>
                <div className="post-content-wrap">
                  <ul className="post-meta">
                    <li>
                      <i className="las la-calendar"></i> {post.date}
                    </li>
                    <li>
                      <i className="las la-user"></i> {post.author}
                    </li>
                  </ul>
                  <div className="post-content">
                    <h3>
                      <a href={post.link} className="hover">
                        {post.title}
                      </a>
                    </h3>
                    <p>
                      Financial experts support or help you to to find out which
                      way you can raise your funds more...
                    </p>
                    <a href={post.link} className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
