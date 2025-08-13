"use client";

import React from "react";
import OurTaxiPageHeader from "../../../components/OurTaxiPageHeader";
import TaxiDetails from "../../../components/TaxiDetails";
import RelatedTaxi from "../../../components/RelatedTaxi";
const page = () => {
  return (
    <div>
      <OurTaxiPageHeader />
      <TaxiDetails />
      <RelatedTaxi />
    </div>
  );
};

export default page;
