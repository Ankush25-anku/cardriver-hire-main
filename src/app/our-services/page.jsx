"use client";

import React from "react";
import AboutPageheader from "../../../components/AboutPageHeader";
import AboutCompanyServiceSection from "../../../components/AbouCompanyServiceSection";
import CtaSection from "../../../components/CtaSection";
import AboutBlogSection from "../../../components/AboutBlogSection";

const page = () => {
  return (
    <div>
      <AboutPageheader />
      <AboutCompanyServiceSection />
      <CtaSection />
      <AboutBlogSection />
    </div>
  );
};

export default page;
