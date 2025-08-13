"use client";

import React from "react";
import AboutPageheader from "../../../components/AboutPageHeader";
import AboutSection from "../../../components/AboutSection"; // adjust path if needed
import ServiceSection from "../../../components/ServiceSection";
import AboutTestimonialSection from "../../../components/AboutTestimonialSection";
import AboutTeamSection from "../../../components/AboutTeamSection";
import CtaSection from "../../../components/CtaSection";
import AboutBlogSection from "../../../components/AboutBlogSection"
const AboutUsPage = () => {
  return (
    <>
      <AboutPageheader />
      <AboutSection />
      <ServiceSection />
      <AboutTestimonialSection />
      <AboutTeamSection />
      <CtaSection />
      <AboutBlogSection />
    </>
  );
};

export default AboutUsPage;
