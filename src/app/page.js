"use client";

import dynamic from "next/dynamic";

// Components
// import NavMenuWrapper from "../../components/NavMenuWrapper";
// import PopupSearchBox from "../../components/PopupSearchBox";
import PopupSidebox from "../../components/PopupSidebox";
import TaxiSlider from "../../components/TaxiSlider.";
import AboutSection from "../../components/AboutSection";
import ServiceSection from "../../components/ServiceSection";
import BookingSection from "../../components/BookingSection";
import PricingSection from "../../components/PricingSection";
import DownloadSection from "../../components/DownloadSection";
import TestimonialSection from "../../components/TestimonialSection";
import CtaSection from "../../components/CtaSection";
import BlogSection from "../../components/BlogSection";

import ScrollToTop from "../../components/ScrollToTop";
import DLCursor from "../../components/DLCursor";
import SearchPage from "./search/page";

export default function Home() {
  return (
    <div>
      {/* <NavMenuWrapper /> */}
      {/* <PopupSearchBox /> */}
      <PopupSidebox />
      {/* <SearchPage /> */}
      <TaxiSlider />
      <AboutSection />
      <ServiceSection />
      <BookingSection />
      <PricingSection />
      <DownloadSection />
      <TestimonialSection />
      <CtaSection />
      <BlogSection />
     
      <ScrollToTop />
      <DLCursor />
    </div>
  );
}
