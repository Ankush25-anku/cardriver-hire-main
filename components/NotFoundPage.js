"use client";

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/assets/img/slider-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animationDuration: "12000ms", // mimic kenburns effect if needed
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h4>Oops! Where are we?</h4>
        <h2>
          404 Page <span>Not Found!</span>
        </h2>
        <p>
          Page not Found! The page you are looking for was moved,
          <br />
          removed, renamed or might never existed.
        </p>
        <Link href="/">
          <button style={{ marginTop: "30px" }}>Back To Homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
