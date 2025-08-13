"use client";

import React from "react";
import AboutPageheader from "../../../components/AboutPageHeader";
import AboutCompanySection from "../../../components/AboutCompanySection";
import ServiceSection from "../../../components/ServiceSection";
import AboutCompanyTestimonialSection from "../../../components/AboutCompanyTestimonialSection";
import AboutTeamSection from "../../../components/AboutTeamSection";
import CtaSection from "../../../components/CtaSection";
import AboutBlogSection from "../../../components/AboutBlogSection";
const page = () => {
  return (
    <div>
      <AboutPageheader />
      <AboutCompanySection />
      <ServiceSection />
      <AboutCompanyTestimonialSection />
      <AboutTeamSection />
      <CtaSection />
      <AboutBlogSection />
    </div>
  );
};

export default page;
