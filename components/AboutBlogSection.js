"use client";

import React from "react";
import Link from "next/link";

const BlogSection = () => {
  const posts = [
    {
      title: "How to start initiating a startup in few days.",
      category: "Business",
      date: "Jan 01 2022",
      author: "Elliot Alderson",
      image: "/assets/img/post-1.jpg",
      excerpt:
        "Financial experts support or help you to to find out which way you can raise your funds more...",
      link: "/blog-details",
    },
    {
      title: "Financial experts support help you to find out.",
      category: "Startup",
      date: "Jan 01 2022",
      author: "Elliot Alderson",
      image: "/assets/img/post-2.jpg",
      excerpt:
        "Financial experts support or help you to to find out which way you can raise your funds more...",
      link: "/blog-details",
    },
    {
      title: "Innovative business all over the world.",
      category: "Finance",
      date: "Jan 01 2022",
      author: "Elliot Alderson",
      image: "/assets/img/post-3.jpg",
      excerpt:
        "Financial experts support or help you to to find out which way you can raise your funds more...",
      link: "/blog-details",
    },
  ];

  return (
    <section className="blog-section bg-grey padding">
      <div className="container">
        <div className="section-heading text-center mb-40">
          <h4>
            <span></span>Recent Posts!
          </h4>
          <h2>News And Insights!</h2>
          <p>
            We successfully cope with tasks of varying complexity, provide
            long-term <br />
            guarantees and regularly master new technologies.
          </p>
        </div>

        <div className="row grid-post">
          {posts.map((post, index) => (
            <div className="col-lg-4 col-md-6 padding-15" key={index}>
              <div className="post-card">
                <div className="post-thumb">
                  <img src={post.image} alt="post" />
                  <Link href={post.link} className="post-category">
                    {post.category}
                  </Link>
                </div>
                <div className="post-content-wrap">
                  <ul className="post-meta">
                    <li>
                      <i className="las la-calendar"></i>
                      {post.date}
                    </li>
                    <li>
                      <i className="las la-user"></i>
                      {post.author}
                    </li>
                  </ul>
                  <div className="post-content">
                    <h3>
                      <Link href={post.link} className="hover">
                        {post.title}
                      </Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <Link href={post.link} className="read-more">
                      Read More
                    </Link>
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
