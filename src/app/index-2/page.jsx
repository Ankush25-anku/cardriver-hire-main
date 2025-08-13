"use client";
import React from "react";
import HomeSlider from "../../../components/HomeSlider";
import OnlineBooking from "../../../components/OnlineBooking";
import ServiceSection from "../../../components/ServiceSection";
import CtaSection from "../../../components/CtaSection";
import OurTaxiList from "../../../components/ourtaxidetails";
import HomeDownloadSection from "../../../components/HomeDownloadSection";
import AboutTeamSection from "../../../components/AboutTeamSection";
import HomeTestimonialSection from "../../../components/HomeTestimonialSection";
import HomeBlogSection from "../../../components/HomeBlogSection";
const page = () => {
  return (
    <div>
      <HomeSlider />
      <OnlineBooking />
      <ServiceSection />
      <CtaSection />
      <OurTaxiList />
      <HomeDownloadSection />
      <AboutTeamSection />
      <HomeTestimonialSection />
      <HomeBlogSection />
    </div>
  );
};

export default page;
