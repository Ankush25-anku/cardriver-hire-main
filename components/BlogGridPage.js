"use client";

import Link from "next/link";
import React from "react";

const BlogGridPage = () => {
  return (
    <section className="blog-section blog-page bg-grey padding">
      <div className="container">
        <div className="row">
          {/* Blog Grid Posts */}
          <div className="col-lg-8 sm-padding">
            <div className="row grid-post">
              {[
                {
                  img: "assets/img/post-1.jpg",
                  category: "Business",
                  title: "How to Start initiating an startup in few days.",
                  date: "Jan 01 2022",
                  author: "Elliot Alderson",
                },
                {
                  img: "assets/img/post-2.jpg",
                  category: "Startup",
                  title: "Financial experts support help you to find out.",
                  date: "Jan 01 2022",
                  author: "Elliot Alderson",
                },
                {
                  img: "assets/img/post-3.jpg",
                  category: "Finance",
                  title: "Innovative business all over the world.",
                  date: "Jan 01 2022",
                  author: "Elliot Alderson",
                },
                {
                  img: "assets/img/post-4.jpg",
                  category: "Consulting",
                  title: "Fresh startup ideas for digital business",
                  date: "Jan 01 2022",
                  author: "Elliot Alderson",
                },
              ].map((post, index) => (
                <div className="col-md-6 padding-15" key={index}>
                  <div className="post-card">
                    <div className="post-thumb">
                      <img src={post.img} alt="post" />
                      <Link href="/blog-details" className="post-category">
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
                          <Link href="/blog-details" className="hover">
                            {post.title}
                          </Link>
                        </h3>
                        <p>
                          Financial experts support or help you to to find out
                          which way you can raise your funds more...
                        </p>
                        <Link href="/blog-details" className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <ul className="pagination-wrap text-left mt-30">
              <li>
                <Link href="#">
                  <i className="las la-arrow-left"></i>
                </Link>
              </li>
              <li>
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#" className="active">
                  2
                </Link>
              </li>
              <li>
                <Link href="#">3</Link>
              </li>
              <li>
                <Link href="#">
                  <i className="las la-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 sm-padding">
            {/* Search Form */}
            <div className="sidebar-widget">
              <form action="" className="search-form">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="search-btn" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Categories</h3>
              </div>
              <ul className="category-list">
                <li>
                  <Link href="/blog-grid">Business Strategy</Link>
                  <span>23</span>
                </li>
                <li>
                  <Link href="/blog-grid">Project Management</Link>
                  <span>05</span>
                </li>
                <li>
                  <Link href="/blog-grid">Digital Marketing</Link>
                  <span>18</span>
                </li>
                <li>
                  <Link href="/blog-grid">Customer Experience</Link>
                  <span>04</span>
                </li>
                <li>
                  <Link href="/blog-grid">Partnership System</Link>
                  <span>15</span>
                </li>
              </ul>
            </div>

            {/* Recent Articles */}
            <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Recent Articles</h3>
              </div>
              <ul className="thumb-post">
                {[
                  {
                    img: "assets/img/post-thumb-1.jpg",
                    title: "How To Go About Initiating An Startup In Few Days.",
                    date: "Jan 01 2022",
                  },
                  {
                    img: "assets/img/post-thumb-2.jpg",
                    title: "Financial Experts Support Help You To Find Out.",
                    date: "Jan 01 2022",
                  },
                  {
                    img: "assets/img/post-thumb-3.jpg",
                    title: "Innovative Helping Business All Over The World.",
                    date: "Jan 01 2022",
                  },
                ].map((article, index) => (
                  <li key={index}>
                    <div className="thumb">
                      <img src={article.img} alt="thumb" />
                    </div>
                    <div className="thumb-post-info">
                      <h3>
                        <Link href="/blog-details">{article.title}</Link>
                      </h3>
                      <Link href="#" className="date">
                        {article.date}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Tags</h3>
              </div>
              <ul className="tags">
                {[
                  "business",
                  "marketing",
                  "startup",
                  "design",
                  "consulting",
                  "strategy",
                  "development",
                  "tips",
                  "Seo",
                ].map((tag, index) => (
                  <li key={index}>
                    <Link href="#">{tag}</Link>
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

export default BlogGridPage;
