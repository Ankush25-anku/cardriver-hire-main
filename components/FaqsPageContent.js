"use client";

import React from "react";
import Link from "next/link";

const FaqsPageContent = () => {
  return (
    <section className="faq-blog-section bg-grey padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 sm-padding">
            <div className="accordion faq-accordion" id="faq-accordion">
              {[...Array(5)].map((_, index) => {
                const faqs = [
                  {
                    question: "What makes a good taxi service?",
                    id: "One",
                    expanded: true,
                  },
                  {
                    question: "What is the purpose of a taxi service?",
                    id: "Two",
                  },
                  {
                    question: "How to download the ridek taxi app online?",
                    id: "Three",
                  },
                  {
                    question: "What Should I be Asking For first ride?",
                    id: "Four",
                  },
                  {
                    question: "How Many cars does ridek taxi service Have?",
                    id: "Five",
                  },
                ];
                const faq = faqs[index];
                return (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${faq.expanded ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded={faq.expanded ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className={`accordion-collapse collapse ${faq.expanded ? "show" : ""}`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faq-accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          The restaurants in Hangzhou also catered to many
                          northern Chinese who had fled south from Kaifeng
                          during the Jurchen invasion of the 1120s, while it is
                          also known that many restaurants were run by families.
                          The restaurants in Hangzhou also catered to many
                          northern Chinese who had fled south from Kaifeng
                          during the Jurchen invasion.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-4 sm-padding">
            <div className="sidebar-widget">
              <form className="search-form">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="search-btn" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Categories</h3>
              </div>
              <ul className="category-list">
                {[
                  ["Business Strategy", 23],
                  ["Project Management", 5],
                  ["Digital Marketing", 18],
                  ["Customer Experience", 4],
                  ["Partnership System", 15],
                ].map(([name, count], idx) => (
                  <li key={idx}>
                    <Link href="/blog-grid">{name}</Link>
                    <span>{count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <div className="widget-title">
                <h3>Recent Articles</h3>
              </div>
              <ul className="thumb-post">
                {[
                  ["post-thumb-1.jpg", "How To Go About Initiating An Startup In Few Days."],
                  ["post-thumb-2.jpg", "Financial Experts Support Help You To Find Out."],
                  ["post-thumb-3.jpg", "Innovative Helping Business All Over The World."],
                ].map(([img, title], idx) => (
                  <li key={idx}>
                    <div className="thumb">
                      <img src={`/assets/img/${img}`} alt="thumb" />
                    </div>
                    <div className="thumb-post-info">
                      <h3>
                        <Link href="/blog-details">{title}</Link>
                      </h3>
                      <Link href="#" className="date">
                        Jan 01 2022
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

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
                ].map((tag, idx) => (
                  <li key={idx}>
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

export default FaqsPageContent;
