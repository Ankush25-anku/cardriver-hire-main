"use client";
import React from "react";
import TaxiPageHeader from "../../../components/taxipageheader";
import DriverDetails from "../../../components/DriverDetails";
import DriverTestimonials from "../../../components/DriverTestimonials";

const page = () => {
  return (
    <div>
      <TaxiPageHeader />
      <DriverDetails />
      <DriverTestimonials />
    </div>
  );
};

export default page;
